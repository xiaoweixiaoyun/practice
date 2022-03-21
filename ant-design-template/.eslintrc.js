module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // Prettier 配置
    "prettier/prettier": ["off"],
    //禁止使用console 本番禁止 其他异常
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    //禁止使用debugger 本番禁止 其他异常
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    //每行最大数
    "max-len": ["error", {
      code: 120
    }],
    //必须加分号
    'semi': ["error"],
    // 缩进风格2
    "indent": ["off", 2],
    // 不能有声明后未被使用的变量或参数
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used"
    }],
    // 禁止非必要的括号
    "no-extra-parens": ["error"],
    // 不能用多余的空格
    "no-multi-spaces": ["error"],
    // 生成器函数*的前后空格
    "generator-star-spacing": ["off"],
    // 禁止catch子句参数与外部作用域变量同名
    "no-catch-shadow": ["error"],
    // 禁止在条件中使用常量表达式 if(true) if(1)
    "no-constant-condition": ["error"],
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-keys": ["error"],
    // 函数参数不能重复
    "no-dupe-args": ["error"],
    // switch中的case标签不能重复
    "no-duplicate-case": ["error"],
    //如果if语句里面有return,后面不能跟else语句
    "no-else-return": ["error"],
    // 块语句中的内容不能为空
    "no-empty": ["error"],
    // 禁止对null使用==或!=运算符
    "no-eq-null": ["error"],
    // 警告使用eval
    "no-eval": ["warn"],
    // 禁止else语句内只有if语句
    "no-lonely-if": ["error"],
    // 变量初始化时不能直接给它赋值为undefined
    "no-undef-init": ["error"],
    // 不能使用undefined
    "no-undefined": ["error"],
    // 是否允许非空数组里面有多余的空格
    "array-bracket-spacing": ["error", "never"],
    // 强制驼峰法命名
    "camelcase": ["error"],
    // 必须使用 if(){} 中的{}
    "curly": ["error", "all"],
    // switch语句最后必须有default
    "default-case": ["error"],
    // 必须使用全等
    "eqeqeq": ["error"],
    // 禁止比较时使用NaN，只能用isNaN()
    "use-isnan": ["error"],

    // 允许使用require模块导入
    '@typescript-eslint/no-var-requires': 0,
    // any 类型可以使用
    "@typescript-eslint/no-explicit-any": ["off"],
    // 消除未使用的变量，函数和函数的参数
    "@typescript-eslint/no-unused-vars": "error",
    //关闭null判断
    "@typescript-eslint/no-non-null-assertion": "off",
    // 属性中不允许异步操作
    "vue/no-async-in-computed-properties": "error",
    // 字段名不允许重复
    "vue/no-dupe-keys": [
      "error",
      {
        "groups": []
      }
    ],
    // 属性不允许重复
    "vue/no-duplicate-attributes": [
      "error",
      {
        "allowCoexistClass": true,
        "allowCoexistStyle": true
      }
    ],
    // <template>检查
    "vue/no-parsing-error": [
      "error",
      {
        "abrupt-closing-of-empty-comment": true,
        "absence-of-digits-in-numeric-character-reference": true,
        "cdata-in-html-content": true,
        "character-reference-outside-unicode-range": true,
        "control-character-in-input-stream": true,
        "control-character-reference": true,
        "eof-before-tag-name": true,
        "eof-in-cdata": true,
        "eof-in-comment": true,
        "eof-in-tag": true,
        "incorrectly-closed-comment": true,
        "incorrectly-opened-comment": true,
        "invalid-first-character-of-tag-name": true,
        "missing-attribute-value": true,
        "missing-end-tag-name": true,
        "missing-whitespace-between-attributes": true,
        "nested-comment": true,
        "noncharacter-character-reference": true,
        "noncharacter-in-input-stream": true,
        "null-character-reference": true,
        "surrogate-character-reference": true,
        "surrogate-in-input-stream": true,
        "unexpected-character-in-attribute-name": true,
        "unexpected-character-in-unquoted-attribute-value": true,
        "unexpected-equals-sign-before-attribute-name": true,
        "unexpected-null-character": true,
        "unexpected-question-mark-instead-of-tag-name": true,
        "unexpected-solidus-in-tag": true,
        "unknown-named-character-reference": true,
        "end-tag-with-attributes": true,
        "duplicate-attribute": true,
        "end-tag-with-trailing-solidus": true,
        "non-void-html-element-start-tag-with-trailing-solidus": false,
        "x-invalid-end-tag": true,
        "x-invalid-namespace": true
      }
    ],
    // 使用的key不允许重写覆盖
    "vue/no-reserved-keys": [
      "error",
      {
        "reserved": [],
        "groups": []
      }
    ],
    // 将组件的数据属性转换为函数
    "vue/no-shared-component-data": "error",
    // 属性不允许有副作用
    "vue/no-side-effects-in-computed-properties": "error",
    // 不允许<template>のkey属性
    "vue/no-template-key": "error",
    // <textarea>里不允许使用 `{{ }}` 
    "vue/no-textarea-mustache": "error",
    // 禁止注册模板中未使用的组件
    "vue/no-unused-components": [
      "error",
      {
        "ignoreWhenBindingPresent": true
      }
    ],
    // 不允许未使用v-for目录或作用域属性的变量定义
    "vue/no-unused-vars": ["off"],
    // 和v-for相同的要素不允许使用v-if
    "vue/no-use-v-if-with-v-for": [
      "error",
      {
        "allowUsingIterationVar": false
      }
    ],
    // <component>必须有 `v-bind：is` 
    "vue/require-component-is": ["error"],
    // prop型必须构造器化
    "vue/require-prop-type-constructor": ["error"],
    // 渲染函数必须有返回值
    "vue/require-render-return": ["error"],
    // v-for必须有 `v-bind：key`
    "vue/require-v-for-key": ["error"],
    // 有效化变量的默认值
    "vue/require-valid-default-prop": ["off"],
    // 强制属性上存在返回语句
    "vue/return-in-computed-property": [
      "error",
      {
        "treatUndefinedAsUnspecified": true
      }
    ],
    // 不允许使用v-on、强制使用@ 
    "vue/use-v-on-exact": ["error"],
    // 使用有效的模板路径
    "vue/valid-template-root": ["error"],
    // 使用有效的v-bind
    "vue/valid-v-bind": ["error"],
    // 使用有效的v-cloak
    "vue/valid-v-cloak": ["error"],
    // 使用有效的v-else-if
    "vue/valid-v-else-if": ["error"],
    // 使用有效的v-else
    "vue/valid-v-else": ["error"],
    // 使用有效的v-for
    "vue/valid-v-for": ["error"],
    // 使用有效的v-html
    "vue/valid-v-html": ["error"],
    // 使用有效的v-if
    "vue/valid-v-if": ["error"],
    // 使用有效的v-model
    "vue/valid-v-model": ["error"],
    // 使用有效的v-on
    "vue/valid-v-on": [
      "error",
      {
        "modifiers": []
      }
    ],
    // 使用有效的v-once
    "vue/valid-v-once": ["error"],
    // 使用有效的v-pre
    "vue/valid-v-pre": ["error"],
    // 使用有效的v-show
    "vue/valid-v-show": ["error"],
    // 使用有效的v-slot
    "vue/valid-v-slot": ["error"],
    // 使用有效的v-text
    "vue/valid-v-text": ["error"],
    // 对模板自定义组件应用属性命名样式
    "vue/attribute-hyphenation": [
      "error",
      "always",
      {
        "ignore": []
      }
    ],
    // 区分组件定义名称的特定大写字母
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    // 在标签的封闭括号之前请求并且禁止换行
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "singleline": "never",
        "multiline": "always"
      }
    ],
    // 在标签的封闭括号之前需要或不允许空格
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        "startTag": "never",
        "endTag": "never",
        "selfClosingTag": "always"
      }
    ],
    // 应用结束标记样式
    "vue/html-end-tags": ["error"],
    // <template>应用一致缩进
    "vue/html-indent": [
      "error",
      2,
      {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }
    ],
    // 应用HTML属性的引用样式
    "vue/html-quotes": ["error", "double", {
      "avoidEscape": false
    }],
    // 強制使用<aaa />格式
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],
    // 强制每行属性的最大数量
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": 10,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    // 在多行元素内容之前和之后强制换行
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        "ignoreWhenEmpty": true,
        "ignores": ["VueComponent", "pre", "textarea"],
        "allowEmptyLines": false
      }
    ],
    // 在{{}} 之间使用统一间隔
    "vue/mustache-interpolation-spacing": ["error", "always"],
    // 不允许使用多个空格
    "vue/no-multi-spaces": [
      "error",
      {
        "ignoreProperties": false
      }
    ],
    // 属性等号周围不允许空格
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    // 禁止外部作用域中声明变量
    "vue/no-template-shadow": ["error"],
    // Vue组件的Prop名使用特定的规则
    "vue/prop-name-casing": ["error", "camelCase"],
    // prop値必须默认
    "vue/require-default-prop": ["error"],
    // prop类型必须定义
    "vue/require-prop-types": ["error"],
    // 单行元素内容前后必须换行
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        "ignoreWhenNoAttributes": true,
        "ignoreWhenEmpty": true,
        "ignores": ["pre", "textarea"]
      }
    ],
    // v-bind 使用统一风格更
    "vue/v-bind-style": ["error", "shorthand"],
    // v-on 使用统一风格更
    "vue/v-on-style": ["error", "shorthand"],
    // v-slot 使用统一风格更
    // "vue/v-slot-style": [
    //   "error",
    //   {
    //     "atComponent": "v-slot",
    //     "default": "shorthand",
    //     "named": "shorthand"
    //   }
    // ],
    // 顺序统一
    "vue/attributes-order": [
      "error",
      {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        "alphabetical": false
      }
    ],
    //强制组件的第一位元素顺序
    "vue/component-tags-order": [
      "error",
      {
        "order": ["template", "script", "style"]
      }
    ],
    // 为了防止XSS攻击不允许使用v-html
    "vue/no-v-html": ["error"],
    // 强制组件的排列顺序
    "vue/order-in-components": [
      "error",
      {
        "order": [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "fetch",
          "asyncData",
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          "head",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    // 模板中不允许使用this. 
    "vue/this-in-template": ["error", "never"],
    // 排列属性间隔固定
    "vue/array-bracket-spacing": ["error", "never"],
    // 强制函数箭头前后的间距
    "vue/arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    // 在打开或关闭块之前，禁止或强制块内的空格
    "vue/block-spacing": ["error", "always"],
    // 应用与会一致的样式
    "vue/brace-style": ["off"],
    // 应用驼峰命名
    "vue/camelcase": ["off"],
    // 禁止末尾的逗号
    "vue/comma-dangle": ["error", "never"],
    // 模板中组件名称的格式固定
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        "registeredComponentsOnly": true,
        "ignores": []
      }
    ],
    // 脚本中的缩进设置
    "vue/script-indent": [
      "error",
      2,
      {
        "baseIndent": 0,
        "switchCase": 0,
        "ignores": []
      }
    ]
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  }
};