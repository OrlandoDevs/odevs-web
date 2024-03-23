# Orlando Devs Web Site
## Getting Started

The Orlando Devs website is built on top of [https://www.netlify.com/Netlify](https://www.netlify.com/). To get started you will need to install the [Netlify CLI](https://www.netlify.com/products/cli) tool on your local environment.

* [Install Netlify CLI](https://www.netlify.com/products/cli/#install) `npm install -g netlify-cli`
* Install Node packages `npm install`

Once packages are installed run the Netlfiy dev stack:

* `netlify dev`
* `npx netlify-cms-proxy-server` to run the local cms

---
## Local Demo
* http://localhost:8888/
* netlify cms http://localhost:8888/admin - needs to proxy to be run

---
## Live Demo

https://odevs.netlify.app/

## Style Guide

To maintain styling consistency we are using [daisy UI](https://daisyui.com/), a themeable Tailwind CSS Component framework. 

### Colors

Daisy UI introduces a color system with semantic color utility classes that are set in [tailwind.config.js](tailwind.config.js) and based on CSS variables.

Some daisyUI components come with variants and you can use them by name.  
Like `<button class="btn btn-primary">Button</button>`  
or `<input type="checkbox" class="checkbox checkbox-secondary">`

You can also use color names in utility classes just like Tailwind's color names.  
These are default utility classes that use color names:

```css
bg-{COLOR_NAME}
to-{COLOR_NAME}
via-{COLOR_NAME}
from-{COLOR_NAME}
text-{COLOR_NAME}
ring-{COLOR_NAME}
fill-{COLOR_NAME}
caret-{COLOR_NAME}
stroke-{COLOR_NAME}
border-{COLOR_NAME}
divide-{COLOR_NAME}
accent-{COLOR_NAME}
shadow-{COLOR_NAME}
outline-{COLOR_NAME}
decoration-{COLOR_NAME}
placeholder-{COLOR_NAME}
ring-offset-{COLOR_NAME}
```

So you can use `bg-primary`, `border-secondary`, etc...

### Components

[daisy UI](https://daisyui.com), provides pure CSS and semantic HTML components for common use cases such as Buttons, Cards, Dropdowns, Carousels, Modals, etc. For a full list of CSS based components please see the [Components Docs](https://daisyui.com/components/).

To maintain consistency, contributors should use available components when possible. 

daisyUI components comes with many variants necessary for design systems and you won't usually need to customize anything  
But you can still customize components in many ways.

- Let's say, you want to customize a button:

```html
<button class="btn">Button</button>
```

1. You can use daisyUI utility classes:

```html
<button class="btn btn-primary">Three</button>
<button class="btn btn-secondary">Two</button>
<button class="btn btn-accent btn-outline">Three</button>
```

2. You can use Tailwind's utility classes:

```html
<button class="btn rounded-full">One</button>
<button class="btn rounded-none px-16">Two</button>
```

3. You can customize components on your CSS file, using Tailwind's @apply directive.

```css
.btn {
  @apply rounded-full;
}
```

4. You can also modify the theme directly in [tailwind.config.js](tailwind.config.js) to make site wide customizations.

## Layout

Layout, sizing, grids, spacing, etc... all will be handled by Tailwind CSS's utility classes

Read more about:

- [Layout](https://tailwindcss.com/docs/container)
- [Sizing](https://tailwindcss.com/docs/width)
- [Flexbox](https://tailwindcss.com/docs/flex)
- [Grid](https://tailwindcss.com/docs/grid-template-columns)
- [Box alignment](https://tailwindcss.com/docs/justify-content)
- [Spacing](https://tailwindcss.com/docs/padding)