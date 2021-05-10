package wei.code.common.validation;

import wei.code.common.validation.enums.PassLevel;
import wei.code.common.validation.interfaces.PasswordValue;

import java.util.Objects;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordValidation implements ConstraintValidator<PasswordValue, String> {
    private final String normal = "^[a-zA-Z]\\w{5,15}$";
    private final String strong = "^^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$";
    private final String feeble = "^[a-zA-Z0-9]\\w{5,15}$";
    private PasswordValue passwordValue;

    public PasswordValidation() {
    }

    @Override
    public void initialize(PasswordValue constraintAnnotation) {
        this.passwordValue = constraintAnnotation;
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (Objects.isNull(value)) {
            return false;
        } else if (this.passwordValue.level().equals(PassLevel.NORMAL)) {
            return value.matches("^[a-zA-Z]\\w{5,15}$");
        } else {
            return this.passwordValue.level().equals(PassLevel.STRONG) ? value.matches("^^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$") : value.matches("^[a-zA-Z0-9]\\w{5,15}$");
        }
    }
}
