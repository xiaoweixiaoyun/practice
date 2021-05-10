package wei.code.common.exception;

import wei.code.common.api.IErrorCode;

public class ApiException extends RuntimeException {
    private IErrorCode errorCode;

    public ApiException(IErrorCode iErrorCode) {
        super(iErrorCode.getMessage());
        this.errorCode = iErrorCode;
    }

    public ApiException(String message) {
        super(message);
    }

    public IErrorCode getErrorCode() {
        return this.errorCode;
    }
}
