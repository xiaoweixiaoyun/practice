package wei.code.generate.entity;

import lombok.Data;

import java.util.List;

/**
 * Copyright (C), 2015-2019
 * FileName: TableColumn
 * Author:   MRC
 * Date:     2019/11/5 11:24
 * Description: 表对象
 * History:
 */
@Data
public class GenerateEntity {
    /**
     * 表名称 org_user
     */
    private String name;
    /**
     * 表名称驼峰命名 OrgUser
     */
    private String className;
    /**
     * 请求命名 小驼峰 orgUser
     */
    private String requestName;
    /**
     * 表引擎
     */
    private String engine;
    /**
     * 表创建时间
     */
    private String createTime;
    /**
     * 主键数据库字段
     */
    private String primary;
    /**
     * 主键类型 Integer
     */
    private String primaryType;
    /**
     * 主键名称 id
     */
    private String primaryName;
    /**
     * 大驼峰命名ID
     */
    private String primaryNameT;
    /**
     * 字段集合
     */
    private List<ColumnEntity> columns;
}