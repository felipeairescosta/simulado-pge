# Simulado PGE-CE Cebraspe Interativo v0.7 Modular

Abra `index.html` diretamente no navegador.

## Estrutura

- `index.html`: estrutura principal da aplicação.
- `assets/css/styles.css`: estilos visuais.
- `assets/js/questions.js`: banco de 100 questões.
- `assets/js/data.js`: Radar Cebraspe, checklist do edital e fontes analisadas.
- `assets/js/app.js`: lógica da aplicação, correção, histórico, exportação e navegação.

## Como manter

- Para adicionar ou revisar questões, edite apenas `assets/js/questions.js`.
- Para alterar o Radar Cebraspe ou o checklist, edite `assets/js/data.js`.
- Para mudar comportamento da aplicação, edite `assets/js/app.js`.
- Para mudar aparência, edite `assets/css/styles.css`.


## v0.6 — atualização por provas Cebraspe de Procuradorias

Esta versão acrescenta:

- catálogo de provas oficiais Cebraspe analisadas: PGE-CE 2021, PGE-AL 2021, PGE-MS 2021, PGE-SE 2023, PGE-RN 2023, PGE-PR 2024, PGE-PI 2025 e PGE-ES 2025;
- filtro por “prova-base” no topo do sistema;
- modal “Provas Cebraspe analisadas”, com links oficiais para os cadernos de prova;
- exportação CSV das fontes oficiais analisadas;
- ampliação do banco de 100 para 130 questões autorais, com metadados de prova-base, disciplina, tema, dificuldade e perfil Cebraspe.

Observação: as questões novas são autorais e adaptadas por tema/padrão de cobrança. Os cadernos oficiais foram usados para análise de incidência temática e estilo, sem transcrição integral dos enunciados e alternativas oficiais.


## Atualização v0.6

- O cronômetro não inicia automaticamente ao abrir o arquivo.
- Clique em **Iniciar simulado** para ativar a contagem regressiva e o tempo por questão.


## Atualização v0.7 — Pareto 80/20

Esta versão acrescenta:

- botão **Pareto 80/20** no painel lateral;
- análise de concentração de erros por tema;
- priorização automática cruzando incidência Cebraspe, erros, brancos e marcações do usuário;
- plano de revisão 80/20 no relatório final;
- tabela com prioridade máxima/alta/média por tema;
- exportação CSV do Pareto;
- histórico de tentativas com temas Pareto prioritários.

Critério de priorização: tema muito cobrado + baixo desempenho + erro/branco/marcação = prioridade mais alta.
