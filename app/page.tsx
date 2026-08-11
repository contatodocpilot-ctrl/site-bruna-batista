```tsx
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <strong>Bruna Batista</strong>
            <span>PSICOLOGIA · TCC</span>
          </div>

          <a href="#contato" className="nav-link">
            Agendar atendimento
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">BRUNA BATISTA · PSICÓLOGA</p>

            <h1>
              Um espaço para
              <br />
              <i>você se ouvir.</i>
            </h1>

            <p className="hero-description">
              Atendimento em Psicologia com abordagem da Terapia
              Cognitivo-Comportamental (TCC), com acolhimento, escuta
              profissional e respeito à sua história.
            </p>

            <div className="hero-buttons">
              <a href="#contato" className="button button-gold">
                Quero conversar
              </a>

              <a href="#sobre" className="button button-outline">
                Conheça meu trabalho
              </a>
            </div>

            <p className="hero-small">
              <span>●</span> Psicologia · Terapia Cognitivo-Comportamental
            </p>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image">
              <Image
                src="/bruna.jpg"
                alt="Bruna Batista, psicóloga"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow dark">SOBRE</p>

            <h2>
              Cuidar da mente
              <br />
              também é cuidar da vida.
            </h2>
          </div>

          <div className="text">
            <p>
              A Psicologia pode ser um espaço de pausa, reflexão e
              transformação. Um momento para olhar para aquilo que você está
              vivendo com mais cuidado e compreensão.
            </p>

            <p>
              O atendimento de Bruna Batista é baseado na Terapia
              Cognitivo-Comportamental, uma abordagem que considera a relação
              entre pensamentos, emoções e comportamentos.
            </p>

            <p>
              Cada pessoa possui uma história única. Por isso, o processo é
              conduzido de maneira individualizada, com acolhimento, respeito
              e escuta profissional.
            </p>
          </div>
        </div>
      </section>

      <section className="section approach">
        <div className="container">
          <div className="heading">
            <p className="eyebrow dark">PSICOLOGIA · TCC</p>

            <h2>Um atendimento pensado para você.</h2>
          </div>

          <div className="cards">
            <article className="card">
              <span>01</span>
              <h3>Acolhimento</h3>
              <p>
                Um espaço de escuta respeitosa, onde você pode falar com
                liberdade, segurança e sem julgamentos.
              </p>
            </article>

            <article className="card">
              <span>02</span>
              <h3>Autoconhecimento</h3>
              <p>
                Um processo para compreender melhor pensamentos, emoções,
                comportamentos e relações.
              </p>
            </article>

            <article className="card">
              <span>03</span>
              <h3>TCC</h3>
              <p>
                Uma abordagem estruturada que trabalha a relação entre
                pensamentos, emoções e comportamentos.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="container quote-inner">
          <span>“</span>
          <p>
            Conhecer a si mesmo pode ser o começo de uma nova forma de olhar
            para a própria história.
          </p>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="container contact-inner">
          <p className="eyebrow">VAMOS CONVERSAR?</p>

          <h2>
            Seu primeiro passo
            <br />
            pode começar aqui.
          </h2>

          <p>
            Entre em contato para conhecer o atendimento e tirar suas dúvidas.
          </p>

          <a
            href="https://wa.me/5532999997065"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-white"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <strong>Bruna Batista</strong>
            <span>PSICOLOGIA · TCC</span>
          </div>

          <p>© 2026 Bruna Batista · Psicologia</p>
        </div>
      </footer>

      <a
        href="https://wa.me/5532999997065"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
        aria-label="Falar com Bruna Batista pelo WhatsApp"
      >
        WhatsApp
      </a>
    </main>
  );
}
```
