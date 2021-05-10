package wei.code.generate.cofig;

import lombok.Data;
import wei.code.generate.entity.ColumnEntity;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Copyright (C), 2015-2020
 * FileName: CustomConfig
 * Author:   MRC
 * Date:     2020/9/17 11:30
 * Description: 自定义配置信息。包含需要生成的表名称、生成类型等
 * History:
 */
@Data
public class CustomConfig {
    /**
     * 表名称
     */
    @NotBlank
    private String table;
    /**
     * 作者信息
     */
    @NotBlank
    private String author;
    /**
     * 描述信息
     */
    @NotBlank
    private String desc;
    /**
     * 包路径 例如 org.spring
     */
    @NotBlank
    private String packages;
    /**
     * 生成路径、例如：E:/test/
     */
    @NotBlank
    private String filePath;
    /**
     * 字段信息
     */
    @NotNull
    private List<ColumnEntity> columns;
}
