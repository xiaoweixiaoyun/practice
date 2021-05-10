package wei.code.generate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Copyright (C), 2015-2020
 * FileName: GenerateController
 * Author:   MRC
 * Date:     2020/9/27 10:27
 * Description:
 * History:
 */
@RequestMapping("/")
@Controller
public class GenerateController {

    @GetMapping(value = {"/index","/"})
    public String toList() {
        return "index";
    }

    @GetMapping("/detail")
    public String toDesc(String name, Map<String, Object> map) {
        map.put("name",name);
        return "detail";
    }

}
