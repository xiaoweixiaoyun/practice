package wei.code.generate.entity;

import lombok.Getter;
import lombok.Setter;

/**
 * Copyright (C), 2015-2020
 * FileName: TableEntity
 * Author:   MRC
 * Date:     2020/9/28 13:32
 * Description:
 * History:
 */
@Getter
@Setter
public class TableEntity {
    /**
     * 表名称 org_user
     */
    private String name;
    /**
     * 表引擎
     */
    private String engine;
    /**
     * 表创建时间
     */
    private String createTime;
}
