import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatpickrOptions, NgxFlatpickrWrapperComponent } from '../../../ngx-flatpickr-wrapper/src/public-api';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import {
  basicExampleCode,
  exampleDateDynamic,
  exampleDatetimeCode,
  exampleOptionsCode,
  examplePlaceholderCode,
  exampleRangeCode,
} from './examples.code';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxFlatpickrWrapperComponent, ReactiveFormsModule, HighlightModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  // Flatpickr options for different configurations
  exampleOptions: FlatpickrOptions = {
    defaultDate: new Date(),
  };

  dateTimeOptions: FlatpickrOptions = {
    enableTime: true,
  };

  dateRangeOptions: FlatpickrOptions = {
    mode: 'range',
    weekNumbers: true,
  };

  // FormGroup for date picker form control
  form: FormGroup;

  // Used for setting a random date in the date picker
  interval: any;
  randomDate: Date = new Date();

  // Used for displaying the code examples
  codeShown: Set<string> = new Set();

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form group
    this.form = formBuilder.group({
      date: '',
    });
  }

  ngOnInit() {
    // Initialize the random date setting process
    this.initRandomDateToSet();
  }

  ngOnDestroy() {
    // Clear interval when component is destroyed to prevent memory leaks
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // Handler for form submission
  onSubmit() {
    console.log(this.form.value);
  }

  // Initializes the interval to set a random date
  private initRandomDateToSet() {
    this.interval = setInterval(() => {
      this.randomDate = this.getRandomDate(new Date(2000, 0, 1), new Date(), 0, 23);
    }, 1000);
  }

  // Generates a random date within specified bounds
  private getRandomDate(start: Date, end: Date, startHour: number, endHour: number): Date {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const hour = Math.floor(startHour + Math.random() * (endHour - startHour));
    date.setHours(hour);
    return date;
  }

  // Toggles the code example display
  toggleCode(codeId: string) {
    if (this.codeShown.has(codeId)) {
      this.codeShown.delete(codeId);
    } else {
      this.codeShown.add(codeId);
    }
  }

  protected readonly basicExampleCode = basicExampleCode;
  protected readonly exampleOptionsCode = exampleOptionsCode;
  protected readonly examplePlaceholderCode = examplePlaceholderCode;
  protected readonly exampleDatetimeCode = exampleDatetimeCode;
  protected readonly exampleRangeCode = exampleRangeCode;
  protected readonly exampleDateDynamic = exampleDateDynamic;
}
