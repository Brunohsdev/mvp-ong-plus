import { AbstractControl, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cpf = control.value?.replace(/\D/g, '') || '';
    
    if (!cpf) return null; // Se estiver vazio, não retorna erro (required já trata)
    
    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) {
      return { cpfInvalido: true };
    }
    
    // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) {
      return { cpfInvalido: true };
    }
    
    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    const digito1 = resto >= 10 ? 0 : resto;
    
    if (digito1 !== parseInt(cpf.charAt(9))) {
      return { cpfInvalido: true };
    }
    
    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    const digito2 = resto >= 10 ? 0 : resto;
    
    if (digito2 !== parseInt(cpf.charAt(10))) {
      return { cpfInvalido: true };
    }
    
    return null; // CPF válido
  };
}