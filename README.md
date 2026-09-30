# React Fundamentals Lab

Projeto acadêmico desenvolvido para estudar e praticar os conceitos fundamentais do React. A aplicação reúne, em uma única página, uma série de pequenos componentes, cada um demonstrando um recurso específico da biblioteca: imagens e assets, state, renderização de listas, renderização condicional, props, reaproveitamento de componentes, fragments, children, funções passadas por props e elevação de state (lifting state up).

![Tela da aplicação](src/docs/image.png)

---

## Sumário

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Como executar o projeto](#como-executar-o-projeto)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Conceitos abordados](#conceitos-abordados)
  - [1. Imagens: pasta public x src/assets](#1-imagens-pasta-public-x-srcassets)
  - [2. Variável comum x useState](#2-variável-comum-x-usestate)
  - [3. Renderização de listas com map, key e filter](#3-renderização-de-listas-com-map-key-e-filter)
  - [4. Renderização condicional](#4-renderização-condicional)
  - [5. Props](#5-props)
  - [6. Props com destructuring](#6-props-com-destructuring)
  - [7. Reaproveitamento de componentes](#7-reaproveitamento-de-componentes)
  - [8. Renderização de componentes a partir de uma lista](#8-renderização-de-componentes-a-partir-de-uma-lista)
  - [9. Fragment](#9-fragment)
  - [10. Children](#10-children)
  - [11. Funções passadas por props](#11-funções-passadas-por-props)
  - [12. Elevação de state (lifting state up)](#12-elevação-de-state-lifting-state-up)
- [Resumo dos componentes](#resumo-dos-componentes)
- [Aprendizados](#aprendizados)
- [Autor](#autor)

---

## Tecnologias utilizadas

| Tecnologia | Versão | Finalidade |
| --- | --- | --- |
| [React](https://react.dev/) | 19.2 | Biblioteca para construção de interfaces |
| [React DOM](https://react.dev/reference/react-dom) | 19.2 | Renderização dos componentes no navegador |
| [Vite](https://vite.dev/) | 7.3 | Ferramenta de build e servidor de desenvolvimento |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | 5.1 | Suporte a JSX e Fast Refresh no Vite |
| [ESLint](https://eslint.org/) | 9.39 | Análise estática e padronização do código |

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 20.19 ou superior (exigência do Vite 7)
- npm (instalado junto com o Node.js)

Para verificar as versões instaladas:

```bash
node -v
npm -v
```

---

## Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd react-fundamentals-lab-starter
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador em [http://localhost:5173](http://localhost:5173).

---

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com recarregamento automático |
| `npm run build` | Gera a versão otimizada para produção na pasta `dist/` |
| `npm run preview` | Serve localmente o conteúdo gerado pelo build |
| `npm run lint` | Executa o ESLint em todo o projeto |

---

## Estrutura de pastas

```
react-fundamentals-lab-starter/
├── public/
│   ├── img1.jpg                  # Imagem servida diretamente pela raiz (/img1.jpg)
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── city.jpg              # Imagens importadas via JavaScript
│   │   ├── orbital-station.jpg
│   │   ├── orbital-station2.png
│   │   └── react.svg
│   ├── components/
│   │   ├── CarDetails.jsx
│   │   ├── ChangeMessageState.jsx
│   │   ├── ConditionalRender.jsx
│   │   ├── Container.jsx
│   │   ├── ExecuteFunction.jsx
│   │   ├── Fragment.jsx
│   │   ├── ListRender.jsx
│   │   ├── ManageData.jsx
│   │   ├── MessageState.jsx
│   │   └── ShowUserName.jsx
│   ├── docs/
│   │   └── image.png             # Captura de tela usada neste README
│   ├── App.css
│   ├── App.jsx                   # Componente principal que reúne todos os exemplos
│   ├── index.css
│   └── main.jsx                  # Ponto de entrada da aplicação
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## Conceitos abordados

### 1. Imagens: pasta public x src/assets

O projeto mostra as duas formas de trabalhar com imagens em uma aplicação Vite + React.

**Pasta `public`**: os arquivos são servidos como estão, a partir da raiz do site. Basta referenciar o caminho absoluto.

```jsx
<img src="/img1.jpg" alt="Paisagem" />
```

**Pasta `src/assets`**: a imagem é importada como um módulo JavaScript. O Vite processa o arquivo durante o build (gerando nome com hash para controle de cache) e devolve a URL final.

```jsx
import city from "./assets/city.jpg";

<img src={city} alt="Cidade" />
```

### 2. Variável comum x useState

Componente: [ManageData.jsx](src/components/ManageData.jsx)

Demonstra por que o React precisa de state. Uma variável comum pode até ter seu valor alterado, mas o React não é notificado e, portanto, a tela não é atualizada. Já o valor criado com `useState` possui uma função setter que, ao ser chamada, dispara uma nova renderização do componente.

```jsx
let someData = 10;
const [anotherNumber, setAnotherNumber] = useState(15);

<button onClick={() => (someData = 15)}>Mudar variável</button>   // a tela continua mostrando 10
<button onClick={() => setAnotherNumber(20)}>Mudar state</button> // a tela passa a mostrar 20
```

### 3. Renderização de listas com map, key e filter

Componente: [ListRender.jsx](src/components/ListRender.jsx)

- O método `map()` transforma um array de objetos em uma lista de elementos JSX.
- Cada item recebe a prop `key` com um valor único (`user.id`), o que permite ao React identificar quais itens mudaram, foram adicionados ou removidos.
- O botão "Delete random user" sorteia um número e remove o usuário correspondente usando `filter()`, criando um novo array em vez de modificar o existente (princípio da imutabilidade).
- A atualização usa a forma funcional do setter (`setUsers((prevUsers) => ...)`), que garante o acesso ao valor mais recente do state.

```jsx
setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id));

{users.map((user) => (
  <li key={user.id}>
    {user.name} - {user.age} anos
  </li>
))}
```

O total de usuários exibido (`users.length`) é recalculado automaticamente a cada renderização.

### 4. Renderização condicional

Componente: [ConditionalRender.jsx](src/components/ConditionalRender.jsx)

Duas técnicas para exibir conteúdo de acordo com uma condição:

**Operador `&&`**: renderiza o elemento somente se a condição for verdadeira.

```jsx
{x && <p>Se x for true sim!</p>}
```

**Operador ternário**: escolhe entre duas alternativas.

```jsx
{name === "João" ? <p>O nome é João</p> : <p>Nome não encontrado!</p>}
```

O componente [CarDetails.jsx](src/components/CarDetails.jsx) também usa um ternário para indicar se o carro é novo ou usado com base na quilometragem.

### 5. Props

Componente: [ShowUserName.jsx](src/components/ShowUserName.jsx)

Props são os dados que um componente pai envia para um componente filho. Na forma tradicional, o filho recebe um objeto `props` e acessa cada propriedade pelo nome.

```jsx
// App.jsx
<ShowUserName name="Matheus" />

// ShowUserName.jsx
const ShowUserName = (props) => <h2>O nome do usuário é: {props.name}</h2>;
```

### 6. Props com destructuring

Componente: [CarDetails.jsx](src/components/CarDetails.jsx)

A desestruturação extrai as propriedades diretamente na assinatura da função, deixando o código mais limpo e explícito quanto ao que o componente espera receber.

```jsx
const CarDetails = ({ brand, km, color }) => (
  <ul>
    <li>Marca: {brand}</li>
    <li>Kilometragem: {km}</li>
    <li>Cor: {color}</li>
  </ul>
);
```

### 7. Reaproveitamento de componentes

O mesmo componente `CarDetails` é utilizado várias vezes, cada uma com props diferentes, mostrando que um componente funciona como um molde reutilizável.

```jsx
<CarDetails brand="Ford" color="Azul" km={10000} />
<CarDetails brand="VW" color="Vermelho" km={535} />
<CarDetails brand="Fiat" color="Branco" km={0} />
```

### 8. Renderização de componentes a partir de uma lista

Em vez de escrever cada componente manualmente, um array de objetos é percorrido com `map()`, gerando um `CarDetails` para cada item. Esse é o padrão mais comum em aplicações reais, em que os dados costumam vir de uma API.

```jsx
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  // ...
];

{cars.map((car) => (
  <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
))}
```

### 9. Fragment

Componente: [Fragment.jsx](src/components/Fragment.jsx)

Um componente React precisa retornar um único elemento raiz. O Fragment (`<>...</>`) permite agrupar vários elementos irmãos sem adicionar uma `div` extra ao HTML final.

```jsx
return (
  <>
    <div><h2>Temos dois elementos pai</h2></div>
    <div><h2>Este também é</h2></div>
  </>
);
```

### 10. Children

Componente: [Container.jsx](src/components/Container.jsx)

A prop especial `children` representa todo o conteúdo colocado entre a tag de abertura e a de fechamento de um componente. Isso permite criar componentes "envelope", que definem uma estrutura e recebem conteúdo variável.

```jsx
// Container.jsx
const Container = ({ children }) => (
  <div>
    <h1>Conteúdo do componente pai:</h1>
    {children}
  </div>
);

// App.jsx
<Container>
  <p>Eu sou do componente superior</p>
</Container>
```

No projeto, o mesmo `Container` recebe um parágrafo, uma `div` e uma lista, demonstrando a flexibilidade do recurso.

### 11. Funções passadas por props

Componente: [ExecuteFunction.jsx](src/components/ExecuteFunction.jsx)

Funções também podem ser enviadas como props. A função é definida no componente pai e executada pelo filho, por exemplo em resposta a um clique.

```jsx
// App.jsx
function showMessage() {
  console.log("Evento do componente pai");
}

<ExecuteFunction myFunction={showMessage} />

// ExecuteFunction.jsx
<button onClick={myFunction}>Clique em mim</button>
```

Ao clicar no botão, a mensagem aparece no console do navegador.

### 12. Elevação de state (lifting state up)

Componentes: [MessageState.jsx](src/components/MessageState.jsx) e [ChangeMessageState.jsx](src/components/ChangeMessageState.jsx)

Quando dois componentes irmãos precisam compartilhar o mesmo dado, o state é movido para o ancestral comum mais próximo (neste caso, o `App`). A partir dele:

- `MessageState` recebe o valor do state e apenas o exibe.
- `ChangeMessageState` recebe a função que altera o state e a executa ao clicar em um dos botões.

```jsx
// App.jsx
const [message, setMessage] = useState();
const handleMessage = (msg) => setMessage(msg);

<MessageState msg={message} />
<ChangeMessageState handleMessage={handleMessage} />
```

```jsx
// ChangeMessageState.jsx
const messages = ["Oi", "Olá", "Tudo bem?", "Até mais!"];

<button onClick={() => handleMessage(messages[0])}>1</button>
```

Dessa forma, o fluxo de dados continua unidirecional (de cima para baixo), e a comunicação entre irmãos acontece por meio do componente pai.

---

## Resumo dos componentes

| Componente | Conceito principal | Recebe props |
| --- | --- | --- |
| `ManageData` | Variável comum x `useState` | Não |
| `ListRender` | `map()`, `key`, `filter()` e setter funcional | Não |
| `ConditionalRender` | Operador `&&` e ternário | Não |
| `ShowUserName` | Props tradicionais | `name` |
| `CarDetails` | Props com destructuring e reaproveitamento | `brand`, `km`, `color` |
| `Fragment` | Agrupamento sem elemento extra no DOM | Não |
| `Container` | Prop `children` | `children` |
| `ExecuteFunction` | Função passada por props | `myFunction` |
| `MessageState` | Exibição de state elevado | `msg` |
| `ChangeMessageState` | Alteração de state elevado | `handleMessage` |

---

## Aprendizados

- Componentes são funções que retornam JSX e podem ser combinados para montar interfaces complexas.
- Somente alterações de state (ou de props) fazem o React renderizar novamente um componente.
- O state deve ser tratado como imutável: novos valores são criados em vez de modificar os existentes.
- Listas precisam de uma `key` única e estável para cada item.
- Props permitem que o mesmo componente seja reutilizado com dados diferentes.
- `children` e funções via props tornam os componentes mais flexíveis e desacoplados.
- Compartilhar dados entre componentes irmãos exige elevar o state até o ancestral comum.

---

## Autor

**Vitor Cavalcante**

Projeto desenvolvido como atividade acadêmica para estudo dos fundamentos do React.
