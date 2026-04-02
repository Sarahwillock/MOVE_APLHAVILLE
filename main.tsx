@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;0,900;1,900&family=Unbounded:wght@900&family=Montserrat:ital,wght@0,400;0,700;0,900;1,900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Public Sans", ui-sans-serif, system-ui, sans-serif;
  --font-bauhaus: "Unbounded", sans-serif;
  --font-montserrat: "Montserrat", sans-serif;

  --color-move-blue: #0052FF;
  --color-move-pink: #FF003C;
  --color-move-orange: #BF3003;
  --color-move-dark: #0A0A0A;
}

@layer base {
  html, body, #root {
    width: 100%;
    overflow-x: hidden;
  }

  body {
    @apply bg-move-dark text-white font-sans antialiased;
  }
}

@layer utilities {
  .text-outline {
    -webkit-text-stroke: 2px white;
    color: transparent;
  }
  .vertical-text {
    writing-mode: vertical-lr;
    text-orientation: mixed;
  }
  .glass-card {
    @apply bg-black/70 backdrop-blur-md border border-white/10;
  }
  .neo-brutalist-shadow {
    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
  }
  .neo-brutalist-shadow-white {
    box-shadow: 4px 4px 0px 0px #ffffff;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
