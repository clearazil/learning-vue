import Errors from './Errors';

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
        const data = {};

        for (const property in this.originalData) {
            if (this[property] !== undefined) {
                data[property] = this[property];
            }
        }

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

        this.errors.clear();
        this.setIsValidated(false);
    }

    /**
     * @param {string} requestType
     * @param {string} url
     * @return {Promise}
     */
    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then((response) => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch((error) => {
                    this.onFail(error.response.data.errors);

                    reject(error.response.data.errors);
                });
        });
    }

    /**
     *
     * @param {object} data
     */
    onSuccess(data) {
        alert(data.message);

        this.reset();
    }

    /**
     *
     * @param {string} errors
     */
    onFail(errors) {
        console.log(errors);
        this.errors.set(errors);
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

export default Form;
