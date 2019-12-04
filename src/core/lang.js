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
    }

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
            result = this.doReplacements(result, replacements);
        }
        return result;
    }

    doReplacements(transPart, replacements) {
        let result = transPart;
        for (let replacement in replacements) {
            result = result.replace(`:${replacement}`, replacements[replacement]);
        }
        return result;
    }

    getChoice(key = null, replacements = null, count = null) {
        let result = null;
        try {
            result = this.data[key];
        } catch (e) {
            return key;
        }
        if (count === null) {
            for (const element in replacements) {
                if (Number.isInteger(replacements[element])) {
                    count = replacements[element];
                    break;
                }
            }
        }
        result = result.split('|');
        for (const transPart of result) {
            if (count > 1) {
                if (transPart.startsWith('[+] ')) {
                    return this.doReplacements(transPart.replace('[+]', ''), replacements);
                }
            } else {
                if (transPart.startsWith(`[${count}] `)) {
                    return this.doReplacements(transPart.replace(`[${count}] `, ''), replacements);
                }
            }
        }
    }
}

let transMixin = {
    data: function () {
        return {
            li: new Lang,
        };
    },
    methods: {
        trans(key = null, replacements = null) {
            return this.li.get(key, replacements);
        },
        trans_choice(key, replacements, count = null) {
            return this.li.getChoice(key, replacements, count);
        },
    }
};

export { transMixin };