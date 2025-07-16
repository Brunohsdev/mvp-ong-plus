export interface Doador {
    id?: number;              
    nome: string;
    email: string;
    telefone: string;
    cpf?: string;              
    endereco?: {
      rua: string;
      numero: string;
      complemento?: string;
      bairro: string;
      cidade: string;
      estado: string;
      cep: string;
    };
    senha: string;             
    dataCadastro?: Date;      
    recebeuNewsletter?: boolean;  
  }
  