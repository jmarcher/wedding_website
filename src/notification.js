String.prototype.hashCode = function () {
    let hash = 0;
    if (this.length == 0) return hash;
    let c;
    for (let i = 0; i < this.length; i++) {
        c = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + c;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

import ls from 'local-storage';
export default class {
    constructor() {
        this.notificationKey = 'jur_last_notification';
        // this.notification = {
        //     de: {
        //         title: 'Neue lala',
        //         body: 'This is tralala'
        //     },
        //     es: {
        //         title: 'This is troloolo',
        //         body: 'Tcosoto dno rpe orno'
        //     }
        // };
        this.notification = null;
    }

    get hash() {
        return JSON.stringify(this.notification).hashCode();
    }

    getMessage(locale = 'de') {
        return this.notification[locale];
    }

    wasAlreadyNotified() {
        if(this.notification === null) return true;
        if (ls.get(this.notificationKey) !== this.hash) {
            return false;
        }

        return true;
    }

    setNotified() {
        ls.set(this.notificationKey, this.hash);
    }

    getNotification(locale) {
        this.setNotified();

        return this.notification[locale];
    }
}