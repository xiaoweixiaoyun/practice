## Springboot API 一键生成器

写这个项目，最大的想法就是：**不做CRUD 程序猿**

Springboot 在我们平时开发项目当中，是如此的常用。然而，比如平时我们写的一些：

- XX 管理系统
- XX 管理后台
- XX XXXX

诸如此类，无非是一张表格、带有分页、非常标准的一个`增删改查` 页面。很多时候再想，这样重复的工作，能不能有一个东西替我们实现呢？把重复的代码生成，而我关注有 **业务逻辑** 的地方就行。

[![程序猿小码/bye-crud-generate](https://gitee.com/mrc1999/bye-crud-generate/widgets/widget_card.svg?colors=4183c4,ffffff,ffffff,e3e9ed,666666,9b9b9b)](https://gitee.com/mrc1999/bye-crud-generate)

**欢迎Star，你的支持是我继续的动力！**


### Get Started

```
# git clone 拉取代码到本地
git clone https://gitee.com/mrc1999/bye-crud-generate.git

# 修改配置文件信息、连接你的数据库
vi config/application.yaml
    
# 使用maven插件启动这个spring-boot 项目
mvn spring-boot:run

# 测试访问地址
(http://localhost:8888/)[http://localhost:8888/]
```

#### 选择一个将要生成表

- 访问 [http://localhost:8080/index](http://localhost:8080/index)
- 选择你的数据库表格~

![](https://file.chaobei.xyz/20201001131116.png_imagess)

#### 选择基础入参字段

- `PageAO` 分页查询所使用的字段。
- `Ins/UpdAO` 添加、修改入参的基本字段。
- 选择字段的校验规则。目前只是支持简单的非空校验。
- 可选择配置主键生成策略
- 配置字段自定义注入策略

> 请参考：
> https://mp.baomidou.com/guide/annotation.html#tableid
> https://mp.baomidou.com/guide/auto-fill-metainfo.html

![](https://file.chaobei.xyz/20210123174115.png_imagess)
#### 填写基本生成信息

- 包括自定义包路径。
- 填写`作者信息`、`API 描述`信息、`生成路径`等。

一键生成，生成目录如下，一个标准格式的 `maven` 项目。 

```
test
└── src
    └── main
        ├── java
        │   └── xyz
        │       └── chaobei
        │           ├── controller
        │           │   └── ApiUmsAdminController.java
        │           ├── mapper
        │           │   └── UmsAdminMapper.java
        │           ├── model
        │           │   └── UmsAdminModel.java
        │           ├── pojo
        │           │   ├── UmsAdminPageAO.java
        │           │   └── UmsAdminSaveAO.java
        │           └── service
        │               ├── impl
        │               │   └── UmsAdminServiceimpl.java
        │               └── UmsAdminService.java
        └── resources
            └── mapper
                └── UmsAdminMapping.xml
```


### 更新日志

#### V1.0

- 建立基本项目，一键生成 `CRUD`

- 自定义查询`PageAO` 查询入参

- 自定义修改、添加 `SaveAO` 自定义入参。参数校验

- 自定义包名、类型名称前后缀

#### V1.0.1

- 配合Swagger 生成API 文档
- 加入单个查询接口、通过参数控制是否抛出异常处理

#### V1.0.2

- 自定义主键生成类型
- 自定义配置字段注入

#### V1.0.4 (预告)

- 支持在线建表策略
- 简单查询构造器
- 多种字段校验规则 包含邮箱、手机号、强密码等多种验证规则

### 生成代码示例

首先、你肯定会有一张表，当然，我们这里采用是MySQL。假设我们有一张后台的`用户表`

> 前提是，你不能偷懒，要写字段注释。

```sql
CREATE TABLE `ums_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '后台管理用户',
  `username` varchar(64) NOT NULL COMMENT '用户名',
  `password` varchar(64) NOT NULL COMMENT '密码',
  `icon` varchar(1024) NOT NULL COMMENT '头像',
  `lock` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0锁定1正常使用',
  `email` varchar(128) NOT NULL COMMENT '电子邮箱',
  `nick_name` varchar(32) NOT NULL COMMENT '昵称',
  `note` varchar(64) NOT NULL COMMENT '备注信息',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `login_time` datetime DEFAULT NULL COMMENT '最后登录时间',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '逻辑删除标记',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
```

#### Controller

- Controller 包含基本的 `CRUD` 接口。
- `Restful` 风格接口信息，更加容易理解接口含义。
- `Swagger` 生成基本的API 文档信息，以及测试接口。
- 校验参数完整性！

```java
@Api(tags = "ApiUmsAdminController",description = "后台用户")
@RestController
@RequestMapping("/umsAdmin")
@Validated
public class ApiUmsAdminController {

    @Autowired
    private UmsAdminService umsAdminService;


    /**
     * <p>查询所有后台用户
     * <p>author: mrc
     *
     * @return xyz.chaobei.common.api.CommonResult
     * @since 2020-10-12 11:18:42
     **/
    @ApiOperation("查询所有后台用户")
    @GetMapping("/")
    public CommonResult getAll() {

        List<UmsAdminModel> allList = umsAdminService.findAll();
        return CommonResult.success(allList);
    }

    /**
     * <p>默认分页请求后台用户
     * <p>author: mrc
     *
     * @param pageAO 分页查询参数
     * @since 2020-10-12 11:18:42
     * @return xyz.chaobei.common.api.CommonResult
     **/
    @ApiOperation("默认分页请求后台用户")
    @PostMapping("/page")
    public CommonResult paging(@RequestBody @ApiParam("分页查询参数") UmsAdminPageAO pageAO) {

        Page<UmsAdminModel> allList = umsAdminService.findPage(pageAO);
        return CommonResult.success(allList);
    }

    /**
     * <p>保存一个后台用户
     * <p>author: mrc
     *
     * @param params 保存字段
     * @since 2020-10-12 11:18:42
     * @return xyz.chaobei.common.api.CommonResult
     **/
    @ApiOperation("保存一个后台用户")
    @PostMapping("/")
    public CommonResult save(@RequestBody @Valid @ApiParam("保存字段") UmsAdminSaveAO params) {

        boolean isSave = umsAdminService.save(params);
        return CommonResult.result(isSave);
    }


    /**
     * <p>修改一个后台用户
     * <p>author: mrc
     *
     * @param id 被修改的ID
     * @param params 被修改的字段
     * @since 2020-10-12 11:18:42
     * @return xyz.chaobei.common.api.CommonResult
     **/
    @ApiOperation("修改一个后台用户")
    @PutMapping("/{id}")
    public CommonResult update(@PathVariable("id") @ApiParam("被修改的ID") Integer id, @Valid @RequestBody @ApiParam("被修改的字段") UmsAdminSaveAO params) {

        boolean isUpdate = umsAdminService.updateById(params,id);
        return CommonResult.result(isUpdate);
    }

    /**
     * <p>删除一个后台用户
     * <p>author: mrc
     *
     * @param id 被删除的ID
     * @since 2020-10-12 11:18:42
     * @return xyz.chaobei.common.api.CommonResult
     **/
    @ApiOperation("删除一个后台用户")
    @DeleteMapping("/{id}")
    public CommonResult delete(@Valid @NotNull @PathVariable("id") @ApiParam("被删除的ID") Integer id) {

        boolean isDelete = umsAdminService.deleteById(id);
        return CommonResult.result(isDelete);
    }

}
```

#### SaveAO

> SaveAO 一般就是前端 `填写表单入参的信息` ，当然我们能直接使用 `DO` 进行携带参数。那样不安全。`AO` 将参数从 `Controller`
>
> 携带后，通过 `javax.validation.Valid` 对字段进行校验后、方可进行下一步。

- `SaveAO` 将参数从 `Controller` 传递到 `Service` 处理逻辑 
- `Controller` 入参的时候，检验 `SaveAO` 所包含的参数。
  - @NotBlank
  - @NotNull
  - 略...
- `@ApiModelProperty` 说明参数注释信息

```java
@Getter
@Setter
public class UmsAdminSaveAO {

        
    /**
     * 用户名
     */
    @NotBlank(message = "用户名不能为空")
    @ApiModelProperty("用户名")
    private String username;
        
    /**
     * 密码
     */
    @NotBlank(message = "密码不能为空")
    @ApiModelProperty("密码")
    private String password;
        
    /**
     * 头像
     */
    @ApiModelProperty("头像")
    private String icon;
        
    /**
     * 0锁定1正常使用
     */
    @NotNull(message = "0锁定1正常使用不能为空")
    @ApiModelProperty("0锁定1正常使用")
    private Integer lock;
        
    /**
     * 电子邮箱
     */
    @NotBlank(message = "电子邮箱不能为空")
    @ApiModelProperty("电子邮箱")
    private String email;
        
    /**
     * 昵称
     */
    @ApiModelProperty("昵称")
    private String nickName;
        
    /**
     * 备注信息
     */
    @ApiModelProperty("备注信息")
    private String note;
                
}
```

当然。这里的所有参数都是可以自定义的。你想要哪些，就生成哪些~

#### Service

- `Service` 负责将 `Controller` 传递的 `AO` 复制到 `DO(Database Object)` 。
- 调用 `Mapper` 的方法进行持久化。
- `Service` 返回一个 成功或者失败的标志。
- 逻辑异常，抛出一个异常信息【例如这个ID 找不到用户。。。】，全局捕获后，返回给前端进行提示。

```java
@Service
public class UmsAdminServiceimpl implements UmsAdminService {

    @Autowired
    private UmsAdminMapper umsAdminMapper;

    @Override
    public List<UmsAdminModel> findAll() {
        return umsAdminMapper.selectList(null);
    }

    @Override
    public Page<UmsAdminModel> findPage(UmsAdminPageAO pageAO) {

        Page page = new Page(pageAO.getCurrent(),pageAO.getSize());
        QueryWrapper wrapper = new QueryWrapper();

        wrapper.eq("`username`", pageAO.getUsername());
        wrapper.eq("`lock`", pageAO.getLock());
        wrapper.eq("`note`", pageAO.getNote());

        umsAdminMapper.selectPage(page, wrapper);

        return page;
    }

    @Override
    public boolean save(UmsAdminSaveAO params) {

        UmsAdminModel model = new UmsAdminModel();
        BeanUtils.copyProperties(params,model);
        /**
         * 你的逻辑写在这里
         */
        int num = umsAdminMapper.insert(model);

        return SqlHelper.retBool(num);
    }

    @Override
    public boolean updateById(UmsAdminSaveAO params, Integer id) {

        UmsAdminModel model = new UmsAdminModel();
        BeanUtils.copyProperties(params,model);

        /**
         * 你的逻辑写在这里
         */
        model.setId(id);
        int num = umsAdminMapper.updateById(model);

        return SqlHelper.retBool(num);
    }

    @Override
    public boolean deleteById(Integer id) {

        /**
         * 你的逻辑写在这里
         */
        int num = umsAdminMapper.deleteById(id);
        return SqlHelper.retBool(num);
    }

}
```

#### Mapper

- 继承 `Mybatis-Plus BaseMapper` 获得基础CRUD 能力。

```java
public interface UmsAdminMapper extends BaseMapper<UmsAdminModel> {
	// 继承mybatis-plus 获得基础crud
}
```

看完以上生成的代码。是否对你现在的项目有帮助呢？如果有的话~请继续看下去。

### RestController 模式

> 概括一下，我们常用的一般模式按照图解的话，其实就是这样的。`bye-crud-generate` 其实就是将这个流程的`crud` 操作进行生成出来。
>
> 让我们吧更多的时间放在逻辑上。增删改查用它来生成就好了！

![](https://file.chaobei.xyz/bye-crud-drive.png_imagess)


### 让生成的API 跑起来

> 当然，这里只是作为测试，如果你已经有一个 **Springboot项目** 那么完全可以按需要添加。

在生成代码路径下：

#### 添加maven 依赖

添加一个 `pom.xml` maven 依赖文件

[https://gitee.com/mrc1999/bye-crud-generate/blob/master/file/pom.xml](https://gitee.com/mrc1999/bye-crud-generate/blob/master/file/pom.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>xyz.chaobei</groupId>
    <artifactId>test</artifactId>
    <version>1.0-SNAPSHOT</version>
    
    <!-- springboot 2.3.1 -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.3.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <properties>
        <java.version>1.8</java.version>
        <mybatis.plus.version>3.3.2</mybatis.plus.version>
        <swagger2.version>2.9.2</swagger2.version>
    </properties>

    <dependencies>
        <!-- web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <!-- mybatis-plus -->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>${mybatis.plus.version}</version>
        </dependency>
        <!-- devtools -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <optional>true</optional>
        </dependency>
        <!-- mysql -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
        <!-- lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <scope>provided</scope>
        </dependency>
        <!-- crud-common -->
        <dependency>
            <groupId>xyz.chaobei</groupId>
            <artifactId>bye-crud-common</artifactId>
            <version>1.2</version>
        </dependency>
        <!-- swagger2 -->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>${swagger2.version}</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>${swagger2.version}</version>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

#### 添加配置文件

添加一个`application.yaml` 数据库连接配置

[https://gitee.com/mrc1999/bye-crud-generate/blob/master/file/application.yaml](https://gitee.com/mrc1999/bye-crud-generate/blob/master/file/application.yaml)

```yaml
server:
  port: 8090
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.99.100:3306/mall-pro?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai
    username: root
    password: 123456
```

#### 添加 swagger 配置

```java
@EnableSwagger2
@Configuration
public class SwaggerConfig {
    @Bean
    public Docket createApiDocket() {
        Docket docket = new Docket(DocumentationType.SWAGGER_2)
                // 自定义API 基本信息
                .apiInfo(this.defaultInfo())
                // 开启一个端点
                .select()
                // 开启API 生成路径
                .apis(RequestHandlerSelectors.basePackage("xyz.chaobei.controller"))
                // 选择生成路径
                .paths(PathSelectors.any())
                .build();
        return docket;
    }
    public ApiInfo defaultInfo() {
        return new ApiInfoBuilder()
                .title("TEST")
                .description("TEST bye-crud-generate")
                .version("1.0")
                .contact(new Contact("mrc", "https://blogs.chaobei.xyz", "maruichao52@gmail.com"))
                .build();
    }
}
```

添加一个启动 `main()` 方法

[https://gitee.com/mrc1999/bye-crud-generate/blob/master/file/DefaultApplication.java](https://gitee.com/mrc1999/bye-crud-generate/blob/master/file/DefaultApplication.java)

```java
@SpringBootApplication
@MapperScan("xyz.chaobei.mapper")
public class DefaultApplication {
    public static void main(String[] args) {
        SpringApplication.run(DefaultApplication.class,args);
    }
}
```

启动你IDEA 里面的`main()` 方法，这个Springboot 项目已经完全跑起来喽~

### 使用Swagger 测试API

Swagger: [http://localhost:8080/swagger-ui.html](http://localhost:8090/swagger-ui.html)

> 首先你需要添加一个 `swagger` 的基础配置文件。 见上面

![image-20201012114617369](https://file.chaobei.xyz/image-20201012114617369.png_imagess)

使用Swagger 的好处实在是太多了。通过 `bye-crud-generate` 生成的CRUD 已经配置了详细的文档信息。

当然，你也可以直接在`Swagger` 测试你的API。

![image-20201012115833219](https://file.chaobei.xyz/image-20201012115833219.png_imagess)

参数具有详细的信息，再也不用测试API 的时候，一边复制`字段`，一遍使用 `postman` 等API 工具编写 API `json` 参数了。

![image-20201012115803311](https://file.chaobei.xyz/image-20201012115803311.png_imagess)



### 如何自定义生成

> 最好的自定义的方式就是：修改源码啦~ 我相信你可以的，按照自己的 `代码风格` , **改就完了**

生成最灵活的方式在于：**自定义**。

- 自定义生成 `类名名称` 例如 `Entity/Model` 等符合你习惯的后缀前缀
- 自定义实体类 `包名`
- 自定义 `数据库数据类型` 与JAVA 数据类型的 `映射关系`

详细内容见：`config/application.yaml`

```yaml
bycrud:
  ## 模板对应的生成包路径
  packages:
    entity: model
    mapping: mapper
    controller: controller
    service: service
    serviceImpl: service.impl
    saveAO: pojo
    pageAO: pojo
  ## 数据库类型转换为java 类型对应
  type:
    char: String
    varchar: String
    text: String
    int: Integer
    tinyint: Integer
    date: Date
    datetime: Date
    timestamp: Date
    bigint: Long
  ##自定义前缀
  prefix:
    controller: Api
  ##自定义后缀
  suffix:
    entity: Model
    saveAO: SaveAO
    pageAO: PageAO
```

### 进度与后期安排

1. 初始化搭建项目~
2. 建立页面交互~
3. 实现接口生成逻辑~
4. 生成 `element-ui` 基础页面~ 【TODO】

