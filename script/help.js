const random = (max = 255) => Math.floor(Math.random() * (max + 1));
const randomMinMax = (max,min) => Math.floor(Math.random() * ((max + 1) - min) + min);