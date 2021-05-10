package wei.code.generate.entity;

import com.github.pagehelper.Page;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Copyright (C), 2015-2020
 * FileName: CustomPage
 * Author:   MRC
 * Date:     2020/9/28 12:58
 * Description: 自定义分页对象、转换page 与自定义
 * History:
 */
@Getter
@Setter
public class CustomPage<T> {

    private int size;

    private int current;

    private List<T> data;

    private long total;

    public CustomPage(Page<T> page) {
        this.current = page.getPageNum();
        this.size = page.getPageSize();
        this.data = page.getResult();
        this.total = page.getTotal();
    }

}
