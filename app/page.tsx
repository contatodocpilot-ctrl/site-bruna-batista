
```tsx
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <div>
            <strong>Bruna Batista</strong>
            <span>PSICOLOGIA · TCC</span>
          </div>

          <a href="#contato" className="nav-button">
            Agendar atendimento
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">BRUNA BATISTA · PSICÓLOGA</p>

            <h1>
              Um espaço para
              <br />
              <em>você se ouvir.</em>
            </h1>

            <p className="hero-text">
              Atendimento em Psicologia com abordagem da Terapia
              Cognitivo-Comportamental (TCC), acolhimento, escuta e respeito
              à sua história.
            </p>

            <div className="hero-actions">
              <a href="#contato" className="button button-primary">
                Quero conversar
              </a>

              <a href="#sobre" className="button button-secondary">
                Conheça meu trabalho
              </a>
            </div>

            <div className="hero-note">
              <span>●</span>
              Atendimento individual · Psicologia TCC
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-frame">
              <Image
                src="/bruna.jpg"
                alt="Bruna Batista, psicóloga"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 520px"
                className="photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section section-light">
        <div className="container two-columns">
          <div>
            <p className="eyebrow">SOBRE</p>
            <h2>
              Cuidar da mente
              <br />
              também é cuidar da vida.
            </h2>
          </div>

          <div className="section-text">
            <p>
              A Psicologia pode ser um espaço de pausa, reflexão e
              transformação. Um momento para compreender melhor pensamentos,
              emoções e comportamentos.
            </p>

            <p>
              Meu trabalho é baseado na Terapia Cognitivo-Comportamental,
              buscando uma compreensão individualizada de cada pessoa e de sua
              história.
            </p>

            <p>
              O processo acontece com acolhimento, escuta profissional e
              respeito ao seu tempo.
            </p>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">COMO POSSO AJUDAR</p>
            <h2>Um atendimento pensado para você.</h2>
          </div>

          <div className="cards">
            <article className="card">
              <span>01</span>
              <h3>Acolhimento</h3>
              <p>
                Um espaço de escuta respeitosa, onde você pode falar com
                liberdade e segurança.
              </p>
            </article>

            <article className="card">
              <span>02</span>
              <h3>Autoconhecimento</h3>
              <p>
                Compreensão de pensamentos, emoções, comportamentos e padrões
                que fazem parte da sua experiência.
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

      <section className="cta" id="contato">
        <div className="container cta-content">
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
            className="button button-light"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div>
            <strong>Bruna Batista</strong>
            <span>Psicologia · TCC</span>
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
