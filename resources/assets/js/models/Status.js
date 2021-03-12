/**
 *
 */
class Status {
    /**
     *
     * @param {callback} then
     * @return {object}
     */
    static all(then) {
        return axios.get('/statuses')
            .then(({data}) => then(data));
    }
}

export default Status;
