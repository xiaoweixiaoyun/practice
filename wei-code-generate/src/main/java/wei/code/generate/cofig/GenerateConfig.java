package wei.code.generate.cofig;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * Copyright (C), 2015-2020
 * FileName: GenerateConfig
 * Author:   MRC
 * Date:     2020/9/16 14:38
 * Description: 配置中心。配置自动生成代码类的基础配置信息
 * History:
 */
@ConfigurationProperties(prefix = "bycrud")
@Component
@Data
public class GenerateConfig {
    /**
     * 作者信息
     */
    private String author;
    /**
     * main 类型包路径
     */
    private String mainPackage = "src.main.java";
    /**
     * resource 包路径
     */
    private String resourcePackage = "src.main.resources";
    /**
     * 模板路径
     */
    private Map<String, String> source = new HashMap<>();
    /**
     * 自定义包名
     */
    private Map<String, String> packages = new HashMap<>();
    /**
     * 数据库字段映射JAVA type
     */
    private Map<String, String> type = new HashMap<>();
    /**
     * 类名称前缀 例如ApiOrgUserController
     */
    private Map<String, String> prefix = new HashMap<>();
    /**
     * 类名称后缀 OrgUserMapper
     */
    private Map<String, String> suffix = new HashMap<>();
}
