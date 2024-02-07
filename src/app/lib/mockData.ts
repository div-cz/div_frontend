import { CardProps } from '@/app/ui/Card'
import { BookProps, imageSizeEnum } from '@/app/lib/types'

export type MovieProps = {
  id: number;
  imageSize: imageSizeEnum;
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleEng: string;
  description: string;
};

export const movies: MovieProps[] = [
  {
    id: 1,
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
  {
    id: 2,
    imageSize: 'medium',
    imageSrc: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
    imageAlt: 'Rychle a zběsile 10',
    title: 'Rychle a zběsile 10',
    titleEng: 'Fast & Furious 10',
    description: 'Když jste si mysleli, že na světě už není nikdo, …',
  },
  {
    id: 3,
    imageSize: 'medium',
    imageSrc: '/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
    imageAlt: 'Jízda smrti',
    title: 'Jízda smrti',
    titleEng: 'Jízda smrti',
    description:
      'Matt Turner je úspěšný americký bankéř, který svou kariéru rozvíjí …',
  },
  {
    id: 4,
    imageSize: 'medium',
    imageSrc: '/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg',
    imageAlt: 'Meg 2: Příkop',
    title: 'Meg 2: Příkop',
    titleEng: 'Meg 2: Příkop',
    description:
      'Připravte se na dokonalý adrenalin, doslova nadživotní jízda! Ponořte se …',
  },
  {
    id: 5,
    imageSize: 'medium',
    imageSrc: '/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg',
    imageAlt: 'Blue Beetle',
    title: 'Blue Beetle',
    titleEng: 'Blue Beetle',
    description:
      'Čerstvý absolvent vysoké školy Jaime Reyes se vrací domů pln …',
  },
  {
    id: 6,
    imageSize: 'medium',
    imageSrc: '/iQcCAm8hKWZyUntqrvzyEGtXyJl.jpg',
    imageAlt: 'Stvořitel',
    title: 'Stvořitel',
    titleEng: 'Stvořitel',
    description:
      'Uprostřed války v budoucnosti mezi lidskou rasou a silami umělé …',
  },
]

export const figures: CardProps[] = [
  {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
  {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
  {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
  {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
]

export const books: BookProps[] = [
  {
    id: 1,
    image: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    title: 'Barbie',
    starRating: '4.5',
    rating: 'PG-13',
    year: '2022',
    genre: 'Fantasy',
    runtime: '1h 30m',
    cast: 'Barbie',
  },
  {
    id: 2,
    image: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
    title: 'Rychle a zběsile 10',
    starRating: '4.5',
    rating: 'PG-13',
    year: '2022',
    genre: 'Fantasy',
    runtime: '1h 30m',
    cast: 'Barbie',
  },
  {
    id: 3,
    image: '/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
    title: 'Jízda smrti',
    starRating: '4.5',
    rating: 'PG-13',
    year: '2022',
    genre: 'Fantasy',
    runtime: '1h 30m',
    cast: 'Barbie',
  },
  {
    id: 4,
    image: '/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg',
    title: 'Meg 2: Příkop',
    starRating: '4.5',
    rating: 'PG-13',
    year: '2022',
    genre: 'Fantasy',
    runtime: '1h 30m',
    cast: 'Barbie',
  },
  {
    id: 5,
    image: '/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg',
    title: 'Blue Beetle',
    starRating: '4.5',
    rating: 'PG-13',
    year: '2022',
    genre: 'Fantasy',
    runtime: '1h 30m',
    cast: 'Barbie',
  },
  {
    id: 6,
    image: '/iQcCAm8hKWZyUntqrvzyEGtXyJl.jpg',
    title: 'Stvořitel',
    starRating: '4.5',
    rating: 'PG-13',
    year: '2022',
    genre: 'Fantasy',
    runtime: '1h 30m',
    cast: 'Barbie',
  },
]

export const games: CardProps[] = [
  {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
  {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
  {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
  {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  },
]
