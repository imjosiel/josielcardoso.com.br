import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      recipient: process.env.RECIPIENT_EMAIL,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Mensagem recebida com sucesso! Entrarei em contato em breve.'
    });
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process contact request' },
      { status: 500 }
    );
  }
}