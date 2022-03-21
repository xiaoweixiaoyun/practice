module.exports = {
  rules: {
    // // 指定一个禁止使用的 at 规则的黑名单。
    // 'at-rule-blacklist': '' | [],
    // 要求或禁止在 at 规则之前有空行。
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    // 指定 at 规则名称的大小写。
    'at-rule-name-case': 'lower',
    // // 要求在 at 规则之后有一个换行符。
    // 'at-rule-name-newline-after': 'always' | 'always-multi-line',
    // 要求在 at 规则之后有一个空格。
    'at-rule-name-space-after': 'always-single-line',
    // 禁止使用未知的 at 规则。
    'at-rule-no-unknown': true,
    // // 禁止 at 规则使用浏览器引擎前缀。
    // 'at-rule-no-vendor-prefix': true,
    // 要求在 at 规则的分号之后有一个换行符。
    'at-rule-semicolon-newline-after': 'always',
    // // 指定一个允许使用的 at 规则的白名单。
    // 'at-rule-whitelist': '' | [],

    // // 块
    // 要求或禁止在闭括号之前有空行。
    'block-closing-brace-empty-line-before': 'never',
    // 在闭括号之后要求有一个换行符或禁止有空白。
    'block-closing-brace-newline-after': 'always',
    // 在闭括号之前要求有一个换行符或禁止有空白。
    'block-closing-brace-newline-before': 'always-multi-line',
    // 在闭括号之前要求有一个空格或禁止有空格。
    'block-closing-brace-space-before': 'always-single-line',
    // 禁止出现空块。
    'block-no-empty': true,
    // // 禁止出现单行块。
    // 'block-no-single-line': true,
    // 在开括号之后要求有一个换行符 。
    'block-opening-brace-newline-after': 'always-multi-line',
    // // 在括开号之前要求有一个换行符或禁止有空白。
    // 'block-opening-brace-newline-before':
    //   'always' |
    //   'always-single-line' |
    //   'never-single-line' |
    //   'always-multi-line' |
    //   'never-multi-line',
    // 在开括号之后要求有一个空格或禁止有空白 。
    'block-opening-brace-space-after': 'always-single-line',
    // 在开括号之前要求有一个空格或禁止有空白 。
    'block-opening-brace-space-before': 'always',

    // // 颜色
    // 指定十六进制颜色大小写 。
    'color-hex-case': 'lower',
    // 指定十六进制颜色是否使用缩写 。
    'color-hex-length': 'short',
    // // 要求 (可能的情况下) 或 禁止使用命名的颜色。
    // 'color-named': 'always-where-possible' | 'never',
    // // 禁止使用十六进制颜色。
    // 'color-no-hex': true,
    // 禁止使用无效的十六进制颜色。
    'color-no-invalid-hex': true,

    // // 注释
    // 要求或禁止在注释之前有空行。
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands']
      }
    ],
    // 禁止空注释。
    'comment-no-empty': true,
    // 要求或禁止在注释标签内有空白。
    'comment-whitespace-inside': 'always',
    // // 指定一个不允许出现在注释中的单词的黑名单。
    // 'comment-word-blacklist': '' | [],

    // // 自定义媒体
    // // 指定一个自定义媒体查询名称的匹配模式。
    // 'custom-media-pattern': '',

    // Custom property
    // 要求或禁止在自定义属性之前有一行空行。
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    // // 禁止在 :root 规则之外使用自定义属性。
    // 'custom-property-no-outside-root': true,
    // // 为自定义属性指定一个匹配模式。
    // 'custom-property-pattern': '',

    // 声明
    // 在感叹号之后要求有一个空格或禁止有空白。
    'declaration-bang-space-after': 'never',
    // 在感叹号之前要求有一个空格或禁止有空白。
    'declaration-bang-space-before': 'always',
    // 在冒号之后要求有一个换行符或禁止有空白。
    'declaration-colon-newline-after': 'always-multi-line',
    // 在冒号之后要求有一个空格或禁止有空白 。
    'declaration-colon-space-after': 'always-single-line',
    // 在冒号之前要求有一个空格或禁止有空白 。
    'declaration-colon-space-before': 'never',
    // 要求或禁止在声明语句之前有空行。
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    // // 禁止在声明中使用 !important。
    // 'declaration-no-important': true,
    // // 指定一个在声明中禁止使用的属性和单位的黑名单。
    // 'declaration-property-unit-blacklist': {},
    // // 指定一个在声明中允许使用的属性和单位的白名单。
    // 'declaration-property-unit-whitelist': {},
    // // 指定一个在声明中禁止使用的属性和值的黑名单。
    // 'declaration-property-value-blacklist': {},
    // // 指定一个在声明中允许使用的属性和值的白名单。
    // 'declaration-property-value-whitelist': {},

    // // 声明块
    // 在声明的块中中禁止出现重复的属性。
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],
    // // 禁止使用由于其他属性的原因而被忽略的属性。
    // 'declaration-block-no-ignored-properties': true,
    // // 禁止使用可以缩写却不缩写的属性。
    // 'declaration-block-no-redundant-longhand-properties': true,
    // 禁止缩写属性覆盖相关普通写法属性。
    'declaration-block-no-shorthand-property-overrides': true,
    // // 指定声明块中的属性顺序 。待调整
    // 'declaration-block-properties-order': 'alphabetical' | [],
    // 在声明块的分号之后要求有一个换行符或禁止有空白。
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    // // 在声明块的分号之前要求有一个换行符或禁止有空白。
    // 'declaration-block-semicolon-newline-before':
    //   'always' | 'always-multi-line' | 'never-multi-line',
    // 在声明块的分号之后要求有一个空格或禁止有空白。
    'declaration-block-semicolon-space-after': 'always-single-line',
    // 在声明块的分号之后前要求有一个空格或禁止有空白。
    'declaration-block-semicolon-space-before': 'never',
    // 限制单行声明块中声明的数量。
    'declaration-block-single-line-max-declarations': 1,
    // 要求或禁止在声明块中使用拖尾分号。
    'declaration-block-trailing-semicolon': 'always',

    // // 字体系列
    // // 指定字体名称是否需要使用引号引起来。
    // 'font-family-name-quotes':
    //   'always-where-required' |
    //   'always-where-recommended' |
    //   'always-unless-keyword',
    // 禁止使用重复的字体名称。
    'font-family-no-duplicate-names': true,

    // // 字体重量
    // // 要求使用数字或命名的 (可能的情况下) font-weight 值。
    // 'font-weight-notation': 'numeric' | 'named',

    // // 功能
    // // 指定一个禁用的函数的黑名单。
    // 'function-blacklist': '' | [],
    // 禁止在 calc 函数内使用不加空格的操作符。
    'function-calc-no-unspaced-operator': true,
    // 在函数的逗号之后要求有一个换行符或禁止有空白。
    'function-comma-newline-after': 'always-multi-line',
    // // 在函数的逗号之前要求有一个换行符或禁止有空白。
    // 'function-comma-newline-before':
    //   'always' | 'always-multi-line' | 'never-multi-line',
    // 在函数的逗号之后要求有一个空格或禁止有空白。
    'function-comma-space-after': 'always-single-line',
    // 在函数的逗号之前要求有一个空格或禁止有空白。
    'function-comma-space-before': 'never',
    // 根据标准语法，禁止 linear-gradient() 中无效的方向值。
    'function-linear-gradient-no-nonstandard-direction': true,
    // 限制函数中相邻的空行数量。
    'function-max-empty-lines': 0,
    // 指定函数名称的大小写。
    'function-name-case': 'lower',
    // 在函数的括号内要求有一个换行符或禁止有空白。
    'function-parentheses-newline-inside': 'always-multi-line',
    // 在函数的括号内要有一个空格或禁止有空白。
    'function-parentheses-space-inside': 'never-single-line',
    // // 要求或禁止在 url 中使用 data URI。
    // 'function-url-data-uris': 'always' | 'never',
    // // 禁止使用相对协议的链接。
    // 'function-url-no-scheme-relative': true,
    // // 要求或禁止 url 使用引号。
    // 'function-url-quotes': 'always' | 'never',
    // // 指定一个允许的 url 协议的白名单。
    // 'function-url-scheme-whitelist': '' | [],
    // // 指定一个允许的函数的白名单。
    // 'function-whitelist': '' | [],
    // 要求或禁止在函数之后有空白。
    'function-whitespace-after': 'always',

    // 长度
    // 长度为0时，禁止使用单位 。
    'length-zero-no-unit': true,

    // // 关键帧声明
    // 禁止在 keyframe 声明中使用 !important。
    'keyframe-declaration-no-important': true,

    // 一般/表
    // 指定缩进 。
    indentation: 2,
    // 限制相邻空行的数量。
    'max-empty-lines': 1,
    // // 限制单行的长度。
    // 'max-line-length': 0,
    // // 限制允许嵌套的深度。
    // 'max-nesting-depth': 0,
    // // 禁用与你使用的浏览器无关的 browser hacks。
    // 'no-browser-hacks': true,
    // 禁止低优先级的选择器出现在高优先级的选择器之后。
    'no-descending-specificity': true,
    // 在一个样式表中禁止出现重复的选择器。
    'no-duplicate-selectors': true,
    // 禁止空源。
    'no-empty-source': true,
    // 禁止行尾空白。
    'no-eol-whitespace': true,
    // 禁止多余的分号。
    'no-extra-semicolons': true,
    // // 禁用相似的颜色。
    // 'no-indistinguishable-colors': true,
    // 禁用 CSS 不支持的双斜线注释 (//...)。
    'no-invalid-double-slash-comments': true,
    // 禁止缺少文件末尾的换行符。
    'no-missing-end-of-source-newline': true,
    // // 禁止动画名称与 @keyframes 声明不符。
    // 'no-unknown-animations': true,
    // // 禁止使用浏览器不支持的特性。
    // 'no-unsupported-browser-features': true,

    // 媒体功能
    // 在 media 特性中的冒号之后要求有一个空格或禁止有空白。
    'media-feature-colon-space-after': 'always',
    // 在 media 特性中的冒号之前要求有一个空格或禁止有空白。
    'media-feature-colon-space-before': 'never',
    // // 指定禁止使用的 media 特性名称的黑名单。
    // 'media-feature-name-blacklist': '' | [],
    // // 指定 media 特性名称的大小写。
    'media-feature-name-case': 'lower',
    // 禁止使用未知的 media 特性名称。
    'media-feature-name-no-unknown': true,
    // // 禁止 media 特性名称带有浏览器引擎前缀。
    // 'media-feature-name-no-vendor-prefix': true,
    // // 指定允许使用的 media 特性名称的白名单。
    // 'media-feature-name-whitelist': '' | [],
    // // 禁止非布尔类型的 media 特性缺少标点。
    // 'media-feature-no-missing-punctuation': true,
    // 在media 特性的括号内要求有一个空格或禁止有空白。
    'media-feature-parentheses-space-inside': 'never',
    // 在 media 特性的范围操作符之后要求有一个空格或禁止有空白。
    'media-feature-range-operator-space-after': 'always',
    // 在 media 特性的范围操作符之前要求有一个空格或禁止有空白。
    'media-feature-range-operator-space-before': 'always',

    // 媒体查询列表
    // 在媒体查询的逗号之后要求有一个换行符或禁止有空白。
    'media-query-list-comma-newline-after': 'always-multi-line',
    // // 在媒体查询的逗号之前要求有一个换行符或禁止有空白。
    // 'media-query-list-comma-newline-before':
    //   'always' | 'always-multi-line' | 'never-multi-line',
    // 在媒体查询的逗号之后要求有一个空格或禁止有空白。
    'media-query-list-comma-space-after': 'always-single-line',
    // 在媒体查询的逗号之前要求有一个空格或禁止有空白。
    'media-query-list-comma-space-before': 'never',

    // 数
    // 要求或禁止小于 1 的小数的前导 0 。
    'number-leading-zero': 'always',
    // 限制小数位数。
    // 'number-max-precision': 0,
    // 禁止数字中的拖尾 0 。
    'number-no-trailing-zeros': true,

    // property
    // // 指定一个禁止使用的属性的黑名单。
    // 'property-blacklist': '' | [],
    // 指定属性的大小写。
    'property-case': 'lower',
    // 禁止使用未知属性。
    'property-no-unknown': true,
    // // 禁止属性使用浏览器引擎前缀。
    // 'property-no-vendor-prefix': true,
    // // 指定一个允许使用的属性的白名单。
    // 'property-whitelist': '' | [],

    // // 根规则
    // // 禁止在 :root 中出现标准属性。
    // 'root-no-standard-properties': true,

    // // 规则
    // // 在嵌套的规则中要求或禁止有空行。
    // 'rule-nested-empty-line-before': 'always' | 'never',
    // // 在非嵌套的规则之前要求或禁止有空行。
    // 'rule-non-nested-empty-line-before': 'always' | 'never',

    // 选择
    // 在特性选择器的方括号内要求有空格或禁止有空白。
    'selector-attribute-brackets-space-inside': 'never',
    // // 指定一个禁止使用的特性(attribute)操作符的黑名单。
    // 'selector-attribute-operator-blacklist': '' | [],
    // 在特性选择器的操作符之后要求有一个空格或禁止有空白。
    'selector-attribute-operator-space-after': 'never',
    // 在特性选择器的操作符之前要求有一个空格或禁止有空白。
    'selector-attribute-operator-space-before': 'never',
    // // 指定允许使用的特性(attribute)操作符的白名单。
    // 'selector-attribute-operator-whitelist': '' | [],
    // // 要求或禁止特性值使用引号。
    // 'selector-attribute-quotes': 'always' | 'never',
    // // 为类选择器指定一个匹配模式。
    // 'selector-class-pattern': '',
    // 在关系选择符之后要求有一个空格或禁止有空白 。
    'selector-combinator-space-after': 'always',
    // 在关系选择符之前要求有一个空格或禁止有空白 。
    'selector-combinator-space-before': 'always',
    // 禁止包含选择符出现非空格字符。
    'selector-descendant-combinator-no-non-space': true,
    // // 指定一个 id 选择器的匹配模式。
    // 'selector-id-pattern': '',
    // 限制选择器中相邻空行数量。
    'selector-max-empty-lines': 0,
    // // 限制复合选择器的数量。
    // 'selector-max-compound-selectors': 0,
    // // 限制选择器的优先级。
    // 'selector-max-specificity': '',
    // // 指定一个嵌套选择器的匹配模式。
    // 'selector-nested-pattern': '',
    // // 禁用特性选择器。
    // 'selector-no-attribute': true,
    // // 禁用关系选择符。
    // 'selector-no-combinator': true,
    // // 禁止出现空选择器。
    // 'selector-no-empty': true,
    // // 禁用 id 选择器。
    // 'selector-no-id': true,
    // // 禁止使用类型对选择器进行限制。
    // 'selector-no-qualifying-type': true,
    // // 禁用类型选择器。
    // 'selector-no-type': true,
    // // 禁用通配符选择器。
    // 'selector-no-universal': true,
    // // 禁止使用浏览器引擎前缀。
    // 'selector-no-vendor-prefix': true,
    // // 指定一个禁止使用的伪类选择器的黑名单。
    // 'selector-pseudo-class-blacklist': '' | [],
    // 指定伪类选择器的大小写。
    'selector-pseudo-class-case': 'lower',
    // 禁止使用未知的伪类选择器。
    'selector-pseudo-class-no-unknown': true,
    // 在伪类选择器的括号内要求使用一个空格或禁止有空白。
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // // 指定一个允许使用的伪类选择器的白名单。
    // 'selector-pseudo-class-whitelist': '' | [],
    // 指定伪元素的大小写。
    'selector-pseudo-element-case': 'lower',
    // 指定伪元素使用单冒号还是双冒号。
    'selector-pseudo-element-colon-notation': 'double',
    // 禁止使用未知的伪元素。
    'selector-pseudo-element-no-unknown': true,
    // // 禁止 :root 混合使用。
    // 'selector-root-no-composition': true,
    // 指定类型选择器的大小写。
    'selector-type-case': 'lower',
    // 禁用未知的类型选择器。
    'selector-type-no-unknown': true,
    // // 限制选择器中相邻空行数量。
    // 'shorthand-property-no-redundant-values': true,

    // 选择列表
    // 要求选择器列表的逗号之后有一个换行符或禁止在逗号之后有空白 。
    'selector-list-comma-newline-after': 'always',
    // // 要求选择器列表的逗号之前有一个换行符或禁止在逗号之前有空白 。
    // 'selector-list-comma-newline-before':
    //   'always' | 'always-multi-line' | 'never-multi-line',
    // // 要求在选择器列表的逗号之后有一个空格，或禁止有空白 。
    // 'selector-list-comma-space-after':
    //   'always' | 'never' | 'always-single-line' | 'never-single-line',
    // 要求在选择器列表的逗号之前有一个空格，或禁止有空白 。
    'selector-list-comma-space-before': 'never',

    // // 字符串
    // 禁止在字符串中使用（非转义的）换行符。
    'string-no-newline': true,
    // // 指定字符串使用单引号还是双引号 。
    // 'string-quotes': 'single' | 'double',

    // // 要求在 stylelint-disable 注释之前或之后有一个原因的描述注释。
    // 'stylelint-disable-reason': 'always-before' | 'always-after',

    // // 时间
    // // 禁止 animation 和 transition 小于或等于 100ms。
    // 'time-no-imperceptible': true,

    // 单元
    // // 指定一个禁止使用的单位的黑名单。
    // 'unit-blacklist': '' | [],
    // 指定单位的大小写。
    'unit-case': 'lower',
    // // known units.
    // 禁止使用未知单位。
    'unit-no-unknown': true,
    // // 指定一个所允许的单位的白名单。
    // 'unit-whitelist': '' | [],

    // 值
    // 指定关键字的值的大小写。
    'value-keyword-case': 'lower',
    // // 禁止给值添加浏览器引擎前缀。
    // 'value-no-vendor-prefix': true,

    // 值清单
    // 在值列表的逗号之后要求有一个换行符或禁止有空白。
    'value-list-comma-newline-after': 'always-multi-line',
    // // 在值列表的逗号之前要求有一个换行符或禁止有空白。
    // 'value-list-comma-newline-before':
    //   'always' | 'always-multi-line' | 'never-multi-line',
    // 在值列表的逗号之后要求有一个空格或禁止有空白。
    'value-list-comma-space-after': 'always-single-line',
    // 在值列表的逗号之前要求有一个空格或禁止有空白
    'value-list-comma-space-before': 'never',
    // 限制值列表中相邻空行数量。
    'value-list-max-empty-lines': 0
  }
};
