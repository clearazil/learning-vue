/**
 *
 */
class Form {
    /**
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (const field in data) {
            if (this[field] !== undefined) {
                this[field] = data[field];
            }
        }

        this.errors = new Errors();
        this.isValidated = false;
    }

    /**
     * @return {object}
     */
    data() {
        const data = Object.assign({}, this);

        delete data.originalData;
        delete data.errors;

        return data;
    }

    /**
     *
     */
    reset() {
        for (const field in this.originalData) {
            if (this[field] !== undefined) {
                this[field] = '';
            }
        }

        this.setIsValidated(false);
    }

    /**
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this));
    }

    /**
     *
     * @param {string} response
     */
    onSuccess(response) {
        alert(response.data.message);

        this.errors.clear();
        this.reset();
    }

    /**
     *
     * @param {string} error
     */
    onFail(error) {
        console.log(error);
        this.errors.set(error.response.data.errors);
        this.setIsValidated(true);
    }

    /**
     *
     * @param {bool} bool
     */
    setIsValidated(bool) {
        this.isValidated = bool;
    }

    /**
     * @return {bool}
     */
    isValidated() {
        return this.isValidated;
    }
}
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
        if (field) {
            delete this.errors[field];
            return;
        }

        this.errors = {};
    }
}

new Vue({
    el: '#app',
    data: {
        form: new Form({
            name: '',
            description: '',
        }),
    },
    methods: {
        onSubmit() {
            this.form.submit('post', '/projects');
        },
    },
});
