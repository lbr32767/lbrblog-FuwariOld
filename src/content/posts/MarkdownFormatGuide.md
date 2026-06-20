---
title: Markdown 格式教学示例
published: 2026-06-19
description: ""
image: ""
tags: []
category: "记录"
draft: false
lang: ""
order: -999
---
Markdown 格式教学示例

## 基础 Markdown

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

### 段落与强调

```markdown
这是普通段落文本。

**这是加粗文本**，*这是斜体文本*，***这是加粗斜体文本***。

~~这是删除线文本~~。
```

这是普通段落文本。

**这是加粗文本**，*这是斜体文本*，***这是加粗斜体文本***。

~~这是删除线文本~~。

### 列表

```markdown
无序列表：
- 项目一
- 项目二
  - 子项目 A
  - 子项目 B
- 项目三

有序列表：
1. 第一步
2. 第二步
3. 第三步
```

无序列表：
- 项目一
- 项目二
  - 子项目 A
  - 子项目 B
- 项目三

有序列表：
1. 第一步
2. 第二步
3. 第三步

### 链接与图片

```markdown
[这是一个链接](https://example.com)

![图片描述](https://picsum.photos/800/400)
```

[这是一个链接](https://example.com)

![图片描述](https://picsum.photos/800/400)

### 引用

```markdown
> 这是一段引用文本。
> 可以有多行。
```

> 这是一段引用文本。
> 可以有多行。

### 代码

```markdown
行内代码：`console.log("Hello World")`

代码块：
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Markdown"));
```
```

行内代码：`console.log("Hello World")`

代码块：
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Markdown"));
```

### 分隔线

```markdown
---
```

---

### 表格（默认样式）

未添加指令的表格使用默认 prose 样式。

```markdown
| 功能         | 支持情况 | 备注  |
| ---------- | :----: | :--- |
| 标题         |   ✅   | 六级标题 |
| 列表         |   ✅   | 有序/无序 |
| 表格         |   ✅   | 对齐支持 |
| 代码块       |   ✅   | 语法高亮 |
```

| 功能         | 支持情况 | 备注  |
| ---------- | :----: | :--- |
| 标题         |   ✅   | 六级标题 |
| 列表         |   ✅   | 有序/无序 |
| 表格         |   ✅   | 对齐支持 |
| 代码块       |   ✅   | 语法高亮 |

## 扩展功能

### 表格样式指令

在表格前添加 `:table/样式名` 指令即可应用对应样式。

#### Founder 样式

```markdown
:table/founder
| 服务         | 邮箱限制数量 | 接受  |
| ---------- | :----: | :---: |
| cloudflare | 无线     | ✅   |
| resond.com | 无线     | ✅   |
| 飞书         | 无线     | ✅   |
```

:table/founder
| 服务         | 邮箱限制数量 | 接受  |
| ---------- | :----: | :---: |
| cloudflare | 无线     | ✅   |
| resond.com | 无线     | ✅   |
| 飞书         | 无线     | ✅   |

#### 条纹表格

```markdown
:table/striped
| 服务         | 邮箱限制数量 | 接受  |
| ---------- | :----: | :---: |
| cloudflare | 无线     | ✅   |
| resond.com | 无线     | ✅   |
| 飞书         | 无线     | ✅   |
| QQ邮箱       | 3        | ❌   |
```

:table/striped
| 服务         | 邮箱限制数量 | 接受  |
| ---------- | :----: | :---: |
| cloudflare | 无线     | ✅   |
| resond.com | 无线     | ✅   |
| 飞书         | 无线     | ✅   |
| QQ邮箱       | 3        | ❌   |

#### 卡片表格

```markdown
:table/card
| 服务         | 邮箱限制数量 | 接受  |
| ---------- | :----: | :---: |
| cloudflare | 无线     | ✅   |
| resond.com | 无线     | ✅   |
| 飞书         | 无线     | ✅   |
```

:table/card
| 服务         | 邮箱限制数量 | 接受  |
| ---------- | :----: | :---: |
| cloudflare | 无线     | ✅   |
| resond.com | 无线     | ✅   |
| 飞书         | 无线     | ✅   |

#### 边框表格

```markdown
:table/bordered
| 服务         | 邮箱限制数量 | 接受  |
| ---------- | :----: | :---: |
| cloudflare | 无线     | ✅   |
| resond.com | 无线     | ✅   |
| 飞书         | 无线     | ✅   |
```

:table/bordered
| 服务         | 邮箱限制数量 | 接受  |
| ---------- | :----: | :---: |
| cloudflare | 无线     | ✅   |
| resond.com | 无线     | ✅   |
| 飞书         | 无线     | ✅   |

### 提示框 Admonition

支持多种类型的提示框。

```markdown
:::note
这是一个普通提示框。
:::

:::tip
这是一个技巧提示框。
:::

:::warning
这是一个警告提示框。
:::

:::caution
这是一个注意提示框。
:::

:::important
这是一个重要提示框。
:::

:::note[自定义标题]
提示框可以自定义标题。
:::
```

:::note
这是一个普通提示框。
:::

:::tip
这是一个技巧提示框。
:::

:::warning
这是一个警告提示框。
:::

:::caution
这是一个注意提示框。
:::

:::important
这是一个重要提示框。
:::

:::note[自定义标题]
提示框可以自定义标题。
:::

### GitHub 仓库卡片

```markdown
::github{repo="saicaca/fuwari"}
```

::github{repo="saicaca/fuwari"}

### 数学公式

```markdown
行内公式：$E = mc^2$

块级公式：
$$
\int_{-\infty}^{+\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### 免责声明指令

在文章开头添加 `:disclaimer` 指令，进入文章时会先跳转到免责声明页面。若指令后带文字，则使用该自定义内容；否则使用站点默认声明。

#### 使用默认声明

```markdown
:disclaimer
```

#### 使用单行自定义声明

```markdown
:disclaimer[本文涉及 **安全研究** 内容，仅供学习交流。]
```

#### 使用多行自定义声明

```markdown
:::disclaimer
本文内容涉及安全研究，请注意以下事项：

- 仅供学习交流，**禁止非法用途**
- 请遵守当地法律法规
- 任何后果由使用者自行承担
:::
```
