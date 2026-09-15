import { NextRequest, NextResponse } from 'next/server';

export interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  company: string;
  source_page: string;
  cta_source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  keyword_group: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadSubmission;

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'company'];
    const missing = requiredFields.filter((field) => !body[field as keyof LeadSubmission]);

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the lead (in production, send to database/CRM/email service)
    console.log('[LEAD SUBMISSION]', {
      timestamp: new Date().toISOString(),
      lead: body,
    });

    // TODO: Integrate with backend service (Supabase, Salesforce, email, etc.)
    // Example:
    // const response = await fetch(process.env.LEAD_API_ENDPOINT, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.LEAD_API_KEY}` },
    //   body: JSON.stringify(body),
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        leadId: `LEAD-${Date.now()}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[LEAD_SUBMISSION_ERROR]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
