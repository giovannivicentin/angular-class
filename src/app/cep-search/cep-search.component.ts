import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CepService, Cep } from "../cep.service";

@Component({
  selector: "app-cep-search",
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: "./cep-search.component.html",
  styleUrls: ["./cep-search.component.css"],
})
export class CepSearchComponent {
  cepInput: string = "";
  cepResult?: Cep;
  errorMessage: string = "";

  constructor(private cepService: CepService) {}

  onSearch(): void {
    this.errorMessage = "";
    if (!this.cepInput) {
      this.errorMessage = "Por favor, insira um CEP válido.";
      return;
    }
    this.cepService.buscarCep(this.cepInput).subscribe({
      next: (data) => {
        if (data.erro) {
          this.errorMessage = "CEP não encontrado.";
          this.cepResult = undefined;
        } else {
          this.cepResult = data;
        }
      },
      error: (error) => {
        this.errorMessage = "Erro ao consultar o CEP.";
        console.error(error);
      },
    });
  }
}
