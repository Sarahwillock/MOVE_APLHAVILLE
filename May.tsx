import { motion } from 'motion/react';
import { Ticket, Users, Clock, MapPin } from 'lucide-react';
import { saveToCalendar } from '../lib/calendar';

export default function GCs() {
  const gcs = [
    {
      name: 'GC Lobby',
      leader: 'Hugo',
      schedule: 'Sábado (15 em 15 dias)',
      time: '17:00',
      location: 'Alphaville',
      color: 'move-blue',
      event: {
        title: 'GC Lobby - Hugo',
        description: 'GC Lobby com líder Hugo - MOVE Alphaville',
        location: 'Alphaville',
        startTime: '20260404T180000Z',
        endTime: '20260404T200000Z'
      }
    },
    {
      name: 'GC Conecta',
      leader: 'Bia e Gui',
      schedule: 'Quinta (15 em 15 dias)',
      time: '20:00',
      location: 'Alphaville',
      color: 'move-pink',
      event: {
        title: 'GC Conecta - Bia e Gui',
        description: 'GC Conecta com líderes Bia e Gui - MOVE Alphaville',
        location: 'Alphaville',
        startTime: '20260402T200000Z',
        endTime: '20260402T220000Z'
      }
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mb-8 flex items-center gap-3 sm:mb-12 sm:gap-4">
        <div className="bg-move-blue p-3 neo-brutalist-shadow sm:p-4"><Ticket className="text-white" size={28} /></div>
        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-move-blue sm:text-4xl lg:text-6xl">GRUPOS DE CONEXÃO (GCs)</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
        {gcs.map((gc) => (
          <div key={gc.name} className={`glass-card relative overflow-hidden border-l-4 p-5 sm:border-l-8 sm:p-8 ${gc.color === 'move-blue' ? 'border-move-blue' : 'border-move-pink'}`}>
            <div className="relative z-10">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="mb-2 text-3xl font-black uppercase leading-none sm:text-4xl">{gc.name}</h2>
                  <p className="text-base font-bold uppercase tracking-widest text-move-orange sm:text-xl">Líder: {gc.leader}</p>
                </div>
                <Users size={28} className="opacity-20" />
              </div>

              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3"><Clock size={20} className="text-gray-400" /><span className="font-bold uppercase tracking-tight text-sm sm:text-base">{gc.schedule} · {gc.time}</span></div>
                <div className="flex items-center gap-3"><MapPin size={20} className="text-gray-400" /><span className="font-bold uppercase tracking-tight text-sm sm:text-base">{gc.location}</span></div>
              </div>

              <button onClick={() => saveToCalendar(gc.event)} className={`w-full py-4 text-lg font-black uppercase tracking-tighter text-white transition-all hover:scale-[1.02] active:scale-[0.98] ${gc.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'}`}>
                TE VEJO LÁ
              </button>
            </div>
            <div className="pointer-events-none absolute -bottom-2 right-2 text-6xl font-black italic uppercase opacity-5 select-none sm:-right-4 sm:-bottom-4 sm:text-8xl">{gc.name.split(' ')[1]}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-4 border-dashed border-move-blue/30 p-5 text-center sm:mt-16 sm:p-8">
        <h3 className="mb-4 text-xl font-black uppercase sm:text-2xl">Quer abrir um GC ou saber mais?</h3>
        <a href="https://www.instagram.com/move.alphaville/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white px-6 py-4 font-black uppercase tracking-tighter text-black transition-all hover:bg-move-pink hover:text-white sm:px-8">
          FALAR COM A GENTE
        </a>
      </div>
    </motion.div>
  );
}
