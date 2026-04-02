import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Download } from 'lucide-react';
import { MOVE_EVENTS } from '../constants/events';
import { saveToCalendar } from '../lib/calendar';

export default function FullSchedule() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mb-8 flex items-center gap-3 sm:mb-12 sm:gap-4">
        <div className="bg-move-pink p-3 neo-brutalist-shadow sm:p-4">
          <Calendar className="text-white" size={28} />
        </div>
        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-move-pink sm:text-4xl lg:text-6xl">AGENDA COMPLETA</h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {MOVE_EVENTS.map((event) => (
          <div key={event.id} className={`glass-card group flex flex-col gap-5 border-l-4 p-4 transition-all hover:bg-white/5 sm:border-l-8 sm:p-6 md:flex-row md:items-center md:justify-between ${
            event.color === 'move-blue' ? 'border-move-blue' : event.color === 'move-pink' ? 'border-move-pink' : event.color === 'move-orange' ? 'border-move-orange' : 'border-white'
          }`}>
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="neo-brutalist-shadow flex w-fit flex-col items-center justify-center bg-white px-4 py-2 text-black sm:min-w-[100px]">
                <span className="text-2xl font-black">{event.date.split('/')[0]}</span>
                <span className="text-xs font-bold uppercase">{event.month.substring(0, 3)}</span>
              </div>
              <div className="min-w-0">
                <h3 className="mb-2 text-2xl font-black uppercase leading-none transition-colors group-hover:text-move-blue sm:text-3xl">{event.title}</h3>
                <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-tight text-gray-400 sm:gap-4">
                  <div className="flex items-center gap-2"><Clock size={16} /><span>{event.day} · {event.time}</span></div>
                  <div className="flex items-center gap-2"><MapPin size={16} /><span>{event.location.split(' - ')[0]}</span></div>
                </div>
              </div>
            </div>
            <button onClick={() => saveToCalendar(event)} className="flex w-full items-center justify-center gap-3 bg-move-blue px-5 py-3 font-black uppercase tracking-tighter text-white transition-all active:scale-95 hover:bg-move-pink sm:w-auto sm:px-6">
              <Download size={18} /> TE VEJO LÁ
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-2 border-move-blue bg-black p-5 text-center sm:mt-12 sm:p-8">
        <p className="mb-4 text-base font-bold uppercase tracking-[0.2em] sm:text-xl">Acompanhe todas as novidades no Instagram</p>
        <a href="https://www.instagram.com/move.alphaville/" target="_blank" rel="noopener noreferrer" className="text-2xl font-black italic uppercase text-move-blue transition-colors hover:text-move-pink sm:text-3xl">
          @MOVE.ALPHAVILLE
        </a>
      </div>
    </motion.div>
  );
}
