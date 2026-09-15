import { useCallback } from 'react';

export interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

export function useAnalytics() {
  const trackEvent = useCallback((eventName: string, params: EventParams = {}) => {
    if (typeof window === 'undefined') return;

    // GA4 tracking via gtag
    if (window.gtag) {
      window.gtag('event', eventName, {
        ...params,
        timestamp: new Date().toISOString(),
        page_path: window.location.pathname,
      });
    }

    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] Event: ${eventName}`, params);
    }
  }, []);

  const trackCtaClick = useCallback(
    (buttonText: string, ctaSource: string) => {
      trackEvent('cta_click', {
        button_text: buttonText,
        cta_source: ctaSource,
      });
    },
    [trackEvent]
  );

  const trackFormStart = useCallback(
    (formName: string) => {
      trackEvent('form_start', {
        form_name: formName,
      });
    },
    [trackEvent]
  );

  const trackGenerateLead = useCallback(
    (params: EventParams) => {
      trackEvent('generate_lead', params);
    },
    [trackEvent]
  );

  const trackLineClick = useCallback(
    (phoneNumber: string) => {
      trackEvent('line_click', {
        phone_number: phoneNumber,
      });
    },
    [trackEvent]
  );

  const trackCallClick = useCallback(
    (phoneNumber: string) => {
      trackEvent('call_click', {
        phone_number: phoneNumber,
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackCtaClick,
    trackFormStart,
    trackGenerateLead,
    trackLineClick,
    trackCallClick,
  };
}

// Declare gtag global
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
