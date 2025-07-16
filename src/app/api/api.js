app.get("/campanhas", (req, res) => {
    try {
      const campanhas = [
        {
          id: 1,
          titulo: 'Doe sangue, salve vidas',
          descricao: 'Campanha de doação de sangue para hospitais da região.',
          ong: 'Vida+, Saúde',
          categoria: 'saude',
          imagem: 'http://localhost:3001/img/sangue.jpg'
        },
        {
          id: 2,
          titulo: 'Educação para Todos',
          descricao: 'Ajude a fornecer material escolar para crianças carentes.',
          ong: 'Educar ONG',
          categoria: 'educacao',
          imagem: 'http://localhost:3001/img/educacao.jpg'
        },
        {
          id: 3,
          titulo: 'Reflorestamento do Cerrado',
          descricao: 'Participe do plantio de árvores no cerrado baiano.',
          ong: 'Verde Novo',
          categoria: 'meio ambiente',
          imagem: 'http://localhost:3001/img/cerrado.jpg'
        },
        {
          id: 4,
          titulo: 'Acolhimento animal',
          descricao: 'Ajude na vacinação e resgate de animais de rua.',
          ong: 'Pet Feliz',
          categoria: 'animais',
          imagem: 'http://localhost:3001/img/pets.jpg'
        },
        {
          id: 5,
          titulo: 'Tecnologia para inclusão',
          descricao: 'Leve cursos de informática para jovens em situação de vulnerabilidade.',
          ong: 'IncluirTech',
          categoria: 'tecnologia',
          imagem: 'http://localhost:3001/img/inclusao.jpg'
        },
        {
          id: 6,
          titulo: 'Apoio à saúde mental',
          descricao: 'Grupo de apoio gratuito com psicólogos voluntários.',
          ong: 'Mente em Paz',
          categoria: 'saude',
          imagem: 'http://localhost:3001/img/saude-mental.jpg'
        }
      ];
  
      return res.status(200).json({ campanhas });
  
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao recuperar campanhas.",
        error: String(error)
      });
    }
  });
  