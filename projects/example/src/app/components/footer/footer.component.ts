// ./projects/example/src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer
      class="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Project Info -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center"
              >
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-heading text-neutral-900 dark:text-neutral-50">ngx-flatpickr-wrapper</h3>
            </div>

            <p class="text-body text-muted mb-6 max-w-md">
              A lightweight Angular wrapper for flatpickr, providing seamless integration with reactive forms and modern
              Angular applications.
            </p>

            <div class="flex flex-wrap gap-3">
              @for (tech of techStack; track tech) {
                <span
                  class="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-caption font-medium"
                >
                  {{ tech }}
                </span>
              }
            </div>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="text-small font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Resources</h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="https://github.com/AngelCareaga/ngx-flatpickr-wrapper"
                  target="_blank"
                  class="text-small text-muted hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center space-x-2 group"
                >
                  <svg
                    class="w-4 h-4 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/ngx-flatpickr-wrapper"
                  target="_blank"
                  class="text-small text-muted hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center space-x-2 group"
                >
                  <svg
                    class="w-4 h-4 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 5.183H13.82v5.895h-3.564V10.525H5.113L5.13 5.323z"
                    />
                  </svg>
                  <span>NPM Package</span>
                </a>
              </li>
              <li>
                <a
                  href="https://chmln.github.io/flatpickr/options/"
                  target="_blank"
                  class="text-small text-muted hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center space-x-2 group"
                >
                  <svg
                    class="w-4 h-4 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Community -->
          <div>
            <h4 class="text-small font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Community</h4>
            <ul class="space-y-3">
              <li>
                <span class="text-small text-muted flex items-start space-x-2">
                  <svg class="w-4 h-4 mt-0.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Built by
                    <a
                      href="https://angelcareaga.com"
                      target="_blank"
                      class="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      Angel Careaga
                    </a>
                  </span>
                </span>
              </li>
              <li>
                <span class="text-small text-muted flex items-start space-x-2">
                  <svg class="w-4 h-4 mt-0.5 text-warning-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <span>
                    Inspired by
                    <a
                      href="https://github.com/mezoistvan/ng2-flatpickr"
                      target="_blank"
                      class="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      ng2-flatpickr
                    </a>
                  </span>
                </span>
              </li>
              <li>
                <span class="text-small text-muted">by Mező István</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="flex items-center space-x-6">
              <span class="text-small text-muted"> © {{ currentYear }} MIT License </span>
              <span class="text-small text-muted"> Angular 17-20 Compatible </span>
            </div>

            <div class="flex items-center space-x-4">
              <span class="text-caption text-muted"> Made with ❤️ for the Angular community </span>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span class="text-caption text-success-600 dark:text-success-400 font-medium">
                  Actively maintained
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  techStack = ['angular', 'typescript', 'flatpickr', 'reactive-forms', 'datepicker', 'timepicker', 'calendar'];
}
