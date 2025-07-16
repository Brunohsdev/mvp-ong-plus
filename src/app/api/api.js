const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Banco de dados em memória (simulado)
let usuarios = [];
let ongs = [];

app.use(cors());
app.use(express.json());

// Middleware de log para depuração
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Endpoint de campanhas (existente)
app.get("/campanhas", (req, res) => {
  try {
    const campanhas = [
      // ... seus dados de campanhas existentes ...
    ];
    return res.status(200).json({ campanhas });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao recuperar campanhas.",
      error: String(error)
    });
  }
});

// Novo endpoint - Cadastro de Usuário
app.post('/usuarios', (req, res) => {
  try {
    const { nome, email, cpf, senha } = req.body;

    // Validação simples
    if (!nome || !email || !cpf || !senha) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    // Verifica se usuário já existe
    if (usuarios.some(u => u.email === email || u.cpf === cpf)) {
      return res.status(409).json({ error: 'Usuário já cadastrado' });
    }

    const novoUsuario = {
      id: usuarios.length + 1,
      nome,
      email,
      cpf,
      senha, // Na prática, armazene hash da senha
      tipo: 'doador'
    };

    usuarios.push(novoUsuario);
    return res.status(201).json(novoUsuario);

  } catch (error) {
    return res.status(500).json({ error: 'Erro no cadastro' });
  }
});

// Novo endpoint - Cadastro de ONG
app.post('/ongs', (req, res) => {
  try {
    const { razaoSocial, cnpj, email, senha } = req.body;

    if (!razaoSocial || !cnpj || !email || !senha) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    if (ongs.some(o => o.email === email || o.cnpj === cnpj)) {
      return res.status(409).json({ error: 'ONG já cadastrada' });
    }

    const novaOng = {
      id: ongs.length + 1,
      razaoSocial,
      cnpj,
      email,
      senha,
      tipo: 'ong'
    };

    ongs.push(novaOng);
    return res.status(201).json(novaOng);

  } catch (error) {
    return res.status(500).json({ error: 'Erro no cadastro' });
  }
});

// Novo endpoint - Login
app.post('/login', (req, res) => {
  try {
    const { email, senha } = req.body;

    // Procura em usuários
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) return res.json(usuario);

    // Procura em ONGs
    const ong = ongs.find(o => o.email === email && o.senha === senha);
    if (ong) return res.json(ong);

    return res.status(401).json({ error: 'Credenciais inválidas' });

  } catch (error) {
    return res.status(500).json({ error: 'Erro no login' });
  }
});

// Servir imagens estáticas
app.use('/img', express.static(__dirname + '/img'));

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
