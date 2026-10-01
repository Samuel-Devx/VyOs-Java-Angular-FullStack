<div align="center">

# VyOS

**ERP interno da [VyCode](https://github.com/Samuel-Devx) para gestão de clientes, contratos, propostas, tarefas e projetos.**

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Java](https://img.shields.io/badge/Java-Spring%20Boot-6DB33F?logo=springboot&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-PrimeNG-DD0031?logo=angular&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-em%20andamento-2496ED?logo=docker&logoColor=white)

</div>

>  **Projeto em desenvolvimento.** A estrutura, as telas e os endpoints podem mudar a qualquer momento, e nem tudo descrito aqui está pronto. A seção [Roadmap](#-roadmap) mostra o que já existe e o que está planejado.

---

##  Sobre o projeto

O **VyOS** é o sistema de gestão interno da **VyCode**, empresa de tecnologia de Resende/RJ que desenvolve sites, sistemas e automações para negócios locais. A ideia é centralizar a operação da empresa em um só lugar: relacionamento com clientes, contratos e propostas, além da organização de tarefas e projetos internos.

O backend foi desenhado com **Clean Architecture / DDD**, mantendo o domínio isolado de frameworks e de banco de dados, o que facilita testes e manutenção.

##  Funcionalidades

O menu lateral é dividido em dois grupos:

**Clientes**
- **Dashboard**: visão geral da operação
- **Contatos**: cadastro e listagem de clientes em cards, com status (Ativo/Inativo), edição e exclusão
- **Contratos**: gestão dos contratos firmados com os clientes
- **Propostas**: criação e acompanhamento de propostas comerciais

**VyCode**
- **Tasks**: organização e atribuição de tarefas internas
- **Projects**: acompanhamento dos projetos da empresa
- **Settings**: configurações do sistema

Também fazem parte do projeto:
- **Autenticação**: login com JWT e proteção de rotas *(planejado)*
- **Tratamento global de erros**: respostas de erro padronizadas em toda a API

> Os módulos acima estão em fases diferentes de desenvolvimento. Veja o [Roadmap](#-roadmap).

##  Arquitetura

O backend é dividido em quatro camadas, com as dependências apontando sempre para o domínio:

![Arquitetura do backend VyOS](Arch/Arch-Backend.png.png)

| Camada | Responsabilidade |
|---|---|
| **Interface (API)** | Controllers, rotas, DTOs de entrada/saída, `GlobalExceptionHandler` e Spring Security + JWT. Não conhece o banco nem as regras de negócio. |
| **Application** | Casos de uso (`CreateClientUseCase`, `RegisterFinancialUseCase`, ...) e mappers Entity ↔ DTO. Orquestra o fluxo de negócio. |
| **Domain** | O núcleo: entidades e regras de negócio, sem dependência de Spring ou JPA. |
| **Infrastructure** | Detalhes técnicos: implementação dos repositórios (Spring Data JPA), PostgreSQL, geração/validação de token e configurações. |

##  Tecnologias

**Backend**
- Java + Spring Boot
- Spring Data JPA
- Spring Security + JWT *(planejado)*
- Bean Validation (`spring-boot-starter-validation`)
- Lombok
- PostgreSQL

**Infraestrutura**
- Docker / Docker Compose *(em andamento)*

**Frontend**
- Angular
- PrimeNG 20
- Tailwind CSS
- TypeScript

##  Como rodar localmente

### Pré-requisitos

- Java 17+
- Maven
- Node.js e npm
- PostgreSQL (local ou via Docker)
- Docker e Docker Compose *(opcional)*
- Angular CLI (`npm install -g @angular/cli`)

### Backend

```bash
# 1. Clone o repositório
git clone https://github.com/Samuel-Devx/vyos.git
cd vyos

# 2. Crie o banco no PostgreSQL
#    CREATE DATABASE vyos;

# 3. Configure o acesso ao banco em src/main/resources/application.properties
#    spring.datasource.url=jdbc:postgresql://localhost:5432/vyos
#    spring.datasource.username=SEU_USUARIO
#    spring.datasource.password=SUA_SENHA
#    spring.jpa.hibernate.ddl-auto=update

# 4. Suba a aplicação
./mvnw spring-boot:run
```

A API ficará disponível em `http://localhost:8080`.

### Banco de dados com Docker *(em andamento)*

A containerização do projeto está em andamento. Por enquanto, o banco pode subir em um container em vez de ser instalado na máquina. Exemplo de `docker-compose.yml` (ajuste usuário, senha e nome do banco):

```yaml
services:
  db:
    image: postgres:16
    container_name: vyos-db
    environment:
      POSTGRES_DB: vyos
      POSTGRES_USER: SEU_USUARIO
      POSTGRES_PASSWORD: SUA_SENHA
    ports:
      - "5432:5432"
    volumes:
      - vyos-data:/var/lib/postgresql/data

volumes:
  vyos-data:
```

```bash
docker compose up -d
```

### Frontend

```bash
cd frontend        # ajuste para a pasta do front no seu repositório
npm install
ng serve
```

A aplicação ficará disponível em `http://localhost:4200`.

## Padrão de erros da API

Todas as respostas de erro seguem o mesmo formato. Exemplo de erro de validação (`400`):

```json
{
  "timestamp": "2026-09-30T14:20:00Z",
  "status": 400,
  "code": "VALIDATION_ERROR",
  "message": "Dados inválidos",
  "path": "/api/contatos",
  "fields": [
    { "field": "nome", "message": "Nome deve ter entre 3 e 100 caracteres" }
  ]
}
```

## 🗺️ Roadmap

- [x] Estrutura do backend em Clean Architecture / DDD
- [x] Layout base do frontend com sidebar de navegação
- [x] Tela de Contatos
- [x] Tratamento global de exceções e validação de dados
- [ ] Integração completa do frontend com a API (substituir mocks)
- [ ] Dashboard
- [ ] Contratos
- [ ] Propostas
- [ ] Tasks
- [ ] Projects
- [ ] Settings
- [ ] Autenticação e autorização (Spring Security + JWT)
- [ ] Testes de unidade e integração
- [ ] 🚧 Containerização com Docker (em andamento)
- [ ] Deploy na nuvem (Azure)

##  Contribuição

O projeto é de uso interno e está em fase inicial, mas sugestões e feedbacks são bem-vindos. Abra uma *issue* para conversar.

##  Autor

**Samuel Duarte Alves** (SamukaDev)
Desenvolvedor backend

[![GitHub](https://img.shields.io/badge/GitHub-Samuel--Devx-181717?logo=github)](https://github.com/Samuel-Devx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-samuelduartealves-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samuelduartealves)

---

<div align="center">
Feito pelo <strong>Samuka Dev</strong>
</div>