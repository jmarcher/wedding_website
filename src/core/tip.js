const replacements = {
    " ": "_",
    "í": 'i',
    'á': 'a',
    "é": "e",
    'ó': 'o',
    "ú": 'u',
    'ñ': 'n',
};
let sluggifyString = (string) => {
    for (const toBeReplaced in replacements) {
        if (replacements.hasOwnProperty(toBeReplaced)) {
            const replacement = replacements[toBeReplaced];
            string = string.replace(new RegExp(toBeReplaced, 'g'), replacement);
        }
    }
    return string.toLowerCase();
}
export {sluggifyString};
export default class Tip {
    constructor(key, images = [], links = {}, city = 'montevideo', country = 'uruguay') {
        this.data = {
            key,
            links,
            city,
            images: images && images.length > 0 ? images.map(image => {
                return `/assets/images/sections/${country}/${image}.jpg`;
            }) : ['/assets/images/placeholder.jpg'],
        }
    }

    get key() {
        return sluggifyString(this.data.key);
    }

    get links() {
        return this.data.links;
    }

    get images() {
        return this.data.images;
    }

    get exists() {
        return true;
    }
    
    get city() {
        return this.data.city;
    }
}

