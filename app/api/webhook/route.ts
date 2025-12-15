import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Forward the request to the webhook URL
    const webhookUrl = 'https://sallycallsnow.duckdns.org/webhook/a89a1aed-bb18-493d-87ef-2bbf52cdb9cb';
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.text();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Webhook request failed', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error proxying webhook request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

