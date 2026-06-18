# Simulado PGE-CE Cebraspe Interativo v0.6 Modular

Abra `index.html` diretamente no navegador.

## Estrutura

- `index.html`: estrutura principal da aplicação.
- `assets/css/styles.css`: estilos visuais.
- `assets/js/questions.js`: banco de 100 questões.
- `assets/js/data.js`: Radar Cebraspe e checklist do edital.
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
