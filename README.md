# RAM(repeat auto minmax) for tailwindcss

## What is RAM

read [repeat-auto-minmax](https://web.dev/patterns/layout/repeat-auto-minmax?hl=zh-cn)

## Install

```sh
npm install --save-dev tailwindcss-ram
```

## Usage

### Basic

```html
<div class="grid cols-fit-40 white">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>
```

### Specify Any Value

```html
<div class="grid cols-fit-[200px]"></div>
```

### Specify Repeat Mode

you can choose repeat mode

```html
<div class="grid cols-fill-52"></div>
<div class="grid cols-fit-52"></div>
```
