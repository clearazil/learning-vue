import Vue from 'vue';

Vue.component('coupon', {
    props: ['code'],
    template: `
        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `,
    data() {
        return {
            invalids: [
                'ALLFREE',
                'FREELARACASTS',
            ],
        };
    },
    methods: {
        updateCode(code) {
            if (this.invalids.includes(code)) {
                alert('This coupon is no longer valid. Sorry!');

                this.$refs.input.value = code = '';
            }

            this.$emit('input', code);
        },
    },
});

new Vue({
    el: '#root',
    data: {
        coupon: 'FREEBIE',
    },
});
