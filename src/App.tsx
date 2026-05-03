/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const Wave = ({ color, bgColor, path }: { color: string, bgColor: string, path: string }) => (
    <section style={{ backgroundColor: bgColor, lineHeight: 0, width: '100%', overflow: 'hidden' }}>
      <svg viewBox="0 0 1200 36" preserveAspectRatio="none" style={{ width: '100%', height: '36px', display: 'block' }}>
        <path d={path} fill={color}></path>
      </svg>
    </section>
  );

  return (
    <main id="landing-page">
      {/* 1. BARRA STICKY */}
      <header className="sticky-bar">
        <span className="dot-pulsa"></span>
        <span>Oferta de lançamento por <strong>tempo limitado</strong>:</span>
        <span id="timer" className="timer-box">{formatTime(timeLeft)}</span>
      </header>

      {/* 2. BANNER 1 */}
      <picture>
        <source media="(min-width: 768px)" srcSet="https://i.imgur.com/bgDzlxH.jpeg" />
        <img src="https://i.imgur.com/A37QkMc.jpeg" alt="Banner Principal" style={{ width: '100%', display: 'block' }} />
      </picture>

      {/* 3. SEÇÃO PROBLEMA */}
      <section className="sec-problema">
        <span className="badge-v">Para <strong>pais, mães, professores e responsáveis</strong></span>
        <h2 style={{ fontSize: 'clamp(26px, 5.5vw, 46px)', color: '#1a1a1a', marginBottom: '24px' }}>
          Toda criança vai perguntar. A dúvida é: <strong>quem vai responder?</strong>
        </h2>
        
        <p style={{ 
          maxWidth: '500px', 
          margin: '0 auto', 
          fontSize: 'clamp(15px, 2.6vw, 18px)', 
          fontWeight: 600, 
          color: '#2a2a2a',
          lineHeight: '1.7'
        }}>
          Seja em <strong>casa</strong>, na <strong>escola</strong> ou na <strong>internet</strong> — as perguntas sobre família e <strong>diversidade</strong> aparecem cedo. 
          Este livro foi criado para que adultos e crianças leiam juntos, com <strong>leveza, respeito e palavras certas</strong> para cada idade. Perfeito também para <strong>impressão</strong> e atividades em sala de aula.
        </p>

        <span className="arrow-bounce">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E8192C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </span>
      </section>

      {/* 4. BANNER 2 */}
      <picture>
        <source media="(min-width: 768px)" srcSet="https://i.imgur.com/56s1jEw.png" />
        <img src="https://i.imgur.com/wNx6OyH.png" alt="Exemplo de Conteúdo" style={{ width: '100%', display: 'block' }} />
      </picture>

      {/* 5. BOTÕES DE COMPRA PÓS-BANNER 2 */}
      <section style={{ backgroundColor: '#fff', padding: '48px 24px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
          <a href="#comprar" className="btn" style={{ 
            backgroundColor: '#E8306A', 
            color: '#fff', 
            fontSize: 'clamp(15px, 2.8vw, 19px)', 
            padding: '16px 32px', 
            borderRadius: '12px',
            boxShadow: '0 4px 14px rgba(232, 48, 106, 0.3)',
            display: 'block'
          }}>
            Comprar <strong>Livro Digital</strong> — R$29,90
          </a>
          <a href="#comprar" className="btn" style={{ 
            backgroundColor: '#fff', 
            color: '#E8306A', 
            fontSize: 'clamp(15px, 2.8vw, 19px)', 
            padding: '16px 32px', 
            borderRadius: '12px',
            border: '2px solid #E8306A',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
            display: 'block'
          }}>
            Comprar <strong>Livro Físico</strong>
          </a>
        </div>
      </section>

      {/* 6. WAVE DIVIDER */}
      <Wave bgColor="#fff" color="#F6F4F0" path="M0,18 C300,36 900,0 1200,18 L1200,36 L0,36 Z" />

      {/* 7. BANNER 3 */}
      <picture>
        <source media="(min-width: 768px)" srcSet="https://i.imgur.com/kNCwmp4.jpeg" />
        <img src="https://i.imgur.com/w9e4CMk.jpeg" alt="Aprendizado" style={{ width: '100%', display: 'block' }} />
      </picture>

      {/* 8. CTA VERDE - SEÇÃO DE PREÇO */}
      <section id="comprar" style={{ backgroundColor: '#1E9642', padding: '64px 28px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 'clamp(22px, 4.5vw, 38px)', marginBottom: '10px' }}>Garanta o seu <strong>agora</strong></h2>
        <p style={{ fontSize: '16px', fontWeight: 700, textDecoration: 'line-through', color: 'rgba(255,255,255,0.55)' }}>De R$49,90</p>
        <p style={{ fontSize: 'clamp(38px, 8vw, 64px)', color: '#F5C200', lineHeight: 1, marginBottom: '32px' }} className="fredoka">R$29,90</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
          <a href="https://pay.hotmart.com" className="btn" style={{ 
            backgroundColor: '#F5C200', 
            color: '#1a1a1a', 
            fontSize: 'clamp(15px, 2.8vw, 19px)', 
            padding: '18px 32px', 
            borderRadius: '12px',
            boxShadow: '0 4px 14px rgba(245, 194, 0, 0.3)',
            display: 'block'
          }}>
            <strong>Garantir Livro Digital</strong>
          </a>
          <a href="https://pay.hotmart.com" className="btn" style={{ 
            backgroundColor: 'transparent', 
            color: '#fff', 
            fontSize: 'clamp(15px, 2.8vw, 19px)', 
            padding: '18px 32px', 
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            display: 'block'
          }}>
            <strong>Garantir Livro Físico</strong>
          </a>
        </div>

        <footer style={{ marginTop: '20px', fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontWeight: 700 }}>
          <strong>7 dias de garantia</strong> · Pagamento seguro
        </footer>
      </section>

      {/* 9. WAVE DIVIDER */}
      <Wave bgColor="#1E9642" color="#F6F4F0" path="M0,0 C400,36 800,0 1200,28 L1200,36 L0,36 Z" />

      {/* 10. SEÇÃO BENEFÍCIOS */}
      <section style={{ backgroundColor: '#F6F4F0', padding: '64px 28px' }}>
        <h2 style={{ color: '#7B2FBE', textAlign: 'center', fontSize: 'clamp(20px, 4vw, 32px)', marginBottom: '36px' }}>O que esse livro <strong>transforma</strong></h2>
        <section className="grid-beneficios">
          <article className="card-beneficio" style={{ borderTop: '4px solid #E8306A' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '15px' }}>Sua criança vai</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li className="item-lista"><span className="checkmark" style={{ color: '#E8306A' }}>✓</span> <span className="list-text">Entender a diversidade sem confusão</span></li>
              <li className="item-lista"><span className="checkmark" style={{ color: '#E8306A' }}>✓</span> <span className="list-text">Respeitar famílias diferentes da sua</span></li>
              <li className="item-lista"><span className="checkmark" style={{ color: '#E8306A' }}>✓</span> <span className="list-text">Fazer perguntas com naturalidade</span></li>
              <li className="item-lista"><span className="checkmark" style={{ color: '#E8306A' }}>✓</span> <span className="list-text">Crescer com empatia e coração aberto</span></li>
            </ul>
          </article>
          <article className="card-beneficio" style={{ borderTop: '4px solid #1B87C4' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '15px' }}>Você vai</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li className="item-lista"><span className="checkmark" style={{ color: '#1B87C4' }}>✓</span> <span className="list-text">Se sentir preparado para as perguntas</span></li>
              <li className="item-lista"><span className="checkmark" style={{ color: '#1B87C4' }}>✓</span> <span className="list-text">Ensinar sem medo nem vergonha</span></li>
              <li className="item-lista"><span className="checkmark" style={{ color: '#1B87C4' }}>✓</span> <span className="list-text">Ter um recurso pronto para usar</span></li>
              <li className="item-lista"><span className="checkmark" style={{ color: '#1B87C4' }}>✓</span> <span className="list-text">Criar memória afetiva com a criança</span></li>
            </ul>
          </article>
        </section>
      </section>

      {/* 11. WAVE DIVIDER */}
      <Wave bgColor="#F6F4F0" color="#7B2FBE" path="M0,28 C400,0 800,36 1200,8 L1200,36 L0,36 Z" />

      {/* 12. SEÇÃO PÚBLICO-ALVO */}
      <section style={{ backgroundColor: '#7B2FBE', padding: '64px 28px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 'clamp(20px, 4vw, 34px)', marginBottom: '10px' }}>Para quem é este livro?</h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(14px, 2.5vw, 17px)', maxWidth: '480px', margin: '0 auto 36px', fontWeight: 600 }}>
          Criado para adultos que querem introduzir o tema com <strong>cuidado e segurança</strong>.
        </p>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', maxWidth: '600px', margin: '0 auto', gap: '14px' }}>
          <article className="card-publico">
            <h4 style={{ fontWeight: 900, fontSize: '14px', marginBottom: '4px' }}>Pais e mães</h4>
            <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Para ler junto antes de dormir ou responder <strong>dúvidas do dia a dia</strong>.</p>
          </article>
          <article className="card-publico">
            <h4 style={{ fontWeight: 900, fontSize: '14px', marginBottom: '4px' }}>Professores</h4>
            <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Base para <strong>atividades impressas</strong> e rodas de conversa em sala de aula.</p>
          </article>
          <article className="card-publico">
            <h4 style={{ fontWeight: 900, fontSize: '14px', marginBottom: '4px' }}>Avós e familiares</h4>
            <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Um presente que abre conversa e <strong>fortalece laços afetivos</strong>.</p>
          </article>
          <article className="card-publico">
            <h4 style={{ fontWeight: 900, fontSize: '14px', marginBottom: '4px' }}>Psicólogos e pedagogos</h4>
            <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Suporte lúdico para trabalhar <strong>inclusão</strong> com crianças de 3 a 8 anos.</p>
          </article>
        </section>
      </section>

      {/* 13. WAVE DIVIDER */}
      <Wave bgColor="#7B2FBE" color="#F0EBFA" path="M0,8 C300,36 900,0 1200,22 L1200,36 L0,36 Z" />

      {/* 14. SEÇÃO O QUE VOCÊ RECEBE */}
      <section style={{ backgroundColor: '#F0EBFA', padding: '64px 28px' }}>
        <h2 style={{ color: '#7B2FBE', textAlign: 'center', fontSize: 'clamp(20px, 4vw, 32px)', marginBottom: '36px' }}>O que você recebe</h2>
        <section style={{ maxWidth: '520px', margin: '0 auto' }}>
          <article className="recebe-item">
            <span className="icon-box">📖</span>
            <header>
              <h4 style={{ fontWeight: 900, fontSize: '15px' }}>Livro digital completo</h4>
              <p style={{ fontSize: '13px', color: '#555', fontWeight: 600 }}>PDF em <strong>alta qualidade</strong>, pronto para leitura ou <strong>impressão</strong>.</p>
            </header>
          </article>
          <article className="recebe-item">
            <span className="icon-box">⚡</span>
            <header>
              <h4 style={{ fontWeight: 900, fontSize: '15px' }}>Acesso imediato</h4>
              <p style={{ fontSize: '13px', color: '#555', fontWeight: 600 }}>Recebe no e-mail logo após a <strong>confirmação do pagamento</strong>.</p>
            </header>
          </article>
          <article className="recebe-item">
            <span className="icon-box">🎓</span>
            <header>
              <h4 style={{ fontWeight: 900, fontSize: '15px' }}>Apto para uso educacional</h4>
              <p style={{ fontSize: '13px', color: '#555', fontWeight: 600 }}>Pode ser <strong>impresso</strong> e usado em atividades escolares.</p>
            </header>
          </article>
          <article className="recebe-item">
            <span className="icon-box">💬</span>
            <header>
              <h4 style={{ fontWeight: 900, fontSize: '15px' }}>Linguagem infantil acessível</h4>
              <p style={{ fontSize: '13px', color: '#555', fontWeight: 600 }}>Texto pensado para crianças de <strong>3 a 8 anos</strong> lerem com adultos.</p>
            </header>
          </article>
        </section>
      </section>

    </main>
  );
}
