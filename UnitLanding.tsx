import { QrCode, Bolt } from 'lucide-react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function June() {
  const juneEvents = MOVE_EVENTS.filter((e) => e.month === 'Junho');

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-4 py-4 md:px-8 md:py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <MonthSwitcher />

        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-move-blue overflow-hidden mt-4">
          {/* Left Vertical Accent */}
          <div className="hidden lg:flex lg:col-span-1 bg-move-blue flex-col justify-between items-center py-10 border-r-2 border-black">
            <span className="text-white font-black text-sm md:text-xl vertical-text rotate-180 uppercase tracking-[0.2em]">
              DINAMUS • ALPHAVILLE
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center neo-brutalist-shadow mt-4 lg:mt-0">
              <Bolt className="text-move-blue font-bold" size={28} />
            </div>
          </div>

          {/* Central Content */}
          <div className="lg:col-span-8 relative bg-neutral-900 min-h-[420px] md:min-h-[600px] overflow-hidden group">
            <img
              src="/junho.manu.jpg"
              alt="Event speaker"
              className="absolute inset-0 w-full h-full object-cover object-center contrast-110 brightness-90 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            <div className="relative h-full flex flex-col justify-end p-4 md:p-12 z-10 bg-gradient-to-t from-black/80 to-transparent">
              <h1 className="text-[16vw] sm:text-[13vw] md:text-[10vw] font-black text-white uppercase leading-none tracking-tighter italic">
                JUNHO
              </h1>

              <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4">
                <div className="bg-move-pink px-5 py-2 md:px-8 md:py-3 neo-brutalist-shadow">
                  <span className="text-white font-black italic text-xl md:text-3xl uppercase leading-none">
                    2026
                  </span>
                </div>

                <div className="border-4 border-white bg-black/40 backdrop-blur-md px-5 py-2 md:px-8 md:py-3">
                  <span className="text-white font-black uppercase tracking-[0.12em] md:tracking-[0.2em] text-sm md:text-lg">
                    SÃO PAULO - BR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Detail Column */}
          <div className="lg:col-span-3 flex flex-col border-l-0 lg:border-l-2 border-black">
            {juneEvents.map((event) => (
              <div
                key={event.id}
                className={`${
                  event.color === 'move-orange'
                    ? 'bg-move-orange'
                    : event.color === 'white'
                    ? 'bg-white'
                    : 'bg-move-blue'
                } p-5 md:p-8 flex-1 flex flex-col justify-center border-t-2 lg:border-t-0 border-b-2 border-black`}
              >
                <div
                  className={`${
                    event.color === 'white' ? 'text-black' : 'text-white'
                  } font-black text-4xl md:text-6xl mb-3 md:mb-4 tracking-tighter`}
                >
                  {event.date.split('/')[0]}
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                  <a
                    href="https://maps.app.goo.gl/i3fVsntiQtYuizbc8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      event.color === 'white'
                        ? 'text-black border-move-blue'
                        : 'text-white border-white'
                    } font-bold uppercase text-xs md:text-sm border-l-4 pl-4 leading-relaxed`}
                  >
                    {event.title} - {event.day} · {event.time.split(' ')[0]} · Igreja Dinamus Alphaville
                  </a>

                  <button
                    onClick={() => saveToCalendar(event)}
                    className={`w-full sm:w-auto px-4 py-2 text-[10px] md:text-[11px] font-black uppercase tracking-tight ${
                      event.color === 'white'
                        ? 'bg-move-blue text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    TE VEJO LÁ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 relative h-72 md:h-80 border-4 border-move-blue overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPdN2pB06pRpNjvO3jJbIKi8_mOKL0n1pEVnENGYgtGdzP9OJb0lDYQo2NX7-GuXnbcacWnszeyatvNOTdtfaTykuw6XLTB98Ppp3-dsYZAgZuHFgLlW-iw1lxkkkLWGYvmPuDNgc7GlsksnB-qzy9wmu4Z8sCUrHSKqQJXska9spWvQmUBcdnCn0ChMyYKdDBaeORVwxzD8A1O3_h5sP5yRXU3eZbWAR9KV6mCTJaU62G63uOBOTyh8yF9J_wHeDmlir1LnED7rI"
              alt="Map"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
            />

            <a
              href="https://maps.app.goo.gl/i3fVsntiQtYuizbc8"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-full p-5 md:p-8 flex flex-col justify-between"
            >
              <div className="bg-move-blue px-4 py-1 font-black text-[10px] md:text-xs uppercase text-white inline-block self-start">
                LOCALIZAÇÃO
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white leading-tight">
                  IGREJA DINAMUS ALPHAVILLE
                </h3>

                <p className="text-white text-xs md:text-sm mt-3 bg-black/60 px-2 py-1 inline-block">
                  Estrada Bela Vista, 2914 - Alphaville, Santana de Parnaíba - SP
                </p>
              </div>
            </a>
          </div>

          <div className="bg-move-pink p-5 md:p-8 flex flex-col justify-between border-4 border-black text-white min-h-[220px]">
            <div className="w-14 h-14 md:w-16 md:h-16 border-4 border-white bg-black flex items-center justify-center mb-6">
              <QrCode size={28} />
            </div>

            <div>
              <h4 className="text-2xl md:text-3xl font-black uppercase mb-3">
                ACESSO
              </h4>

              <p className="text-xs md:text-sm font-bold uppercase leading-relaxed">
                LOGO MAIS TEMOS NOVIDADES.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <button
            onClick={() => juneEvents[0] && saveToCalendar(juneEvents[0])}
            className="w-full sm:w-auto bg-move-blue text-white px-8 md:px-12 py-4 md:py-6 font-black text-lg md:text-2xl uppercase"
          >
            TE VEJO LÁ
          </button>
        </div>
      </div>
    </div>
  );
}
