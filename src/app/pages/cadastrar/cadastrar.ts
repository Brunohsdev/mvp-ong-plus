import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { cpfValidator } from '../../validators/custom-validators';
import { applyCpfMask } from '../../utils/mask';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './cadastrar.html',
  styleUrls: ['./cadastrar.css']
})
export class Cadastrar {
  cadastroForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.cadastroForm = this.fb.group({
      tipo: ['doador'],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, cpfValidator()]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
      }),
      aceiteTermos: [false, Validators.requiredTrue]
    }, {
      validators: this.mustMatch('senha', 'confirmarSenha')
    });
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (matchingControl?.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      control?.value !== matchingControl?.value
        ? matchingControl?.setErrors({ mustMatch: true })
        : matchingControl?.setErrors(null);
    };
  }

 onSubmit() {
  this.submitted = true;
  if (this.cadastroForm.invalid) return;

  this.loading = true;
  this.apiService.cadastrarUsuario(this.cadastroForm.value)
    .subscribe({
      next: (response) => {
        console.log('Cadastro realizado:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.error = error.error?.error || 'Erro no cadastro';
        this.loading = false;
      }
    });
}

  formatarCpf(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = applyCpfMask(input.value);
  }
}
