package wei.code.common.api;

public enum ResultCode implements IErrorCode {
    /**
     * 
     * @author 10116842
     * @date 2021/5/10 10:32
 * @param null
 * @return null
     */
    SUCCESS(200L, "操作成功"),
    FIELD_ERROR(401L, "请求参数有误"),
    DATA_NOT_FOUND(404L, "未查询到相关信息"),
    UN_AUTHORIZED(401L, "登录信息过期"),
    UN_PERMISSION(403L, "没有操作权限"),
    METHOD_NOT_ALLOWED(405L, "请求类型异常"),
    FAILED(500L, "操作失败");

    private final long code;
    private final String message;

    private ResultCode(long code, String message) {
        this.code = code;
        this.message = message;
    }

    @Override
    public long getCode() {
        return this.code;
    }

    @Override
    public String getMessage() {
        return this.message;
    }
}
