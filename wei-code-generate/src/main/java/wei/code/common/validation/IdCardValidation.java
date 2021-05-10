package wei.code.common.validation;

import java.util.Objects;
import java.util.regex.Pattern;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import wei.code.common.validation.interfaces.IdCardValue;

public class IdCardValidation implements ConstraintValidator<IdCardValue, String> {
    private final String regx = "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)";

    public IdCardValidation() {
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return Objects.isNull(value) ? false : Pattern.matches("(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)", value);
    }
}
