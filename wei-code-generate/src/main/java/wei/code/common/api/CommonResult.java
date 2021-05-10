package wei.code.common.api;

public class CommonResult<T> {
    private long code;
    private String message;
    private T data;

    private CommonResult() {
    }

    protected CommonResult(long code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static <T> CommonResult<T> success(T data) {
        return new CommonResult(ResultCode.SUCCESS.getCode(), ResultCode.SUCCESS.getMessage(), data);
    }

    public static <T> CommonResult<T> success(T data, String message) {
        return new CommonResult(ResultCode.SUCCESS.getCode(), message, data);
    }

    public static CommonResult result(boolean result) {
        return result ? success(true) : failed();
    }

    public static <T> CommonResult<T> failed(IErrorCode errorCode) {
        return new CommonResult(errorCode.getCode(), errorCode.getMessage(), (Object)null);
    }

    public static <T> CommonResult<T> failed(String message) {
        return new CommonResult(ResultCode.FAILED.getCode(), message, (Object)null);
    }

    public static <T> CommonResult<T> failed() {
        return failed((IErrorCode)ResultCode.FAILED);
    }

    public static <T> CommonResult<T> validateFailed() {
        return failed((IErrorCode)ResultCode.FIELD_ERROR);
    }

    public static <T> CommonResult<T> validateFailed(T data) {
        return new CommonResult(ResultCode.FIELD_ERROR.getCode(), ResultCode.FIELD_ERROR.getMessage(), data);
    }

    public static <T> CommonResult<T> unauthorized(T data) {
        return new CommonResult(ResultCode.UN_AUTHORIZED.getCode(), ResultCode.UN_AUTHORIZED.getMessage(), data);
    }

    public static <T> CommonResult<T> forbidden(T data) {
        return new CommonResult(ResultCode.UN_PERMISSION.getCode(), ResultCode.UN_PERMISSION.getMessage(), data);
    }

    public long getCode() {
        return this.code;
    }

    public void setCode(long code) {
        this.code = code;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return this.data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
