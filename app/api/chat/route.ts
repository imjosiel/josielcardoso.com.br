import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Você é um assistente virtual do portfólio de Josiel Cardoso Mércio da Silva, desenvolvedor fullstack especializado em segurança. 
          
Informações sobre Josiel:
- Desenvolvedor fullstack desde 2016 (8+ anos de experiência)
- Formado em Ciência da Computação
- Especialista em segurança de aplicações
- Principais habilidades: React, Next.js, Node.js, Python, MongoDB, PostgreSQL
- Projetos em destaque: PratoPrime (plataforma de delivery) e Mustache Barber (sistema de agendamento)
- Email: josielcardosomercio@gmail.com
- GitHub: https://github.com/imjosiel
- LinkedIn: https://www.linkedin.com/in/imjosiel/

Seja prestativo, profissional e forneça informações precisas sobre Josiel e suas habilidades.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem.';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}