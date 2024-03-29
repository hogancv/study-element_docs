# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 `v-model` 的值为当前被选中的 `option` 的 `value` 属性值。

<preview path="../demo/Select/Basic.vue" title="基础Select" description="Select 基础用例"></preview>

## 可清空单选

设置 `clearable`属性，则可将选择器清空。
<preview path="../demo/Select/clearable.vue" title="Select clearable" description="Select clearable"></preview>

## 筛选选项

可以利用筛选功能快速查找选项。

添加 `filterable` 属性即可启用搜索功能。 默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。 `filter-method` 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。

<preview path="../demo/Select/filterable.vue" title="筛选选项" description="Select 筛选选项"></preview>

## 远程搜索

输入关键字以从远程服务器中查找数据。

服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为 true，同时传入一个`remote-method`。 remote-method 为一个返回 Promise 的 Function，类型为 `(value: string) => Promise<SelectOption[]>` 。

示例请输入英文字母

<preview path="../demo/Select/Remote.vue" title="Remote" description="Select Remote"></preview>
