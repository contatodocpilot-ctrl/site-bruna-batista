
import Image from "next/image";
import {
  ArrowUpRight,
  Brain,
  Heart,
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const whatsapp = "https://wa.me/5532999997065";

const areas = [
  {
    icon: Brain,
    title: "Ansiedade e Estresse",
    text: "Acolhimento e estratégias para lidar com preocupações, sobrecarga e estresse.",
  },
  {
    icon: Heart,
    title: "Autoestima",
    text: "Fortalecimento da autoestima e construção de uma relação mais saudável consigo.",
  },
  {
    icon: Leaf,
    title: "Relacionamentos",
    text: "Compreensão de padrões e desenvolvimento de relações mais conscientes.",
  },
  {
    icon: UserRound,
    title: "Desenvolvimento Pessoal",
    text: "Autoconhecimento e crescimento para uma vida com mais propósito.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#17150f]/85 text-white backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <a href="#inicio" className="serif text-xl tracking-[.18em]">
            BRUNA BATISTA
            <span className="block text-[9px] tracking-[.42em] text-[#c9a66b]">
              PSICÓLOGA
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-medium tracking-[.12em] md:flex">
            <a href="#inicio">INÍCIO</a>
            <a href="#sobre">SOBRE</a>
            <a href="#atuacao">ATUAÇÃO</a>
            <a href="#abordagem">ABORDAGEM</a>
            <a href="#depoimentos">DEPOIMENTOS</a>
            <a href="#contato">CONTATO</a>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-[#c9a66b] px-6 py-3 text-xs font-bold tracking-[.12em] text-white md:block"
          >
            AGENDAR
          </a>      <section id="depoimentos" className="bg-white py-24">
        <div className="container text-center">
          <p className="text-xs font-bold tracking-[.22em] text-[#c9a66b]">
            DEPOIMENTOS
          </p>

          <h2 className="mt-4 text-4xl">
            Experiências de quem{" "}
            <span className="gold italic">
              confiou
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/55">
            Espaço reservado para depoimentos reais, inseridos somente com autorização.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              "Depoimento real 01",
              "Depoimento real 02",
              "Depoimento real 03",
            ].map((item) => (
              <div
                key={item}
                className="border border-[#ded5c7] p-8 text-left"
              >
                <p className="serif text-3xl text-[#c9a66b]">
                  “
                </p>

                <p className="mt-2 text-sm leading-7 text-black/60">
                  {item} — inserir texto autorizado.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#e9ddcd] py-20">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl md:text-5xl">
              Vamos cuidar de{" "}
              <span className="gold italic">
                você?
              </span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-black/60">
              Agende seu primeiro contato e dê o primeiro passo para um processo
              de cuidado com mais leveza e propósito.
            </p>
          </div>

          <div className="md:justify-self-end">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-[#18382c] px-7 py-4 text-sm font-bold text-white"
            >
              <MessageCircle size={19} />
              AGENDAR PELO WHATSAPP
            </a>

            <a
              href="https://www.instagram.com/psi.brunabatista/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-3 text-sm text-black/60"
            >
              <Instagram size={18} />
              @psi.brunabatista
              <span className="text-black/30">
                •
              </span>
              Atendimento online e presencial
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#10291f] py-8 text-white/60">
        <div className="container flex flex-col gap-3 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Bruna Batista Psicóloga. Todos os direitos reservados.
          </p>

          <p>
            Um espaço para cuidar de pessoas.
          </p>
        </div>
      </footer>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );


          <button aria-label="Abrir menu" className="md:hidden">
            <Menu size={25} />
          </button>
        </div>
      </header>

      <section
        id="inicio"
        className="relative min-h-[760px] overflow-hidden bg-[#211d17] pt-20 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(201,166,107,.16),transparent_32%),linear-gradient(90deg,#211d17_0%,#211d17e8_43%,#211d1733_100%)]" />

        <div className="container relative grid min-h-[680px] items-center md:grid-cols-[.85fr_1.15fr]">
          <div className="max-w-xl py-20">
            <p className="mb-5 text-sm tracking-[.15em] text-[#c9a66b]">
              PSICOTERAPIA
            </p>

            <h1 className="text-5xl leading-[1.02] md:text-7xl">
              Equilíbrio,
              <br />
              Autoconhecimento <span className="gold italic">e</span>
              <br />
              <span className="gold italic">Bem-estar</span>
            </h1>

            <div className="my-8 h-px w-16 bg-[#c9a66b]" />

            <p className="max-w-md text-lg leading-8 text-white/75">
              Um espaço seguro para você se escutar, compreender sua história e
              construir novos caminhos.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#c9a66b] px-7 py-4 text-sm font-bold"
            >
              AGENDAR PELO WHATSAPP
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="relative h-[560px] md:h-[680px]">
            <Image
              src="/bruna.jpg"
              alt="Bruna Batista, psicóloga"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>      <section id="sobre" className="bg-[#fbf9f5] py-24">
        <div className="container grid gap-14 md:grid-cols-2 md:items-center">
          <div className="relative min-h-[520px] overflow-hidden border border-[#ded5c7]">
            <Image
              src="/bruna.jpg"
              alt="Bruna Batista"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>

          <div>
            <p className="mb-5 text-xs font-bold tracking-[.22em] text-[#c9a66b]">
              SOBRE
            </p>

            <h2 className="text-4xl md:text-5xl">
              Olá, eu sou{" "}
              <span className="gold italic">Bruna Batista</span>
            </h2>

            <p className="mt-7 leading-8 text-black/65">
              Meu trabalho é oferecer um espaço de escuta qualificada,
              acolhedora e ética, onde você possa falar sobre o que sente com
              segurança e sem julgamentos.
            </p>

            <p className="mt-4 leading-8 text-black/65">
              A psicoterapia pode ser um caminho de autoconhecimento, cuidado e
              transformação, respeitando o seu tempo e a sua história.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded border border-[#ded5c7] bg-white p-5">
              <ShieldCheck className="text-[#c9a66b]" />
              <div>
                <p className="font-semibold">Psicóloga</p>
                <p className="text-sm text-black/55">
                  CRP 04/74747
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-[#18382c] py-24 text-white">
        <div className="container">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[.22em] text-[#c9a66b]">
              COMO POSSO TE AJUDAR
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl">
              Áreas de{" "}
              <span className="gold italic">Atuação</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px border border-white/10 md:grid-cols-4">
            {areas.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="p-8 text-center transition hover:bg-white/5"
              >
                <Icon
                  className="mx-auto mb-6 text-[#c9a66b]"
                  size={34}
                  strokeWidth={1.2}
                />

                <h3 className="text-xl">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="abordagem" className="bg-[#f5f0e8] py-24">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold tracking-[.22em] text-[#c9a66b]">
              MINHA ABORDAGEM
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl">
              Terapia com empatia,
              <br />
              <span className="gold italic">
                ética e acolhimento
              </span>
            </h2>

            <p className="mt-7 leading-8 text-black/65">
              Um processo construído em conjunto, com escuta ativa e atenção às
              necessidades de cada pessoa.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [
                "Escuta ativa",
                "Acolhimento genuíno e sem julgamentos.",
              ],
              [
                "Sigilo e ética",
                "Seu processo tratado com responsabilidade.",
              ],
              [
                "Atendimento personalizado",
                "Um cuidado adaptado à sua realidade.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border border-[#ded5c7] bg-white p-6"
              >
                <h3 className="text-lg">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
}
