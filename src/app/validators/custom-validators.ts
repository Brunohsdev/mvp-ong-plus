import { AbstractControl, ValidatorFn } from '@angular/forms';

// Validador de CPF
export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cpf = control.value?.replace(/\D/g, '') || '';

    if (!cpf) return null;
    if (cpf.length !== 11) return { cpfInvalido: true };
    if (/^(\d)\1{10}$/.test(cpf)) return { cpfInvalido: true };

    // Cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    const digito1 = (11 - (soma % 11)) >= 10 ? 0 : (11 - (soma % 11));
    if (digito1 !== parseInt(cpf.charAt(9))) return { cpfInvalido: true };

    // Cálculo do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    const digito2 = (11 - (soma % 11)) >= 10 ? 0 : (11 - (soma % 11));
    if (digito2 !== parseInt(cpf.charAt(10))) return { cpfInvalido: true };

    return null;
  };
}

// Validador de CNPJ
export function cnpjValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cnpj = control.value?.replace(/\D/g, '') || '';

    if (!cnpj) return null;
    if (cnpj.length !== 14) return { cnpjInvalido: true };
    if (/^(\d)\1{13}$/.test(cnpj)) return { cnpjInvalido: true };

    // Cálculo do primeiro dígito verificador
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    const digito1 = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    if (digito1 !== parseInt(digitos.charAt(0))) return { cnpjInvalido: true };

    // Cálculo do segundo dígito verificador
    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    const digito2 = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    if (digito2 !== parseInt(digitos.charAt(1))) return { cnpjInvalido: true };

    return null;
  };
}
