'use client';

import { FormEvent, useState, useCallback } from 'react';
import { useAttribution } from '@/hooks/useAttribution';
import { useAnalytics } from '@/hooks/useAnalytics';
import { LeadFormField } from './LeadFormField';

interface LeadFormProps {
  sourcePage: string;
  ctaSource: string;
  formName?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function LeadForm({
  sourcePage,
  ctaSource,
  formName = 'contact-form',
  onSuccess,
  onError,
}: LeadFormProps) {
  const attribution = useAttribution();
  const { trackEvent, trackFormStart, trackGenerateLead } = useAnalytics();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.name === 'name') {
        trackFormStart(formName);
      }
    },
    [trackFormStart, formName]
  );

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        source_page: sourcePage,
        cta_source: ctaSource,
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
        keyword_group: attribution.keyword_group,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track successful lead generation
      trackGenerateLead({
        source_page: sourcePage,
        utm_source: attribution.utm_source,
        utm_campaign: attribution.utm_campaign,
        keyword_group: attribution.keyword_group,
        form_id: formName,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '' });

      if (onSuccess) {
        onSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred. Please try again.';
      setErrors({ submit: errorMessage });
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-semibold mb-2">✓ Thank you for your interest!</p>
        <p className="text-green-700">
          We'll review your inquiry and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {errors.submit && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {errors.submit}
        </div>
      )}

      <LeadFormField
        label="Name"
        name="name"
        type="text"
        placeholder="Full name"
        value={formData.name}
        onChange={handleInputChange}
        onFocus={handleFocus}
        error={errors.name}
        required
      />

      <LeadFormField
        label="Email"
        name="email"
        type="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
        required
      />

      <LeadFormField
        label="Phone"
        name="phone"
        type="tel"
        placeholder="+66-XXX-XXXX"
        value={formData.phone}
        onChange={handleInputChange}
        error={errors.phone}
        required
      />

      <LeadFormField
        label="Company"
        name="company"
        type="text"
        placeholder="Your company name"
        value={formData.company}
        onChange={handleInputChange}
        error={errors.company}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
      >
        {loading ? 'Submitting...' : 'Request Demo'}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        We respect your privacy. Your information will only be used to contact you regarding your inquiry.
      </p>
    </form>
  );
}
