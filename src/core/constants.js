import Position from "./position";
import Tip from "./tip";
import BestTip from "./bestTip";
// import moment from "moment";
// const moment = {};
export default {
  EMAIL_VALENTIN: "valentin_arnold@outlook.com",
  EMAIL_LISA: "lisa.guenster@tu-dortmund.de",

  RSVP_DEADLINE: "2020-09-01T00:00:00Z",
  RSVP_DEADLINE_WARNING: 30, // Days
  DEFAULT_LOCALE: "de",
  IMAGE_PLACEHOLDER: "/images/placeholder.jpg",
  // API_PATH: 'https://api.joaquinundrebecca.de',
  API_PATH:
    process.env.NODE_ENV !== "production"
      ? "http://api.test"
      : "https://api.joaquinundrebecca.de",
  // WEDDING_DATE: moment("2021-01-02 17:30 -03:00", "YYYY-MM-DD HH:mm ZZ"),
  SECTION_SEPARATOR: "$separator$",
  FOOD_MENUS: ["meat", "vegetarian", "vegan", "kids"],

  STORY: [
    {
      date: "2012-12-15",
      key: "first_time",
      location: "montevideo_uruguay",
      icon: "/assets/icons/love-potion.png",
      icon_special: true,
      position: new Position(-34.915878, -56.158536)
    },
    {
      date: "2013-08-05",
      key: "first_time_germany",
      location: "muenster_germany",
      icon: "/assets/icons/honeymoon-luggage.png",
      icon_special: true,
      position: new Position(51.952787, 7.611551)
    },
    {
      date: "2013-08-11",
      key: "euro_trip",
      location: "europa",
      icon: "/assets/icons-v3/051-u-bahn.png",
      icon_special: true,
      position: new Position(51.952787, 7.611551)
    },
    {
      date: "2014-08-01",
      key: "second_time_germany",
      location: "paderborn_cologne_germany",
      icon: "/assets/icons/honeymoon-luggage.png",
      icon_special: true,
      position: new Position(51.952787, 7.611551)
    },
    {
      date: "2015-08-07",
      key: "travel_uruguay",
      location: "montevideo_uruguay",
      icon: "/assets/icons/honeymoon-luggage.png",
      icon_special: true,
      position: new Position(51.952787, 7.611551)
    },
    {
      date: "2016-09-15",
      key: "new_appartment",
      location: "cologne_germany",
      icon: "/assets/icons-v3/055-wohnung.png",
      icon_special: true,
      position: new Position(50.894829, 6.992504)
    },
    {
      date: "2018-09-02",
      key: "proposal",
      location: "cologne_germany",
      icon: "/assets/icons/diamond-ring.png",
      icon_special: true,
      position: new Position(50.894829, 6.992504)
    },
    {
      date: "2020-09-01",
      format: "MMMM YYYY",
      key: "registry",
      location: "cologne_germany",
      icon: "/assets/icons-v3/063-ehe.png",
      icon_special: true,
      position: new Position(50.894829, 6.992504)
    },
    {
      date: "2021-01-02",
      key: "wedding_day",
      location: "canelones_uruguay",
      icon: "/assets/icons/newly-married-couple.png",
      icon_special: true,
      position: new Position(-34.797526, -56.019145)
    }
  ],
  VENUE: {
    name: "Finca Clara",
    location: new Position(-34.797526, -56.019145)
  },
  HOTELS: [
    {
      name: "Hotel América",
      distance_to_venue: 25,
      image:
        "https://thumbnails.trvl-media.com/CuTHbGrEI6Cmg5SSJYNSO_CC5Kc=/250x140/smart/filters:quality(60)/images.trvl-media.com/hotels/6000000/5500000/5496500/5496466/b9af8188_z.jpg",
      price_from: 50,
      location: new Position(-34.906561, -56.193478),
      description: "hotel_america_description"
    },
    {
      name: "Hotel Europa",
      distance_to_venue: 25,
      image:
        "https://thumbnails.trvl-media.com/bw3RUWuw91MaU9GP6HiddY78pE0=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/4000000/3960000/3953000/3952912/660f068d_z.jpg",
      price_from: 50,
      location: new Position(-34.90447, -56.187413),
      description: "hotel_europa_description"
    },
    {
      name: "Bit Design Hotel",
      distance_to_venue: 30,
      image:
        "https://thumbnails.trvl-media.com/p0wCyyDjjH23S2e7DWpOaP1EGMw=/250x140/smart/filters:quality(60)/images.trvl-media.com/hotels/10000000/9190000/9183400/9183358/4abf48a2_z.jpg",
      price_from: 80,
      location: new Position(-34.924342, -56.160789),
      description: "hotel_bit_description"
    }
  ],
  SECTIONS: {
    about_us: {
      position: 1,
      background_image: null
    },
    party_uruguay: {
      position: 2,
      background_image: true,
      locations_tips: [
        new Tip(
          "quebrada_de_los_cuervos",
          [
            "quebrada_de_los_cuervos_2",
            "quebrada_de_los_cuervos_3",
            "quebrada_de_los_cuervos_cascada",
            "quebrada_de_los_cuervos_sendero",
            "quebrada_de_los_cuervos_cabalgata"
          ],
          {
            wikipedia_es:
              "https://es.wikipedia.org/wiki/Paisaje_protegido_Quebrada_de_los_Cuervos",
            wikipedia_de:
              "https://en.wikipedia.org/wiki/Quebrada_de_los_Cuervos",
            gmaps: "https://goo.gl/maps/YgWZLwQ1jU48r2Yu6"
          }
        ),
        new Tip(
          "colonia_del_sacramento",
          [
            "colonia_del_sacramento_callejuela",
            "colonia_del_sacramento_puerta",
            "colonia_del_sacramento_puerto"
          ],
          {
            wikipedia_es:
              "https://es.wikipedia.org/wiki/Colonia_del_Sacramento",
            wikipedia_de:
              "https://de.wikipedia.org/wiki/Colonia_del_Sacramento",
            gmaps: "https://goo.gl/maps/oF9228mqGUwU3R5q7"
          }
        ),

        new Tip(
          "punta_del_este",
          [
            "punta_del_este_horizonte",
            "punta_del_este_casapueblo",
            "punta_del_este_puente_barra"
          ],
          {
            wikipedia_es: "https://es.wikipedia.org/wiki/Punta_del_Este",
            wikipedia_de: "https://de.wikipedia.org/wiki/Punta_del_Este",
            gmaps: "https://goo.gl/maps/WoeKT6iSE3WZkBdU8"
          }
        ),
        new BestTip(
          "ciudad_vieja",
          [
            "ciudad_vieja_puerta",
            "ciudad_vieja_cerrito",
            "ciudad_vieja_plaza_constitucion"
          ],
          {
            wikipedia_es:
              "https://es.wikipedia.org/wiki/Ciudad_Vieja_(Montevideo)",
            wikipedia_de:
              "https://de.wikipedia.org/wiki/Ciudad_Vieja_(Montevideo)",
            gmaps: "https://goo.gl/maps/cyFtLVfKWvBL92fP6"
          }
        ),
        new BestTip(
          "la_pedrera",
          [
            "la_pedrera_desplayado",
            "la_pedrera_2",
            "la_pedrera_3",
            "la_pedrera_4",
            "la_pedrera_5"
          ],
          {
            wikipedia_es: "https://es.wikipedia.org/wiki/La_Pedrera_(Rocha)",
            wikipedia_de: "https://de.wikipedia.org/wiki/La_Pedrera_(Rocha)",
            gmaps: "https://goo.gl/maps/eu375MCTBpHhA9Pg9"
          }
        ),
        new Tip(
          "salto_del_penitente_minas",
          ["minas_general", "salto_del_penitente_main"],
          {
            wikipedia_de: "https://de.wikipedia.org/wiki/Salto_del_Penitente",
            wikipedia_es: "https://es.wikipedia.org/wiki/Salto_del_Penitente",
            gmaps: "https://goo.gl/maps/mN4wtpK6dskTe4g39"
          }
        ),
        new Tip("punta_del_diablo", ["punta_del_diablo_main"], {
          wikipedia_de: "https://de.wikipedia.org/wiki/Punta_del_Diablo",
          wikipedia_es: "https://es.wikipedia.org/wiki/Punta_del_Diablo",
          gmaps: "https://goo.gl/maps/rteayuFDufvcTj6JA"
        }),
        new Tip("piriapolis", ["piriapolis_main"], {
          wikipedia_de: "https://de.wikipedia.org/wiki/Piri%C3%A1polis",
          wikipedia_es: "https://es.wikipedia.org/wiki/Piri%C3%A1polis",
          gmaps: "https://goo.gl/maps/v1FE4CZrmfMsS5YG8"
        }),
        new BestTip(
          "cabo_polonio",
          [
            "cabo_polonio_main",
            "cabo_polonio_3",
            "cabo_polonio_4",
            "cabo_polonio_5",
            "cabo_polonio_6"
          ],
          {
            wikipedia_de: "https://de.wikipedia.org/wiki/Cabo_Polonio",
            wikipedia_es: "https://es.wikipedia.org/wiki/Cabo_Polonio",
            gmaps: "https://goo.gl/maps/1vXLBajg7DdxXR5c8"
          }
        )
      ],
      restaurants_tips: [
        new BestTip(
          "mercado_del_puerto",
          ["mercado_arriba", "mercado_parrilla", "mercado_fachada"],
          {
            wikipedia_es: "https://es.wikipedia.org/wiki/Mercado_del_Puerto",
            wikipedia_de: "https://de.wikipedia.org/wiki/Mercado_del_Puerto",
            gmaps: "https://goo.gl/maps/By6F5Cx8TLdrrQRc8"
          }
        ),
        new Tip("Rudy Burgers", ["rudy_main", "rudy_burgers"], {
          gmaps: "https://goo.gl/maps/pM5xfZmiQNNQFnzcA"
        }),
        new Tip(
          "el_buen_suspiro",
          [
            "el_buen_suspiro_main",
            "el_buen_suspiro_2",
            "el_buen_suspiro_3",
            "el_buen_suspiro_4"
          ],
          { gmaps: "https://g.page/bardevinosypicadas?share" },
          "colonia_del_sacramento"
        ),
        new Tip("Jacinto", ["jacinto_front", "jacinto_wall"], {
          gmaps: "https://goo.gl/maps/HfmzFkiT6mSM5z5N8"
        }),
        new Tip("La Fonda", ["lafonda_main"], {
          gmaps: "https://g.page/lafondauy?share"
        }),
        new Tip("La cocina de Pedro", ["la_cocina_de_pedro_main"], {
          gmaps: "https://goo.gl/maps/FEXzZCQvb6zo6uSY8"
        }),
        new Tip("Bar Arocena", ["bar_arocena_main"], {
          gmaps: "https://goo.gl/maps/FGCAatMr5dJQVyfA7"
        }),
        new Tip(
          "la_huella",
          ["la_huella_main"],
          { gmaps: "https://g.page/paradorlahuella?share" },
          "jose_ignacio"
        ),
        new Tip(
          "petisco",
          ["petisco_main"],
          { gmaps: "https://goo.gl/maps/QX3Dmz818PVhqNt87" },
          "la_pedrera"
        ),
        new Tip("Cervecería Ramón", ["cerveceria_ramon_main"], {
          gmaps: "https://goo.gl/maps/jvgYmjC65Q4KX9gZ7"
        }),
        new Tip("bardot", ["bardot_main"], {
          gmaps: "https://goo.gl/maps/kJcKxuFvdHxpJUEn7"
        }),
        new Tip("el_club_del_pan", ["el_club_del_pan_main"], {
          gmaps: "https://goo.gl/maps/cGSpTW38n2CJAVM39"
        }),
        new Tip("sometimes_sunday_cafe", ["sometimes_sunday_main"], {
          gmaps: "https://g.page/sometimessundaycafe?share"
        }),
        new Tip("the_putamadre", ["the_puta_madre_main"], {
          gmaps: "https://goo.gl/maps/drQVgwn5EA75JSoZ6"
        })
      ],
      activities_tips: [
        new BestTip("tristan_narvaja", [
          "tristan_narvaja_main",
          "tristan_narvaja_2"
        ]),
        new Tip("karumbe", ["karumbe_main"], {
          gmaps: "https://goo.gl/maps/K9iQaZ3TjCxJdt5o6"
        }),
        new Tip("surfen", ["punta_del_diablo_surf"]),
        new Tip("horse_riding", ["horse_riding_main", "horse_riding_2"]),
        new Tip("cerro_de_montevideo", ["cerro_de_montevideo_main"]),
        // new Tip('keit', ['keit_main']),
        new Tip("museo_joaquin_torres_garcia", [
          "museo_joaquin_torres_garcia_main"
        ]),
        new Tip("museo_nacional_de_artes_visuales", [
          "museo_nacional_de_artes_visuales_main"
        ]),
        new Tip(
          "museo_artes_precolombino",
          ["museo_de_arte_precolombino_main"],
          { gmaps: "https://g.page/MAPIMuseo?share" }
        ),
        new Tip("teatro_solis", ["teatro_solis_main", "teatro_solis_2"]),
        new Tip("sinergia_design", ["sinergia_design_main"]),
        new Tip("wine_experience", ["wine_experience_main"]),
        new Tip("carnaval", ["carnaval_main"]),
        new BestTip("experience_gaucho", ["experiencia_gaucho_main"]),
        new BestTip("estadio_centenario", ["estadio_centenario_main"]),
        new BestTip("rambla_de_montevideo", ["rambla_montevideo_main"])
      ]
    },
    party_germany: {
      position: 5,
      background_image: true
    },
    rsvp: {
      position: 4,
      background_image: null
    }
  },
  ICON_LINK: `
     <span class="icon is-small is-marginless-mobile">
    <svg data-v-35b2f07d="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-external-link-alt fa-w-16"><path data-v-35b2f07d="" fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" class=""></path></svg>
    </span>`
};
