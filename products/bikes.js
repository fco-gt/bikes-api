const productos = [
  {
    id: 1, // ID Imagen
    name: "Montaña Master 5000", // Nombre
    description:
      "La Montaña Master 5000 es una bicicleta diseñada para dominar cualquier sendero Con un cuadro de aluminio ultraligero, suspensión delantera ajustable y frenos de disco hidráulicos, esta bicicleta ofrece un rendimiento excepcional en terrenos desafiantes Sus 27 velocidades garantizan un control total en cualquier situación", // Descripcion
    price: 229990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 5, // Stock
  },
  {
    id: 2, // ID Imagen
    name: "Montaña Mistress 5000", // Nombre
    description:
      "La Montaña Mistress 5000 es una bicicleta diseñada para mujeres que buscan dominar cualquier sendero Con un cuadro de aluminio ultraligero, suspensión delantera ajustable y frenos de disco hidráulicos, esta bicicleta ofrece un rendimiento excepcional en terrenos desafiantes Sus 27 velocidades garantizan un control total en cualquier situación", // Descripcion
    price: 249990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 15, // Stock
  },
  {
    id: 3, // ID Imagen
    name: "Cruiser Classic 2000", // Nombre
    description:
      " La Cruiser Classic 2000 combina el estilo vintage con la comodidad moderna Equipada con un cuadro de acero resistente, guardabarros cromados y un cómodo sillín de cuero, esta bicicleta es perfecta para los paseos relajados por la ciudad Sus 3 velocidades internas ofrecen una conducción suave y sin esfuerzo", // Descripcion
    price: 210990, // Precio
    category: "bicicleta de paseo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 6, // Stock
  },
  {
    id: 4, // ID Imagen   LISTO
    name: "Trailblazer Pro XT", // Nombre
    description:
      "La Trailblazer Pro XT es la elección de los aventureros audaces Con un cuadro de carbono ultraligero, suspensión delantera y frenos de disco hidráulicos de alta gama, esta bicicleta ofrece un rendimiento excepcional en cualquier terreno Sus 29 velocidades proporcionan una amplia gama de opciones para conquistar cualquier ruta", // Descripcion
    price: 214990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 4, // Stock
  },
  {
    id: 5, // ID Imagen
    name: "Cruiser Bella 2000", // Nombre
    description:
      "La Cruiser Bella 2000 combina el estilo vintage con la comodidad moderna Equipada con un cuadro de acero resistente, guardabarros cromados y un cómodo sillín de cuero, esta bicicleta es perfecta para los paseos relajados por la ciudad Sus 3 velocidades internas ofrecen una conducción suave y sin esfuerzo", // Descripcion
    price: 235990, // Precio
    category: "bicicleta de paseo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 3, // Stock
  },
  {
    id: 6, // ID Imagen
    name: "Urban Commuter Elite", // Nombre
    description:
      "La Urban Commuter Elite es la opción perfecta para desplazamientos diarios en la ciudad Con un cuadro de aluminio ligero, guardabarros integrados y una transmisión de 7 velocidades, esta bicicleta ofrece una conducción suave y eficiente en entornos urbanos Su diseño elegante y funcionalidad la convierten en la compañera ideal para el día a día", // Descripcion
    price: 199990, // Precio
    category: "bicicleta urbana", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 7, // Stock
  },
  {
    id: 7, // ID Imagen
    name: "Endurance Explorer", // Nombre
    description:
      "La Endurance Explorer es una bicicleta resistente y versátil, diseñada para conquistar largas distancias en terrenos exigentes Con un cuadro de aleación de aluminio duradero, suspensión delantera y frenos de disco mecánicos, esta bicicleta ofrece un rendimiento fiable en cualquier condición Sus 24 velocidades garantizan un control preciso en todo momento", // Descripcion
    price: 259990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 9, // Stock
  },
  {
    id: 8, // ID Imagen
    name: "Trailblazer Pro XT Femme", // Nombre
    description:
      " La Trailblazer Pro XT Femme es la elección de las aventureras intrépidas Con un cuadro de carbono ultraligero, suspensión delantera y frenos de disco hidráulicos de alta gama, esta bicicleta ofrece un rendimiento excepcional en cualquier terreno Sus 29 velocidades proporcionan una amplia gama de opciones para conquistar cualquier ruta", // Descripcion
    price: 249990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 6, // Stock
  },
  {
    id: 9, // ID Imagen
    name: "Urban Commuter Elite Femme", // Nombre
    description:
      "La Urban Commuter Elite Femme es la opción perfecta para desplazamientos diarios en la ciudad Con un cuadro de aluminio ligero, guardabarros integrados y una transmisión de 7 velocidades, esta bicicleta ofrece una conducción suave y eficiente en entornos urbanos Su diseño elegante y funcionalidad la convierten en la compañera ideal para el día a día", // Descripcion
    price: 229990, // Precio
    category: "bicicleta de paseo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 3, // Stock
  },
  {
    id: 10, // ID Imagen
    name: "City Comfort Cruiser", // Nombre
    description:
      "La City Comfort Cruiser es la definición de comodidad en dos ruedas Con un cuadro de acero resistente, manillar alto y un asiento acolchado, esta bicicleta ofrece una posición de conducción relajada y erguida Sus 3 velocidades internas proporcionan una conducción suave y sin esfuerzo, perfecta para los paseos por la ciudad", // Descripcion
    price: 199990, // Precio
    category: "bicicleta de paseo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 6, // Stock
  },
  {
    id: 11, // ID Imagen
    name: "Speedy Racer Junior", // Nombre
    description:
      "La Speedy Racer Junior es la bicicleta perfecta para que los pequeños aventureros exploren el mundo con velocidad y seguridad Con un diseño vibrante y llamativo, esta bicicleta ofrece un cuadro resistente de acero, ruedas estables de 20 pulgadas y frenos delanteros y traseros confiables Sus 6 velocidades permiten a los niños enfrentar diferentes terrenos con facilidad, mientras que el manillar ajustable y el sillín acolchado garantizan comodidad durante horas de diversión Con la Speedy Racer Junior, ¡tu hijo se convertirá en el campeón de la carretera!", // Descripcion
    price: 199990, // Precio
    category: "triciclo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "niño", // adulto || niño
    stock: 10, // Stock
  },
  {
    id: 12, // ID Imagen
    name: "Adventure Seeker XTR", // Nombre
    description:
      "La Adventure Seeker XTR es una bicicleta diseñada para los exploradores intrépidos Con un cuadro de aleación de aluminio ligero, suspensión delantera ajustable y frenos de disco hidráulicos de alta gama, esta bicicleta ofrece un rendimiento excepcional en cualquier terreno Sus 27 velocidades proporcionan una amplia gama de opciones para enfrentar cualquier desafío", // Descripcion
    price: 299990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 12, // Stock
  },
  {
    id: 13, // ID Imagen
    name: "Rugged Roadster", // Nombre
    description:
      "La Rugged Roadster es una bicicleta versátil diseñada para conquistar cualquier tipo de terreno Con un cuadro de acero resistente, manillar ajustable y neumáticos todoterreno, esta bicicleta ofrece un rendimiento excepcional tanto en carreteras como en caminos sin pavimentar Sus 21 velocidades proporcionan una amplia gama de opciones para adaptarse a cualquier situación", // Descripcion
    price: 249990, // Precio
    category: "bicicleta de paseo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 6, // Stock
  },
  {
    id: 14, // ID Imagen
    name: "Endurance Explorer Femme", // Nombre
    description:
      "La Endurance Explorer Femme es una bicicleta resistente y versátil, diseñada para conquistar largas distancias en terrenos exigentes Con un cuadro de aleación de aluminio duradero, suspensión delantera y frenos de disco mecánicos, esta bicicleta ofrece un rendimiento fiable en cualquier condición Sus 24 velocidades garantizan un control preciso en todo momento", // Descripcion
    price: 239990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 5, // Stock
  },
  {
    id: 15, // ID Imagen
    name: "City Comfort Cruiser Femme", // Nombre
    description:
      "La City Comfort Cruiser Femme es la definición de comodidad en dos ruedas Con un cuadro de acero resistente, manillar alto y un asiento acolchado, esta bicicleta ofrece una posición de conducción relajada y erguida Sus 3 velocidades internas proporcionan una conducción suave y sin esfuerzo, perfecta para los paseos por la ciudad", // Descripcion
    price: 229990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 12, // Stock
  },
  {
    id: 16, // ID Imagen
    name: "Mountain Maverick", // Nombre
    description:
      "La Mountain Maverick es una bicicleta diseñada para los aventureros que buscan emprender nuevas rutas Con un cuadro de aluminio resistente, suspensión delantera y frenos de disco mecánicos, esta bicicleta ofrece un rendimiento sólido en terrenos variados Sus 26 velocidades garantizan un control total en cualquier situación", // Descripcion
    price: 219990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 9, // Stock
  },
  {
    id: 17, // ID Imagen
    name: "Rugged Roadster Femme", // Nombre
    description:
      "La Rugged Roadster Femme es una bicicleta versátil diseñada para conquistar cualquier tipo de terreno Con un cuadro de acero resistente, manillar ajustable y neumáticos todoterreno, esta bicicleta ofrece un rendimiento excepcional tanto en carreteras como en caminos sin pavimentar Sus 21 velocidades proporcionan una amplia gama de opciones para adaptarse a cualquier situación", // Descripcion
    price: 259990, // Precio
    category: "bicicleta de montaña", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 7, // Stock
  },
  {
    id: 18, // ID Imagen
    name: "Urban Trekker Femme", // Nombre
    description:
      "El Urban Trekker Femme es la opción perfecta para los desplazamientos urbanos diarios y las aventuras en la ciudad Con un cuadro de aluminio ligero, guardabarros integrados y una transmisión de 8 velocidades, esta bicicleta ofrece una conducción suave y eficiente en todo tipo de terrenos urbanos Su diseño elegante y funcionalidad la convierten en la compañera ideal para explorar la ciudad", // Descripcion
    price: 239990, // Precio
    category: "bicicleta de paseo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 12, // Stock
  },
  {
    id: 19, // ID Imagen
    name: "Turbo Charge Junior", // Nombre
    description:
      "La Turbo Charge Junior es una bicicleta diseñada para brindar diversión y seguridad a los más pequeños Con un diseño llamativo y colores vibrantes, esta bicicleta cuenta con un cuadro de acero resistente y ruedas estables de 16 pulgadas, ideales para niños en etapa de aprendizaje Equipada con frenos delanteros y traseros, los niños pueden detenerse fácilmente cuando lo necesiten Con una sola velocidad, los pequeños pueden concentrarse en disfrutar del paseo sin complicaciones La Turbo Charge Junior es la opción perfecta para iniciar a los niños en el mundo del ciclismo de forma segura y divertida", // Descripcion
    price: 198990, // Precio
    category: "triciclo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "niño", // adulto || niño
    stock: 14, // Stock
  },
  {
    id: 20, // ID Imagen
    name: "Urban Trekker", // Nombre
    description:
      "El Urban Trekker es la opción perfecta para los desplazamientos urbanos diarios y las aventuras en la ciudad Con un cuadro de aluminio ligero, guardabarros integrados y una transmisión de 8 velocidades, esta bicicleta ofrece una conducción suave y eficiente en todo tipo de terrenos urbanos Su diseño elegante y funcionalidad la convierten en la compañera ideal para explorar la ciudad", // Descripcion
    price: 239990, // Precio
    category: "bicicleta de paseo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 11, // Stock
  },
  {
    id: 21, // ID Imagen
    name: "Thunderbolt Kidz", // Nombre
    description:
      "La Thunderbolt Kidz es una bicicleta emocionante y resistente diseñada para los pequeños aventureros Con un cuadro de acero duradero y ruedas de 18 pulgadas, esta bicicleta ofrece estabilidad y control para los niños en crecimiento Equipada con una transmisión de 5 velocidades, los jóvenes ciclistas pueden enfrentar terrenos variados con facilidad y confianza Los frenos delanteros y traseros proporcionan una frenada segura en todo momento Con su diseño llamativo y características de alto rendimiento, la Thunderbolt Kidz hará que cada paseo sea una emocionante aventura para tu hijo", // Descripcion
    price: 219990, // Precio
    category: "bicicleta de paseo", // triciclo | bicicleta de montaña | bicicleta de paseo
    age: "adulto", // adulto || niño
    stock: 16, // Stock
  },
];

module.exports = productos;
