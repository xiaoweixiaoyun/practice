package wei.code.common;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import java.lang.reflect.Field;

public class WrapperBuilder {
    public WrapperBuilder() {
    }

    public static <T> QueryWrapper<T> simpleQuery(T t) {
        QueryWrapper<T> wrapper = new QueryWrapper();
        Field[] fields = t.getClass().getDeclaredFields();

        try {
            Field[] var3 = fields;
            int var4 = fields.length;

            for(int var5 = 0; var5 < var4; ++var5) {
                Field item = var3[var5];
                if (!item.isAccessible()) {
                    item.setAccessible(true);
                }

                TableField tableField = (TableField)item.getAnnotation(TableField.class);
                Object value = item.get(t);
                String column = tableField.value();
                wrapper.eq(column, value);
                if (item.isAccessible()) {
                    item.setAccessible(false);
                }
            }
        } catch (Exception var10) {
            var10.printStackTrace();
        }

        return wrapper;
    }
}
