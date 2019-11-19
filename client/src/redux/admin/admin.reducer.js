
const INITIAL_STATE = {
  exclusives: [
    {
      'id': 1,
      'product_category': 'exclusives',
      'product_name': 'Balaclava',
      'product_color': 'Sand',
      'product_price': 100,
      'product_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'product_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'product_images': [
        '../../assets/images/BALACLAVA_SAND.png',
        '../../assets/images/BALACLAVA_SAND_1.jpg',
        '../../assets/images/BALACLAVA_SAND_2.jpg',
        '../../assets/images/BALACLAVA_SAND_3.jpg',
      ],
      'product_url': '/product/balaclava/1',
      'product_quantity': 40,
      'on_sale': false,
      'sale_discount': [0.10, 0.20, 0.30, 0.40],
    },
    {
      'id': 2,
      'product_category': 'exclusives',
      'product_name': 'Balaclava',
      'product_color': 'Crimson',
      'product_price': 100,
      'product_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'product_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'product_images': [
        '../../assets/images/BALACLAVA_CRIMSON.png',
        '../../assets/images/BALACLAVA_CRIMSON_1.jpg',
        '../../assets/images/BALACLAVA_CRIMSON_2.jpg',
        '../../assets/images/BALACLAVA_CRIMSON_3.jpg',
      ],
      'product_url': '/product/balaclava/2',
      'product_quantity': 40,
      'on_sale': false,
      'sale_discount': [0.10, 0.20, 0.30, 0.40],
    },
    {
      'id': 3,
      'product_category': 'exclusives',
      'product_name': 'Balaclava',
      'product_color': 'Smoke',
      'product_price': 100,
      'product_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'product_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'product_images': [
        '../../assets/images/BALACLAVA_SMOKE.png',
        '../../assets/images/BALACLAVA_SMOKE_1.jpg',
        '../../assets/images/BALACLAVA_SMOKE_2.jpg',
        '../../assets/images/BALACLAVA_SMOKE_3.jpg',
      ],
      'product_url': '/product/balaclava/3',
      'product_quantity': 40,
      'on_sale': false,
      'sale_discount': [0.10, 0.20, 0.30, 0.40],
    },
    {
      'id': 4,
      'product_category': 'exclusives',
      'product_name': 'Balaclava',
      'product_color': 'Onyx',
      'product_price': 100,
      'product_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'product_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'product_images': [
        '../../assets/images/BALACLAVA_ONYX.png',
        '../../assets/images/BALACLAVA_ONYX_1.jpg',
        '../../assets/images/BALACLAVA_ONYX_2.jpg',
        '../../assets/images/BALACLAVA_ONYX_3.jpg',
      ],
      'product_url': '/product/balaclava/4',
      'product_quantity': 40,
      'on_sale': false,
      'sale_discount': [0.10, 0.20, 0.30, 0.40],
    },
    {
      'id': 5,
      'product_category': 'exclusives',
      'product_name': 'Balaclava',
      'product_color': 'Croco',
      'product_price': 100,
      'product_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'product_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'product_images': [
        '../../assets/images/BALACLAVA_CROCO.png',
        '../../assets/images/BALACLAVA_CROCO_1.jpg',
        '../../assets/images/BALACLAVA_CROCO_2.jpg',
      ],
      'product_url': '/product/balaclava/5',
      'product_quantity': 40,
      'on_sale': false,
      'sale_discount': [0.10, 0.20, 0.30, 0.40],
    },
    {
      'id': 6,
      'product_category': 'exclusives',
      'product_name': 'Felted Scarf',
      'product_color': 'Midnight / Crimson',
      'product_price': 150,
      'product_description': 'Super soft scarf, perfect during harsh weather conditions, Or just for those colder days behind your computer. Limited edition. Only 40 pieces have been produced.',
      'product_info': [
        '100% lambswool',
        '100 % bio degradable'
      ],
      'product_images': [
        '../../assets/images/FILTED_SCARF_MIDNIGHT_CRIMSON.png',
        '../../assets/images/FILTED_SCARF_MIDNIGHT_CRIMSON_1.jpg',
        '../../assets/images/FILTED_SCARF_MIDNIGHT_CRIMSON_2.jpg',
      ],
      'product_url': '/product/felted_scarf/6',
      'product_quantity': 40,
      'on_sale': false,
      'sale_discount': [0.10, 0.20, 0.30, 0.40],
    },
    {
      'id': 7,
      'product_category': 'exclusives',
      'product_name': 'Felted Scarf',
      'product_color': 'Royal / Smoke',
      'product_price': 150,
      'product_description': 'Super soft scarf, perfect during harsh weather conditions, Or just for those colder days behind your computer. Limited edition. Only 40 pieces have been produced.',
      'product_info': [
        '100% lambswool',
        '100 % bio degradable'
      ],
      'product_images': [
        '../../assets/images/FELTED_SCARF_ROYAL_SMOKE.png',
        '../../assets/images/FELTED_SCARF_ROYAL_SMOKE_1.jpg',
      ],
      'product_url': '/product/felted_scarf/7',
      'product_quantity': 40,
      'on_sale': false,
      'sale_discount': [0.10, 0.20, 0.30, 0.40],
    },
    {
      'id': 8,
      'product_category': 'exclusives',
      'product_name': 'Travel Blanket',
      'product_color': 'Midnight / Crimson',
      'product_price': 250,
      'product_description': 'Must have for those who travel a lot, amazingly warm and cosy blanket, which eventually becomes like a second skin. Limited edition. Only 40 pieces have been produced.',
      'product_info': [
        '100% lambswool',
        '100 % bio degradable'
      ],
      'product_images': [
        '../../assets/images/TRAVEL_BLANKET_MIDNIGHT_CRIMSON.png',
        '../../assets/images/TRAVEL_BLANKET_MIDNIGHT_CRIMSON_1.jpg',
        '../../assets/images/TRAVEL_BLANKET_MIDNIGHT_CRIMSON_2.jpg',
      ],
      'product_url': '/product/travel_blanket/8',
      'product_quantity': 40,
      'on_sale': false,
      'sale_discount': [0.10, 0.20, 0.30, 0.40],
    },
  ],
  newsletter: [],
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default : 
      return state;
  }
};