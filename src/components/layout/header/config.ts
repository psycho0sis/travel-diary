export const navigation = [
  {
    id: 0,
    route: '/',
    title: 'Главная',
  },
  {
    id: 1,
    route: '/virtual',
    title: 'Виртуальные экскурсии ▿',
    submenu: [
      {
        id: 0,
        route: '/virtual/palaces',
        title: 'Замки Гродненской области ▿',
        submenu: [
          {
            id: 0,
            route: '/virtual/palaces/mir',
            title: 'Мирский замок',
          },
          {
            id: 1,
            route: '/virtual/palaces/lida',
            title: 'Лидский замок',
          },
          {
            id: 2,
            route: '/virtual/palaces/nunhart',
            title: 'Дом-крепость Нонхартов',
          },
        ],
      },
      {
        id: 1,
        route: '/virtual/grodno',
        title: 'Гродненская область ▿',
        submenu: [
          {
            id: 0,
            route: '/virtual/grodno/avgustovskiy-kanal',
            title: 'Августовский канал',
          },
          {
            id: 1,
            route: '/virtual/grodno/park-zhilibera',
            title: 'Парк Жилибера',
          },
          {
            id: 2,
            route: '/virtual/grodno/park-bolteniki',
            title: 'Парк Больтеники',
          },
        ],
      },
      {
        id: 2,
        route: '/virtual/voronovo',
        title: 'Братские могилы поселка Вороново ▿',
        submenu: [
          {
            id: 0,
            route: '/virtual/voronovo/first-grave',
            title: 'Братская могила',
          },
          {
            id: 1,
            route: '/virtual/voronovo/second-grave',
            title: 'Могила жертв фашизма',
          },
          {
            id: 2,
            route: '/virtual/voronovo/third-grave',
            title: 'Братская могила мирных граждан',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    route: '/students',
    title: 'Ученики',
  },
  {
    id: 3,
    route: '/user',
    title: 'Личный кабинет',
  },
];
