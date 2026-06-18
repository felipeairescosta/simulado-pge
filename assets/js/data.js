const RADAR=[
  ['Constitucional','controle de constitucionalidade','Alta','jurisprudência + competência + efeitos'],['Constitucional','direitos fundamentais','Alta','colisão, proporcionalidade e aplicação imediata'],['Administrativo','licitações e contratos','Alta','Lei 14.133/2021 e controle'],['Administrativo','responsabilidade civil do Estado','Alta','nexo, excludentes, omissão e regresso'],['Administrativo','improbidade administrativa','Alta','Lei 14.230/2021 + STF'],['Tributário','crédito tributário','Alta','lançamento, suspensão, extinção e exclusão'],['Tributário','execução fiscal','Alta','LEF + prescrição intercorrente + garantias'],['Processo Civil','Fazenda Pública em juízo','Alta','prazos, remessa, tutela e cumprimento'],['Processo Civil','recursos','Alta','cabimento, efeitos e precedentes'],['Financeiro','precatórios','Alta','ordem cronológica, RPV e regime constitucional'],['Financeiro','LRF e orçamento','Média','responsabilidade fiscal e despesa pública'],['Civil','prescrição e decadência','Média','distinções e Fazenda Pública'],['Ambiental','responsabilidade ambiental','Média','objetiva, solidária e reparação'],['Trabalho','terceirização e Administração Pública','Média','responsabilidade subsidiária e prova'],['Previdenciário','seguridade social','Média','regimes, financiamento e benefícios']
];

const CHECKLIST={
  'Direito Constitucional':['Controle de constitucionalidade','Direitos fundamentais','Organização do Estado','Administração Pública na Constituição','Processo legislativo','Funções essenciais à justiça'],
  'Direito Administrativo':['Atos administrativos','Poderes administrativos','Licitações e contratos','Servidores públicos','Responsabilidade civil do Estado','Improbidade administrativa','Controle da Administração'],
  'Direito Tributário':['Competência tributária','Limitações ao poder de tributar','Crédito tributário','Suspensão e extinção do crédito','Execução fiscal','Processo administrativo tributário'],
  'Direito Financeiro':['Orçamento público','Lei de Responsabilidade Fiscal','Despesa pública','Precatórios','Controle financeiro'],
  'Processo Civil':['Fazenda Pública em juízo','Tutelas provisórias','Recursos','Cumprimento de sentença','Precedentes','Ações coletivas'],
  'Direito Civil':['LINDB','Prescrição e decadência','Responsabilidade civil','Contratos','Bens públicos','Obrigações'],
  'Penal e Processo Penal':['Crimes contra a Administração','Princípios penais','Ação penal','Competência','Provas','Recursos'],
  'Ambiental':['Princípios ambientais','Licenciamento','Responsabilidade ambiental','Unidades de conservação','Dano ambiental'],
  'Trabalho e Processo do Trabalho':['Relação de emprego','Terceirização','Administração Pública trabalhista','Recursos trabalhistas','Execução trabalhista'],
  'Empresarial e Previdenciário':['Sociedades empresárias','Títulos de crédito','Recuperação judicial e falência','Seguridade social','RGPS e RPPS','Benefícios']
};


const SOURCE_CATALOG=[
  {id:'PGE_CE_2021',orgao:'PGE-CE',ano:2021,tipo:'Prova objetiva',formato:'múltipla escolha',questoes:100,url:'https://cdn.cebraspe.org.br/concursos/pge_ce_21/arquivos/635_PGE_CE_001_01.PDF',observacao:'Prova-alvo do projeto; usada para calibragem de edital, pontuação e perfil.'},
  {id:'PGE_AL_2021',orgao:'PGE-AL',ano:2021,tipo:'Prova objetiva',formato:'múltipla escolha',questoes:100,url:'https://cdn.cebraspe.org.br/concursos/pge_al_21_procurador/arquivos/608_PGEAL_001_01.PDF',observacao:'Fonte de temas de teoria constitucional, improbidade, processo e Fazenda Pública.'},
  {id:'PGE_MS_2021',orgao:'PGE-MS',ano:2021,tipo:'Prova preambular objetiva',formato:'múltipla escolha',questoes:100,url:'https://cdn.cebraspe.org.br/concursos/pge_ms_21_procurador/arquivos/636_PGEMS_001_01.PDF',observacao:'Fonte de temas de classificação constitucional, execução fiscal e recuperação judicial.'},
  {id:'PGE_SE_2023',orgao:'PGE-SE',ano:2023,tipo:'Prova objetiva',formato:'múltipla escolha',questoes:100,url:'https://cdn.cebraspe.org.br/concursos/pge_se_23_procurador/arquivos/898_PGE_SE_001_01.PDF',observacao:'Fonte de temas de fontes do direito administrativo, ambiental e processo penal.'},
  {id:'PGE_RN_2023',orgao:'PGE-RN',ano:2024,tipo:'Prova objetiva',formato:'múltipla escolha',questoes:100,url:'https://cdn.cebraspe.org.br/concursos/pge_rn_23_procurador/arquivos/932_PGE_RN_PROCURADOR_001_01.PDF',observacao:'Fonte de temas de advocacia pública, LINDB, LRF e competências institucionais.'},
  {id:'PGE_PR_2024',orgao:'PGE-PR',ano:2024,tipo:'Prova objetiva',formato:'múltipla escolha',questoes:100,url:'https://cdn.cebraspe.org.br/concursos/pge_pr_24_procurador/arquivos/007_PGEPR_001_01.PDF',observacao:'Fonte de temas de rigidez constitucional, arbitragem, precedentes e execução fiscal.'},
  {id:'PGE_PI_2025',orgao:'PGE-PI',ano:2025,tipo:'Prova objetiva',formato:'múltipla escolha',questoes:100,url:'https://cdn.cebraspe.org.br/concursos/pge_pi_25/arquivos/092_PGEPI_001_01.pdf',observacao:'Fonte de temas de direito estadual, previdenciário, licitações e sanções.'},
  {id:'PGE_ES_2025',orgao:'PGE-ES',ano:2025,tipo:'Prova preambular objetiva',formato:'múltipla escolha',questoes:100,url:'https://cdn.cebraspe.org.br/concursos/pge_es_25_procurador/arquivos/B74D957199F41F1F09471843AFEE009AE57464FCB4EF02AA9684E2E2206FD832.pdf',observacao:'Fonte de temas de interpretação constitucional, licitações, trabalhista e tributário.'}
];

const SOURCE_NOTES=[
  'Base atualizada por análise temática de provas oficiais Cebraspe de Procuradorias estaduais.',
  'As questões adicionadas são autorais/adaptadas por tema e padrão de cobrança; não há reprodução integral de enunciados oficiais.',
  'Use o campo “Prova-base” para filtrar questões inspiradas em determinada prova já aplicada.'
];
