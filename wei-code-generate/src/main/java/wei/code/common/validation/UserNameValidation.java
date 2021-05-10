package wei.code.common.validation;

import wei.code.common.validation.interfaces.UserNameValue;

import java.util.Objects;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UserNameValidation implements ConstraintValidator<UserNameValue, String> {
    private final String regx = "^[a-zA-Z][a-zA-Z0-9_]{4,15}$";

    public UserNameValidation() {
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return Objects.isNull(value) ? false : value.matches("^[a-zA-Z][a-zA-Z0-9_]{4,15}$");
    }
}
