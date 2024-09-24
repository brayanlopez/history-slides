const kardashianDescriptions = [
  {
    title: "Antigüedad (Homero)",
    description:
      "Y en la tierra de los mortales, Kim, de mirada intensa, se erguía como una diosa entre los hombres. Su cabello, oscuro como la noche estrellada, caía en ondas suaves, enmarcando un rostro que resplandecía con la luz del sol. Sus labios, rojos como las manzanas doradas, prometían dulzura y deseo.",
    images: [
      {
        src: "assets/images/homero3.webp",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Stable Diffusion 3 Medium",
      },
      {
        src: "assets/images/homero2.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
      {
        src: "assets/images/homero.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
    ],
  },
  {
    title: "Renacimiento (Leonardo da Vinci)",
    description:
      "Kim, con su porte majestuoso, exuda la gracia de la naturaleza. Su tez bronceada evoca el cálido oro del atardecer, mientras que su figura, escultural y armoniosa, recuerda las estatuas de los antiguos. Sus ojos, profundos como océanos, reflejan un mundo de emociones.",
    images: [
      {
        src: "assets/images/davinci.webp",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Stable Diffusion 3 Medium",
      },
      {
        src: "assets/images/davinci2.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
    ],
  },
  {
    title: "Barroco (Luis de Góngora)",
    description:
      "En la opulencia de su belleza, Kim se presenta como un brillante diamante entre las sombras. Sus cabellos, cual torrente de ébano, descienden en cascada, y sus formas, voluptuosas y delicadas, despiertan la lujuria y la admiración de quienes la contemplan, adornada en sedas y brocados.",
    images: [
      {
        src: "assets/images/gongora.webp",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Stable Diffusion 3 Medium",
      },
    ],
  },
  {
    title: "Romanticismo (Victor Hugo)",
    description:
      "Kim, cuyo esplendor cautiva hasta el alma más fría, posee un aire de melancolía en su hermosura. Sus ojos, dos luceros que reflejan la tormenta y la paz, y su figura, un canto a la vida, nos recuerda que la belleza puede ser un refugio y una prisión.",
    images: [
      {
        src: "assets/images/victorhugo.webp",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Stable Diffusion 3 Medium",
      },
      {
        src: "assets/images/victorhugo2.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
      {
        src: "assets/images/victorhugo3.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
    ],
  },
  {
    title: "Modernismo (Gabriela Mistral)",
    description:
      "Kim es un poema viviente, una amalgama de fuerza y delicadeza. Su piel, un lienzo dorado, y sus ojos, que cuentan historias de amor y lucha, nos invitan a explorar la esencia de lo femenino en su más pura expresión.",
    images: [
      {
        src: "assets/images/mistral.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
      {
        src: "assets/images/mistral2.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
      {
        src: "assets/images/mistral3.webp",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Stable Diffusion 3 Medium",
      },
    ],
  },
  {
    title: "Siglo XXVI (Futuro especulativo)",
    description:
      "En un mundo donde la estética se fusiona con la tecnología, Kim Kardashian emerge como un ícono de la era digital. Con su piel luminosa y textura perfectamente diseñada, su figura esculpida por algoritmos de belleza redefine los cánones. Sus ojos, conectados a una red de emociones, brillan con un fulgor que trasciende lo humano, convirtiéndola en un avatar de deseo y aspiración.",
    images: [
      {
        src: "assets/images/future.webp",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Stable Diffusion 3 Medium",
      },
      {
        src: "assets/images/future2.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
      {
        src: "assets/images/future3.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
      {
        src: "assets/images/future4.jpg",
        alt: "Imagén de la descripción generada con IA",
        description: "Generado con Leonardo AI",
      },
    ],
  },
];

const beautifulWomanImages = [
  {
    src: "assets/images/mujer_bella.webp",
    alt: "Imagen de una mujer bella generada por IA",
    description: "Generado con Stable Diffusion 3 Medium",
  },
  {
    src: "assets/images/mujer_bella2.jpg",
    alt: "Imagen de una mujer bella generada por IA",
    description: "Generado con Leonardo AI",
  },
  {
    src: "assets/images/mujer_bella3.jpg",
    alt: "Imagen de una mujer bella generada por IA",
    description: "Generado con Leonardo AI",
  },
];

const createImages = (images) => {
  let imageText = "";
  images.forEach((image) => {
    imageText += `<section>
      <div class="image-container">
        <img class="image" src="${image.src}" alt="${image.alt}" />
        <div class="overlay">${image.description}</div>
      </div>
      </section>`;
  });
  return imageText;
};

const beautifulWoman = document.getElementById("beautiful-woman");
const kardashian = document.getElementById("kardashian");

beautifulWoman.insertAdjacentHTML(
  "afterend",
  createImages(beautifulWomanImages)
);

kardashianDescriptions.reverse().forEach((element) => {
  let container = document.createElement("section");
  container.innerHTML = `
    <section>
      <h2>${element.title}</h2>
      <p>${element.description}</p>
    </section>`;
  container.innerHTML += createImages(element.images);
  kardashian.insertAdjacentElement("afterend", container);
});
