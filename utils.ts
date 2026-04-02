export interface MoveEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  day: string;
  time: string;
  startTime: string; // ISO format for ICS: YYYYMMDDTHHMMSSZ
  endTime: string;
  month: string;
  color: string;
}

export const MOVE_EVENTS: MoveEvent[] = [
  {
    id: 'apr-11',
    title: "Seminário de Evangelismo",
    description: "Seminário de Evangelismo - MOVE Alphaville",
    location: "Igreja Dinamus Alphaville - Al. Mamoré, 521",
    date: "11/04",
    day: "Sábado",
    time: "15:00",
    startTime: "20260411T150000Z",
    endTime: "20260411T180000Z",
    month: "Abril",
    color: "move-blue"
  },
  {
    id: 'apr-25',
    title: "MOVENITE",
    description: "MOVENITE - MOVE Alphaville",
    location: "Igreja Dinamus Alphaville - Al. Mamoré, 521",
    date: "25/04",
    day: "Sábado",
    time: "19:00",
    startTime: "20260425T190000Z",
    endTime: "20260425T220000Z",
    month: "Abril",
    color: "move-pink"
  },
  {
    id: 'may-09',
    title: "Encontro com Deus",
    description: "Encontro com Deus - MOVE Alphaville",
    location: "Igreja Dinamus Alphaville - Al. Mamoré, 521",
    date: "09/05",
    day: "Sábado",
    time: "08:00 às 21:00",
    startTime: "20260509T080000Z",
    endTime: "20260509T210000Z",
    month: "Maio",
    color: "move-blue"
  },
  {
    id: 'may-23',
    title: "MOVENITE",
    description: "MOVENITE - MOVE Alphaville",
    location: "Igreja Dinamus Alphaville - Al. Mamoré, 521",
    date: "23/05",
    day: "Sexta",
    time: "19:00",
    startTime: "20260523T190000Z",
    endTime: "20260523T220000Z",
    month: "Maio",
    color: "move-pink"
  },
  {
    id: 'jun-12',
    title: "FridayLove",
    description: "FridayLove - MOVE Alphaville",
    location: "Igreja Dinamus Alphaville - Al. Mamoré, 521",
    date: "12/06",
    day: "Sexta",
    time: "20:00",
    startTime: "20260612T200000Z",
    endTime: "20260612T230000Z",
    month: "Junho",
    color: "move-orange"
  },
  {
    id: 'jun-03',
    title: "Seminário de Relacionamento",
    description: "Seminário de Relacionamento - MOVE Alphaville",
    location: "Igreja Dinamus Alphaville - Al. Mamoré, 521",
    date: "03/06",
    day: "Sábado",
    time: "15:00 às 18:00",
    startTime: "20260603T150000Z",
    endTime: "20260603T180000Z",
    month: "Junho",
    color: "white"
  },
  {
    id: 'jun-20',
    title: "MOVENITE",
    description: "MOVENITE - MOVE Alphaville",
    location: "Igreja Dinamus Alphaville - Al. Mamoré, 521",
    date: "20/06",
    day: "Sábado",
    time: "19:00",
    startTime: "20260620T190000Z",
    endTime: "20260620T220000Z",
    month: "Junho",
    color: "move-blue"
  }
];
