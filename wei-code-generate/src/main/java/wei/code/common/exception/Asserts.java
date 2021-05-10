package wei.code.common.exception;

import wei.code.common.api.IErrorCode;

public class Asserts {
    public Asserts() {
    }

    public static void fail(String message) {
        throw new ApiException(message);
    }

    public static void fail(IErrorCode iErrorCode) {
        throw new ApiException(iErrorCode);
    }
}
