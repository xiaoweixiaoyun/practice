package wei.code.generate.entity;

import lombok.Data;

/**
 * Copyright (C), 2015-2019
 * FileName: ColumnEntity
 * Author:   MRC
 * Date:     2019/11/5 11:54
 * Description:
 * History:
 */
@Data
public class ColumnEntity {

    //是否是主键标识 主键 columnKey == "PRI" true
    private String columnKey;

    //列名称 驼峰命名 createId
    private String columnName;

    //列名称，大驼峰 CreateId
    private String columnSetName;

    //原名称 create_id
    private String column;

    //类型
    private String dataType;

    //类型的JAVA类型标识
    private String javaType;

    //备注
    private String columnComment;

    //是否为空，yes可以为空
    private String isNullable;

    //当前字段是否insertAO 生成字段
    private boolean insert;

    //当前字段是否pageAO 生成字段
    private boolean query;

    //insert/update 校验规则 一般是注解方式
    private String insertType;

    // 自动填充功能
    private boolean fill;

    // 自动填充功能字段信息
    private String fillType;

    // 主键ID类型
    private String primaryType;
}