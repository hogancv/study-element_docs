# Button 按钮

常用的操作按钮

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

<preview path="../demo/Button/Disable.vue" title="禁用状态" description="Button 组件的禁用状态"></preview>

## 图标按钮

使用 `icon` 属性来为按钮添加图标。 图标名称见<a href="https://fontawesome.com/search?o=r&m=free" title="图标按钮" target="_blank">&nbsp;<b>Font Awesome</b>&nbsp;</a>。

<preview path="../demo/Button/Icon.vue" title="按钮组件" description="Button 按钮组件"></preview>

## 加载状态按钮

通过设置 `loading` 属性来显示加载中状态。
<preview path="../demo/Button/Loading.vue" title="加载中状态" description="Button 组件的加载中状态"></preview>

### Button Attributes

| Name        | Description           | Type                                                             | Default |
| ----------- | --------------------- | ---------------------------------------------------------------- | ------- |
| size        | 按钮大小              | `enum` - `'large'\| 'small'`                                     | —       |
| type        | 按钮类型              | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |
| plain       | 镂空样式              | `boolean`                                                        | false   |
| round       | 圆角按钮              | `boolean`                                                        | false   |
| circle      | 圆形按钮              | `boolean`                                                        | false   |
| loading     | 按钮加载效果          | `boolean`                                                        | false   |
| disabled    | 不可选中效果          | `boolean`                                                        | false   |
| icon        | 按钮图标              | `string`                                                         | —       |
| autofocus   | 原生 `autofocus` 属性 | `boolean`                                                        | false   |
| native-type | 原生 `type` 属性      | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |
