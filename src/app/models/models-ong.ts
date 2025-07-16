export interface Ong {
    id?: number;
    nomeFantasia: string;      
    razaoSocial: string;       
    cnpj: string;
    email: string;
    telefone: string;
    endereco: {
      rua: string;
      numero: string;
      complemento?: string;
      bairro: string;
      cidade: string;
      estado: string;
      cep: string;
    };
    descricao: string;          
    representanteNome: string;   
    representanteCpf: string;
    senha: string;               
    dataCadastro?: Date;
  }
  