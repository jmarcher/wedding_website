import Constants from './constants';
import LangEs from '../lang/es';
import LangDe from '../lang/de';

export default class Lang {
    constructor() {
        this.lang = Constants.DEFAULT_LOCALE;
        this.data = LangEs;
        if (this.lang !== 'es') {
            this.data = LangDe;
        }
    };

    get(key = null, replacements = null) {
        if (key === null) {
            return this.data;
        }
        let result = null;
        try {
            result = this.data[key];
        } catch (e) {
            return key;
        }
        if (!result) {
            return key;
        }
        if (replacements !== null) {
            for (let replacement in replacements) {
                result = result.replace(`:${replacement}`, replacements[replacement]);
            }
        }
        return result;
    }
};
let trans = (key = null, replacements = null) => {
    return (new Lang).get(key,replacements);
};
export {trans};