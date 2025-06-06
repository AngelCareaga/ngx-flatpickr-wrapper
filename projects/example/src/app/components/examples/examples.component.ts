// ./projects/example/src/app/components/examples/examples.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { FlatpickrOptions, NgxFlatpickrWrapperComponent } from '../../../../../ngx-flatpickr-wrapper/src/public-api';
import { ExampleCardComponent } from './example-card/example-card.component';
import {
  basicExampleCode,
  exampleDateDynamic,
  exampleDatetimeCode,
  exampleOptionsCode,
  examplePlaceholderCode,
  exampleRangeCode,
} from './examples.code';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CommonModule, NgxFlatpickrWrapperComponent, ReactiveFormsModule, HighlightModule, ExampleCardComponent],
  template: `
    <main class="bg-white dark:bg-neutral-950 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-display text-neutral-900 dark:text-neutral-50 mb-4">Interactive Examples</h2>
          <p class="text-body text-muted max-w-2xl mx-auto">
            Explore different configurations and see how ngx-flatpickr-wrapper integrates seamlessly with Angular
            reactive forms.
          </p>
        </div>

        <!-- Examples Grid -->
        <div class="space-y-8">
          <app-example-card title="Basic Date Picker" [code]="basicExampleCode" codeId="basicExample">
            <ngx-flatpickr-wrapper addClass="form-input" placeholder="Select a date"> </ngx-flatpickr-wrapper>
          </app-example-card>

          <app-example-card title="With Custom Options" [code]="exampleOptionsCode" codeId="exampleOptions">
            <ngx-flatpickr-wrapper addClass="form-input" [config]="exampleOptions"> </ngx-flatpickr-wrapper>
          </app-example-card>

          <app-example-card title="Custom Placeholder" [code]="examplePlaceholderCode" codeId="examplePlaceholder">
            <ngx-flatpickr-wrapper addClass="form-input" placeholder="Pick your perfect date!"> </ngx-flatpickr-wrapper>
          </app-example-card>

          <app-example-card title="Date & Time Picker" [code]="exampleDatetimeCode" codeId="exampleDatetime">
            <ngx-flatpickr-wrapper addClass="form-input" [config]="dateTimeOptions" placeholder="Select date and time">
            </ngx-flatpickr-wrapper>
          </app-example-card>

          <app-example-card title="Date Range with Week Numbers" [code]="exampleRangeCode" codeId="exampleDaterange">
            <ngx-flatpickr-wrapper addClass="form-input" [config]="dateRangeOptions" placeholder="Choose date range">
            </ngx-flatpickr-wrapper>
          </app-example-card>

          <!-- Special Reactive Forms Example -->
          <div
            class="card-modern p-8 hover-lift animate-fade-in bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20 border-primary-200 dark:border-primary-800"
          >
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3 class="text-heading text-neutral-900 dark:text-neutral-50 mb-2">Reactive Forms Integration</h3>
                <p class="text-small text-muted">
                  Dynamic date updates with Angular reactive forms and real-time validation
                </p>
              </div>
              <div class="flex items-center space-x-2">
                <span
                  class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-caption font-medium"
                >
                  Live Demo
                </span>
                <button (click)="toggleReactiveCode()" class="btn-ghost group">
                  <svg
                    class="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span class="text-small font-medium">
                    {{ isReactiveCodeShown ? 'Hide Code' : 'View Code' }}
                  </span>
                </button>
              </div>
            </div>

            <form (ngSubmit)="onSubmit()" [formGroup]="form" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-small font-medium text-neutral-700 dark:text-neutral-300">
                    Dynamic Date (Updates every second)
                  </label>
                  <ngx-flatpickr-wrapper
                    addClass="form-input"
                    [setDate]="randomDate"
                    formControlName="date"
                    placeholder="Watch it change..."
                  >
                  </ngx-flatpickr-wrapper>
                  <p class="text-caption text-muted">Current value: {{ form.get('date')?.value || 'None selected' }}</p>
                </div>

                <div class="flex flex-col justify-end space-y-4">
                  <div
                    class="flex items-center space-x-3 p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800"
                  >
                    <div class="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                    <span class="text-small text-neutral-600 dark:text-neutral-400">
                      Auto-updating every {{ updateInterval / 1000 }}s
                    </span>
                  </div>

                  <button type="submit" class="btn-primary w-full hover-scale">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Log Form Value
                  </button>
                </div>
              </div>

              @if (isReactiveCodeShown) {
                <div class="rounded-xl overflow-hidden animate-slide-up">
                  <pre
                    class="!m-0"
                  ><code [languages]="['xml', 'typescript']" [highlight]="exampleDateDynamic"></code></pre>
                </div>
              }
            </form>
          </div>
        </div>

        <!-- Additional Resources -->
        <div class="mt-16 text-center animate-fade-in">
          <div class="card-modern p-8 max-w-3xl mx-auto">
            <h3 class="text-heading text-neutral-900 dark:text-neutral-50 mb-4">Need More Configuration Options?</h3>
            <p class="text-body text-muted mb-6">
              Explore the complete flatpickr documentation for advanced features and customization options.
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://chmln.github.io/flatpickr/options/" target="_blank" class="btn-primary hover-scale">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
                Flatpickr Documentation
              </a>
              <a
                href="https://github.com/AngelCareaga/ngx-flatpickr-wrapper/issues"
                target="_blank"
                class="btn-secondary hover-scale"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Report Issues
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
})
export class ExamplesComponent implements OnInit, OnDestroy {
  exampleOptions: FlatpickrOptions = {
    defaultDate: new Date(),
  };

  dateTimeOptions: FlatpickrOptions = {
    enableTime: true,
    time_24hr: false,
  };

  dateRangeOptions: FlatpickrOptions = {
    mode: 'range',
    weekNumbers: true,
  };

  form: FormGroup;
  interval: any;
  randomDate: Date = new Date();
  updateInterval = 1000;
  isReactiveCodeShown = false;

  protected readonly basicExampleCode = basicExampleCode;
  protected readonly exampleOptionsCode = exampleOptionsCode;
  protected readonly examplePlaceholderCode = examplePlaceholderCode;
  protected readonly exampleDatetimeCode = exampleDatetimeCode;
  protected readonly exampleRangeCode = exampleRangeCode;
  protected readonly exampleDateDynamic = exampleDateDynamic;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      date: [''],
    });
  }

  ngOnInit() {
    this.initRandomDateToSet();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onSubmit() {
    const formValue = this.form.value;
    console.log('📅 Form submitted:', formValue);

    // Show a nice visual feedback
    if (typeof window !== 'undefined') {
      const message = formValue.date
        ? `Selected date: ${new Date(formValue.date).toLocaleDateString()}`
        : 'No date selected';
      alert(`✅ ${message}\n\nCheck the console for full form data.`);
    }
  }

  toggleReactiveCode() {
    this.isReactiveCodeShown = !this.isReactiveCodeShown;
  }

  private initRandomDateToSet() {
    this.interval = setInterval(() => {
      this.randomDate = this.getRandomDate(new Date(2020, 0, 1), new Date(), 0, 23);
    }, this.updateInterval);
  }

  private getRandomDate(start: Date, end: Date, startHour: number, endHour: number): Date {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const hour = Math.floor(startHour + Math.random() * (endHour - startHour));
    const minute = Math.floor(Math.random() * 60);
    date.setHours(hour, minute, 0, 0);
    return date;
  }
}
