export class MFrontException extends Error {
    errorDetails?: any

    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'MFrontException';
    }

    public setErrorDetails(details: any): MFrontException {
        this.errorDetails = details
        return this;
    }

}