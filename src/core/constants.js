import Position from './position';
import Place from './place';
export default {
    WEDDING_DATE: [2021, 1, 2, 17, 30, 0],
    DEFAULT_LOCALE: 'es',
    SECTION_SEPARATOR: '$separator$',
    VENUE: {
        name: 'Finca Clara',
        location: new Position(-34.797526, -56.019145),
    },
    HOTELS: [{
        name: 'Hotel Europa',
        distance_to_venue: 25,
        image: 'https://thumbnails.trvl-media.com/bw3RUWuw91MaU9GP6HiddY78pE0=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/4000000/3960000/3953000/3952912/660f068d_z.jpg',
        price_from: 50,
        location: new Position(-34.904470, -56.187413),
    }, {
        name: 'Bit Design Hotel',
        distance_to_venue: 30,
        image: 'https://thumbnails.trvl-media.com/p0wCyyDjjH23S2e7DWpOaP1EGMw=/250x140/smart/filters:quality(60)/images.trvl-media.com/hotels/10000000/9190000/9183400/9183358/4abf48a2_z.jpg',
        price_from: 90,
        location: new Position(-34.924342, -56.160789),
    }, {
        name: 'Hotel Carrasco',
        distance_to_venue: 16,
        image: 'https://thumbnails.trvl-media.com/CuTHbGrEI6Cmg5SSJYNSO_CC5Kc=/250x140/smart/filters:quality(60)/images.trvl-media.com/hotels/6000000/5500000/5496500/5496466/b9af8188_z.jpg',
        price_from: 250,
        location: new Position(-34.890487, -56.055304),

    }],
    SECTIONS: {
        'about_us': {
            position: 1,
            background_image: null,

        },
        'what_to_do_in_uruguay': {
            position: 2,
            background_image: true,
            locations_tips: [
                new Place(
                    'mercado_del_puerto',
                    ['mercado_arriba', 'mercado_parrilla', 'mercado_fachada'],
                    {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Mercado_del_Puerto',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/Mercado_del_Puerto',
                        gmaps: 'https://goo.gl/maps/By6F5Cx8TLdrrQRc8',

                    }
                ),
                new Place('quebrada_de_los_cuervos',
                    ['quebrada_de_los_cuervos_cascada', 'quebrada_de_los_cuervos_sendero', 'quebrada_de_los_cuervos_cabalgata'],
                    {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Paisaje_protegido_Quebrada_de_los_Cuervos',
                        wikipedia_de: 'https://en.wikipedia.org/wiki/Quebrada_de_los_Cuervos',
                        gmaps: 'https://goo.gl/maps/YgWZLwQ1jU48r2Yu6',

                    }),
                new Place('colonia_del_sacramento',
                    [
                        'colonia_del_sacramento_callejuela',
                        'colonia_del_sacramento_puerta',
                        'colonia_del_sacramento_puerto',

                    ],
                    {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Colonia_del_Sacramento',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/Colonia_del_Sacramento',
                        gmaps: 'https://goo.gl/maps/oF9228mqGUwU3R5q7',

                    }

                ), new Place('punta_del_este',
                    [
                        'punta_del_este_horizonte',
                        'punta_del_este_casapueblo',
                        'punta_del_este_puente_barra',

                    ],
                    {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Punta_del_Este',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/Punta_del_Este',
                        gmaps: 'https://goo.gl/maps/WoeKT6iSE3WZkBdU8',

                    }

                ),
                new Place('ciudad_vieja',
                    [
                        'ciudad_vieja_puerta',
                        'ciudad_vieja_cerrito',
                        'ciudad_vieja_plaza_constitucion',

                    ],
                    {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Ciudad_Vieja_(Montevideo)',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/Ciudad_Vieja_(Montevideo)',
                        gmaps: 'https://goo.gl/maps/cyFtLVfKWvBL92fP6',
                    }
                ), new Place('la_pedrera',
                    [
                        'la_pedrera_desplayado',
                    ],
                    {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/La_Pedrera_(Rocha)',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/La_Pedrera_(Rocha)',
                        gmaps: 'https://goo.gl/maps/eu375MCTBpHhA9Pg9',
                    }
                )
            ],
            restaurants_tips: [{}, {}, {}, {}, {}, {}],
            activities_tips: [],
        },
        'venue': {
            position: 3,
            background_image: null,

        },
        'what_to_do_in_germany': {
            position: 4,
            background_image: true,

        },
        'rsvp': {
            position: 5,
            background_image: null,

        },

    },

};
