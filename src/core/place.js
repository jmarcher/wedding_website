export default class Place {
    constructor(key, images, links, country = 'uruguay') {
        this.data = {
            key,
            links,
            images: images.map(image => {
                return `/assets/images/sections/${country}/${image}.jpg`;
            }),
        }
    }

    get key() {
        return this.data.key;
    }

    get links() {
        return this.data.links;
    }

    get images() {
        return this.data.images;
    }
}