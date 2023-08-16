# Style Lib

> A less/sass lib that provide useful utils (eg: mixins, function), help you get complex display easily.

## Getting Started

installation

```sh
# less lib
npm install @cesarlai/stylelib-less
# scss lib
npm install @cesarlai/stylelib-scss
```

using in `.less`

```less
// import all mixins
@import "@cesarlai/stylelib-less/mixins";
// import text common mixins
@import "@cesarlai/stylelib-less/mixins/text";
// import scroll common mixins
@import "@cesarlai/stylelib-less/mixins/scroll";

.text {
  // show single line maximum
  .text-ellipsis-single-row();
}

.richtext {
  // show three lines maximum
  .text-ellipsis-multi-rows(3);
}

.container {
  // mixin to hide scrollbar
  .scrollbar-hidden();
}
```

using in `.scss`

```scss
// import all mixins
@import "@cesarlai/stylelib-scss/mixins";
// import text common mixins
@import "@cesarlai/stylelib-scss/mixins/text";
// import scroll common mixins
@import "@cesarlai/stylelib-scss/mixins/scroll";

.text {
  // show single line maximum
  @include text-ellipsis-single-row;
}

.richtext {
  // show three lines maximum
  @include text-ellipsis-multi-rows(3);
}

.container {
  // mixin to hide scrollbar
  @include scrollbar-hidden;
}
```

## API Reference

### Scroll

| API Name         | Description              |
| ---------------- | ------------------------ |
| scrollbar-hidden | mixin to hide scrollbar. |

### Text

| API Name                 | Description               |
| ------------------------ | ------------------------- |
| text-ellipsis-single-row | show single line maximum. |
| text-ellipsis-multi-rows | show three lines maximum. |
