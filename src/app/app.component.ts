import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CepSearchComponent } from "./cep-search/cep-search.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CepSearchComponent, HttpClientModule],
  template: `
    <app-cep-search></app-cep-search>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "conversor-simples";
}
