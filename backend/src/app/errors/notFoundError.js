class NotFoundError extends Error {
    constructor(errors) {
        super(errors);
        this.name = 'NotFoundError';
        this.error = errors;

    }
}

module.exports = NotFoundError;