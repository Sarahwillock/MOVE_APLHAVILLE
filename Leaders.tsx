import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';
import MonthSwitcher from '../components/MonthSwitcher';

export default function April() {
  const aprilEvents = MOVE_EVENTS.filter(e => e.month === 'Abril');

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img 
        src="https://lh3.googleusercontent.com/aida/ADBb0uiAAOYNvj9TvpYA1-SK2D2OTGeSvPclxq4HHhCmQfo1SqxujI4oSbtFHxiqxj2QI5HrTvooYbFZnXHPb2IgKG4NDAmOhT5lGUHrZNeXhLDG6XM5VmGzuxgCoEof6Ww7n-iwgKqFsZsXAP46vSvUxUmQwOjEppKVxf4upnKM_EnsDwNyI9CmZf1CINUMzBj6Tit_Vxz3S-trcoERsR8vBLSxhdKK3YJUtuJ4YmeJfL1C0ZArRwZ2xeplmGd7N4aCuankBUos-I0xeiA" 
        alt="MOVE April"
        className="absolute inset-0 h-full w-full object-cover brightness-50 saturate-[1.2]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute -right-20 -top-20 z-0 h-64 w-64 rounded-full bg-move-orange/30 opacity-60 blur-[40px]" />
      <div className="absolute -bottom-48 -left-20 z-0 h-96 w-96 rotate-45 bg-move-blue/20 opacity-60 blur-[60px]" />

      <div className="relative z-10 flex h-full flex-col p-4 sm:p-6 md:p-10 lg:p-16">
        <MonthSwitcher />
        <header className="mt-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col">
            <a href="https://www.instagram.com/move.alphaville/" target="_blank" rel="noopener noreferrer" className="mb-2 text-xs font-bold tracking-[0.3em] text-move-blue hover:underline sm:text-sm">
              MOVE ALPHAVILLE
            </a>
            <h1 className="font-bauhaus text-5xl uppercase leading-none sm:text-6xl md:text-8xl lg:text-9xl">ABRIL</h1>
            <p className="mt-[-6px] text-xl font-black italic text-move-pink sm:text-2xl md:text-3xl">2026</p>
          </div>
          <div className="md:block">
            <a href="https://www.instagram.com/move.alphaville/" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-move-orange px-4 py-2 text-sm font-bold uppercase text-move-orange transition-all hover:bg-move-orange hover:text-white sm:text-base md:text-lg">
              @MOVE.ALPHAVILLE
            </a>
          </div>
        </header>

        <section className="my-8 max-w-4xl sm:my-10 md:my-12">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            VEM VIVER ISSO <br />
            <span className="text-outline">COM A GENTE.</span>
          </h2>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
          {aprilEvents.map((event) => (
            <div key={event.id} className={`glass-card border-l-4 p-5 sm:border-l-8 sm:p-6 ${event.color === 'move-blue' ? 'border-move-blue' : 'border-move-pink'}`}>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className={`font-bauhaus text-3xl sm:text-4xl md:text-5xl ${event.color === 'move-blue' ? 'text-move-blue' : 'text-move-pink'}`}>{event.date}</span>
                <span className="bg-white px-3 py-1 text-[10px] font-black uppercase text-black sm:text-xs">{event.day}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold uppercase sm:text-2xl">{event.title}</h3>
              <a 
                href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-sm uppercase leading-relaxed text-gray-300 transition-colors ${event.color === 'move-blue' ? 'hover:text-move-blue' : 'hover:text-move-pink'}`}
              >
                Prédio da Igreja
              </a>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">{event.time}</span>
                </div>
                <button onClick={() => saveToCalendar(event)} className={`w-full px-4 py-3 text-[10px] font-black uppercase tracking-tighter text-white transition-all hover:scale-105 active:scale-95 sm:w-auto ${event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'}`}>
                  TE VEJO LÁ
                </button>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <div className="glass-card flex items-center gap-3 rounded-full border-0 px-4 py-3 sm:px-6 sm:py-4">
              <span className="text-2xl">💾</span>
              <div>
                <p className="text-xs font-bold uppercase text-gray-400">Salva esse post</p>
                <p className="text-sm font-bold">Para não esquecer</p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-3 rounded-full border-0 px-4 py-3 sm:px-6 sm:py-4">
              <span className="text-2xl">📲</span>
              <div>
                <p className="text-xs font-bold uppercase text-gray-400">Compartilha</p>
                <p className="text-sm font-bold">Manda pra alguém</p>
              </div>
            </div>
          </div>
          <button onClick={() => saveToCalendar(aprilEvents[0])} className="w-full bg-move-blue px-8 py-4 text-lg font-black uppercase tracking-tighter text-white transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-10 sm:py-5 sm:text-xl">
            TE VEJO LÁ
          </button>
        </footer>
      </div>
    </div>
  );
}
