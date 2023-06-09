# @cesarlai/style-toolkit

> A style lib that include useful mixins, help you get complex display easily.

## Getting Started

installation

```sh
npm install @cesarlai/style-toolkit
```

using in `.less`

```less
// import all mixins
@import "@cesarlai/style-toolkit/less/mixins";
// import text common mixins
@import "@cesarlai/style-toolkit/less/mixins/text";
// import scroll common mixins
@import "@cesarlai/style-toolkit/less/mixins/scroll";

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

## API Reference

### Scroll

| API Name         | Description              | Example                |
| ---------------- | ------------------------ | ---------------------- |
| scrollbar-hidden | mixin to hide scrollbar. | `.scrollbar-hidden();` |

### Text

| API Name                 | Description               | Example                         |
| ------------------------ | ------------------------- | ------------------------------- |
| text-ellipsis-single-row | show single line maximum. | `.text-ellipsis-single-row();`  |
| text-ellipsis-multi-rows | show three lines maximum. | `.text-ellipsis-multi-rows(3);` |
