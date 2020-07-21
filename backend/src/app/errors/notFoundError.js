class NotFoundError extends Error {
    constructor(errors) {
        super(errors);
        this.name = 'NotFoundError';
        this.params = errors;

    }
}

module.exports = NotFoundError;