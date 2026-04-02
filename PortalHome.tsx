import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-6 text-white md:p-10">
      <div className="mx-auto max-w-6xl pt-8">
        <div className="border-2 border-move-blue bg-neutral-950 p-8 md:p-12">
          <div className="mb-6 inline-block bg-move-pink px-4 py-1 text-xs font-black uppercase tracking-widest">
            MOVE ALPHAVILLE
          </div>

          <h1 className="mb-6 text-4xl font-black uppercase leading-none md:text-7xl">
            BEM-VINDO AO <br />
            <span className="text-move-blue">MOVE 2026</span>
          </h1>

          <p className="mb-10 max-w-3xl text-lg text-white/80 md:text-xl">
            Aqui você encontra a agenda, os eventos MOVE, os líderes da casa, os GCs e o local dos encontros.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link to="/move/schedules" className="bg-move-blue px-6 py-5 text-center font-black uppercase text-white transition hover:bg-move-pink">
              Ver Início
            </Link>

            <Link to="/move/full-schedule" className="border-2 border-white px-6 py-5 text-center font-black uppercase text-white transition hover:bg-white hover:text-black">
              Agenda
            </Link>

            <Link to="/move/june" className="border-2 border-move-blue px-6 py-5 text-center font-black uppercase text-white transition hover:bg-move-blue">
              Eventos Move
            </Link>

            <Link to="/move/local" className="border-2 border-move-pink px-6 py-5 text-center font-black uppercase text-white transition hover:bg-move-pink">
              Local
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
