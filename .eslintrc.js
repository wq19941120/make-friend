/*
 * @Description: Type your file description
 * @Author: qiangwu
 * @LastEditors: qiangwu
 * @Date: 2020-07-17 17:43:34
 * @LastEditTime: 2021-07-01 16:08:37
 * @FilePath: \make-friend\.eslintrc.js
 */ 
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint' // 解析器，默认使用Espree
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		"no-irregular-whitespace": 2, // 不能有不规则的空格
    "indent": 2, // switch case 关键字强制一个缩进（默认0个）
    "allowTemplateLiterals": true, // 使用单引号和模板字符串
    "quotes": [2, "single"], // 引号类型
    "no-undef": 2, // 不能有未定义的变量
    "keyword-spacing": [2, {"before":true}], // 关键字后面是否要空一格
    "space-before-function-paren": [2, "always"], // 函数定义时括号前面要有空格 - 关闭
    "eqeqeq": 2, // 必须使用全等
    "space-infix-ops": 2, // 中缀操作符周围要不要有空格
    "comma-spacing": 2, // 逗号前后的空格
    "curly": [2, "all"], // 必须使用 if(){} 中的{}
    "no-multiple-empty-lines": [1, {"max": 2}], // 空行最多不能超过2行
    "no-var": 2, // 禁用var，用let和const代替
    "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
    "block-spacing":2, // 单行代码块两边加空格
    "camelcase": 2, // 强制驼峰法命名
    "comma-dangle": [2, "never"], // 不允许有多余的行末逗号
    "comma-style": [2, "last"], // 始终将逗号置于行末
    "dot-location": [2, "property"], // 点号操作符须与属性需在同一行
    "func-call-spacing": 2, // 函数调用时 函数名与()之间不能有空格
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }], // 对象字面量中冒号的前后空格
    "new-cap": 2, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "no-array-constructor": 2, // 使用数组字面量而不是构造器
    "no-const-assign": 2, // 禁止修改const声明的变量 - 开启
    "no-delete-var": 2, // 不能对var声明的变量使用delete操作符
    "no-dupe-args": 2, // 不要定义冗余的函数参数
    "no-extend-native": 2, // 禁止扩展native对象
    "no-inner-declarations": [2, "functions"], // 禁止在块语句中使用声明（变量或函数）
    "no-multi-spaces": 2, // 不能用多余的空格
    "no-multi-str": 2, // 不要使用多行字符串
    "no-new": 2, // new创建对象实例后需要赋值给变量
    "no-redeclare": 2, // 禁止重复声明变量
    "no-self-assign": 2, // 禁止自我赋值
    "no-self-compare":2, // 禁止自身比较
    "no-trailing-spaces":2, // 禁止尾行空格
    "no-undef-init": 2, // 变量初始化时不能直接给它赋值为undefined
    "no-unneeded-ternary":2, // 当有更简单的结构可以代替三元操作符时，该规则禁止使用三元操作符。
    "no-unreachable":2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码。
    "no-whitespace-before-property":2, // 禁止属性前加空格
    // "object-curly-newline": [2, { "minProperties": 2 }], // 对象属性换行时注意统一代码风格
    "semi-spacing": [2, {"before": false, "after": true}], // 它强制分号之后有空格，禁止分号之前有空格
    "space-in-parens": [2, "never"], // 禁止圆括号内的空格
    "spaced-comment": [2, "always"], // 要求在注释前有空白
    // "brace-style": 2, // 关键字要与花括号保持在同一行
    "operator-linebreak": [2, "after"], // 换行时运算符在行尾还是行首
  }
}
