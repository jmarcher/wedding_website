import Vue from 'vue';
const events = new Vue();
let trigger = (name, data = null) => {
    events.$emit(name, data);
};

let listen = (name, callback) => {
    events.$on(name, callback);
};

let triggerMixin = {
    methods: { trigger }
};

let listenMixin = {
    methods: { listen }
};

export default {
    methods: {
        trigger,
        listen
    }
};

export { triggerMixin };
export { listenMixin };
