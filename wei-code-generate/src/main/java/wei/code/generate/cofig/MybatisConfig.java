package wei.code.generate.cofig;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

/**
 * Copyright (C), 2015-2020
 * FileName: MybatisConfig
 * Author:   MRC
 * Date:     2020/9/27 10:47
 * Description:
 * History:
 */
@Configuration
@MapperScan({"xyz.chaobei.generate.mapper"})
public class MybatisConfig {

}
