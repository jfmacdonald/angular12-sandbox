import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <app-sandbox></app-sandbox>
    </div>
  `,
  styles: [
    `
      .container {
        width: max-content;
        min-width: 20rem;
        max-width: 60rem;
        margin: 1.5rem auto;
      }
    `,
  ],
})
export class AppComponent {
  title = "Angular 12 Sandbox";
}
