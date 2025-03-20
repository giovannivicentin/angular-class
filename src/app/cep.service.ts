import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

@Injectable({
  providedIn: "root",
})
export class CepService {
  private apiUrl = "https://viacep.com.br/ws";

  constructor(private http: HttpClient) {}

  buscarCep(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`${this.apiUrl}/${cep}/json/`);
  }
}
