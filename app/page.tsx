export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-[#292725]">
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#faf9f7]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-wide">
              Bruna Batista
            </p>
            <p className="text-xs tracking-[0.2em] text-black/50">
              PSICOLOGIA
            </p>
          </div>

          <a
            href="#contato"
            className="rounded-full bg-[#292725] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85"
          >
            Agendar atendimento
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-black/45">
            Psicóloga
          </p>

          <h1 className="max-w-xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            Um espaço para você se ouvir.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-black/60">
            Psicoterapia com acolhimento, escuta e respeito à sua história.
            Um espaço seguro para compreender sentimentos, construir novos
            caminhos e cuidar de si.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="rounded-full bg-[#292725] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
            >
              Quero conversar
            </a>

            <a
              href="#sobre"
              className="rounded-full border border-black/15 px-7 py-3.5 text-sm font-medium transition hover:bg-black/5"
            >
              Conheça meu trabalho
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#e8e4dc]" />
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <img
              src="/bruna.jpg"
              alt="Bruna Batista - Psicóloga"
              className="h-[560px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="sobre" className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-black/40">
                Sobre
              </p>
              <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
                Cuidar da mente também é cuidar da vida.
              </h2>
            </div>

            <div className="text-lg leading-8 text-black/60">
              <p>
                A psicoterapia pode ser um espaço de pausa, reflexão e
                transformação. Aqui, cada pessoa é acolhida em sua
                individualidade, sem julgamentos e respeitando o seu tempo.
              </p>

              <p className="mt-6">
                Meu objetivo é oferecer uma escuta profissional e humana para
                que você possa compreender melhor o que está vivendo e
                encontrar possibilidades para seguir em frente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf9f7]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-black/40">
            Como posso ajudar
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl font-light tracking-tight md:text-5xl">
            Um atendimento pensado para você.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium">Acolhimento</h3>
              <p className="mt-4 leading-7 text-black/55">
                Um ambiente de escuta respeitosa, onde você pode falar com
                liberdade e segurança.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium">Autoconhecimento</h3>
              <p className="mt-4 leading-7 text-black/55">
                Um processo para compreender emoções, pensamentos,
                comportamentos e relações.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium">Novos caminhos</h3>
              <p className="mt-4 leading-7 text-black/55">
                Construção de novas perspectivas e estratégias para lidar com
                os desafios da vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#292725] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">
            Vamos conversar?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light tracking-tight md:text-6xl">
            Seu primeiro passo pode começar com uma conversa.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
            Entre em contato para conhecer o atendimento e tirar suas dúvidas.
          </p>

          <a
            https://wa.me/5532999997065
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#292725] transition hover:bg-white/90"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-[#292725] px-6 pb-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Bruna Batista · Psicologia
      </footer>
    </main>
  );
}
