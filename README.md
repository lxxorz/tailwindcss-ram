# RAM (repeat auto minmax) for Tailwind CSS

## What is RAM

Learn more about RAM: [repeat-auto-minmax](https://web.dev/patterns/layout/repeat-auto-minmax)

## Install

```sh
pnpm add --save-dev tailwindcss-ram
```

If you are using Tailwind CSS v4, add the plugin in your `tailwind.config.js` or CSS file:

```css
@plugin "tailwindcss-ram";
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

You can choose the repeat mode (`auto-fit` or `auto-fill`):

```html
<div class="grid cols-fill-52"></div>
<!-- Uses auto-fill -->
<div class="grid cols-fit-52"></div>
<!-- Uses auto-fit -->
```
