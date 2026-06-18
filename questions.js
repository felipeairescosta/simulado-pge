const QUESTION_BANK = [
  {
    "d": "Constitucional",
    "t": "controle concentrado de constitucionalidade",
    "diff": "Difícil",
    "profile": "jurisprudência + distinção conceitual",
    "q": "Sobre controle concentrado de constitucionalidade, assinale a alternativa correta.",
    "a": [
      "A decisão de mérito em ação direta possui, como regra, eficácia contra todos e efeito vinculante em relação ao Poder Judiciário e à administração pública.",
      "A decisão vincula apenas as partes do processo objetivo.",
      "A modulação de efeitos é sempre vedada quando há inconstitucionalidade.",
      "Governador de Estado não possui legitimidade ativa para ADI."
    ],
    "c": 0,
    "e": "No controle concentrado, há eficácia erga omnes e efeito vinculante, admitida modulação em hipóteses qualificadas."
  },
  {
    "d": "Constitucional",
    "t": "controle difuso de constitucionalidade",
    "diff": "Médio",
    "profile": "teoria constitucional",
    "q": "Sobre controle difuso de constitucionalidade, assinale a alternativa correta.",
    "a": [
      "A decisão incidental sempre elimina a lei do ordenamento com eficácia universal automática.",
      "A inconstitucionalidade pode ser reconhecida incidentalmente em processo subjetivo, observadas as regras de competência e, nos tribunais, a cláusula de reserva de plenário.",
      "Juiz singular não pode deixar de aplicar lei inconstitucional no caso concreto.",
      "A reserva de plenário é exigida para todo ato de interpretação conforme, ainda que não haja afastamento de norma."
    ],
    "c": 1,
    "e": "O controle difuso ocorre incidentalmente; em tribunal, a reserva de plenário incide quando se afasta lei ou ato normativo por inconstitucionalidade."
  },
  {
    "d": "Constitucional",
    "t": "repartição de competências legislativas",
    "diff": "Médio",
    "profile": "competências constitucionais",
    "q": "Sobre repartição de competências legislativas, assinale a alternativa correta.",
    "a": [
      "A competência concorrente impede os Estados de legislar quando não houver lei federal.",
      "Matéria de competência privativa da União nunca admite autorização por lei complementar.",
      "Na competência concorrente, cabe à União editar normas gerais e aos Estados suplementá-las.",
      "Municípios não possuem competência para legislar sobre interesse local."
    ],
    "c": 2,
    "e": "A Constituição admite normas gerais da União e suplementação estadual; inexistindo norma geral, pode haver competência plena estadual."
  },
  {
    "d": "Constitucional",
    "t": "direitos fundamentais e proporcionalidade",
    "diff": "Difícil",
    "profile": "aplicabilidade + ponderação",
    "q": "Sobre direitos fundamentais e proporcionalidade, assinale a alternativa correta.",
    "a": [
      "Todo direito fundamental é absoluto e insuscetível de restrição.",
      "Direitos fundamentais vinculam apenas particulares, e não o poder público.",
      "A aplicação imediata dispensa interpretação sistemática da Constituição.",
      "Os direitos fundamentais têm aplicação imediata, sem impedir conformações legais e ponderação em colisões concretas."
    ],
    "c": 3,
    "e": "A aplicação imediata não elimina ponderação, interpretação sistemática nem eventuais restrições proporcionais."
  },
  {
    "d": "Constitucional",
    "t": "mandado de segurança",
    "diff": "Médio",
    "profile": "remédios constitucionais",
    "q": "Sobre mandado de segurança, assinale a alternativa correta.",
    "a": [
      "O mandado de segurança protege direito líquido e certo não amparado por habeas corpus ou habeas data, diante de ilegalidade ou abuso de poder.",
      "O mandado de segurança substitui ação de cobrança em qualquer hipótese.",
      "O mandado de segurança exige dilação probatória complexa.",
      "O habeas corpus é o instrumento próprio para acesso a informações pessoais em banco de dados público."
    ],
    "c": 0,
    "e": "O MS exige prova pré-constituída e não substitui ação ordinária quando necessária dilação probatória ampla."
  },
  {
    "d": "Constitucional",
    "t": "ação popular",
    "diff": "Médio",
    "profile": "remédios constitucionais",
    "q": "Sobre ação popular, assinale a alternativa correta.",
    "a": [
      "Pessoa jurídica é legitimada ordinária para ação popular.",
      "A ação popular pode ser proposta por cidadão para anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente ou ao patrimônio histórico e cultural.",
      "A ação popular serve exclusivamente para tutela de liberdade de locomoção.",
      "A ação popular exige prévia autorização do Ministério Público para ajuizamento."
    ],
    "c": 1,
    "e": "A legitimidade ativa é do cidadão; a ação popular tutela bens constitucionalmente protegidos."
  },
  {
    "d": "Constitucional",
    "t": "advocacia pública estadual",
    "diff": "Médio",
    "profile": "literalidade constitucional",
    "q": "Sobre advocacia pública estadual, assinale a alternativa correta.",
    "a": [
      "A advocacia pública estadual integra organicamente o Ministério Público.",
      "A Defensoria Pública substitui a Procuradoria do Estado na representação judicial ordinária do ente público.",
      "Os procuradores dos Estados exercem representação judicial e consultoria jurídica das respectivas unidades federadas.",
      "A Constituição veda consultoria jurídica por procuradorias estaduais."
    ],
    "c": 2,
    "e": "A Constituição insere a Advocacia Pública entre as funções essenciais à justiça, com representação e consultoria do ente."
  },
  {
    "d": "Constitucional",
    "t": "intervenção federal",
    "diff": "Difícil",
    "profile": "organização do Estado",
    "q": "Sobre intervenção federal, assinale a alternativa correta.",
    "a": [
      "A intervenção federal pode ser decretada livremente por conveniência política do Presidente da República.",
      "A intervenção federal extingue a autonomia estadual de forma definitiva.",
      "Municípios podem decretar intervenção federal nos Estados.",
      "A intervenção federal é medida excepcional, sujeita às hipóteses e procedimentos constitucionais."
    ],
    "c": 3,
    "e": "A intervenção é excepcional, temporária e vinculada às hipóteses constitucionais."
  },
  {
    "d": "Constitucional",
    "t": "processo legislativo",
    "diff": "Médio",
    "profile": "literalidade + caso prático",
    "q": "Sobre processo legislativo, assinale a alternativa correta.",
    "a": [
      "A sanção presidencial não convalida vício de iniciativa quando a Constituição reserva a iniciativa a órgão ou autoridade específica.",
      "A sanção sempre sana vício formal de iniciativa.",
      "Leis complementares e ordinárias possuem o mesmo quórum de aprovação.",
      "Emenda parlamentar pode alterar projeto sem qualquer pertinência temática."
    ],
    "c": 0,
    "e": "Vício de iniciativa em hipótese constitucionalmente reservada não é sanado por sanção."
  },
  {
    "d": "Constitucional",
    "t": "administração pública constitucional",
    "diff": "Médio",
    "profile": "art. 37 + princípios",
    "q": "Sobre administração pública constitucional, assinale a alternativa correta.",
    "a": [
      "Eficiência substitui legalidade nos atos discricionários.",
      "A administração pública direta e indireta deve observar legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Publicidade autoriza divulgação irrestrita de dados pessoais sensíveis.",
      "Impessoalidade impede toda forma de delegação administrativa."
    ],
    "c": 1,
    "e": "Os princípios do art. 37 são cumulativos; publicidade deve ser compatibilizada com intimidade, sigilo e proteção de dados."
  },
  {
    "d": "Constitucional",
    "t": "servidores públicos",
    "diff": "Difícil",
    "profile": "regime constitucional",
    "q": "Sobre servidores públicos, assinale a alternativa correta.",
    "a": [
      "Servidor estável nunca pode perder o cargo.",
      "Estágio probatório e estabilidade possuem necessariamente o mesmo prazo em todos os regimes.",
      "A estabilidade não impede responsabilização nem perda do cargo nas hipóteses constitucionalmente previstas.",
      "Cargo efetivo pode ser provido ordinariamente sem concurso público."
    ],
    "c": 2,
    "e": "A estabilidade protege contra desligamento arbitrário, mas não impede perda do cargo nos casos constitucionais."
  },
  {
    "d": "Constitucional",
    "t": "controle externo",
    "diff": "Médio",
    "profile": "Tribunais de Contas",
    "q": "Sobre controle externo, assinale a alternativa correta.",
    "a": [
      "Tribunais de Contas integram o Poder Judiciário.",
      "O controle externo é exercido privativamente pelo chefe do Executivo.",
      "O parecer prévio sobre contas de governo substitui sempre o julgamento político pela casa legislativa.",
      "O controle externo é exercido pelo Poder Legislativo com auxílio dos Tribunais de Contas, nos termos da Constituição."
    ],
    "c": 3,
    "e": "A arquitetura constitucional combina Legislativo e Tribunal de Contas, com competências próprias."
  },
  {
    "d": "Administrativo",
    "t": "atos administrativos",
    "diff": "Médio",
    "profile": "teoria geral",
    "q": "Sobre atos administrativos, assinale a alternativa correta.",
    "a": [
      "Presunção de legitimidade, imperatividade e autoexecutoriedade são atributos possíveis dos atos administrativos, conforme sua natureza e previsão jurídica.",
      "Todo ato administrativo é autoexecutório, ainda que haja restrição de direitos sem previsão legal.",
      "Atos administrativos não podem ser anulados pela própria Administração.",
      "Presunção de legitimidade é absoluta e impede controle judicial."
    ],
    "c": 0,
    "e": "A presunção é relativa; autoexecutoriedade depende de lei ou urgência; há autotutela e controle judicial."
  },
  {
    "d": "Administrativo",
    "t": "discricionariedade administrativa",
    "diff": "Difícil",
    "profile": "controle judicial",
    "q": "Sobre discricionariedade administrativa, assinale a alternativa correta.",
    "a": [
      "O Judiciário pode substituir livremente o administrador em qualquer escolha conveniente.",
      "O mérito administrativo não afasta controle judicial de legalidade, finalidade, motivação, razoabilidade e proporcionalidade.",
      "A discricionariedade torna o ato imune a controle.",
      "A ausência de motivação nunca invalida ato discricionário."
    ],
    "c": 1,
    "e": "O controle judicial não substitui conveniência legítima, mas alcança juridicidade e limites do poder discricionário."
  },
  {
    "d": "Administrativo",
    "t": "poder de polícia",
    "diff": "Médio",
    "profile": "conceito + atributos",
    "q": "Sobre poder de polícia, assinale a alternativa correta.",
    "a": [
      "Poder de polícia é sempre atividade jurisdicional.",
      "Sanções de polícia independem de devido processo legal.",
      "O poder de polícia condiciona ou restringe o uso de bens, atividades e direitos em benefício do interesse público, nos termos da lei.",
      "Poder de polícia só pode ser exercido por particulares, por delegação contratual ampla."
    ],
    "c": 2,
    "e": "O poder de polícia é função administrativa, sujeita à legalidade, devido processo e limites de delegação."
  },
  {
    "d": "Administrativo",
    "t": "responsabilidade civil do Estado",
    "diff": "Difícil",
    "profile": "STF/STJ + aplicação",
    "q": "Sobre responsabilidade civil do estado, assinale a alternativa correta.",
    "a": [
      "Responsabilidade objetiva dispensa comprovação de dano.",
      "Culpa exclusiva da vítima não interfere no dever de indenizar.",
      "Toda omissão estatal gera responsabilidade objetiva automática.",
      "A responsabilidade objetiva exige dano, conduta estatal e nexo causal, admitindo excludentes ou atenuantes."
    ],
    "c": 3,
    "e": "Dano e nexo são indispensáveis; excludentes podem afastar a responsabilização."
  },
  {
    "d": "Administrativo",
    "t": "omissão estatal específica",
    "diff": "Difícil",
    "profile": "jurisprudência + caso prático",
    "q": "Sobre omissão estatal específica, assinale a alternativa correta.",
    "a": [
      "A omissão estatal pode gerar responsabilidade quando demonstrado dever jurídico específico de agir e nexo com o dano.",
      "Toda omissão estatal gera responsabilidade sem exame de dever de agir.",
      "O Estado nunca responde por omissão.",
      "Omissão estatal sempre implica responsabilidade penal objetiva."
    ],
    "c": 0,
    "e": "Em omissões, a análise costuma exigir dever específico, falha do serviço e nexo causal, conforme o caso."
  },
  {
    "d": "Administrativo",
    "t": "licitações e contratação direta",
    "diff": "Difícil",
    "profile": "Lei 14.133/2021",
    "q": "Sobre licitações e contratação direta, assinale a alternativa correta.",
    "a": [
      "Dispensa e inexigibilidade se diferenciam apenas pelo valor.",
      "A inexigibilidade decorre de inviabilidade de competição; a dispensa ocorre em hipóteses legais nas quais a licitação é dispensada.",
      "Contratação direta dispensa justificativa de preço.",
      "Inexigibilidade só existe para artistas consagrados."
    ],
    "c": 1,
    "e": "A Lei 14.133/2021 mantém a diferença conceitual e exige instrução adequada do processo de contratação direta."
  },
  {
    "d": "Administrativo",
    "t": "contratos administrativos",
    "diff": "Médio",
    "profile": "Lei 14.133/2021",
    "q": "Sobre contratos administrativos, assinale a alternativa correta.",
    "a": [
      "A Administração nunca pode alterar unilateralmente contratos.",
      "Equilíbrio econômico-financeiro é renunciado automaticamente pelo contratado.",
      "Contratos administrativos podem conter cláusulas exorbitantes, observados os limites legais e o equilíbrio econômico-financeiro.",
      "Todo contrato administrativo é verbal e precário."
    ],
    "c": 2,
    "e": "O regime público admite prerrogativas, mas preserva limites, motivação e equilíbrio econômico-financeiro."
  },
  {
    "d": "Administrativo",
    "t": "improbidade administrativa",
    "diff": "Difícil",
    "profile": "lei especial + elemento subjetivo",
    "q": "Sobre improbidade administrativa, assinale a alternativa correta.",
    "a": [
      "Todo ato ilegal é improbidade automática.",
      "A ação de improbidade possui natureza exclusivamente penal.",
      "Dano presumido basta para condenação sem análise subjetiva.",
      "A improbidade administrativa não se confunde com mera ilegalidade, exigindo preenchimento dos requisitos legais, inclusive elemento subjetivo quando previsto."
    ],
    "c": 3,
    "e": "Após alterações legislativas, a tipicidade e o elemento subjetivo ganharam centralidade na análise da improbidade."
  },
  {
    "d": "Administrativo",
    "t": "processo administrativo",
    "diff": "Médio",
    "profile": "Lei 9.784/1999",
    "q": "Sobre processo administrativo, assinale a alternativa correta.",
    "a": [
      "O processo administrativo deve observar legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório.",
      "Processo administrativo é sempre sigiloso.",
      "Motivação é vedada em atos que restrinjam direitos.",
      "A Administração não pode rever seus próprios atos."
    ],
    "c": 0,
    "e": "A Lei 9.784/1999 consagra princípios de juridicidade, participação e motivação."
  },
  {
    "d": "Administrativo",
    "t": "servidores públicos e PAD",
    "diff": "Difícil",
    "profile": "regime disciplinar",
    "q": "Sobre servidores públicos e pad, assinale a alternativa correta.",
    "a": [
      "Penalidade disciplinar pode ser aplicada sem processo quando a autoridade reputar o fato notório.",
      "A sanção disciplinar deve observar devido processo, contraditório, ampla defesa, tipicidade administrativa e proporcionalidade.",
      "Contraditório é incompatível com processo disciplinar.",
      "A proporcionalidade não se aplica à dosimetria disciplinar."
    ],
    "c": 1,
    "e": "PAD exige garantias processuais e sanção proporcional à infração comprovada."
  },
  {
    "d": "Administrativo",
    "t": "serviços públicos",
    "diff": "Médio",
    "profile": "concessões e permissões",
    "q": "Sobre serviços públicos, assinale a alternativa correta.",
    "a": [
      "A concessão transfere a titularidade do serviço ao concessionário.",
      "Concessionária não se submete a fiscalização do poder concedente.",
      "A concessão de serviço público transfere a execução do serviço ao particular, preservada a titularidade estatal e a regulação do poder concedente.",
      "Serviço concedido jamais pode gerar responsabilidade do Estado."
    ],
    "c": 2,
    "e": "A delegação é de execução; o poder concedente mantém titularidade, fiscalização e regulação."
  },
  {
    "d": "Administrativo",
    "t": "bens públicos",
    "diff": "Médio",
    "profile": "classificação",
    "q": "Sobre bens públicos, assinale a alternativa correta.",
    "a": [
      "Todos os bens públicos são livremente alienáveis.",
      "Bens de uso comum não integram patrimônio público.",
      "Afetação não possui relevância para o regime jurídico do bem.",
      "Bens públicos de uso comum, de uso especial e dominicais possuem regimes jurídicos distintos quanto a afetação, uso e disponibilidade."
    ],
    "c": 3,
    "e": "A classificação influencia alienabilidade, uso e proteção jurídica."
  },
  {
    "d": "Administrativo",
    "t": "desapropriação",
    "diff": "Difícil",
    "profile": "intervenção do Estado na propriedade",
    "q": "Sobre desapropriação, assinale a alternativa correta.",
    "a": [
      "A desapropriação exige fundamento de utilidade pública, necessidade pública ou interesse social, com indenização conforme o regime constitucional aplicável.",
      "Desapropriação sempre dispensa indenização.",
      "A declaração de utilidade pública transfere automaticamente a propriedade.",
      "Desapropriação é ato exclusivamente privado."
    ],
    "c": 0,
    "e": "A desapropriação segue procedimento próprio e regime indenizatório constitucional, com exceções específicas."
  },
  {
    "d": "Financeiro",
    "t": "precatórios e RPV",
    "diff": "Difícil",
    "profile": "Fazenda Pública",
    "q": "Sobre precatórios e rpv, assinale a alternativa correta.",
    "a": [
      "Todo débito judicial estatal é pago imediatamente após o trânsito em julgado.",
      "Débitos judiciais da Fazenda Pública submetem-se, conforme o caso, ao regime de precatórios ou requisições de pequeno valor.",
      "RPV depende sempre de precatório prévio.",
      "Precatórios são matéria exclusivamente infralegal."
    ],
    "c": 1,
    "e": "A Constituição disciplina precatórios e RPV como regimes de pagamento de condenações judiciais contra a Fazenda Pública."
  },
  {
    "d": "Financeiro",
    "t": "responsabilidade fiscal",
    "diff": "Médio",
    "profile": "LRF",
    "q": "Sobre responsabilidade fiscal, assinale a alternativa correta.",
    "a": [
      "Despesa continuada pode ser criada sem impacto orçamentário.",
      "A LRF não se aplica a Estados.",
      "A criação ou expansão de despesa obrigatória de caráter continuado exige estimativa de impacto e demonstração de adequação fiscal.",
      "Renúncia de receita não exige cautelas fiscais."
    ],
    "c": 2,
    "e": "A LRF impõe planejamento e equilíbrio na criação de despesas e renúncias."
  },
  {
    "d": "Financeiro",
    "t": "leis orçamentárias",
    "diff": "Médio",
    "profile": "PPA, LDO e LOA",
    "q": "Sobre leis orçamentárias, assinale a alternativa correta.",
    "a": [
      "PPA, LDO e LOA são sinônimos.",
      "A LOA substitui definitivamente o PPA.",
      "A LDO não possui relação com metas fiscais.",
      "O sistema orçamentário compreende plano plurianual, diretrizes orçamentárias e orçamento anual, com funções constitucionais distintas."
    ],
    "c": 3,
    "e": "Cada instrumento possui função própria: planejamento plurianual, diretrizes e execução anual."
  },
  {
    "d": "Financeiro",
    "t": "créditos adicionais",
    "diff": "Médio",
    "profile": "orçamento público",
    "q": "Sobre créditos adicionais, assinale a alternativa correta.",
    "a": [
      "Créditos adicionais são autorizações de despesa não computadas ou insuficientemente dotadas na lei orçamentária, observadas as categorias legais.",
      "Crédito suplementar independe de autorização legal em qualquer hipótese.",
      "Crédito extraordinário só pode ser aberto para despesas rotineiras previsíveis.",
      "Crédito especial reforça dotação já existente."
    ],
    "c": 0,
    "e": "Créditos adicionais podem ser suplementares, especiais ou extraordinários, com pressupostos distintos."
  },
  {
    "d": "Financeiro",
    "t": "receita pública",
    "diff": "Médio",
    "profile": "classificação orçamentária",
    "q": "Sobre receita pública, assinale a alternativa correta.",
    "a": [
      "Toda receita de capital decorre de tributo.",
      "Receitas públicas podem ser classificadas, entre outros critérios, em correntes e de capital.",
      "Receitas correntes são sempre operações de crédito.",
      "Classificação da receita não possui utilidade orçamentária."
    ],
    "c": 1,
    "e": "A classificação permite planejamento, execução, controle e transparência fiscal."
  },
  {
    "d": "Financeiro",
    "t": "despesa pública",
    "diff": "Difícil",
    "profile": "empenho, liquidação e pagamento",
    "q": "Sobre despesa pública, assinale a alternativa correta.",
    "a": [
      "Pagamento precede necessariamente o empenho.",
      "Liquidação é etapa irrelevante e dispensável em toda despesa.",
      "A execução da despesa pública envolve, em regra, empenho, liquidação e pagamento.",
      "Empenho extingue a obrigação financeira independentemente de entrega do objeto."
    ],
    "c": 2,
    "e": "O ciclo da despesa controla reserva, verificação do direito do credor e pagamento."
  },
  {
    "d": "Financeiro",
    "t": "controle financeiro",
    "diff": "Médio",
    "profile": "controle interno e externo",
    "q": "Sobre controle financeiro, assinale a alternativa correta.",
    "a": [
      "Controle interno substitui integralmente o Tribunal de Contas.",
      "Controle externo é vedado em contratos administrativos.",
      "Controle financeiro limita-se a conferir saldo bancário.",
      "Os sistemas de controle interno e externo atuam de forma complementar na fiscalização contábil, financeira, orçamentária, operacional e patrimonial."
    ],
    "c": 3,
    "e": "A Constituição amplia o escopo do controle e exige atuação articulada."
  },
  {
    "d": "Tributário",
    "t": "lançamento tributário",
    "diff": "Médio",
    "profile": "CTN",
    "q": "Sobre lançamento tributário, assinale a alternativa correta.",
    "a": [
      "O lançamento constitui o crédito tributário, verifica o fato gerador, identifica o sujeito passivo e calcula o montante devido.",
      "Lançamento extingue automaticamente o crédito.",
      "Lançamento por homologação sempre depende de prévia análise antes do pagamento.",
      "Decadência não se aplica à constituição do crédito."
    ],
    "c": 0,
    "e": "O lançamento formaliza o crédito; decadência e prescrição são institutos centrais no CTN."
  },
  {
    "d": "Tributário",
    "t": "execução fiscal",
    "diff": "Difícil",
    "profile": "LEF + Fazenda Pública",
    "q": "Sobre execução fiscal, assinale a alternativa correta.",
    "a": [
      "A CDA tem presunção absoluta.",
      "A certidão de dívida ativa regularmente inscrita goza de presunção relativa de certeza e liquidez.",
      "A execução fiscal exige juntada integral do processo administrativo.",
      "Exceção de pré-executividade é sempre inadmissível."
    ],
    "c": 1,
    "e": "A CDA admite prova em contrário; exceção de pré-executividade cabe para matéria cognoscível sem dilação probatória."
  },
  {
    "d": "Tributário",
    "t": "responsabilidade tributária de terceiros",
    "diff": "Difícil",
    "profile": "CTN + sócios",
    "q": "Sobre responsabilidade tributária de terceiros, assinale a alternativa correta.",
    "a": [
      "Sócio-gerente responde automaticamente por todo tributo não pago.",
      "Responsabilidade de terceiros dispensa lei.",
      "A responsabilização pessoal de administradores exige enquadramento legal específico, não decorrendo do mero inadimplemento da pessoa jurídica.",
      "Dissolução irregular nunca repercute na execução fiscal."
    ],
    "c": 2,
    "e": "A jurisprudência distingue inadimplemento simples de hipóteses legais ou presuntivas específicas."
  },
  {
    "d": "Tributário",
    "t": "imunidades tributárias",
    "diff": "Médio",
    "profile": "limitações ao poder de tributar",
    "q": "Sobre imunidades tributárias, assinale a alternativa correta.",
    "a": [
      "Imunidade e isenção têm idêntica natureza.",
      "Imunidade é revogável por decreto.",
      "Imunidade sempre elimina obrigações acessórias.",
      "Imunidade é limitação constitucional ao poder de tributar, distinta da isenção, que decorre de lei."
    ],
    "c": 3,
    "e": "A imunidade limita competência tributária; obrigações acessórias podem subsistir quando compatíveis."
  },
  {
    "d": "Tributário",
    "t": "anterioridade tributária",
    "diff": "Médio",
    "profile": "princípios tributários",
    "q": "Sobre anterioridade tributária, assinale a alternativa correta.",
    "a": [
      "A anterioridade limita a cobrança de tributos, ressalvadas exceções constitucionais.",
      "Anterioridade é princípio absoluto sem exceções.",
      "Anterioridade anual e nonagesimal são sempre inaplicáveis a impostos.",
      "A Constituição não trata de anterioridade tributária."
    ],
    "c": 0,
    "e": "A Constituição prevê anterioridade anual e nonagesimal, com exceções."
  },
  {
    "d": "Tributário",
    "t": "capacidade contributiva",
    "diff": "Médio",
    "profile": "princípios tributários",
    "q": "Sobre capacidade contributiva, assinale a alternativa correta.",
    "a": [
      "Capacidade contributiva aplica-se apenas às taxas.",
      "Sempre que possível, impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte.",
      "Capacidade contributiva impede progressividade em qualquer imposto.",
      "Princípios tributários não vinculam o legislador."
    ],
    "c": 1,
    "e": "A capacidade contributiva orienta a tributação, sobretudo impostos, e dialoga com igualdade e progressividade."
  },
  {
    "d": "Tributário",
    "t": "taxas e preços públicos",
    "diff": "Difícil",
    "profile": "distinção conceitual",
    "q": "Sobre taxas e preços públicos, assinale a alternativa correta.",
    "a": [
      "Taxas podem ter base de cálculo própria de imposto sem restrições.",
      "Preço público é tributo instituído por lei complementar nacional.",
      "Taxas decorrem do exercício do poder de polícia ou da utilização efetiva ou potencial de serviço público específico e divisível.",
      "Taxa é cobrada por serviço público universal e indivisível."
    ],
    "c": 2,
    "e": "Taxa é espécie tributária vinculada; preço público tem natureza tarifária/contratual conforme o caso."
  },
  {
    "d": "Tributário",
    "t": "prescrição tributária",
    "diff": "Médio",
    "profile": "CTN",
    "q": "Sobre prescrição tributária, assinale a alternativa correta.",
    "a": [
      "Prescrição extingue o direito de lançar antes da constituição.",
      "Prescrição e decadência são institutos idênticos.",
      "Prescrição não se suspende nem se interrompe em nenhuma hipótese.",
      "A prescrição atinge a pretensão de cobrança judicial do crédito tributário constituído."
    ],
    "c": 3,
    "e": "Decadência afeta constituição; prescrição, cobrança. Há causas legais de suspensão/interrupção."
  },
  {
    "d": "Tributário",
    "t": "suspensão da exigibilidade",
    "diff": "Médio",
    "profile": "CTN",
    "q": "Sobre suspensão da exigibilidade, assinale a alternativa correta.",
    "a": [
      "Moratória, depósito integral, reclamações e recursos administrativos, liminar e parcelamento podem suspender a exigibilidade do crédito tributário.",
      "Pagamento suspende, mas não extingue o crédito.",
      "Parcelamento nunca suspende exigibilidade.",
      "Recurso administrativo é irrelevante para exigibilidade."
    ],
    "c": 0,
    "e": "O CTN enumera hipóteses de suspensão; pagamento é modalidade de extinção."
  },
  {
    "d": "Tributário",
    "t": "garantias e privilégios do crédito tributário",
    "diff": "Difícil",
    "profile": "CTN + Fazenda",
    "q": "Sobre garantias e privilégios do crédito tributário, assinale a alternativa correta.",
    "a": [
      "O crédito tributário jamais prefere a créditos privados.",
      "As garantias do crédito tributário não excluem outras previstas em lei, em função da natureza da obrigação.",
      "Garantias tributárias são matéria exclusivamente contratual.",
      "A Fazenda não dispõe de meios próprios para proteção do crédito."
    ],
    "c": 1,
    "e": "O CTN disciplina garantias, privilégios e preferências, com limites legais e constitucionais."
  },
  {
    "d": "Tributário",
    "t": "repetição de indébito",
    "diff": "Médio",
    "profile": "CTN",
    "q": "Sobre repetição de indébito, assinale a alternativa correta.",
    "a": [
      "Restituição é sempre vedada quando o pagamento foi espontâneo.",
      "Indébito tributário dispensa prova do pagamento.",
      "O pagamento indevido de tributo pode ensejar restituição, observados prazo e requisitos legais.",
      "Restituição tributária não possui prazo."
    ],
    "c": 2,
    "e": "A repetição exige pagamento indevido e observância das regras legais, inclusive prazos."
  },
  {
    "d": "Processo Civil",
    "t": "Fazenda Pública em juízo",
    "diff": "Difícil",
    "profile": "CPC + prerrogativas",
    "q": "Sobre fazenda pública em juízo, assinale a alternativa correta.",
    "a": [
      "A Fazenda Pública tem prazo em quádruplo para todos os atos.",
      "Prerrogativas processuais eliminam contraditório da parte contrária.",
      "Intimação da Fazenda dispensa órgão de representação judicial.",
      "A Fazenda Pública possui prazos diferenciados e regime próprio de intimação, nos limites previstos no CPC."
    ],
    "c": 3,
    "e": "O CPC prevê prerrogativas específicas, sem suprimir contraditório ou isonomia processual adequada."
  },
  {
    "d": "Processo Civil",
    "t": "remessa necessária",
    "diff": "Difícil",
    "profile": "CPC + Fazenda",
    "q": "Sobre remessa necessária, assinale a alternativa correta.",
    "a": [
      "A remessa necessária não se aplica indistintamente a toda sentença contra a Fazenda Pública, havendo exceções legais.",
      "Toda sentença contra ente público exige remessa necessária.",
      "Remessa necessária é recurso voluntário da Fazenda.",
      "Remessa necessária depende de preparo."
    ],
    "c": 0,
    "e": "O CPC estabelece hipóteses de cabimento e dispensa da remessa necessária."
  },
  {
    "d": "Processo Civil",
    "t": "tutela provisória contra a Fazenda",
    "diff": "Difícil",
    "profile": "técnica processual",
    "q": "Sobre tutela provisória contra a fazenda, assinale a alternativa correta.",
    "a": [
      "Toda tutela provisória contra a Fazenda é absolutamente proibida.",
      "Tutelas provisórias contra a Fazenda Pública são possíveis, mas podem sofrer limitações legais específicas conforme a matéria.",
      "Liminar contra Fazenda dispensa probabilidade do direito.",
      "Tutela provisória sempre substitui precatório."
    ],
    "c": 1,
    "e": "Há cabimento de tutela provisória, com cautela e limites normativos."
  },
  {
    "d": "Processo Civil",
    "t": "precedentes obrigatórios",
    "diff": "Médio",
    "profile": "CPC + tribunais",
    "q": "Sobre precedentes obrigatórios, assinale a alternativa correta.",
    "a": [
      "Precedentes nunca vinculam órgãos judiciais.",
      "Súmula vinculante é mera recomendação administrativa.",
      "Juízes e tribunais devem observar decisões e enunciados dotados de força vinculante nos termos do CPC.",
      "Distinguishing é proibido no sistema de precedentes."
    ],
    "c": 2,
    "e": "O CPC estrutura dever de observância, coerência e integridade, admitindo distinção e superação fundamentadas."
  },
  {
    "d": "Processo Civil",
    "t": "incidente de resolução de demandas repetitivas",
    "diff": "Difícil",
    "profile": "precedentes",
    "q": "Sobre incidente de resolução de demandas repetitivas, assinale a alternativa correta.",
    "a": [
      "IRDR serve para reexaminar prova individual de um único processo.",
      "IRDR só pode ser instaurado perante o STF.",
      "IRDR não produz qualquer efeito sobre processos pendentes.",
      "O IRDR busca uniformizar questão de direito repetitiva com risco à isonomia e à segurança jurídica."
    ],
    "c": 3,
    "e": "O IRDR trata de questão comum de direito e impacta processos repetitivos."
  },
  {
    "d": "Processo Civil",
    "t": "execução contra a Fazenda Pública",
    "diff": "Difícil",
    "profile": "cumprimento de sentença",
    "q": "Sobre execução contra a fazenda pública, assinale a alternativa correta.",
    "a": [
      "O cumprimento de sentença que imponha pagar quantia pela Fazenda Pública segue rito próprio e pode levar a precatório ou RPV.",
      "A Fazenda é executada por penhora online como regra inicial.",
      "O regime de precatório é irrelevante no processo civil.",
      "Cumprimento contra Fazenda dispensa intimação para impugnação."
    ],
    "c": 0,
    "e": "O CPC contempla procedimento próprio, articulado ao regime constitucional de pagamentos."
  },
  {
    "d": "Processo Civil",
    "t": "honorários advocatícios contra a Fazenda",
    "diff": "Médio",
    "profile": "CPC + sucumbência",
    "q": "Sobre honorários advocatícios contra a fazenda, assinale a alternativa correta.",
    "a": [
      "Honorários contra Fazenda são sempre vedados.",
      "Honorários sucumbenciais são devidos conforme critérios legais, inclusive regras específicas em causas envolvendo Fazenda Pública.",
      "Honorários independem de sucumbência em qualquer caso.",
      "A fixação de honorários nunca considera proveito econômico."
    ],
    "c": 1,
    "e": "O CPC regula honorários e critérios, com disciplina especial para Fazenda Pública."
  },
  {
    "d": "Processo Civil",
    "t": "coisa julgada",
    "diff": "Difícil",
    "profile": "teoria geral",
    "q": "Sobre coisa julgada, assinale a alternativa correta.",
    "a": [
      "Despacho de expediente forma coisa julgada material.",
      "Coisa julgada sempre alcança terceiros estranhos ao processo.",
      "A coisa julgada material torna imutável e indiscutível decisão de mérito não mais sujeita a recurso, nos limites legais.",
      "Sentença terminativa sempre julga o mérito."
    ],
    "c": 2,
    "e": "A coisa julgada material pressupõe decisão de mérito e respeita limites objetivos e subjetivos."
  },
  {
    "d": "Processo Civil",
    "t": "ação rescisória",
    "diff": "Difícil",
    "profile": "meios de impugnação",
    "q": "Sobre ação rescisória, assinale a alternativa correta.",
    "a": [
      "Ação rescisória é recurso ordinário sem prazo.",
      "Ação rescisória cabe contra qualquer despacho.",
      "Ação rescisória substitui embargos de declaração antes do trânsito.",
      "A ação rescisória é meio autônomo de impugnação cabível nas hipóteses legais contra decisão de mérito transitada em julgado, observados requisitos e prazo."
    ],
    "c": 3,
    "e": "A ação rescisória possui hipóteses taxativas e natureza autônoma."
  },
  {
    "d": "Processo Civil",
    "t": "negócios jurídicos processuais",
    "diff": "Médio",
    "profile": "CPC moderno",
    "q": "Sobre negócios jurídicos processuais, assinale a alternativa correta.",
    "a": [
      "As partes podem convencionar sobre ônus, poderes, faculdades e deveres processuais, observados limites legais e controle judicial.",
      "Negócio processual é sempre inválido no processo civil.",
      "As partes podem afastar absolutamente todas as normas processuais cogentes.",
      "Negócios processuais independem de capacidade das partes."
    ],
    "c": 0,
    "e": "O CPC admite convenções processuais, mas preserva controle de validade e limites de ordem pública."
  },
  {
    "d": "Processo Civil",
    "t": "litisconsórcio",
    "diff": "Médio",
    "profile": "teoria processual",
    "q": "Sobre litisconsórcio, assinale a alternativa correta.",
    "a": [
      "Todo litisconsórcio é necessário e unitário.",
      "O litisconsórcio pode ser necessário ou facultativo, unitário ou simples, conforme a relação jurídica discutida e a lei.",
      "Litisconsórcio facultativo impede limitação judicial.",
      "A ausência de litisconsorte necessário nunca causa vício."
    ],
    "c": 1,
    "e": "A correta formação do litisconsórcio é essencial para validade e eficácia da decisão."
  },
  {
    "d": "Processo Civil",
    "t": "recursos no CPC",
    "diff": "Médio",
    "profile": "técnica recursal",
    "q": "Sobre recursos no cpc, assinale a alternativa correta.",
    "a": [
      "Recurso intempestivo deve sempre ser conhecido.",
      "Preparo é sempre dispensado para toda pessoa jurídica privada.",
      "Recursos exigem pressupostos de admissibilidade, como cabimento, tempestividade, legitimidade, interesse e preparo quando devido.",
      "Embargos de declaração não interrompem prazo recursal em nenhuma hipótese."
    ],
    "c": 2,
    "e": "A admissibilidade recursal depende de requisitos legais; embargos têm efeitos processuais próprios."
  },
  {
    "d": "Civil",
    "t": "personalidade e capacidade",
    "diff": "Médio",
    "profile": "parte geral",
    "q": "Sobre personalidade e capacidade, assinale a alternativa correta.",
    "a": [
      "Personalidade civil começa apenas aos dezoito anos.",
      "Nascituro não recebe qualquer proteção jurídica.",
      "Capacidade de direito e capacidade de fato são sempre equivalentes.",
      "A personalidade civil da pessoa natural começa com o nascimento com vida, resguardados, desde a concepção, os direitos do nascituro."
    ],
    "c": 3,
    "e": "A parte geral diferencia personalidade, capacidade de direito e capacidade de exercício."
  },
  {
    "d": "Civil",
    "t": "negócio jurídico",
    "diff": "Médio",
    "profile": "parte geral",
    "q": "Sobre negócio jurídico, assinale a alternativa correta.",
    "a": [
      "A validade do negócio jurídico requer agente capaz, objeto lícito, possível, determinado ou determinável e forma prescrita ou não defesa em lei.",
      "Objeto ilícito pode ser convalidado por vontade das partes.",
      "Forma especial é sempre dispensável.",
      "Agente incapaz nunca compromete validade do ato."
    ],
    "c": 0,
    "e": "O Código Civil prevê requisitos gerais de validade do negócio jurídico."
  },
  {
    "d": "Civil",
    "t": "prescrição e decadência",
    "diff": "Difícil",
    "profile": "distinção conceitual",
    "q": "Sobre prescrição e decadência, assinale a alternativa correta.",
    "a": [
      "Prescrição e decadência são sinônimas.",
      "Prescrição atinge a pretensão, enquanto decadência atinge o próprio direito potestativo, conforme disciplina legal.",
      "Prescrição não admite renúncia em nenhuma hipótese.",
      "Decadência sempre pode ser interrompida pelas partes."
    ],
    "c": 1,
    "e": "A banca costuma cobrar a distinção conceitual e os efeitos práticos dos institutos."
  },
  {
    "d": "Civil",
    "t": "responsabilidade civil",
    "diff": "Difícil",
    "profile": "teoria geral",
    "q": "Sobre responsabilidade civil, assinale a alternativa correta.",
    "a": [
      "Dano moral é sempre presumido em qualquer inadimplemento.",
      "Responsabilidade objetiva depende de culpa grave.",
      "A responsabilidade civil exige, em regra, conduta, dano, nexo causal e elemento subjetivo, salvo hipóteses de responsabilidade objetiva.",
      "Nexo causal é irrelevante quando há dano."
    ],
    "c": 2,
    "e": "Mesmo na responsabilidade objetiva, dano e nexo causal seguem indispensáveis."
  },
  {
    "d": "Civil",
    "t": "obrigações solidárias",
    "diff": "Médio",
    "profile": "direito das obrigações",
    "q": "Sobre obrigações solidárias, assinale a alternativa correta.",
    "a": [
      "Solidariedade existe em toda obrigação com pluralidade de sujeitos.",
      "Solidariedade passiva impede cobrança integral de um devedor.",
      "Remissão a um codevedor sempre extingue a dívida para todos sem ressalvas.",
      "A solidariedade não se presume; resulta da lei ou da vontade das partes."
    ],
    "c": 3,
    "e": "A solidariedade é excepcional e depende de fonte legal ou negocial."
  },
  {
    "d": "Civil",
    "t": "contratos administrativos e privados",
    "diff": "Médio",
    "profile": "teoria contratual",
    "q": "Sobre contratos administrativos e privados, assinale a alternativa correta.",
    "a": [
      "Nos contratos privados, a força obrigatória convive com boa-fé objetiva, função social e equilíbrio contratual.",
      "Boa-fé objetiva é regra moral sem eficácia jurídica.",
      "Função social autoriza descumprimento unilateral sem consequência.",
      "Todo contrato privado é imutável mesmo diante de fatos extraordinários."
    ],
    "c": 0,
    "e": "A teoria contratual contemporânea equilibra autonomia privada e deveres anexos."
  },
  {
    "d": "Civil",
    "t": "direitos reais",
    "diff": "Médio",
    "profile": "propriedade",
    "q": "Sobre direitos reais, assinale a alternativa correta.",
    "a": [
      "Função social é irrelevante para a propriedade.",
      "A propriedade confere faculdades de usar, gozar, dispor e reaver a coisa, observada sua função social.",
      "Posse e propriedade são sempre idênticas.",
      "Direito real pode ser criado livremente por contrato sem previsão legal."
    ],
    "c": 1,
    "e": "Direitos reais são típicos e a propriedade é limitada pela função social."
  },
  {
    "d": "Civil",
    "t": "sucessões",
    "diff": "Médio",
    "profile": "ordem de vocação",
    "q": "Sobre sucessões, assinale a alternativa correta.",
    "a": [
      "Testamento sempre afasta integralmente herdeiros necessários.",
      "Sucessão legítima não possui ordem legal.",
      "A sucessão legítima observa a ordem de vocação hereditária prevista em lei, sem prejuízo de disposições testamentárias válidas.",
      "Herdeiro necessário pode ser excluído sem hipótese legal."
    ],
    "c": 2,
    "e": "A legítima e a proteção de herdeiros necessários limitam a liberdade testamentária."
  },
  {
    "d": "Civil",
    "t": "direito de família",
    "diff": "Difícil",
    "profile": "princípios e efeitos",
    "q": "Sobre direito de família, assinale a alternativa correta.",
    "a": [
      "O poder familiar é absoluto e insuscetível de controle.",
      "Filiação socioafetiva é sempre juridicamente irrelevante.",
      "Alimentos têm natureza meramente liberal.",
      "O direito de família contemporâneo é orientado pela dignidade da pessoa humana, igualdade e proteção integral de crianças e adolescentes."
    ],
    "c": 3,
    "e": "A disciplina familiar enfatiza proteção de vulneráveis, igualdade e solidariedade."
  },
  {
    "d": "Penal",
    "t": "tipicidade penal",
    "diff": "Médio",
    "profile": "teoria do crime",
    "q": "Sobre tipicidade penal, assinale a alternativa correta.",
    "a": [
      "A tipicidade envolve adequação da conduta ao tipo penal, sem dispensar análise de ilicitude e culpabilidade para configuração do crime.",
      "Tipicidade formal basta sempre para condenação.",
      "Ilicitude e culpabilidade são irrelevantes.",
      "Analogia in malam partem é amplamente admitida."
    ],
    "c": 0,
    "e": "A teoria do crime exige análise estratificada; legalidade limita interpretação penal."
  },
  {
    "d": "Penal",
    "t": "crimes contra a Administração Pública",
    "diff": "Difícil",
    "profile": "parte especial",
    "q": "Sobre crimes contra a administração pública, assinale a alternativa correta.",
    "a": [
      "Peculato é crime exclusivamente praticado por particular sem vínculo funcional.",
      "Peculato pressupõe apropriação, desvio ou subtração de bem móvel público ou particular sob posse em razão do cargo, conforme o tipo legal.",
      "Corrupção passiva exige necessariamente recebimento efetivo da vantagem.",
      "Prevaricação e concussão são delitos idênticos."
    ],
    "c": 1,
    "e": "Crimes funcionais exigem atenção aos elementos objetivos e subjetivos do tipo."
  },
  {
    "d": "Penal",
    "t": "princípio da insignificância",
    "diff": "Difícil",
    "profile": "jurisprudência penal",
    "q": "Sobre princípio da insignificância, assinale a alternativa correta.",
    "a": [
      "Insignificância é automática em todo crime sem violência.",
      "Insignificância extingue a lei penal.",
      "O princípio da insignificância exige análise de vetores como mínima ofensividade, ausência de periculosidade social, reduzida reprovabilidade e inexpressividade da lesão.",
      "Insignificância depende apenas do valor econômico, sem outros critérios."
    ],
    "c": 2,
    "e": "A aplicação é casuística e guiada por parâmetros jurisprudenciais."
  },
  {
    "d": "Penal",
    "t": "concurso de pessoas",
    "diff": "Médio",
    "profile": "teoria geral",
    "q": "Sobre concurso de pessoas, assinale a alternativa correta.",
    "a": [
      "Participação de menor importância jamais reduz pena.",
      "Autoria e participação são conceitos sempre irrelevantes para dosimetria.",
      "Concurso de pessoas exige sempre ajuste formal escrito.",
      "Quem concorre para o crime incide nas penas a ele cominadas, na medida de sua culpabilidade."
    ],
    "c": 3,
    "e": "A culpabilidade individual orienta responsabilização e eventual diferenciação de pena."
  },
  {
    "d": "Penal",
    "t": "extinção da punibilidade",
    "diff": "Médio",
    "profile": "parte geral",
    "q": "Sobre extinção da punibilidade, assinale a alternativa correta.",
    "a": [
      "A prescrição é causa de extinção da punibilidade e deve observar os marcos e prazos legais.",
      "Prescrição nunca pode ser reconhecida de ofício.",
      "Extinção da punibilidade elimina automaticamente todos os efeitos civis.",
      "Decadência penal e prescrição são sempre equivalentes."
    ],
    "c": 0,
    "e": "A prescrição penal tem regime próprio e pode repercutir no exercício do jus puniendi."
  },
  {
    "d": "Processo Penal",
    "t": "ação penal",
    "diff": "Médio",
    "profile": "ação penal pública/privada",
    "q": "Sobre ação penal, assinale a alternativa correta.",
    "a": [
      "Ação penal pública condicionada é proposta exclusivamente pela vítima.",
      "A ação penal pública é promovida pelo Ministério Público, podendo ser condicionada à representação ou requisição nos casos legais.",
      "Representação é sempre irretratável antes da denúncia.",
      "Ação penal privada é proposta por denúncia."
    ],
    "c": 1,
    "e": "A titularidade e as condições de procedibilidade são frequentemente cobradas pela banca."
  },
  {
    "d": "Processo Penal",
    "t": "provas no processo penal",
    "diff": "Difícil",
    "profile": "garantias processuais",
    "q": "Sobre provas no processo penal, assinale a alternativa correta.",
    "a": [
      "Prova ilícita é sempre admitida se confirmar a acusação.",
      "Ilicitude da prova nunca contamina provas derivadas.",
      "São inadmissíveis as provas obtidas por meios ilícitos, ressalvadas discussões sobre fontes independentes e descoberta inevitável conforme o caso.",
      "A defesa não pode impugnar prova ilícita."
    ],
    "c": 2,
    "e": "A Constituição veda prova ilícita, e a teoria dos frutos da árvore envenenada admite exceções reconhecidas."
  },
  {
    "d": "Processo Penal",
    "t": "prisões cautelares",
    "diff": "Difícil",
    "profile": "cautelaridade",
    "q": "Sobre prisões cautelares, assinale a alternativa correta.",
    "a": [
      "Prisão preventiva é pena antecipada.",
      "Gravidade abstrata do crime basta para prisão cautelar.",
      "Toda prisão em flagrante converte-se automaticamente em preventiva.",
      "A prisão preventiva exige requisitos legais e fundamentação concreta, não bastando gravidade abstrata do delito."
    ],
    "c": 3,
    "e": "Medidas cautelares demandam necessidade, adequação e fundamentação concreta."
  },
  {
    "d": "Processo Penal",
    "t": "habeas corpus",
    "diff": "Médio",
    "profile": "remédio constitucional",
    "q": "Sobre habeas corpus, assinale a alternativa correta.",
    "a": [
      "O habeas corpus tutela liberdade de locomoção contra ilegalidade ou abuso de poder.",
      "Habeas corpus é instrumento próprio para cobrar dívida civil.",
      "Habeas corpus exige advogado em todas as hipóteses.",
      "Habeas corpus substitui revisão criminal sem qualquer limite."
    ],
    "c": 0,
    "e": "O HC tem campo próprio ligado à liberdade de locomoção."
  },
  {
    "d": "Processo Penal",
    "t": "competência penal",
    "diff": "Médio",
    "profile": "jurisdição",
    "q": "Sobre competência penal, assinale a alternativa correta.",
    "a": [
      "Competência penal é sempre escolhida livremente pelo Ministério Público.",
      "A competência penal é definida por regras constitucionais e legais, considerando matéria, pessoa, lugar e conexão, conforme o caso.",
      "Conexão jamais altera competência.",
      "Foro por prerrogativa é previsto apenas em lei municipal."
    ],
    "c": 1,
    "e": "A competência penal demanda leitura sistemática das regras aplicáveis."
  },
  {
    "d": "Ambiental",
    "t": "responsabilidade civil ambiental",
    "diff": "Difícil",
    "profile": "responsabilidade objetiva",
    "q": "Sobre responsabilidade civil ambiental, assinale a alternativa correta.",
    "a": [
      "Responsabilidade ambiental civil exige sempre culpa grave.",
      "Sanção administrativa exclui reparação civil.",
      "A responsabilidade civil por dano ambiental é, em regra, objetiva e orientada pela reparação integral.",
      "Dano ambiental coletivo não admite tutela preventiva."
    ],
    "c": 2,
    "e": "A reparação integral e a independência das esferas são pontos recorrentes."
  },
  {
    "d": "Ambiental",
    "t": "licenciamento ambiental",
    "diff": "Médio",
    "profile": "instrumentos de política ambiental",
    "q": "Sobre licenciamento ambiental, assinale a alternativa correta.",
    "a": [
      "Licenciamento é sempre dispensado em atividades de significativo impacto.",
      "EIA substitui a licença ambiental.",
      "Competência de licenciamento não admite normas de cooperação.",
      "O licenciamento ambiental é instrumento de controle prévio de atividades efetiva ou potencialmente poluidoras."
    ],
    "c": 3,
    "e": "O licenciamento é preventivo e pode exigir estudos ambientais sem ser substituído por eles."
  },
  {
    "d": "Ambiental",
    "t": "estudo de impacto ambiental",
    "diff": "Médio",
    "profile": "EIA/RIMA",
    "q": "Sobre estudo de impacto ambiental, assinale a alternativa correta.",
    "a": [
      "O EIA/RIMA pode ser exigido para obra ou atividade potencialmente causadora de significativa degradação ambiental, com publicidade.",
      "EIA/RIMA é documento sigiloso sem participação social.",
      "EIA/RIMA é exigido para qualquer ato administrativo sem critério.",
      "Relatório de impacto substitui controle judicial."
    ],
    "c": 0,
    "e": "A Constituição prevê estudo prévio de impacto ambiental com publicidade quando houver significativo impacto."
  },
  {
    "d": "Ambiental",
    "t": "princípios ambientais",
    "diff": "Difícil",
    "profile": "prevenção e precaução",
    "q": "Sobre princípios ambientais, assinale a alternativa correta.",
    "a": [
      "Precaução só se aplica após dano consumado.",
      "Prevenção e precaução orientam atuação estatal diante de riscos ambientais, com maior cautela quando houver incerteza científica relevante.",
      "Prevenção dispensa avaliação de risco.",
      "Princípios ambientais não influenciam interpretação jurídica."
    ],
    "c": 1,
    "e": "A banca cobra a diferença entre risco conhecido e incerteza científica."
  },
  {
    "d": "Ambiental",
    "t": "áreas protegidas",
    "diff": "Médio",
    "profile": "SNUC + proteção",
    "q": "Sobre áreas protegidas, assinale a alternativa correta.",
    "a": [
      "Toda unidade de conservação admite exploração econômica livre.",
      "Unidades de conservação são criadas apenas por contrato privado.",
      "Unidades de conservação possuem categorias e regimes distintos, conforme objetivos de proteção integral ou uso sustentável.",
      "Uso sustentável e proteção integral são expressões equivalentes."
    ],
    "c": 2,
    "e": "O regime jurídico varia conforme a categoria da unidade e seus objetivos."
  },
  {
    "d": "Trabalho",
    "t": "relação de emprego",
    "diff": "Médio",
    "profile": "CLT + elementos",
    "q": "Sobre relação de emprego, assinale a alternativa correta.",
    "a": [
      "Subordinação é dispensável se houver pagamento.",
      "Eventualidade caracteriza vínculo empregatício.",
      "Pessoa jurídica contratada sempre é empregada.",
      "A relação de emprego exige, em regra, pessoa física, pessoalidade, não eventualidade, onerosidade e subordinação."
    ],
    "c": 3,
    "e": "Os elementos clássicos devem estar presentes de forma conjunta."
  },
  {
    "d": "Trabalho",
    "t": "terceirização",
    "diff": "Difícil",
    "profile": "jurisprudência + reforma",
    "q": "Sobre terceirização, assinale a alternativa correta.",
    "a": [
      "A licitude da terceirização não elimina, por si só, eventual responsabilidade do tomador nas hipóteses legais ou jurisprudenciais.",
      "Terceirização de atividade-fim é sempre ilícita.",
      "Terceirizado de ente público torna-se servidor efetivo.",
      "Administração Pública responde solidariamente de forma automática por todo inadimplemento."
    ],
    "c": 0,
    "e": "A terceirização é lícita em termos amplos, mas responsabilidade do tomador exige análise específica."
  },
  {
    "d": "Trabalho",
    "t": "jornada de trabalho",
    "diff": "Médio",
    "profile": "CLT",
    "q": "Sobre jornada de trabalho, assinale a alternativa correta.",
    "a": [
      "Horas extras são sempre vedadas.",
      "A duração do trabalho e o regime de horas extraordinárias devem observar limites constitucionais e legais.",
      "Intervalos jamais repercutem em remuneração.",
      "Controle de jornada é incompatível com qualquer relação de emprego."
    ],
    "c": 1,
    "e": "Jornada e intervalos exigem atenção aos limites legais e às exceções."
  },
  {
    "d": "Trabalho",
    "t": "alteração do contrato de trabalho",
    "diff": "Médio",
    "profile": "CLT + proteção",
    "q": "Sobre alteração do contrato de trabalho, assinale a alternativa correta.",
    "a": [
      "Empregador pode reduzir salário livremente por ato unilateral.",
      "Qualquer alteração unilateral é válida se conveniente à empresa.",
      "Alterações contratuais exigem, em regra, mútuo consentimento e ausência de prejuízo ao empregado.",
      "A proteção ao salário é irrelevante no contrato de trabalho."
    ],
    "c": 2,
    "e": "A CLT protege o empregado contra alterações prejudiciais, ressalvadas hipóteses legais."
  },
  {
    "d": "Trabalho",
    "t": "estabilidade e garantias provisórias",
    "diff": "Difícil",
    "profile": "proteção ao emprego",
    "q": "Sobre estabilidade e garantias provisórias, assinale a alternativa correta.",
    "a": [
      "Toda dispensa sem justa causa é nula por estabilidade geral.",
      "Estabilidade provisória dispensa requisitos legais.",
      "Garantia de emprego sempre se converte automaticamente em cargo público.",
      "Garantias provisórias de emprego dependem de previsão constitucional, legal, normativa ou jurisprudencial aplicável."
    ],
    "c": 3,
    "e": "As garantias têm hipóteses específicas e consequências próprias."
  },
  {
    "d": "Trabalho",
    "t": "responsabilidade trabalhista da Administração",
    "diff": "Difícil",
    "profile": "Administração Pública",
    "q": "Sobre responsabilidade trabalhista da administração, assinale a alternativa correta.",
    "a": [
      "A responsabilização da Administração por encargos trabalhistas de terceirizada exige análise do regime jurídico e da conduta fiscalizatória, não sendo automática em todo caso.",
      "O ente público sempre responde solidariamente, sem exame de culpa.",
      "A Administração jamais pode responder por débitos trabalhistas.",
      "Contrato administrativo torna empregados terceirizados servidores públicos."
    ],
    "c": 0,
    "e": "A matéria combina jurisprudência constitucional e trabalhista, com foco em fiscalização e ônus argumentativo/probatório."
  },
  {
    "d": "Processo do Trabalho",
    "t": "recursos trabalhistas",
    "diff": "Médio",
    "profile": "técnica recursal",
    "q": "Sobre recursos trabalhistas, assinale a alternativa correta.",
    "a": [
      "Todo recurso trabalhista tem efeito suspensivo automático.",
      "Recursos trabalhistas observam pressupostos próprios de admissibilidade, como tempestividade e preparo quando cabível.",
      "Recurso ordinário cabe exclusivamente contra decisões do TST.",
      "Embargos de declaração são inadmissíveis no processo do trabalho."
    ],
    "c": 1,
    "e": "O sistema recursal trabalhista possui regras próprias e, em regra, não confere efeito suspensivo automático."
  },
  {
    "d": "Processo do Trabalho",
    "t": "execução trabalhista contra a Fazenda",
    "diff": "Difícil",
    "profile": "Fazenda Pública",
    "q": "Sobre execução trabalhista contra a fazenda, assinale a alternativa correta.",
    "a": [
      "A Fazenda é executada exatamente como empresa privada.",
      "Crédito trabalhista contra ente público nunca se submete a precatório ou RPV.",
      "Quando a Fazenda Pública é devedora, a execução trabalhista observa peculiaridades, inclusive regime constitucional de pagamento.",
      "Executado não pode apresentar defesa na execução."
    ],
    "c": 2,
    "e": "O rito deve compatibilizar crédito trabalhista e regime público de pagamento."
  },
  {
    "d": "Processo do Trabalho",
    "t": "competência da Justiça do Trabalho",
    "diff": "Médio",
    "profile": "jurisdição trabalhista",
    "q": "Sobre competência da justiça do trabalho, assinale a alternativa correta.",
    "a": [
      "A Justiça do Trabalho julga apenas crimes militares.",
      "Toda causa envolvendo ente público pertence automaticamente à Justiça Federal comum.",
      "Competência trabalhista não possui fundamento constitucional.",
      "A Justiça do Trabalho processa e julga controvérsias decorrentes da relação de trabalho, nos termos da Constituição."
    ],
    "c": 3,
    "e": "A competência trabalhista decorre do art. 114 da Constituição, com limites e exceções."
  },
  {
    "d": "Processo do Trabalho",
    "t": "ônus da prova trabalhista",
    "diff": "Médio",
    "profile": "prova",
    "q": "Sobre ônus da prova trabalhista, assinale a alternativa correta.",
    "a": [
      "O ônus da prova pode ser distribuído conforme regras legais e aptidão probatória, observadas peculiaridades do processo do trabalho.",
      "Ônus da prova é sempre exclusivo do empregado.",
      "Prova documental é proibida na Justiça do Trabalho.",
      "Juiz do trabalho não pode valorar prova testemunhal."
    ],
    "c": 0,
    "e": "A distribuição do ônus probatório exige atenção à CLT, CPC subsidiário e princípios processuais."
  },
  {
    "d": "Processo do Trabalho",
    "t": "acordo judicial trabalhista",
    "diff": "Médio",
    "profile": "conciliação",
    "q": "Sobre acordo judicial trabalhista, assinale a alternativa correta.",
    "a": [
      "Todo acordo trabalhista é nulo.",
      "A conciliação é valorizada no processo do trabalho, mas o acordo deve observar capacidade, objeto lícito e controle judicial quando submetido à homologação.",
      "Homologação judicial é ato mecânico sem qualquer controle.",
      "Acordo pode envolver objeto ilícito se houver vontade das partes."
    ],
    "c": 1,
    "e": "A conciliação é central, mas não afasta controle de validade."
  },
  {
    "d": "Empresarial",
    "t": "empresário e sociedade empresária",
    "diff": "Médio",
    "profile": "teoria da empresa",
    "q": "Sobre empresário e sociedade empresária, assinale a alternativa correta.",
    "a": [
      "Profissão intelectual é sempre atividade empresária, sem exceções.",
      "Atividade econômica organizada é irrelevante para a teoria da empresa.",
      "Considera-se empresário quem exerce profissionalmente atividade econômica organizada para produção ou circulação de bens ou serviços.",
      "Sociedade empresária nunca precisa de registro."
    ],
    "c": 2,
    "e": "A teoria da empresa enfatiza profissionalidade, atividade econômica, organização e finalidade produtiva/circulatória."
  },
  {
    "d": "Empresarial",
    "t": "desconsideração da personalidade jurídica",
    "diff": "Difícil",
    "profile": "CC + CPC",
    "q": "Sobre desconsideração da personalidade jurídica, assinale a alternativa correta.",
    "a": [
      "Personalidade jurídica pode ser desconsiderada sempre que houver dívida.",
      "Desconsideração dispensa contraditório.",
      "A mera existência de grupo econômico basta sempre para desconsideração.",
      "A desconsideração exige preenchimento dos requisitos legais e procedimento que assegure contraditório."
    ],
    "c": 3,
    "e": "Abuso, desvio de finalidade ou confusão patrimonial são elementos centrais, conforme o regime aplicável."
  },
  {
    "d": "Empresarial",
    "t": "títulos de crédito",
    "diff": "Médio",
    "profile": "princípios cambiais",
    "q": "Sobre títulos de crédito, assinale a alternativa correta.",
    "a": [
      "Cartularidade, literalidade e autonomia são princípios clássicos dos títulos de crédito, com adaptações legais.",
      "Título de crédito não pode circular.",
      "Literalidade significa que obrigações ocultas sempre prevalecem.",
      "Autonomia elimina qualquer exceção legal."
    ],
    "c": 0,
    "e": "Os princípios cambiais explicam circulação e segurança, mas convivem com regras específicas."
  },
  {
    "d": "Empresarial",
    "t": "recuperação judicial",
    "diff": "Difícil",
    "profile": "Lei 11.101/2005",
    "q": "Sobre recuperação judicial, assinale a alternativa correta.",
    "a": [
      "Recuperação judicial tem por finalidade imediata encerrar toda atividade empresarial.",
      "A recuperação judicial busca viabilizar superação da crise econômico-financeira do devedor, preservando empresa, empregos e interesses de credores.",
      "Qualquer pessoa física não empresária pode requerer recuperação judicial comum.",
      "Plano de recuperação dispensa deliberação dos credores em toda hipótese."
    ],
    "c": 1,
    "e": "A recuperação preserva a empresa viável e organiza negociação com credores."
  },
  {
    "d": "Empresarial",
    "t": "falência",
    "diff": "Médio",
    "profile": "insolvência empresarial",
    "q": "Sobre falência, assinale a alternativa correta.",
    "a": [
      "Falência é instituto aplicável ordinariamente a qualquer consumidor pessoa física.",
      "Falência ignora classificação de créditos.",
      "A falência promove execução concursal do empresário ou sociedade empresária insolvente, observada a ordem legal de classificação dos créditos.",
      "Falência e recuperação judicial são idênticas."
    ],
    "c": 2,
    "e": "A falência tem finalidade liquidatória-concursal e regime próprio de créditos."
  },
  {
    "d": "Previdenciário",
    "t": "seguridade social",
    "diff": "Médio",
    "profile": "Constituição",
    "q": "Sobre seguridade social, assinale a alternativa correta.",
    "a": [
      "Saúde pública não integra a seguridade.",
      "Assistência social exige contribuição prévia em todos os casos.",
      "Previdência é sempre gratuita e independente de filiação.",
      "A seguridade social compreende ações integradas relativas à saúde, previdência e assistência social."
    ],
    "c": 3,
    "e": "Seguridade tem três pilares, com regimes de financiamento e acesso distintos."
  },
  {
    "d": "Previdenciário",
    "t": "RGPS e RPPS",
    "diff": "Médio",
    "profile": "distinção de regimes",
    "q": "Sobre rgps e rpps, assinale a alternativa correta.",
    "a": [
      "RGPS e regimes próprios possuem destinatários e fundamentos distintos, devendo observar equilíbrio financeiro e atuarial.",
      "Todo servidor efetivo vincula-se obrigatoriamente ao RGPS mesmo havendo RPPS válido.",
      "RPPS é exclusivo de empregados de empresas privadas.",
      "Equilíbrio atuarial é irrelevante para regimes previdenciários."
    ],
    "c": 0,
    "e": "A Constituição disciplina regimes distintos e exige sustentabilidade."
  },
  {
    "d": "Previdenciário",
    "t": "benefícios previdenciários",
    "diff": "Médio",
    "profile": "regime contributivo",
    "q": "Sobre benefícios previdenciários, assinale a alternativa correta.",
    "a": [
      "Todo benefício previdenciário independe de contribuição.",
      "Benefícios previdenciários, em regra, dependem de filiação, contribuição e cumprimento de requisitos legais.",
      "Aposentadoria pode ser concedida sem qualquer requisito legal.",
      "Benefício previdenciário é sempre assistencial."
    ],
    "c": 1,
    "e": "A previdência social é contributiva e retributiva, diferindo da assistência social."
  },
  {
    "d": "Previdenciário",
    "t": "pensão por morte",
    "diff": "Difícil",
    "profile": "benefícios",
    "q": "Sobre pensão por morte, assinale a alternativa correta.",
    "a": [
      "Pensão por morte dispensa qualquer vínculo previdenciário do instituidor.",
      "Todo dependente recebe benefício vitalício sem requisitos.",
      "A pensão por morte depende da qualidade de segurado do instituidor e da condição de dependente, conforme a legislação aplicável.",
      "Pensão por morte é tributo vinculado."
    ],
    "c": 2,
    "e": "O benefício exige requisitos relativos ao segurado e aos dependentes."
  },
  {
    "d": "Previdenciário",
    "t": "contribuições sociais",
    "diff": "Médio",
    "profile": "financiamento da seguridade",
    "q": "Sobre contribuições sociais, assinale a alternativa correta.",
    "a": [
      "A seguridade é financiada exclusivamente por impostos municipais.",
      "Contribuições sociais não possuem relação com seguridade.",
      "A União é proibida de instituir contribuições para seguridade.",
      "A seguridade social é financiada por toda a sociedade, de forma direta e indireta, nos termos constitucionais."
    ],
    "c": 3,
    "e": "A Constituição prevê base ampla de financiamento da seguridade social."
  }
,

  {
    "d": "Constitucional",
    "t": "métodos de interpretação constitucional",
    "diff": "Médio",
    "profile": "PGE/ES 2025 – tema recorrente adaptado",
    "source": "PGE_ES_2025",
    "q": "Acerca da interpretação constitucional, assinale a alternativa correta.",
    "a": [
      "A interpretação constitucional deve eliminar qualquer consideração sistemática quando houver texto expresso.",
      "O princípio da unidade da Constituição orienta a harmonização de normas constitucionais potencialmente tensionadas.",
      "A interpretação conforme autoriza criar norma inteiramente incompatível com o texto legal.",
      "O método tópico-problemático impede o uso de precedentes judiciais."
    ],
    "c": 1,
    "e": "O princípio da unidade busca coerência do texto constitucional, evitando leituras que coloquem normas constitucionais em contradição desnecessária."
  },
  {
    "d": "Constitucional",
    "t": "rigidez constitucional",
    "diff": "Médio",
    "profile": "PGE/PR 2024 – teoria da constituição adaptada",
    "source": "PGE_PR_2024",
    "q": "Sobre rigidez constitucional, assinale a alternativa correta.",
    "a": [
      "Constituição rígida é aquela que somente pode ser alterada por processo legislativo mais dificultoso que o ordinário.",
      "Rigidez constitucional significa impossibilidade absoluta de emenda.",
      "Toda constituição escrita é necessariamente rígida.",
      "A rigidez constitucional exclui o controle de constitucionalidade."
    ],
    "c": 0,
    "e": "A rigidez decorre da exigência de procedimento especial para alteração do texto constitucional e se relaciona à supremacia formal da Constituição."
  },
  {
    "d": "Administrativo",
    "t": "fontes do direito administrativo",
    "diff": "Fácil",
    "profile": "PGE/SE 2023 – fontes adaptado",
    "source": "PGE_SE_2023",
    "q": "No tocante às fontes do direito administrativo, assinale a alternativa correta.",
    "a": [
      "A jurisprudência e a doutrina não exercem qualquer influência na interpretação administrativa.",
      "A lei, em sentido amplo, ocupa posição central, sem excluir o papel da jurisprudência, da doutrina e dos costumes administrativos compatíveis com o ordenamento.",
      "Apenas decretos autônomos podem ser considerados fonte do direito administrativo.",
      "Costumes administrativos prevalecem sobre a Constituição quando reiterados."
    ],
    "c": 1,
    "e": "A legalidade é eixo do direito administrativo, mas a interpretação do regime jurídico administrativo também se vale de jurisprudência, doutrina e práticas compatíveis com a lei."
  },
  {
    "d": "Administrativo",
    "t": "arbitragem em contratos administrativos",
    "diff": "Difícil",
    "profile": "PGE/PR 2024 – contratos públicos adaptado",
    "source": "PGE_PR_2024",
    "q": "Sobre arbitragem envolvendo a Administração Pública, assinale a alternativa correta.",
    "a": [
      "É incompatível com qualquer contrato administrativo, ainda que verse sobre direito patrimonial disponível.",
      "Pode ser admitida para direitos patrimoniais disponíveis, observadas a legalidade e a publicidade, nos termos da legislação aplicável.",
      "Sempre será decidida por equidade, independentemente de autorização legal.",
      "Afasta integralmente o controle judicial sobre nulidades da convenção arbitral."
    ],
    "c": 1,
    "e": "A arbitragem na Administração Pública é possível em direitos patrimoniais disponíveis, com observância do regime jurídico público e, em regra, julgamento de direito."
  },
  {
    "d": "Administrativo",
    "t": "competências da Procuradoria estadual",
    "diff": "Médio",
    "profile": "PGE/RN 2023 – advocacia pública adaptado",
    "source": "PGE_RN_2023",
    "q": "No âmbito das Procuradorias-Gerais dos Estados, assinale a alternativa correta.",
    "a": [
      "A representação judicial do Estado é função típica da advocacia pública, sem prejuízo de competências consultivas previstas na legislação local.",
      "A defesa judicial do Estado compete ordinariamente ao Ministério Público estadual.",
      "A atuação consultiva das procuradorias é vedada em matéria licitatória.",
      "A advocacia pública estadual não se submete a normas constitucionais sobre funções essenciais à justiça."
    ],
    "c": 0,
    "e": "As procuradorias estaduais exercem representação judicial e consultoria jurídica do ente, nos termos da Constituição e da legislação local."
  },
  {
    "d": "Constitucional",
    "t": "constituições brasileiras e classificação",
    "diff": "Médio",
    "profile": "PGE/MS 2021 – história constitucional adaptada",
    "source": "PGE_MS_2021",
    "q": "Quanto à classificação das constituições, assinale a alternativa correta.",
    "a": [
      "Constituição flexível é aquela alterável pelo mesmo procedimento das leis ordinárias.",
      "Constituição analítica é necessariamente não escrita.",
      "Constituição outorgada sempre decorre de assembleia constituinte livremente eleita.",
      "Constituição promulgada é aquela imposta unilateralmente pelo governante."
    ],
    "c": 0,
    "e": "A flexibilidade está associada à ausência de procedimento legislativo agravado para alteração do texto constitucional."
  },
  {
    "d": "Tributário",
    "t": "alienação de bens públicos e competência tributária estadual",
    "diff": "Médio",
    "profile": "PGE/PI 2025 – direito estadual e tributário adaptado",
    "source": "PGE_PI_2025",
    "q": "Assinale a alternativa correta sobre competência legislativa e tributação estadual.",
    "a": [
      "Os Estados podem instituir impostos não previstos na Constituição sempre que houver interesse regional.",
      "A alienação de bens públicos e a instituição de tributos devem observar a Constituição, as normas gerais nacionais e a legislação local pertinente.",
      "Lei estadual pode afastar norma geral nacional sobre licitações por mero decreto do governador.",
      "Competência tributária pode ser delegada integralmente a pessoa jurídica de direito privado."
    ],
    "c": 1,
    "e": "A atuação legislativa estadual deve respeitar a repartição constitucional de competências e as normas gerais nacionais quando aplicáveis."
  },
  {
    "d": "Processo Civil",
    "t": "Fazenda Pública em juízo",
    "diff": "Difícil",
    "profile": "PGE/CE 2021 – Fazenda Pública adaptado",
    "source": "PGE_CE_2021",
    "q": "Sobre a atuação da Fazenda Pública em juízo, assinale a alternativa correta.",
    "a": [
      "A remessa necessária substitui sempre o recurso voluntário da Fazenda Pública.",
      "A Fazenda Pública possui regime processual próprio em pontos definidos em lei, como prazos, intimação pessoal e regras específicas de cumprimento de sentença.",
      "A Fazenda Pública não pode celebrar negócio jurídico processual em nenhuma hipótese.",
      "A intimação pessoal da advocacia pública é sempre dispensada quando houver publicação em diário eletrônico."
    ],
    "c": 1,
    "e": "O CPC prevê tratamento processual específico à Fazenda Pública, sem transformar tais prerrogativas em imunidade processual absoluta."
  },
  {
    "d": "Financeiro",
    "t": "precatórios e RPV",
    "diff": "Difícil",
    "profile": "PGE/CE 2021 – cobrança recorrente adaptada",
    "source": "PGE_CE_2021",
    "q": "Sobre precatórios e requisições de pequeno valor, assinale a alternativa correta.",
    "a": [
      "Precatório e RPV submetem-se sempre ao mesmo rito constitucional de pagamento.",
      "O pagamento por RPV observa limite legal específico e não se confunde com o regime ordinário dos precatórios.",
      "A ordem cronológica dos precatórios pode ser afastada livremente por conveniência administrativa.",
      "Créditos alimentares jamais se submetem ao regime constitucional de precatórios."
    ],
    "c": 1,
    "e": "A RPV é mecanismo simplificado para créditos de pequeno valor; precatórios seguem regime constitucional próprio, com regras de preferência e ordem."
  },
  {
    "d": "Administrativo",
    "t": "licitações — Lei 14.133/2021",
    "diff": "Difícil",
    "profile": "PGE/ES 2025 – licitações adaptado",
    "source": "PGE_ES_2025",
    "q": "À luz da Lei nº 14.133/2021, assinale a alternativa correta.",
    "a": [
      "O planejamento da contratação é etapa irrelevante quando a Administração pretende contratar por menor preço.",
      "A segregação de funções e a gestão de riscos são diretrizes compatíveis com a governança das contratações públicas.",
      "O agente de contratação pode acumular todas as funções de controle interno e julgamento sem restrição.",
      "A matriz de riscos é vedada em contratos de obras públicas."
    ],
    "c": 1,
    "e": "A nova lei reforça governança, planejamento, gestão de riscos e segregação de funções como mecanismos de integridade das contratações."
  },
  {
    "d": "Administrativo",
    "t": "improbidade administrativa",
    "diff": "Difícil",
    "profile": "PGE/AL 2021 – improbidade adaptado",
    "source": "PGE_AL_2021",
    "q": "Após as alterações promovidas na Lei de Improbidade Administrativa, assinale a alternativa correta.",
    "a": [
      "A responsabilização por improbidade prescinde da presença de dolo em qualquer hipótese.",
      "A configuração dos atos de improbidade exige atenção ao elemento subjetivo previsto na lei, especialmente após a Lei nº 14.230/2021.",
      "A ação de improbidade tem natureza exclusivamente penal.",
      "Sanção de perda da função pública pode ser aplicada administrativamente sem processo judicial."
    ],
    "c": 1,
    "e": "A Lei nº 14.230/2021 reforçou a exigência de dolo para a configuração dos atos de improbidade, conforme o regime legal atual."
  },
  {
    "d": "Tributário",
    "t": "execução fiscal",
    "diff": "Difícil",
    "profile": "PGE/MS 2021 – execução fiscal adaptado",
    "source": "PGE_MS_2021",
    "q": "Na execução fiscal, assinale a alternativa correta.",
    "a": [
      "A certidão de dívida ativa goza de presunção absoluta de certeza e liquidez.",
      "A presunção da CDA é relativa e pode ser afastada por prova inequívoca do executado ou terceiro interessado.",
      "Embargos à execução fiscal independem de garantia do juízo em qualquer hipótese prevista na LEF.",
      "A Fazenda Pública deve instruir a execução fiscal com todos os documentos do processo administrativo, sob pena de inépcia automática."
    ],
    "c": 1,
    "e": "A CDA tem presunção relativa de certeza e liquidez; sua desconstituição exige prova adequada."
  },
  {
    "d": "Processo Civil",
    "t": "precedentes obrigatórios",
    "diff": "Médio",
    "profile": "PGE/PR 2024 – precedentes adaptado",
    "source": "PGE_PR_2024",
    "q": "Quanto ao sistema de precedentes no CPC, assinale a alternativa correta.",
    "a": [
      "Juízes e tribunais devem observar, entre outros, acórdãos em julgamento de recursos repetitivos e enunciados de súmula vinculante.",
      "Precedentes obrigatórios vinculam apenas processos entre as mesmas partes.",
      "O distinguishing é vedado pelo CPC.",
      "A superação de precedente dispensa fundamentação específica."
    ],
    "c": 0,
    "e": "O CPC estrutura um sistema de precedentes com observância obrigatória em hipóteses definidas e exige fundamentação adequada para distinção ou superação."
  },
  {
    "d": "Civil",
    "t": "LINDB e segurança jurídica",
    "diff": "Difícil",
    "profile": "PGE/RN 2023 – LINDB adaptado",
    "source": "PGE_RN_2023",
    "q": "Segundo a LINDB, assinale a alternativa correta.",
    "a": [
      "Decisões administrativas podem se basear exclusivamente em valores jurídicos abstratos, sem considerar consequências práticas.",
      "A motivação de decisões nas esferas administrativa, controladora e judicial deve considerar consequências práticas quando aplicável, nos termos da LINDB.",
      "A LINDB não se aplica à atividade administrativa.",
      "A invalidação de ato administrativo nunca exige regime de transição."
    ],
    "c": 1,
    "e": "A LINDB reforça consequencialismo responsável, motivação concreta e segurança jurídica na aplicação do direito público."
  },
  {
    "d": "Ambiental",
    "t": "responsabilidade ambiental",
    "diff": "Médio",
    "profile": "PGE/SE 2023 – dano ambiental adaptado",
    "source": "PGE_SE_2023",
    "q": "Sobre responsabilidade civil ambiental, assinale a alternativa correta.",
    "a": [
      "Depende sempre da comprovação de culpa do poluidor.",
      "Tem natureza objetiva, em regra, e é orientada pela reparação integral do dano ambiental.",
      "Exclui a responsabilidade administrativa e penal pelo mesmo fato.",
      "Somente pode ser exigida de pessoa física."
    ],
    "c": 1,
    "e": "A responsabilidade civil ambiental é objetiva e voltada à reparação integral, sem excluir outras esferas de responsabilização."
  },
  {
    "d": "Trabalho",
    "t": "terceirização e Administração Pública",
    "diff": "Difícil",
    "profile": "PGE/ES 2025 – trabalhista adaptado",
    "source": "PGE_ES_2025",
    "q": "Sobre terceirização e responsabilidade da Administração Pública em matéria trabalhista, assinale a alternativa correta.",
    "a": [
      "A inadimplência da empresa contratada gera responsabilidade automática e objetiva do ente público.",
      "A responsabilização subsidiária do ente público exige análise da conduta administrativa, especialmente quanto à fiscalização contratual, conforme orientação constitucional e jurisprudencial.",
      "A Administração Pública responde solidariamente por todas as verbas trabalhistas de terceirizados.",
      "A fiscalização contratual é irrelevante para fins de responsabilidade trabalhista."
    ],
    "c": 1,
    "e": "A jurisprudência exige exame da atuação administrativa e da fiscalização, afastando responsabilidade automática pelo mero inadimplemento da contratada."
  },
  {
    "d": "Previdenciário",
    "t": "RPPS e equilíbrio atuarial",
    "diff": "Médio",
    "profile": "PGE/PI 2025 – previdenciário adaptado",
    "source": "PGE_PI_2025",
    "q": "Sobre regime próprio de previdência social, assinale a alternativa correta.",
    "a": [
      "O RPPS dispensa equilíbrio financeiro e atuarial quando houver previsão em lei estadual.",
      "O equilíbrio financeiro e atuarial é exigência constitucional aplicável aos regimes próprios de previdência social.",
      "Aposentadoria de servidor efetivo é matéria exclusivamente contratual.",
      "Benefícios do RPPS podem ser instituídos por ato administrativo sem lei."
    ],
    "c": 1,
    "e": "O equilíbrio financeiro e atuarial é exigência constitucional dos regimes previdenciários próprios."
  },
  {
    "d": "Empresarial",
    "t": "recuperação judicial e Fazenda Pública",
    "diff": "Difícil",
    "profile": "PGE/MS 2021 – empresarial adaptado",
    "source": "PGE_MS_2021",
    "q": "Sobre recuperação judicial e créditos públicos, assinale a alternativa correta.",
    "a": [
      "O crédito tributário se submete integralmente ao plano de recuperação judicial como crédito quirografário comum.",
      "A recuperação judicial não suspende automaticamente execuções fiscais, sem prejuízo da cooperação entre juízos e da preservação da empresa nos limites legais.",
      "A Fazenda Pública é obrigada a aceitar deságio previsto no plano aprovado pelos credores privados.",
      "A certidão de regularidade fiscal é sempre dispensada em qualquer fase da recuperação."
    ],
    "c": 1,
    "e": "A execução fiscal possui regime próprio; a recuperação judicial não submete automaticamente o crédito tributário ao plano."
  },
  {
    "d": "Penal",
    "t": "crimes contra a Administração Pública",
    "diff": "Médio",
    "profile": "PGE/AL 2021 – penal adaptado",
    "source": "PGE_AL_2021",
    "q": "Sobre crimes contra a Administração Pública, assinale a alternativa correta.",
    "a": [
      "Peculato exige, em todas as modalidades, apropriação de bem público imóvel.",
      "Concussão envolve exigência de vantagem indevida em razão da função pública.",
      "Corrupção passiva só se configura se houver efetivo recebimento da vantagem.",
      "Prevaricação é crime culposo contra a Administração."
    ],
    "c": 1,
    "e": "A concussão caracteriza-se pela exigência de vantagem indevida em razão da função, nos termos do Código Penal."
  },
  {
    "d": "Processo Penal",
    "t": "provas e nulidades",
    "diff": "Médio",
    "profile": "PGE/SE 2023 – processo penal adaptado",
    "source": "PGE_SE_2023",
    "q": "Em processo penal, assinale a alternativa correta.",
    "a": [
      "Prova ilícita é sempre aproveitável quando confirmar a acusação.",
      "A inadmissibilidade de prova ilícita é garantia constitucional, sem prejuízo das discussões sobre fonte independente e descoberta inevitável conforme a jurisprudência.",
      "Toda nulidade processual penal é absoluta e independe de prejuízo.",
      "O contraditório é dispensável na produção probatória judicial."
    ],
    "c": 1,
    "e": "A Constituição veda provas ilícitas; a jurisprudência admite discussão sobre exceções como fonte independente, sempre com cautela."
  },
  {
    "d": "Processo do Trabalho",
    "t": "execução trabalhista contra ente público",
    "diff": "Difícil",
    "profile": "PGE/ES 2025 – processo do trabalho adaptado",
    "source": "PGE_ES_2025",
    "q": "Na execução trabalhista contra ente público, assinale a alternativa correta.",
    "a": [
      "O pagamento de condenação judicial contra a Fazenda Pública deve observar o regime constitucional de precatórios ou RPV, conforme o caso.",
      "A penhora direta de verbas públicas é sempre a primeira medida executiva cabível.",
      "O ente público não pode opor embargos ou impugnação em execução trabalhista.",
      "A execução contra autarquia segue necessariamente o mesmo rito da execução contra empregador privado comum."
    ],
    "c": 0,
    "e": "Condenações judiciais contra a Fazenda Pública submetem-se ao regime constitucional de precatórios/RPV, também observado no processo trabalhista."
  },
  {
    "d": "Direito Financeiro",
    "t": "responsabilidade fiscal",
    "diff": "Médio",
    "profile": "PGE/RN 2023 – LRF adaptado",
    "source": "PGE_RN_2023",
    "q": "Em matéria de responsabilidade fiscal, assinale a alternativa correta.",
    "a": [
      "A LRF não se aplica aos Estados quando houver lei orçamentária anual aprovada.",
      "A geração de despesa pública deve observar requisitos legais de planejamento, estimativa de impacto e compatibilidade orçamentária quando exigidos.",
      "Despesa obrigatória continuada pode ser criada sem demonstração de fonte de custeio.",
      "O controle fiscal é exclusivamente político e não admite controle externo."
    ],
    "c": 1,
    "e": "A LRF impõe requisitos de planejamento, transparência e responsabilidade na criação e expansão de despesas públicas."
  },
  {
    "d": "Administrativo",
    "t": "controle da Administração Pública",
    "diff": "Médio",
    "profile": "PGE/CE 2021 – controle adaptado",
    "source": "PGE_CE_2021",
    "q": "Sobre controle da Administração Pública, assinale a alternativa correta.",
    "a": [
      "O controle judicial pode substituir o mérito administrativo por conveniência própria do juiz em qualquer caso.",
      "O controle judicial alcança legalidade, juridicidade e eventual desvio de finalidade, sem substituir escolhas legítimas de mérito administrativo.",
      "Atos discricionários são imunes a qualquer controle judicial.",
      "O controle externo é exercido exclusivamente pelo Ministério Público."
    ],
    "c": 1,
    "e": "A discricionariedade não afasta controle de legalidade/juridicidade, mas o Judiciário não substitui legitimamente o administrador no mérito quando preservada a legalidade."
  },
  {
    "d": "Tributário",
    "t": "prescrição intercorrente",
    "diff": "Difícil",
    "profile": "PGE/PR 2024 – execução fiscal adaptado",
    "source": "PGE_PR_2024",
    "q": "Sobre prescrição intercorrente em execução fiscal, assinale a alternativa correta.",
    "a": [
      "Nunca ocorre em execuções promovidas pela Fazenda Pública.",
      "Relaciona-se à paralisação do processo executivo e deve observar o regime legal e a jurisprudência aplicável ao art. 40 da LEF.",
      "Depende de renúncia expressa do crédito tributário pela Fazenda Pública.",
      "Extingue apenas a penhora, mantendo íntegra a pretensão executiva."
    ],
    "c": 1,
    "e": "A prescrição intercorrente é admitida em execução fiscal, especialmente no contexto do art. 40 da LEF e da jurisprudência consolidada."
  },
  {
    "d": "Processo Civil",
    "t": "tutela provisória contra Fazenda Pública",
    "diff": "Difícil",
    "profile": "PGE/AL 2021 – processo civil adaptado",
    "source": "PGE_AL_2021",
    "q": "Sobre tutela provisória contra a Fazenda Pública, assinale a alternativa correta.",
    "a": [
      "É sempre vedada, independentemente da matéria e dos requisitos do CPC.",
      "Pode ser deferida quando presentes os requisitos legais, respeitadas as limitações específicas aplicáveis ao Poder Público.",
      "Dispensa fundamentação quando houver interesse público primário.",
      "Produz automaticamente pagamento por precatório antes do trânsito em julgado."
    ],
    "c": 1,
    "e": "Tutelas provisórias contra o Poder Público são possíveis, mas submetidas a requisitos e restrições específicas, conforme a matéria."
  },
  {
    "d": "Civil",
    "t": "responsabilidade civil do Estado e direito privado",
    "diff": "Médio",
    "profile": "PGE/CE 2021 – responsabilidade adaptado",
    "source": "PGE_CE_2021",
    "q": "Assinale a alternativa correta sobre responsabilidade civil.",
    "a": [
      "Dano, conduta e nexo causal são elementos relevantes para a responsabilização civil, sem prejuízo do regime específico aplicável ao caso.",
      "Responsabilidade civil nunca admite excludentes de nexo causal.",
      "No direito brasileiro, dano moral coletivo é sempre vedado.",
      "A responsabilidade objetiva elimina a necessidade de comprovação do dano."
    ],
    "c": 0,
    "e": "Mesmo em regimes objetivos, a responsabilização exige dano e nexo causal, embora se dispense a prova de culpa."
  },
  {
    "d": "Constitucional",
    "t": "funções essenciais à justiça",
    "diff": "Médio",
    "profile": "PGE/RN 2023 – advocacia pública adaptado",
    "source": "PGE_RN_2023",
    "q": "Sobre as funções essenciais à justiça, assinale a alternativa correta.",
    "a": [
      "A advocacia pública está constitucionalmente inserida entre as funções essenciais à justiça.",
      "As procuradorias estaduais integram o Poder Judiciário estadual.",
      "O Ministério Público representa judicialmente o Estado em demandas patrimoniais ordinárias.",
      "A Defensoria Pública exerce consultoria jurídica exclusiva do Poder Executivo."
    ],
    "c": 0,
    "e": "A Constituição trata a advocacia pública como função essencial à justiça, ao lado de outros órgãos com funções constitucionais próprias."
  },
  {
    "d": "Administrativo",
    "t": "sanções administrativas em licitações",
    "diff": "Difícil",
    "profile": "PGE/PI 2025 – licitações adaptado",
    "source": "PGE_PI_2025",
    "q": "Sobre sanções em licitações e contratos administrativos, assinale a alternativa correta.",
    "a": [
      "A aplicação de sanções dispensa contraditório quando o contratado é pessoa jurídica.",
      "A dosimetria da sanção deve observar a gravidade da infração, circunstâncias do caso e garantias processuais.",
      "A declaração de inidoneidade pode ser aplicada por qualquer servidor, verbalmente.",
      "Advertência e impedimento de licitar possuem sempre os mesmos efeitos."
    ],
    "c": 1,
    "e": "Sanções administrativas exigem devido processo, motivação e proporcionalidade, com efeitos definidos em lei."
  },
  {
    "d": "Tributário",
    "t": "imunidades tributárias",
    "diff": "Médio",
    "profile": "PGE/ES 2025 – tributário adaptado",
    "source": "PGE_ES_2025",
    "q": "Sobre imunidades tributárias, assinale a alternativa correta.",
    "a": [
      "Imunidade tributária decorre diretamente da Constituição e limita a competência tributária.",
      "Imunidade e isenção são institutos idênticos quanto à fonte normativa.",
      "Imunidade pode ser criada por decreto regulamentar.",
      "Imunidade recíproca alcança automaticamente toda atividade econômica explorada por empresa estatal em regime concorrencial."
    ],
    "c": 0,
    "e": "Imunidades são limitações constitucionais ao poder de tributar; isenções são benefícios legais no exercício da competência."
  },
  {
    "d": "Processo Civil",
    "t": "cumprimento de sentença contra Fazenda Pública",
    "diff": "Difícil",
    "profile": "PGE/MS 2021 – processo civil adaptado",
    "source": "PGE_MS_2021",
    "q": "No cumprimento de sentença que reconheça obrigação de pagar quantia pela Fazenda Pública, assinale a alternativa correta.",
    "a": [
      "Aplica-se indistintamente o rito da penhora e expropriação contra devedor privado.",
      "O pagamento deve observar o procedimento legal próprio e, conforme o valor, o regime de precatório ou RPV.",
      "A Fazenda Pública não pode impugnar o cumprimento de sentença.",
      "Honorários são sempre incabíveis nessa fase."
    ],
    "c": 1,
    "e": "O CPC prevê rito próprio para cumprimento de sentença contra a Fazenda Pública, com observância do regime constitucional de pagamento."
  }

];
