# ngx-flatpickr-wrapper

[![npm Version](https://img.shields.io/npm/v/ngx-flatpickr-wrapper.svg)](https://www.npmjs.com/package/ngx-flatpickr-wrapper)
[![Build Status](https://travis-ci.org/AngelCareaga/ngx-flatpickr-wrapper.svg?branch=master)](https://travis-ci.org/AngelCareaga/ngx-flatpickr-wrapper)

> A lightweight Angular wrapper for flatpickr, which is usable in reactive forms inside Angular.

Examples are here: https://mezoistvan.github.io/ngx-flatpickr-wrapper-examples/.

```bash
npm i flatpickr ngx-flatpickr-wrapper
yarn add flatpickr ngx-flatpickr-wrapper
```

# How to use:

```typescript
import { NgxFlatpickrWrapperComponent } from 'ngx-flatpickr-wrapper';

imports: [
  ...
    NgxFlatpickrWrapperComponent,
  ...
],
...
})
```

Example usage in a form component html template:

```javascript
<ngx-flatpickr-wrapper formControlName="formControlName"></ngx-flatpickr-wrapper>
```

Overwrite the default flatpickr properties by inputting any of the flatpickr options: https://chmln.github.io/flatpickr/options/

```javascript
import { FlatpickrOptions } from 'ngx-flatpickr-wrapper';

let exampleOptions: FlatpickrOptions = {
  defaultDate: '2017-03-15'
};

<ngx-flatpickr-wrapper [config]="exampleOptions" formControlName="formControlName"></ngx-flatpickr-wrapper>
```

Add locale to the options

```javascript
import { FlatpickrOptions } from 'ngx-flatpickr-wrapper';
import Russian from 'flatpickr/dist/l10n/ru.js';

let exampleOptions: FlatpickrOptions = {
  locale: Russian.ru,
  ...
};

<ngx-flatpickr-wrapper [config]="exampleOptions" formControlName="formControlName"></ngx-flatpickr-wrapper>
```

Set a placeholder for the input:

```javascript
<ngx-flatpickr-wrapper placeholder="Pick a date!" formControlName="formControlName"></ngx-flatpickr-wrapper>
```

Set a date using a string or a date object:

```javascript
let randomDateString = '1988-09-19';
let randomDateObject = new Date( 1234567891011 );

<ngx-flatpickr-wrapper [setDate]="randomDateString" formControlName="formControlName"></ngx-flatpickr-wrapper>
<ngx-flatpickr-wrapper [setDate]="randomDateObject" formControlName="formControlName"></ngx-flatpickr-wrapper>

```

Flatpickr css needs to be loaded separately. when using `@angular/cli`, load it in `angular.json`.

```javascript
"styles": [
  "node_modules/flatpickr/dist/flatpickr.min.css"
]
```

## Development Guidelines

### Code Formatting

This project uses [Prettier](https://prettier.io/) for code formatting. To ensure consistent code style, please format your code using Prettier before submitting any changes.

To format the codebase, run the following command:

```bash
npm run format
```

## Special Thanks

This project, ngx-flatpickr-wrapper, was inspired by and built upon the foundational work of [ng2-flatpickr](https://github.com/mezoistvan/ng2-flatpickr), created by Mező István.

## License

MIT © Angel Careaga
