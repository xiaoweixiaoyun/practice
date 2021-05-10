//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package wei.code.common.validation.interfaces;

import wei.code.common.validation.IdCardValidation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ElementType.FIELD})
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Constraint(
    validatedBy = {IdCardValidation.class}
)
public @interface IdCardValue {
    String message() default "身份证号格式有误";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
