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

export default Errors;
