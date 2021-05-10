package wei.code.generate.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import wei.code.common.api.CommonResult;
import wei.code.generate.cofig.CustomConfig;
import wei.code.generate.entity.ColumnEntity;
import wei.code.generate.service.GenerateService;
import wei.code.generate.entity.CustomPage;

import javax.validation.Valid;
import java.util.List;

/**
 * Copyright (C), 2015-2020
 * FileName: ApiGenerateController
 * Author:   MRC
 * Date:     2020/9/27 17:39
 * Description:
 * History:
 */
@RestController
@RequestMapping("api")
@Slf4j
public class ApiGenerateController {

    @Autowired
    private GenerateService generateService;

    /**
     * @return xyz.chaobei.api.CommonResult
     * @Author MRC
     * @Description 获取当前所有的表格信息
     * @Date 17:40 2020/9/27
     * @Param []
     **/
    @GetMapping("list")
    public CommonResult tableList(@RequestParam(value = "current", defaultValue = "1") Integer current, @RequestParam(value = "size", defaultValue = "10") Integer size) {

        Page page = PageHelper.startPage(current, size);
        generateService.tableList();

        return CommonResult.success(new CustomPage(page));
    }

    /**
     * @return xyz.chaobei.api.CommonResult
     * @Author MRC
     * @Description 查找指定表的字段信息
     * @Date 13:37 2020/9/28
     * @Param [name]
     **/
    @GetMapping("detail/{name}")
    public CommonResult tableCols(@PathVariable("name") String name) {
        List<ColumnEntity> result = generateService.tableCols(name);
        return CommonResult.success(result);
    }

    /**
     * 功能描述: 生成模板接口
     *
     * @Param: [config]
     * @Return: xyz.chaobei.api.CommonResult
     * @Author: MRC
     * @Date: 2020/9/28 22:58
     */
    @PostMapping("generate")
    public CommonResult generate(@RequestBody @Valid CustomConfig config) {
        try {
            generateService.generateTemplate(config);
            return CommonResult.success(null);
        } catch (Exception e) {
            e.printStackTrace();
            log.error(e.getMessage());
            return CommonResult.failed(e.getMessage());
        }
    }

}
