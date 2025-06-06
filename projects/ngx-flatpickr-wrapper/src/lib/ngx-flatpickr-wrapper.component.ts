import {
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FlatpickrOptions } from './flatpickr-options.interface';
import 'flatpickr';

// Angular component decorator with standalone true, meaning no external modules required.
@Component({
  selector: 'ngx-flatpickr-wrapper',
  standalone: true,
  template: `
    <div class="ngx-flatpickr-wrapper-input-container" #flatpickr>
      @if (!hideButton) {
        <input
          class="ngx-flatpickr-wrapper-input {{ addClass }}"
          [placeholder]="placeholder"
          [tabindex]="tabindex"
          type="text"
          (focus)="onFocus($event)"
          data-input
        />
      }
      <ng-content></ng-content>
    </div>
  `,
  // Register this component as a NG_VALUE_ACCESSOR to work with Angular forms.
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxFlatpickrWrapperComponent),
      multi: true,
    },
  ],
})
export class NgxFlatpickrWrapperComponent implements AfterViewInit, ControlValueAccessor, OnChanges, OnDestroy {
  // Instance of the flatpickr library.
  public flatpickr: Object | undefined;

  // Default tabindex for the input element.
  private _tabindex = 0;

  // Callback function to be called when the input field is touched.
  onTouchedFn: Function = () => {};

  // Default options for the flatpickr instance.
  private defaultFlatpickrOptions: FlatpickrOptions = {
    wrap: true,
    clickOpens: true,
    onChange: (selectedDates: any) => {
      this.writeValue(selectedDates);
    },
  };

  // ViewChild to access the flatpickr DOM element.
  @ViewChild('flatpickr', { static: true })
  flatpickrElement: any;

  // User-provided configuration for the flatpickr instance.
  @Input()
  config: FlatpickrOptions | undefined;

  // Placeholder text for the input field.
  @Input()
  placeholder: string = '';

  // Additional CSS class(es) for styling the input field.
  @Input()
  addClass: string = '';

  // Date to set on the flatpickr instance.
  @Input()
  setDate: string | Date | undefined;

  // Getter and setter for the tabindex of the input field.
  @Input()
  get tabindex() {
    return this._tabindex;
  }

  set tabindex(ti: number) {
    this._tabindex = Number(ti);
  }

  // Flag to hide or show the button.
  @Input()
  hideButton = false;

  // Implements ControlValueAccessor's writeValue method.
  writeValue(value: any) {
    this.propagateChange(value);
  }

  // Registers a callback function to be called when the value in the UI is changed.
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // Registers a callback function to be called when the UI element is touched.
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  // Empty function for internal use in ControlValueAccessor implementation.
  propagateChange = (_: any) => {};

  // Sets the date in the flatpickr instance from an input value.
  setDateFromInput(date: any) {
    if (this.flatpickrElement?.nativeElement?._flatpickr) {
      this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    }
  }

  // Sets the placeholder for the alt input element in the flatpickr instance.
  setAltInputPlaceholder(placeholder: string) {
    if (this.flatpickrElement?.nativeElement?._flatpickr?.altInput) {
      this.flatpickrElement.nativeElement._flatpickr.altInput.setAttribute('placeholder', placeholder);
    }
  }

  // Lifecycle hook that is called after the view has been initialized.
  ngAfterViewInit() {
    // Merge user-provided config with the default options.
    if (this.config) {
      Object.assign(this.defaultFlatpickrOptions, this.config);
    }
    // Initialize the flatpickr instance.
    if (this.flatpickrElement?.nativeElement?.flatpickr) {
      this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
    }
    // Set the initial date if provided.
    if (this.setDate) {
      this.setDateFromInput(this.setDate);
    }
  }

  // Lifecycle hook called when any data-bound property of a directive changes.
  ngOnChanges(changes: SimpleChanges) {
    if (this.flatpickrElement?.nativeElement?._flatpickr) {
      // Update the date if it has been changed.
      if (changes.hasOwnProperty('setDate') && changes['setDate'].currentValue) {
        this.setDateFromInput(changes['setDate'].currentValue);
      }

      // Update the placeholder for the alt input if it has been changed.
      if (
        this.config &&
        this.config.altInput &&
        changes.hasOwnProperty('placeholder') &&
        changes['placeholder'].currentValue
      ) {
        this.setAltInputPlaceholder(changes['placeholder'].currentValue);
      }
    }
  }

  // Lifecycle hook called when component is destroyed.
  ngOnDestroy() {
    // Clean up flatpickr instance to prevent memory leaks.
    if (this.flatpickrElement?.nativeElement?._flatpickr) {
      this.flatpickrElement.nativeElement._flatpickr.destroy();
    }
  }

  // Callback function to mark the control as touched.
  onFocus(event: any) {
    this.onTouchedFn();
  }
}
