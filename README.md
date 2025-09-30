# 📚 StudyLog - Gerenciador de Sessões de Estudo (CP5 - 1TDSPX)

---

## 🎯 Objetivo do Projeto

O StudyLog é uma aplicação web desenvolvida em **React** e **TypeScript**. O objetivo é permitir que o usuário **registre, monitore e visualize** suas sessões de estudo, gerenciando informações como o assunto, a duração em minutos e anotações relevantes.

## 📄 Páginas

### Páginas de Roteamento Existentes
O projeto possui as seguintes rotas e páginas principais:
* **404:** Página de erro (Não Encontrado).
* **home:** Página inicial que lista todas as sessões de estudo.
* **sessao-add:** Página com o formulário para adicionar um novo registro de sessão.
* **study-details:** Página que exibe os detalhes de uma sessão específica.


| Hook | Local de Uso | Finalidade |
| :--- | :--- | :--- |
| **`useMemo`** | `session-context.tsx` | Utilizado para **calcular as estatísticas** (`totalSessions`, `totalMinutes`, `averageMinutes`) apenas quando a lista de sessões (`sessions`) muda. |
| **`useCallback`** | `session-context.tsx` | Utilizado para **memoizar a função `addSession`**, evitando que ela seja recriada a cada renderização do provedor. |


## 🧑‍💻 Membros da Equipe

Abaixo estão os membros do grupo e seus respectivos RMs e perfis no GitHub:

| Nome Completo | RM | GitHub |
| :--- | :--- | :--- |
| **Anthony De Souza Henriques** | RM566188 | [Anthony566188](https://github.com/Anthony566188) |
| **Guilherme Santos Fonseca** | RM564232 | [guifo2604](https://github.com/guifo2604) |
| **Gustavo Araujo Da Silva** | RM566526 | [gustavoDev02](https://github.com/gustavoDev02) |

---

## 🛠️ Divisão de Responsabilidades

### Anthony De Souza Henriques (RM566188)
Anthony foi responsável pela criação do **Estado Global** e pela **Integração de Componentes e Páginas**.
* **Tipagem e Contexto:**
    * Criação do `type session-context-type`.
    * Criação dos componentes de Contexto: `error-boundary`, `session-context-pure`, e `session-context`.
    * Criação do *hook* customizado `use-sessions`.
    * Ajustes finais de tipagem no `type: study-session`.
* **Implementação e Integração:**
    * Implementação e ajuste do componente `study-card`.
    * Implementação e lógica das páginas: `home`, `sessao-add` e `detalhes-sessao`.

### Guilherme Santos Fonseca (RM564232)
Guilherme focou na criação da **Estrutura Base e Páginas de Roteamento**.
* Criação do componente de **Layout** (`layout`).
* Criação de Páginas de Roteamento essenciais: `404`, `detalhes-sessao`, `home`, e `sessao-add`.
* Implementação da *fallback UI* para o carregamento (**Loading**).

### Gustavo Araujo Da Silva (RM566526)
Gustavo concentrou-se na **Definição de Tipos e Componentes de Exibição de Dados**.
* Criação do `type study-session` (Tipagem principal do objeto de estudo).
* Criação do componente de listagem de cards: `study-list`.
* Criação do componente de exibição de dados: `study-card`.
* Criação da página de detalhes alternativa: `study-details`.
* Criação da **Lista de Sessões**.

---

## 🚀 Como Rodar o Projeto

1.  Clone o repositório:
    ```bash
    git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd cp5-front
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

O aplicativo estará disponível em `http://localhost:5173/` (ou na porta indicada pelo seu terminal).
