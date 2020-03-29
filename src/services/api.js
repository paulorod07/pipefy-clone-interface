export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar NodeJS',
            labels: ['#6376CA'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 2,
            content: 'Fazer interface do Nubank',
            labels: ['#6376CA'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 3,
            content: 'Estudar React Native',
            labels: ['#6376CA'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 4,
            content: 'Estudar NextJS',
            labels: ['#2A964E'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 5,
            content: 'Estudar testes e deploy ReactJS',
            labels: ['#2A964E'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Fazendo clone do Pipefy',
            labels: [],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Estudar sobre Geolocalização e mapas com React Native',
            labels: ['#6376CA'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 8,
            content: 'Estudar testes e deploy ReactJS',
            labels: ['#2A964E'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 9,
            content: 'Corrigir bug na navbar',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Estudar sobre deploy com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Estudar testes no ReactJS',
            labels: ['#2A964E'],
          },
          {
            id: 13,
            content: 'Estudar aplicações Node.js, ReactJS e React Native"',
            labels: ['#6376CA'],
          }
        ]
      },
    ];
  }