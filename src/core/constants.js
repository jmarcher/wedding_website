export default {
    WEDDING_DATE: [2021, 1, 2],
    DEFAULT_LOCALE: 'es',
    SECTION_SEPARATOR: '$separator$',
    HOTELS: [{
        name: 'Hotel Europa',
        distance_to_venue: 25,
        image: 'https://thumbnails.trvl-media.com/bw3RUWuw91MaU9GP6HiddY78pE0=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/4000000/3960000/3953000/3952912/660f068d_z.jpg',
    }, {
        name: 'Bit Design Hotel',
        distance_to_venue: 30,
        image: 'https://thumbnails.trvl-media.com/p0wCyyDjjH23S2e7DWpOaP1EGMw=/250x140/smart/filters:quality(60)/images.trvl-media.com/hotels/10000000/9190000/9183400/9183358/4abf48a2_z.jpg',
    }, {
        name: 'Hotel Carrasco',
        distance_to_venue: 16,
        image:'https://thumbnails.trvl-media.com/CuTHbGrEI6Cmg5SSJYNSO_CC5Kc=/250x140/smart/filters:quality(60)/images.trvl-media.com/hotels/6000000/5500000/5496500/5496466/b9af8188_z.jpg',
    }],
    SECTIONS: {
        'about_us': {
            position: 1,
            background_image: null,

        },
        'what_to_do_in_uruguay': {
            position: 2,
            background_image: true,
            locations_tips: [{
                    key: 'mercado_del_puerto',
                    images: [
                        '/assets/images/sections/uruguay/mercado_arriba.jpg',
                        '/assets/images/sections/uruguay/mercado_parrilla.jpg',
                        '/assets/images/sections/uruguay/mercado_fachada.jpg',

                    ],
                    links: {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Mercado_del_Puerto',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/Mercado_del_Puerto',
                        gmaps: 'https://goo.gl/maps/By6F5Cx8TLdrrQRc8',

                    },

                }, {
                    key: 'quebrada_de_los_cuervos',
                    images: [
                        '/assets/images/sections/uruguay/quebrada_de_los_cuervos_cascada.jpg',
                        '/assets/images/sections/uruguay/quebrada_de_los_cuervos_sendero.jpg',
                        '/assets/images/sections/uruguay/quebrada_de_los_cuervos_cabalgata.jpg',

                    ],
                    links: {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Paisaje_protegido_Quebrada_de_los_Cuervos',
                        wikipedia_de: 'https://en.wikipedia.org/wiki/Quebrada_de_los_Cuervos',
                        gmaps: 'https://goo.gl/maps/YgWZLwQ1jU48r2Yu6',

                    },

                }, {
                    key: 'colonia_del_sacramento',
                    images: [
                        '/assets/images/sections/uruguay/colonia_del_sacramento_callejuela.jpg',
                        '/assets/images/sections/uruguay/colonia_del_sacramento_puerta.jpg',
                        '/assets/images/sections/uruguay/colonia_del_sacramento_puerto.jpg',

                    ],
                    links: {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Colonia_del_Sacramento',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/Colonia_del_Sacramento',
                        gmaps: 'https://goo.gl/maps/oF9228mqGUwU3R5q7',

                    },

                }, {
                    key: 'punta_del_este',
                    images: [
                        '/assets/images/sections/uruguay/punta_del_este_horizonte.jpg',
                        '/assets/images/sections/uruguay/punta_del_este_casapueblo.jpg',
                        '/assets/images/sections/uruguay/punta_del_este_puente_barra.jpg',

                    ],
                    links: {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Punta_del_Este',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/Punta_del_Este',
                        gmaps: 'https://goo.gl/maps/WoeKT6iSE3WZkBdU8',

                    },

                },
                // {
                //     key: 'virgilio',
                //     images: [
                //         '/assets/images/sections/uruguay/mercado_arriba.jpg',
                //         '/assets/images/sections/uruguay/mercado_parrilla.jpg',
                //         '/assets/images/sections/uruguay/mercado_fachada.jpg',

                //     ],
                //     links: {
                //         wikipedia_es: 'https://es.wikipedia.org/wiki/Mercado_del_Puerto',
                //         wikipedia_de: 'https://de.wikipedia.org/wiki/Mercado_del_Puerto',
                //         gmaps: 'https://goo.gl/maps/By6F5Cx8TLdrrQRc8',

                //     },

                // },
                {
                    key: 'ciudad_vieja',
                    images: [
                        '/assets/images/sections/uruguay/ciudad_vieja_puerta.jpg',
                        '/assets/images/sections/uruguay/ciudad_vieja_cerrito.jpg',
                        '/assets/images/sections/uruguay/ciudad_vieja_plaza_constitucion.jpg',

                    ],
                    links: {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/Ciudad_Vieja_(Montevideo)',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/Ciudad_Vieja_(Montevideo)',
                        gmaps: 'https://goo.gl/maps/cyFtLVfKWvBL92fP6',

                    },

                }, {
                    key: 'la_pedrera',
                    images: [
                        '/assets/images/sections/uruguay/la_pedrera_desplayado.jpg',

                    ],
                    links: {
                        wikipedia_es: 'https://es.wikipedia.org/wiki/La_Pedrera_(Rocha)',
                        wikipedia_de: 'https://de.wikipedia.org/wiki/La_Pedrera_(Rocha)',
                        gmaps: 'https://goo.gl/maps/eu375MCTBpHhA9Pg9',

                    },

                }
            ],
            restaurants_tips: [],
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
