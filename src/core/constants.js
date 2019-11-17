export default {
    WEDDING_DATE: [
        2021,
        1,
        2
    ],
    DEFAULT_LOCALE: 'es',
    SECTION_SEPARATOR: '$separator$',
    SECTIONS: {
        'about_us': {
            position: 1,
            background_image: null,

        },
        'what_to_do_in_uruguay': {
            position: 2,
            background_image: true,
            location_tips: [
                {
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

                },
                {
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

                },
                {
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

                },
                {
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

                },
                {
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