export default class Tip {
    constructor(key, images, links, country = 'uruguay') {
        this.data = {
            key,
            links,
            images: images && images.length > 0 ? images.map(image => {
                return `/assets/images/sections/${country}/${image}.jpg`;
            }) : [],
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

    get exists(){
        return true;
    }
}