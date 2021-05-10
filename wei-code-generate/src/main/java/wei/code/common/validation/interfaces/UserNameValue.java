package wei.code.common.validation.interfaces;

import wei.code.common.validation.UserNameValidation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ElementType.FIELD})
@Documented
@Constraint(
    validatedBy = {UserNameValidation.class}
)
@Retention(RetentionPolicy.RUNTIME)
public @interface UserNameValue {
    String message() default "用户名以字母开头组合数字，不少于5位";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
