import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Movies',
    link: '/movies',
  },
  // {
  //   id: nanoid(),
  //   text: 'MovieDetails',
  //   link: '/movies/:movieId',
  // },
  // {
  //   id: nanoid(),
  //   text: 'Cast',
  //   link: '/movies/:movieId/cast',
  // },
  // {
  //   id: nanoid(),
  //   text: 'Reviews',
  //   link: '/movies/:movieId/reviews',
  // },
];

export default items;
