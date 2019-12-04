export default class Position {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    get position() {
        return { lat: this.latitude, lng: this.longitude };
    }
}