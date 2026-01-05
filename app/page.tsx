'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MessageCircle, Send, Download, Code, Shield, Rocket, Award, ExternalLink, Maximize2, Minimize2, Heart, Menu, X } from 'lucide-react';

const personalInfo = {
  name: "Josiel Cardoso Mércio da Silva",
  title: "Desenvolvedor Fullstack",
  subtitle: "Especialista em Segurança",
  bio: "Desenvolvedor fullstack apaixonado por tecnologia e segurança. Formado em Ciência da Computação, atuo na área desde 2016, construindo soluções robustas e seguras.",
  experience: "8+ anos de experiência",
  email: "josielcardosomercio@gmail.com",
  phone: "+5555996233021",
  github: "https://github.com/imjosiel",
  linkedin: "https://www.linkedin.com/in/imjosiel/"
};

const projects = [
  {
    id: 1,
    title: "PratoPrime",
    description: "Plataforma completa para gerenciamento de restaurantes e delivery.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://pratoprime.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Mustache Barber",
    description: "Sistema de agendamento online para barbearias.",
    tags: ["React", "TypeScript", "Next.js", "Prisma"],
    liveUrl: "https://mustachebarber-ten.vercel.app/",
    featured: true
  }
];

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 90 }
    ]
  },
  {
    category: "Segurança",
    items: [
      { name: "Authentication", level: 92 },
      { name: "Encryption", level: 88 },
      { name: "Security Best Practices", level: 90 }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: 85 },
      { name: "Git", level: 93 },
      { name: "Vercel", level: 90 }
    ]
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Olá! Sou o assistente virtual do Josiel. Como posso ajudar você hoje?', timestamp: new Date() }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isLoadingChat, setIsLoadingChat] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleChatSend = async () => {
    if (!chatInput.trim() || isLoadingChat) return;
    const userMessage = { type: 'user', text: chatInput, timestamp: new Date() };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsLoadingChat(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: chatInput })
      });
      const data = await response.json();
      setChatMessages(prev => [...prev, { type: 'bot', text: data.response, timestamp: new Date() }]);
    } catch {
      setChatMessages(prev => [...prev, { type: 'bot', text: 'Desculpe, ocorreu um erro.', timestamp: new Date() }]);
    }
    setIsLoadingChat(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      alert('Mensagem enviada!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      alert('Erro ao enviar.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header omitido para brevidade - incluir o código completo */}
      <p className="text-center py-20">Portfolio em construção...</p>
    </div>
  );
}
