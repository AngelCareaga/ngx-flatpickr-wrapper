# ngx-flatpickr-wrapper

<div align="center">

[![npm Version](https://img.shields.io/npm/v/ngx-flatpickr-wrapper.svg)](https://www.npmjs.com/package/ngx-flatpickr-wrapper)
[![Build Status](https://travis-ci.org/AngelCareaga/ngx-flatpickr-wrapper.svg?branch=master)](https://travis-ci.org/AngelCareaga/ngx-flatpickr-wrapper)
[![GitHub Stars](https://img.shields.io/github/stars/AngelCareaga/ngx-flatpickr-wrapper?style=social)](https://github.com/AngelCareaga/ngx-flatpickr-wrapper/stargazers)
[![Angular](https://img.shields.io/badge/Angular-17--20-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**A lightweight Angular wrapper for flatpickr with full reactive forms support**

[Live Examples](https://angelcareaga.github.io/ngx-flatpickr-wrapper/) • [Flatpickr Documentation](https://chmln.github.io/flatpickr/options/) • [Report Bug](https://github.com/AngelCareaga/ngx-flatpickr-wrapper/issues)

</div>

## ✨ Features

- 🎯 **Angular Native** - Built specifically for Angular 17-20
- 📝 **Reactive Forms** - Full integration with Angular reactive forms
- 🎨 **Customizable** - All flatpickr options supported
- 📱 **Mobile Friendly** - Touch-optimized date selection
- 🌍 **i18n Support** - Multiple locale support
- ⚡ **Lightweight** - Minimal bundle impact
- 🔧 **TypeScript** - Full type safety and IntelliSense
- 🎭 **Standalone** - Works with standalone components

## 🚀 Quick Start

### Installation

```bash
npm install flatpickr ngx-flatpickr-wrapper
# or
yarn add flatpickr ngx-flatpickr-wrapper
# or
pnpm add flatpickr ngx-flatpickr-wrapper
```

### CSS Import

Add flatpickr CSS to your `angular.json`:

```json
{
  "styles": ["node_modules/flatpickr/dist/flatpickr.min.css"]
}
```

Or import in your global `styles.css`:

```css
@import 'flatpickr/dist/flatpickr.min.css';
```

### Component Usage

```typescript
import { NgxFlatpickrWrapperComponent } from 'ngx-flatpickr-wrapper';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxFlatpickrWrapperComponent, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <ngx-flatpickr-wrapper formControlName="date" placeholder="Select a date"> </ngx-flatpickr-wrapper>
    </form>
  `,
})
export class ExampleComponent {
  form = this.fb.group({
    date: [''],
  });

  constructor(private fb: FormBuilder) {}
}
```

## 📋 Examples

### Basic Date Picker

```html
<ngx-flatpickr-wrapper formControlName="date" placeholder="Pick a date"> </ngx-flatpickr-wrapper>
```

### Date & Time Picker

```typescript
import { FlatpickrOptions } from 'ngx-flatpickr-wrapper';

export class MyComponent {
  dateTimeOptions: FlatpickrOptions = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  };
}
```

```html
<ngx-flatpickr-wrapper [config]="dateTimeOptions" formControlName="datetime" placeholder="Pick date and time">
</ngx-flatpickr-wrapper>
```

### Date Range Picker

```typescript
dateRangeOptions: FlatpickrOptions = {
  mode: 'range',
  dateFormat: 'Y-m-d',
};
```

```html
<ngx-flatpickr-wrapper [config]="dateRangeOptions" formControlName="dateRange" placeholder="Select date range">
</ngx-flatpickr-wrapper>
```

### Custom Styling

```html
<ngx-flatpickr-wrapper addClass="custom-input-class" formControlName="date"> </ngx-flatpickr-wrapper>
```

### Internationalization

```typescript
import { FlatpickrOptions } from 'ngx-flatpickr-wrapper';
import { Spanish } from 'flatpickr/dist/l10n/es.js';

export class MyComponent {
  spanishOptions: FlatpickrOptions = {
    locale: Spanish,
  };
}
```

### Programmatic Date Setting

```typescript
export class MyComponent {
  currentDate = new Date();

  updateDate() {
    this.currentDate = new Date();
  }
}
```

```html
<ngx-flatpickr-wrapper [setDate]="currentDate" formControlName="date"> </ngx-flatpickr-wrapper>
```

## 🔧 API Reference

### Inputs

| Property      | Type               | Default     | Description                     |
| ------------- | ------------------ | ----------- | ------------------------------- |
| `config`      | `FlatpickrOptions` | `{}`        | Flatpickr configuration options |
| `placeholder` | `string`           | `''`        | Input placeholder text          |
| `addClass`    | `string`           | `''`        | Additional CSS classes          |
| `setDate`     | `string \| Date`   | `undefined` | Programmatically set date       |
| `tabindex`    | `number`           | `0`         | Tab index for accessibility     |
| `hideButton`  | `boolean`          | `false`     | Hide the calendar button        |

### Configuration Options

All [flatpickr options](https://chmln.github.io/flatpickr/options/) are supported through the `config` input:

```typescript
interface FlatpickrOptions {
  altFormat?: string;
  altInput?: boolean;
  allowInput?: boolean;
  dateFormat?: string;
  defaultDate?: string | Date;
  disable?: Array<string | Date | Function>;
  enable?: Array<string | Date | Function>;
  enableTime?: boolean;
  enableSeconds?: boolean;
  hourIncrement?: number;
  inline?: boolean;
  locale?: Object;
  maxDate?: string | Date;
  minDate?: string | Date;
  minuteIncrement?: number;
  mode?: 'single' | 'multiple' | 'range';
  noCalendar?: boolean;
  time_24hr?: boolean;
  weekNumbers?: boolean;
  // ... and many more
}
```

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Development

### Prerequisites

- Node.js 18+
- Angular CLI 17+

### Setup

```bash
git clone https://github.com/AngelCareaga/ngx-flatpickr-wrapper.git
cd ngx-flatpickr-wrapper
npm install
```

### Development Server

```bash
npm start
```

### Build Library

```bash
npm run build
```

### Code Formatting

This project uses [Prettier](https://prettier.io/) for code formatting:

```bash
npm run format
```

### Testing

```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Flatpickr](https://flatpickr.js.org/)** - The excellent date picker library this wrapper is built around
- **[ng2-flatpickr](https://github.com/mezoistvan/ng2-flatpickr)** - Created by Mező István, which served as inspiration for this project
- **Angular Team** - For the amazing framework

## 📞 Support

- 📧 Email: [dev.angelcareaga@gmail.com](mailto:dev.angelcareaga@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/AngelCareaga/ngx-flatpickr-wrapper/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/AngelCareaga/ngx-flatpickr-wrapper/discussions)
- 🌐 Website: [angelcareaga.com](https://angelcareaga.com)

---

<div align="center">

**Made with ❤️ by [Angel Careaga](https://angelcareaga.com)**

[⭐ Star this repo](https://github.com/AngelCareaga/ngx-flatpickr-wrapper/stargazers) if you found it helpful!

</div>
