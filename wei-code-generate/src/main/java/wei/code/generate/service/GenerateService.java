package wei.code.generate.service;

import com.alibaba.fastjson.JSON;
import com.google.common.base.CaseFormat;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.time.DateFormatUtils;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wei.code.generate.cofig.CustomConfig;
import wei.code.generate.cofig.GenerateConfig;
import wei.code.generate.entity.ColumnEntity;
import wei.code.generate.entity.GenerateEntity;
import wei.code.generate.entity.TableEntity;
import wei.code.generate.mapper.GenerateMapper;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.*;
import java.util.regex.Matcher;

/**
 * Copyright (C), 2015-2020
 * FileName: GenerateService
 * Author:   MRC
 * Date:     2020/9/17 9:44
 * Description: 生成所需服务
 * History:
 */
@Service
@Slf4j
public class GenerateService {

    @Autowired
    private GenerateConfig config;

    @Autowired
    private GenerateMapper mapper;

    /**
     * @return void
     * @Author MRC
     * @Description 按照模板生成文件、丢到指定的目录下、或者打包下载
     * @Date 9:51 2020/9/17
     * @Params name 表格名称
     **/
    public void generateTemplate(@NonNull CustomConfig customConfig) throws Exception {

        log.info("reload config={}", JSON.toJSONString(config));
        /**
         * 查询表基本信息
         */
        GenerateEntity table = mapper.selectTable(customConfig.getTable());
        log.info("select table entity={}", JSON.toJSONString(table));

        if (null == table) {
            throw new Exception("未查询到相关信息");
        }
        /** 使用自定义字段信息 */
        table.setColumns(customConfig.getColumns());

        /** 设置对象类名，转换驼峰命名 OrgUser*/
        String className = CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.UPPER_CAMEL, table.getName());
        table.setClassName(className);

        /** 请求对象类型 比如 orgUser*/
        String requestName = CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, table.getName());
        table.setRequestName(requestName);

        Map<String, String> typeConfig = config.getType();

        /** 将列对象遍历，对应相应的Java类型*/
        for (ColumnEntity temp : table.getColumns()) {
            //java类型转换
            String javaType = typeConfig.get(temp.getDataType());

            temp.setJavaType(javaType == null ? "Object" : javaType);

            //下划线转驼峰
            String columnName = CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, temp.getColumn());
            temp.setColumnName(columnName);
            //下换线转换大驼峰
            String columnSetName = CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.UPPER_CAMEL,temp.getColumn());
            temp.setColumnSetName(columnSetName);

            /**
             * 获得主键信息
             * 主键字段、主键类型、
             */
            if ("PRI".equals(temp.getColumnKey())) {
                table.setPrimary(temp.getColumn());
                table.setPrimaryName(temp.getColumnName());
                table.setPrimaryType(temp.getJavaType());
                table.setPrimaryNameT(CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.UPPER_CAMEL, temp.getColumn()));
            }
        }
        /** 将对象包装后进行输出*/
        Properties prop = new Properties();
        prop.put("file.resource.loader.class", "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");
        Velocity.init(prop);

        //开始向模板文件输入内容
        Map<String, Object> map = new HashMap<>();
        map.put("config", customConfig);
        map.put("data", table);
        map.put("Date", DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss"));

        /**
         * 将所有文件的包路径、放置到map
         * 按照key名称进行
         */
        Map<String, String> pack = config.getPackages();
        Map<String, String> prefix = config.getPrefix();
        Map<String, String> suffix = config.getSuffix();
        Map<String, String> filePath = new HashMap<>();

        config.getSource().forEach((key, resource) -> {
            /**
             * 拼接路径 例如 org.spring.entity
             */
            StringBuffer sb = new StringBuffer();
            sb.append(customConfig.getPackages());
            sb.append(".");
            /**
             * 自定义包名称
             */
            if (pack.containsKey(key)) {
                sb.append(pack.get(key));
            } else {
                sb.append(key);
            }

            /**
             * 包路径
             */
            String packagePath = sb.toString();
            map.put(key + "Package", packagePath);

            sb.append(".");
            /**
             * 若配置了指定前缀、则按照指定配置
             */
            StringBuffer fileName = new StringBuffer();

            if (prefix.containsKey(key)) {
                fileName.append(prefix.get(key));
            }
            fileName.append(className);
            if (suffix.containsKey(key)) {
                fileName.append(suffix.get(key));
            }
            map.put(key, fileName.toString());
            sb.append(fileName);

            fileName.append(".");
            fileName.append(resource.split("\\.")[1]);

            log.info("success build class package fileName:{}", fileName.toString());
            log.info("success build class package package={}", sb.toString());
            /**
             * 引用包路径
             */
            String packageFilePath = sb.toString();
            map.put(key + "Import", packageFilePath);

            /**
             * 生成文件路径
             */
            StringBuffer filePathBuffer = new StringBuffer();
            filePathBuffer.append(customConfig.getFilePath());
            //文件分隔符
            String split = Matcher.quoteReplacement(File.separator);

            filePathBuffer.append(split);
            if (resource.contains(".java")) {
                filePathBuffer.append(config.getMainPackage().replaceAll("\\.", split));
            } else {
                filePathBuffer.append(config.getResourcePackage().replaceAll("\\.", split));
            }
            filePathBuffer.append(split);

            /**
             * 构建文件夹路径
             */
            if (resource.contains(".java")) {
                filePathBuffer.append(packagePath.replaceAll("\\.", split));
            } else {
                filePathBuffer.append(pack.containsKey(key) ? pack.get(key).replaceAll("\\.", split) : key);
            }
            File folder = new File(filePathBuffer.toString());

            if (!folder.exists()) {
                folder.mkdirs();
            }

            log.info("success create folder filePath={}", folder.getPath());

            filePathBuffer.append(split);
            filePathBuffer.append(fileName);

            File file = new File(filePathBuffer.toString());
            if (!file.exists()) {
                try {
                    file.createNewFile();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            log.info("success create file filePath={}", file.getPath());
            filePath.put(key, file.getPath());
        });
        /**
         * 开始生成文件
         */
        for (String key : config.getSource().keySet()) {

            Writer writer = new FileWriter(filePath.get(key));

            Template tpl = Velocity.getTemplate(config.getSource().get(key), "UTF-8");
            VelocityContext context = new VelocityContext(map);
            tpl.merge(context, writer);

            writer.close();
        }
    }
    public List<TableEntity> tableList() {
        return mapper.tableList();
    }

    public List<ColumnEntity> tableCols(String name) {
        return mapper.selectColumns(name);
    }
}
