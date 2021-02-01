/**
 *
 */
class Errors {
    /**
     *
     */
    constructor() {
        this.errors = {};
    }

    /**
     *
     * @param {string} field
     * @return {bool}
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     * @return {bool}
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     *
     * @param {string} field
     * @return {string}
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    /**
     *
     * @param {object} errors
     */
    set(errors) {
        this.errors = errors;
    }

    /**
     *
     * @param {string} field
     */
    clear(field) {
        delete this.errors[field];
    }
}

new Vue({
    el: '#app',
    data: {
        name: '',
        description: '',
        errors: new Errors(),
    },
    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(this.onSuccess)
                .catch((error) => {
                    console.log('error!!');
                    this.errors.set(error.response.data.errors);
                });
        },
        onSuccess(response) {
            console.log(response);
            alert(response.data.message);
            this.name = '';
            this.description = '';
        },
    },
});
