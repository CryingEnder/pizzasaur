const pizzaArray = [
  {
    _id: 1,
    name: "Manidens",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae, tempora",
    sizes: [14, 16, 18],
    prices: [19.5, 22, 24.5],
    photos: {
      web: "pizza/pizza-1.webp",
      webRetina: "pizza/pizza-1@2x.webp",
      old: "pizza/pizza-1.png",
      oldRetina: "pizza/pizza-1@2x.png",
    },
  },
  {
    _id: 2,
    name: "Camelotia",
    ingredients: "lorem, ipsum, dolor, sit, amet, consect",
    sizes: [14, 16, 18],
    prices: [20, 23, 26],
    photos: {
      web: "pizza/pizza-2.webp",
      webRetina: "pizza/pizza-2@2x.webp",
      old: "pizza/pizza-2.png",
      oldRetina: "pizza/pizza-2@2x.png",
    },
  },
  {
    _id: 3,
    name: "Othnielia",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae, tempora, adipisicing, elit, recusandae, tempora",
    sizes: [14],
    prices: [18],
    photos: {
      web: "pizza/pizza-3.webp",
      webRetina: "pizza/pizza-3@2x.webp",
      old: "pizza/pizza-3.png",
      oldRetina: "pizza/pizza-3@2x.png",
    },
  },
  {
    _id: 4,
    name: "Proa",
    ingredients: "lorem, ipsum, dolor, sit, elit, recusandae",
    sizes: [14, 16, 18],
    prices: [22.5, 25, 27.5],
    photos: {
      web: "pizza/pizza-4.webp",
      webRetina: "pizza/pizza-4@2x.webp",
      old: "pizza/pizza-4.png",
      oldRetina: "pizza/pizza-4@2x.png",
    },
  },
  {
    _id: 5,
    name: "Mei",
    ingredients: "lorem, ipsum, dolor, sit, amet",
    sizes: [16, 18],
    prices: [24, 27],
    photos: {
      web: "pizza/pizza-5.webp",
      webRetina: "pizza/pizza-5@2x.webp",
      old: "pizza/pizza-5.png",
      oldRetina: "pizza/pizza-5@2x.png",
    },
  },
  {
    _id: 6,
    name: "T-rex",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae, adipisicing, elit, recusandae, tempora",
    sizes: [14, 16, 18],
    prices: [20, 23, 26],
    photos: {
      web: "pizza/pizza-6.webp",
      webRetina: "pizza/pizza-6@2x.webp",
      old: "pizza/pizza-6.png",
      oldRetina: "pizza/pizza-6@2x.png",
    },
  },
  {
    _id: 7,
    name: "Anzu",
    ingredients: "lorem, ipsum, dolor, sit, amet, consect, adipisicing",
    sizes: [14, 16, 18],
    prices: [20, 23, 26],
    photos: {
      web: "pizza/pizza-7.webp",
      webRetina: "pizza/pizza-7@2x.webp",
      old: "pizza/pizza-7.png",
      oldRetina: "pizza/pizza-7@2x.png",
    },
  },
  {
    _id: 8,
    name: "Aristosuchus",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae, tempora",
    sizes: [14, 16],
    prices: [24.5, 27],
    photos: {
      web: "pizza/pizza-8.webp",
      webRetina: "pizza/pizza-8@2x.webp",
      old: "pizza/pizza-8.png",
      oldRetina: "pizza/pizza-8@2x.png",
    },
  },
  {
    _id: 9,
    name: "Rhinorex",
    ingredients: "lorem, ipsum, dolor, sit, adipisicing, elit, recusandae",
    sizes: [14, 16, 18],
    prices: [20, 23, 26],
    photos: {
      web: "pizza/pizza-9.webp",
      webRetina: "pizza/pizza-9@2x.webp",
      old: "pizza/pizza-9.png",
      oldRetina: "pizza/pizza-9@2x.png",
    },
  },
  {
    _id: 10,
    name: "Spinops",
    ingredients: "lorem, ipsum, dolor, sit, amet, consect, adipisicing",
    sizes: [14, 16, 18],
    prices: [17, 21, 25],
    photos: {
      web: "pizza/pizza-10.webp",
      webRetina: "pizza/pizza-10@2x.webp",
      old: "pizza/pizza-10.png",
      oldRetina: "pizza/pizza-10@2x.png",
    },
  },
  {
    _id: 11,
    name: "Talos",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae, tempora",
    sizes: [14],
    prices: [21],
    photos: {
      web: "pizza/pizza-11.webp",
      webRetina: "pizza/pizza-11@2x.webp",
      old: "pizza/pizza-11.png",
      oldRetina: "pizza/pizza-11@2x.png",
    },
  },
  {
    _id: 12,
    name: "Unenlagia",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae, tempora",
    sizes: [14, 16, 18],
    prices: [24.5, 27, 29.5],
    photos: {
      web: "pizza/pizza-12.webp",
      webRetina: "pizza/pizza-12@2x.webp",
      old: "pizza/pizza-12.png",
      oldRetina: "pizza/pizza-12@2x.png",
    },
  },
  {
    _id: 13,
    name: "Vahiny",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae, recusandae, tempora",
    sizes: [14, 16, 18],
    prices: [19, 24, 29],
    photos: {
      web: "pizza/pizza-13.webp",
      webRetina: "pizza/pizza-13@2x.webp",
      old: "pizza/pizza-13.png",
      oldRetina: "pizza/pizza-13@2x.png",
    },
  },
  {
    _id: 14,
    name: "Edmarka",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae",
    sizes: [14, 16],
    prices: [20, 23],
    photos: {
      web: "pizza/pizza-14.webp",
      webRetina: "pizza/pizza-14@2x.webp",
      old: "pizza/pizza-14.png",
      oldRetina: "pizza/pizza-14@2x.png",
    },
  },
  ,
  {
    _id: 15,
    name: "Oryctodromeus",
    ingredients: "lorem, ipsum, dolor, sit, amet, consect, tempora",
    sizes: [14, 16, 18],
    prices: [20, 23, 26],
    photos: {
      web: "pizza/pizza-15.webp",
      webRetina: "pizza/pizza-15@2x.webp",
      old: "pizza/pizza-15.png",
      oldRetina: "pizza/pizza-15@2x.png",
    },
  },
  ,
  {
    _id: 16,
    name: "Draconyx",
    ingredients: "lorem, ipsum, dolor, sit, amet, recusandae, tempora, amet",
    sizes: [14, 16, 18],
    prices: [20.5, 23, 25.5],
    photos: {
      web: "pizza/pizza-16.webp",
      webRetina: "pizza/pizza-16@2x.webp",
      old: "pizza/pizza-16.png",
      oldRetina: "pizza/pizza-16@2x.png",
    },
  },
  {
    _id: 17,
    name: "Nomingia",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, tempora",
    sizes: [14, 16],
    prices: [20, 23],
    photos: {
      web: "pizza/pizza-17.webp",
      webRetina: "pizza/pizza-17@2x.webp",
      old: "pizza/pizza-17.png",
      oldRetina: "pizza/pizza-17@2x.png",
    },
  },
  {
    _id: 18,
    name: "Lycorhinus",
    ingredients:
      "lorem, ipsum, dolor, sit, amet, consect, adipisicing, elit, recusandae, tempora",
    sizes: [14, 16, 18],
    prices: [21, 27, 33],
    photos: {
      web: "pizza/pizza-18.webp",
      webRetina: "pizza/pizza-18@2x.webp",
      old: "pizza/pizza-18.png",
      oldRetina: "pizza/pizza-18@2x.png",
    },
  },
];

export default pizzaArray;
