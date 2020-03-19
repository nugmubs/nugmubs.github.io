---
title: Getting Started blog.nugmub.com
date: 2020-03-11 00:33:00 +0800
categories: [Blogging, Tutorial]
tags: [getting started]
use_math: true
seo:
  date_modified: 2020-03-19 21:52:31 +0900
---

This Jekyll template totally compatible with Markdown syntax. Now, let's take a look for the text and typography in this theme.

## 159

***
# H1

<h2 data-toc-skip>H2</h2>

<h3 data-toc-skip>H3</h3>

#### H4

***

## Paragraph

I wandered lonely as a cloud

That floats on high o'er vales and hills,

When all at once I saw a crowd,

A host, of golden daffodils;

Beside the lake, beneath the trees,

Fluttering and dancing in the breeze.

## Block Quote

> This line to shows the Block Quote.

## Tables

|Company|Contact|Country|
|:---|:--|---:|
|Alfreds Futterkiste | Maria Anders | Germany
|Island Trading | Helen Bennett | UK
|Magazzini Alimentari Riuniti | Giovanni Rovelli | Italy

## Link

[http://127.0.0.1:4000](http://127.0.0.1:4000)


## Footnote

Click the hook will locate the footnote[^footnote].


## Image

![Desktop View]({{ "/assets/img/sample/mockup.png" | relative_url }})


## Inline code

This is an example of `Inline Code`.


## Code Snippet

### Common

```
This is a common code snippet, without syntax highlight and line number.
```

### Specific Languages

#### Console

```console
$ date
Sun Nov  3 15:11:12 CST 2019
```


#### Terminal

```terminal
$ env |grep SHELL
SHELL=/usr/local/bin/bash
PYENV_SHELL=bash
```

#### Ruby

```ruby
def sum_eq_n?(arr, n)
  return true if arr.empty? && n == 0
  arr.product(arr).reject { |a,b| a == b }.any? { |a,b| a + b == n }
end
```

#### Shell

```shell
if [ $? -ne 0 ]; then
    echo "The command was not successful.";
    #do the needful / exit
fi;
```

#### Liquid

{% raw %}
```liquid
{% if product.title contains 'Pack' %}
  This product's title contains the word Pack.
{% endif %}
```
{% endraw %}

#### HTML

```html
<div class="sidenav">
  <a href="#contact">Contact</a>
  <button class="dropdown-btn">Dropdown
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
  <a href="#contact">Search</a>
</div>
```

**Horizontal Scrolling**

```html
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading" id="{{ category_name }}">
      <i class="far fa-folder"></i>
      <p>This is a very long long long long long long long long long long long long long long long long long long long long long line.</p>
      </a>
    </div>
  </div>
</div>
```

## Katex Support

I added katex to support latex syntax

{% raw %}
```html
```
{% endraw %}

$$ \sqrt{a^2+b^2} $$

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$

## Reverse Footnote

[^footnote]: The footnote source.
