// ./projects/example/src/app/components/examples/examples.code.ts
export const basicExampleCode = `
  <ngx-flatpickr-wrapper></ngx-flatpickr-wrapper>
`;

export const exampleOptionsCode = `
  // Flatpickr options for different configurations
  exampleOptions: FlatpickrOptions = {
    defaultDate: new Date()
  };

  <ngx-flatpickr-wrapper [config]="exampleOptions"></ngx-flatpickr-wrapper>
`;

export const examplePlaceholderCode = `
  <ngx-flatpickr-wrapper placeholder="Pick a date!"></ngx-flatpickr-wrapper>
`;

export const exampleDatetimeCode = `
  dateTimeOptions: FlatpickrOptions = {
    enableTime: true
  };

  <ngx-flatpickr-wrapper [config]="dateTimeOptions" placeholder="Pick a datetime!"></ngx-flatpickr-wrapper>
`;

export const exampleRangeCode = `
  dateRangeOptions: FlatpickrOptions = {
    mode: 'range',
    weekNumbers: true
  };

  <ngx-flatpickr-wrapper [config]="dateRangeOptions" placeholder="Pick a date!"></ngx-flatpickr-wrapper>
`;

export const exampleDateDynamic = `
  // FormGroup for date picker form control
  form: FormGroup;

  // Used for setting a random date in the date picker
  interval: any;
  randomDate: Date = new Date();

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

  <ngx-flatpickr-wrapper [setDate]="randomDate" formControlName="date"></ngx-flatpickr-wrapper>
`;
