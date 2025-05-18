# Avaliação 1 - Programação Orientada a Objetos (POO)

Este projeto simula o controle de missões interplanetárias, com navegação entre planetas, cargas especiais e diferentes tipos de naves espaciais. É uma aplicação desenvolvida para fins didáticos na disciplina de POO.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Executar](#como-executar)
- [Comandos Úteis](#comandos-úteis)
- [Autores](#autores)

---

## Funcionalidades

- Geração aleatória de missões com:
  - Um planeta de destino, com atmosfera e distância específicas
  - Uma nave espacial compatível ao destino
  - Uma carga aceita pelo planeta
- Verificação automática das condições de sucesso da missão (combustível, compatibilidade de escudo, capacidade da nave)
- Relatório detalhado da missão no terminal, informando sucesso ou falha e motivos

---

## Estrutura do Projeto

```
aval1-poo/
│
├── diagrams/                 # Diagramas drawio e PDF
├── src/
│   ├── cargos/               # Tipos de carga
│   ├── mission/              # Lógica principal da missão
│   ├── models/               # Classes abstratas e interfaces
│   ├── planets/              # Tipos de planetas
│   ├── ships/                # Tipos de naves espaciais
│   ├── types/                # Tipos e enums auxiliares
│   └── utils/                # Funções utilitárias
│
├── package.json
├── tsconfig.json
└── README.md                 # Este arquivo
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/) instalado globalmente (opcional, mas recomendado)

---

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Fabricio-Fontenele/aval1-poo.git
   cd aval1-poo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn
   ```

3. **Compile o projeto (se necessário):**
   ```bash
   npx tsc
   ```
   ou, se TypeScript estiver instalado globalmente:
   ```bash
   tsc
   ```

4. **Execute o projeto:**
   ```bash
   node dist/index.js
   ```
   ou, se usar `ts-node`:
   ```bash
   npx ts-node src/index.ts
   ```

O terminal irá exibir o relatório de várias missões simuladas, mostrando planetas, naves, cargas e se a missão foi bem-sucedida ou não.

---

## Comandos Úteis

- **Adicionar mais missões:**  
  Edite o arquivo `src/index.ts` para criar quantas missões desejar, basta instanciar novas `Mission`.

- **Recompilar após alterações:**
   ```bash
   npx tsc
   ```

- **Executar novamente:**
   ```bash
   node dist/index.js
   ```

---

## Autores

- Ruan Pedro de Araujo Anjos
- Denis do Nascimento Rodrigues
- Fabrício Fontenele Vieira

---


## Licença

Projeto acadêmico sem fins lucrativos.
