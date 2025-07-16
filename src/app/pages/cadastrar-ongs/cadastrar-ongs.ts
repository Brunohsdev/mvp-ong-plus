import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service.js';
import { Router } from '@angular/router';
import { cnpjValidator } from '../../validators/custom-validators.js';
import { applyCnpjMask } from '../../utils/mask.js';

@Component({
  selector: 'app-cadastrar-ongs',
  imports: [],
  templateUrl: './cadastrar-ongs.html',
  styleUrls: ['./cadastrar-ongs.css']
})
export class CadastrarOngs {
  cadastroForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  areasAtuacao = [
    'Educação',
    'Saúde',
    'Meio Ambiente',
    'Direitos Humanos',
    'Animais',
    'Cultura',
    'Assistência Social'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.cadastroForm = this.formBuilder.group({
      tipo: ['ong'],
      razaoSocial: ['', [Validators.required, Validators.minLength(3)]],
      nomeFantasia: ['', [Validators.required]],
      cnpj: ['', [Validators.required, cnpjValidator()]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      responsavel: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
      endereco: this.formBuilder.group({
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
      descricao: ['', Validators.required],
      areasAtuacao: [[], [Validators.required, Validators.minLength(1)]],
      aceiteTermos: [false, Validators.requiredTrue]
    }, {
      validator: this.mustMatch('senha', 'confirmarSenha')
    });
  }

mustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.get(controlName); // Use .get() em vez de .controls[]
    const matchingControl = formGroup.get(matchingControlName);

    if (!control || !matchingControl) return;

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

  formatarCnpj(event: any) {
    const cnpj = event.target.value;
    event.target.value = applyCnpjMask(cnpj);
  }

  onAreaChange(event: any, area: string) {
    const areas: string[] = this.cadastroForm.get('areasAtuacao')?.value || [];

    if (event.target.checked) {
      if (!areas.includes(area)) {
        areas.push(area);
      }
    } else {
      const index = areas.indexOf(area);
      if (index >= 0) {
        areas.splice(index, 1);
      }
    }

    this.cadastroForm.get('areasAtuacao')?.setValue(areas);
  }

  get f() { return this.cadastroForm.controls; }

  onSubmit() {
  this.submitted = true;
  if (this.cadastroForm.invalid) return;

  this.loading = true;
  this.apiService.cadastrarOng(this.cadastroForm.value)
    .subscribe({
      next: (response) => {
        console.log('ONG cadastrada:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.error = error.error?.error || 'Erro no cadastro';
        this.loading = false;
      }
    });
}
}
