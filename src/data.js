const books = [
  {
    id: '1',
    title: 'Beginning Android Programming',
    author: 'J.F DiMarzio',
    authorBio: 'About DiMarzio',
    publicationDate: '2017 by John Wiley & Sons',
    introduction:
      'This book is written to help start beginning Android developers ',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum1',
    cost: 25,
  },
  {
    id: '2',
    title: 'ES6 & Beyound',
    author: 'Kyle Simpson',
    authorBio: 'Kyle Simpson is a thorough pragmatist.',
    publicationDate: '2015-5-5',
    introduction:
      'This book is about shaking up your sense of understanding by exposing you ',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum2',
    cost: 35.99,
  },
  {
    id: '3',
    title: 'ng-book 2',
    author: 'Ari Lerner',
    authorBio: 'Full stack web developer and trainer.',
    publicationDate: '2016-5-10',
    introduction: 'A complete refernce book on angular 2. ',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum3',
    cost: 25.99,
  },
  {
    id: '4',
    title: 'Pro Git',
    author: 'Scott Chacon and Ben Straub',
    authorBio: 'Full stack web developer and trainer.',
    publicationDate: '2016-5-10',
    introduction: 'Welcome to the second edition of Pro Git.  ',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum4',
    cost: 45.99,
  },
  {
    id: '5',
    title: 'Reactjs Blueprints',
    author: 'Sven A. Robbestad',
    authorBio:
      'Sven A. Robbestad is a developer with a keen interest in the Web .',
    publicationDate: '2016-7-10',
    introduction:
      'ReactJS was developed as a tool to solve a problem with the application state. ',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum5',
    cost: 20.99,
  },
  {
    id: '6',
    title: 'ReAwaken The Giant Within',
    author: 'Tony Robins',
    authorBio:
      'Tony Robbins is one of the great influences of this generation.',
    publicationDate: '2013-5-10',
    introduction:
      'I’m sending you this gift of a condensed version of my 544-page original book in the hope',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum6',
    cost: 22,
  },
  {
    id: '7',
    title: 'SurviveJS',
    author: 'Juho Vapsalainen',
    authorBio: 'Full stack web developer and trainer.',
    publicationDate: '2016-5-10',
    introduction: 'Front-end development moves forward fast.  ',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum7',
    cost: 25.99,
  },
  {
    id: '8',
    title: 'Switching To Angular2',
    author: 'Minko Gechev',
    authorBio:
      'Minko Gechev is a software engineer who strongly believes in open source software. ',
    publicationDate: 'March 2016',
    introduction:
      'It is the modern framework you need to build performant and robust web applications.',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum8',
    cost: 21,
  },
  {
    id: '9',
    title: 'Unlimited Sales Success',
    author: 'Brian Tracy',
    authorBio: 'A world class motivational and sales consultant.',
    publicationDate: '2013-2-10',
    introduction: 'A complete refernce book on todays selling. ',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum9',
    cost: 25.99,
  },
  {
    id: '10',
    title: 'Web Development with Node and ExpressJS',
    author: 'Ethan Brown',
    authorBio: 'A senior software engineer at PoP Art.',
    publicationDate: '2014-6-27',
    introduction:
      'Learn to build modern web applications with node and expressjs ',
    picture: 'https://dummyimage.com/400x400/000000/fff.png&text=Lorem+Ipsum10',
    cost: 19.99,
  },
];

export const getProducts = () => {
  return books;
};
