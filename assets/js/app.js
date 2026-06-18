let questions=[...QUESTION_BANK], current=0, answers={}, marks={}, started=null, examStarted=false, elapsedBase=0, totalSeconds=4*60*60, finished=false, lastTick=Date.now(), timeSpent={}, activeSet='completo', lastReport='';
const STORAGE_KEY='pgeceSimuladoV07';
const HIST_KEY='pgeceHistV07';
const CHECK_KEY='pgeceChecklistV07';


function fmt(n){return Number(n||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}
function fmtTime(sec){sec=Math.max(0,Math.round(sec||0));let h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=sec%60;return h?`${h}h ${String(m).padStart(2,'0')}min`:`${m}min ${String(s).padStart(2,'0')}s`;}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function elapsedSeconds(){return elapsedBase + (examStarted&&started?Math.floor((Date.now()-started)/1000):0);}
function setTimerIdle(){examStarted=false;started=null;elapsedBase=0;lastTick=Date.now();renderStartButton();}
function startExam(){if(finished)return; if(!examStarted){examStarted=true;started=Date.now();lastTick=Date.now();renderStartButton();save();updateTimer();}}
function renderStartButton(){let b=document.getElementById('startBtn'); if(!b)return; b.textContent=examStarted?'Cronômetro ativo':'Iniciar simulado'; b.classList.toggle('active',examStarted);}
function trackTime(){if(!examStarted||finished)return;let now=Date.now();timeSpent[current]=(timeSpent[current]||0)+(now-lastTick)/1000;lastTick=now;}
function score(){let s=0;questions.forEach((q,i)=>{if(answers[i]===undefined)return;if(answers[i]===q.c)s+=1;else s-=0.33});return Math.max(-100,s)}
function updateTimer(){if(finished)return;let elapsed=elapsedSeconds();let left=Math.max(0,totalSeconds-elapsed);let h=String(Math.floor(left/3600)).padStart(2,'0'),m=String(Math.floor(left%3600/60)).padStart(2,'0'),s=String(left%60).padStart(2,'0');document.getElementById('timer').textContent=`${h}:${m}:${s}`; if(examStarted&&left===0)finishExam(); updatePace();}
setInterval(updateTimer,1000);
function sourceLabel(id){let s=(typeof SOURCE_CATALOG!=='undefined'?SOURCE_CATALOG:[]).find(x=>x.id===id);return s?`${s.orgao} ${s.ano}`:'Base autoral';}
function initFilters(){let ds=[...new Set(QUESTION_BANK.map(q=>q.d))];let sel=document.getElementById('disciplineFilter');sel.innerHTML='<option value="TODAS">Todas as disciplinas</option>'+ds.map(d=>`<option value="${esc(d)}">${esc(d)}</option>`).join('');let srcSel=document.getElementById('sourceFilter'); if(srcSel){let srcs=[...new Set(QUESTION_BANK.map(q=>q.source).filter(Boolean))];srcSel.innerHTML='<option value="TODAS">Todas as provas-base</option>'+srcs.map(id=>`<option value="${esc(id)}">${esc(sourceLabel(id))}</option>`).join('');}}
function applyFilter(){trackTime();let d=document.getElementById('disciplineFilter').value;let srcEl=document.getElementById('sourceFilter');let src=srcEl?srcEl.value:'TODAS';questions=QUESTION_BANK.filter(q=>(d==='TODAS'||q.d===d)&&(src==='TODAS'||q.source===src));activeSet=[d==='TODAS'?'todas':d,src==='TODAS'?'todas provas-base':sourceLabel(src)].join(' • ');totalSeconds=Math.max(30*60,Math.round(questions.length*3.6*60));answers={};marks={};timeSpent={};current=0;finished=false;setTimerIdle();save();render();}
function startQuickExam(){trackTime();questions=[...QUESTION_BANK].sort(()=>Math.random()-.5).slice(0,20);activeSet='rápido 20 questões';answers={};marks={};timeSpent={};current=0;finished=false;setTimerIdle();totalSeconds=72*60;document.getElementById('disciplineFilter').value='TODAS';save();render();}
function render(){if(!questions.length)return;trackTime();let q=questions[current];document.getElementById('meta').innerHTML=`<span class='pill'>Questão ${current+1}/${questions.length}</span><span class='pill'>${q.d}</span><span class='pill'>${q.t}</span><span class='pill ${q.diff==='Difícil'?'danger':'warn'}'>${q.diff}</span><span class='pill violet'>${q.profile}</span><span class='pill'>${sourceLabel(q.source)}</span><span class='pill'>${activeSet}</span>`;document.getElementById('questionText').textContent=q.q;let mode=document.getElementById('mode').value;document.getElementById('alternatives').innerHTML=q.a.map((txt,idx)=>{let cls='alt'; if(answers[current]===idx)cls+=' selected'; if((mode==='estudo'||finished)&&answers[current]!==undefined){if(idx===q.c)cls+=' correct'; else if(answers[current]===idx)cls+=' wrong';}return `<button class='${cls}' onclick='answer(${idx})'><span class='letter'>${String.fromCharCode(65+idx)}</span><span>${esc(txt)}</span></button>`}).join('');let exp=document.getElementById('explain');exp.innerHTML=`<b>Comentário curto:</b> ${esc(q.e)}<br><br><b>Gabarito:</b> ${String.fromCharCode(65+q.c)}.<br><br><b>Pegadinha Cebraspe:</b> observe exceções, competência, efeito jurídico e distinções conceituais no tema <span class="kbd">${esc(q.t)}</span>.`;exp.className='explain '+((mode==='estudo'||finished)&&answers[current]!==undefined?'show':'');updateMarkButtons();renderNav();renderSide();save();}
function answer(idx){if(finished)return;answers[current]=idx;save();render();}
function clearAnswer(){delete answers[current];save();render();}
function nextQ(){trackTime();current=Math.min(questions.length-1,current+1);lastTick=Date.now();render();}
function prevQ(){trackTime();current=Math.max(0,current-1);lastTick=Date.now();render();}
function toggleMark(type){marks[current]=marks[current]||{};marks[current][type]=!marks[current][type];save();render();}
function updateMarkButtons(){let m=marks[current]||{};[['markReview','review'],['markDoubt','doubt'],['markGuess','guess'],['markHard','hard']].forEach(([id,type])=>document.getElementById(id).classList.toggle('active',!!m[type]));}
function showQuestionTimer(){trackTime();alert('Tempo acumulado nesta questão: '+fmtTime(timeSpent[current]||0));}
function renderNav(){document.getElementById('qnav').innerHTML=questions.map((q,i)=>{let cls='qdot'; if(answers[i]!==undefined)cls+=' answered'; if(i===current)cls+=' current'; let m=marks[i]||{}; if(m.review)cls+=' review'; if(m.doubt||m.guess||m.hard)cls+=' flag'; if(finished&&answers[i]!==undefined)cls+=answers[i]===q.c?' correct':' wrong';return `<button class='${cls}' onclick='gotoQ(${i})'>${i+1}</button>`}).join('');}
function gotoQ(i){trackTime();current=i;lastTick=Date.now();render();}
function renderSide(){let done=Object.keys(answers).length;document.getElementById('doneCount').textContent=`${done}/${questions.length}`;document.getElementById('scoreLive').textContent=fmt(score());document.getElementById('progressBar').style.width=(done/questions.length*100)+'%';let ds=[...new Set(questions.map(q=>q.d))];document.getElementById('disciplineList').innerHTML=ds.map(d=>{let idxs=questions.map((q,i)=>q.d===d?i:null).filter(i=>i!==null);let resp=idxs.filter(i=>answers[i]!==undefined).length;let acc=idxs.filter(i=>answers[i]===questions[i].c).length;let pct=resp?Math.round(acc/resp*100):0;let cls=pct>=75?'ok':pct>=50?'warn':'danger';return `<div class='discipline ${questions[current].d===d?'active':''}' onclick='jumpDiscipline("${esc(d)}")'><span>${esc(d)}</span><span class='pill ${cls}'>${resp}/${idxs.length}</span></div>`}).join('');}
function updatePace(){let done=Object.keys(answers).length;let elapsed=elapsedSeconds();document.getElementById('paceLive').textContent=(examStarted&&done)?fmtTime(elapsed/done):'—';}
function jumpDiscipline(d){let i=questions.findIndex(q=>q.d===d);if(i>=0)gotoQ(i);}
function finishExam(){
  trackTime();
  let elapsed=Math.floor(elapsedSeconds());
  elapsedBase=elapsed;examStarted=false;started=null;finished=true;renderStartButton();
  let correct=0,wrong=0,blank=0;
  questions.forEach((q,i)=>{if(answers[i]===undefined)blank++; else if(answers[i]===q.c)correct++; else wrong++;});
  let sc=score();
  let ds=[...new Set(questions.map(q=>q.d))];
  let rows=ds.map(d=>{let idxs=questions.map((q,i)=>q.d===d?i:null).filter(i=>i!==null);let resp=idxs.filter(i=>answers[i]!==undefined).length;let acc=idxs.filter(i=>answers[i]===questions[i].c).length;let pct=idxs.length?Math.round(acc/idxs.length*100):0;let avg=fmtTime(idxs.reduce((a,i)=>a+(timeSpent[i]||0),0)/(idxs.length||1));return `<tr><td>${esc(d)}</td><td>${acc}/${idxs.length}</td><td>${pct}%</td><td><div class='heat'><span style='width:${pct}%'></span></div></td><td>${avg}</td></tr>`}).join('');
  let weakList=ds.map(d=>{let idxs=questions.map((q,i)=>q.d===d?i:null).filter(i=>i!==null);let acc=idxs.filter(i=>answers[i]===questions[i].c).length;return {d,p:acc/idxs.length}}).sort((a,b)=>a.p-b.p).slice(0,4).map(x=>x.d);
  let marked=Object.values(marks).filter(m=>m.guess||m.doubt||m.hard||m.review).length;
  let pareto=buildParetoAnalysis();
  let topPareto=pareto.items.slice(0,7).map(x=>x.theme).join(', ')||'sem dados suficientes';
  let reportText=`Relatório de Desempenho — Simulado PGE-CE
Conjunto: ${activeSet}
Questões: ${questions.length}
Nota final: ${fmt(sc)}
Acertos: ${correct} | Erros: ${wrong} | Em branco: ${blank}
Tempo utilizado: ${fmtTime(elapsed)}
Tempo médio por questão respondida: ${doneAvg(elapsed)}
Situação: ${sc>=50?'acima do corte de 50 pontos':'abaixo do corte de 50 pontos'}
Prioridades por disciplina: ${weakList.join(', ')||'sem dados suficientes'}
Plano Pareto 80/20: ${topPareto}`;
  lastReport=reportText;
  document.getElementById('resultContent').innerHTML=`<div class='resultHero'><div class='heroCard'><b>${correct}</b><span>Acertos</span></div><div class='heroCard'><b>${wrong}</b><span>Erros</span></div><div class='heroCard'><b>${blank}</b><span>Branco</span></div><div class='heroCard'><b>${fmt(sc)}</b><span>Nota final</span></div></div><div class='info'><b>Situação:</b> ${sc>=50?'acima do corte de 50 pontos':'abaixo do corte de 50 pontos'}. <b>Tempo:</b> ${fmtTime(elapsed)}. <b>Marcações:</b> ${marked}.</div><p><b>Prioridade por disciplina:</b> ${weakList.join(', ')||'sem dados suficientes'}.</p><p><b>Plano Pareto 80/20:</b> ${esc(topPareto)}.</p><p><b>Estratégia:</b> ataque primeiro temas com alta incidência Cebraspe e baixo desempenho. Reduza erros de alto risco marcados como “chutei” e reforce os temas que concentram a maior parte da perda de pontos.</p>${renderParetoBlock(pareto,false)}<h3>Mapa de calor por disciplina</h3><table class='table'><thead><tr><th>Disciplina</th><th>Acertos</th><th>%</th><th>Domínio</th><th>Tempo médio</th></tr></thead><tbody>${rows}</tbody></table><h3>Relatório copiável</h3><textarea style='width:100%;height:170px'>${esc(reportText)}</textarea>`;
  saveHistory(correct,wrong,blank,sc,elapsed,weakList,pareto.items.slice(0,7));
  document.getElementById('resultDialog').showModal();render();
}
function doneAvg(elapsed){let d=Object.keys(answers).length;return d?fmtTime(elapsed/d):'—';}
function showErrors(){let items=questions.map((q,i)=>({q,i,m:marks[i]||{}})).filter(x=>(answers[x.i]!==undefined&&answers[x.i]!==x.q.c)||x.m.review||x.m.doubt||x.m.guess||x.m.hard);document.getElementById('errorsContent').innerHTML=items.length?items.map(x=>`<div class='notice' style='margin-bottom:10px'><b>Q${x.i+1} — ${esc(x.q.d)} / ${esc(x.q.t)}</b><br>Sua resposta: ${answers[x.i]===undefined?'em branco':String.fromCharCode(65+answers[x.i])}. Correta: ${String.fromCharCode(65+x.q.c)}.<br>Marcações: ${Object.entries(x.m).filter(([,v])=>v).map(([k])=>k).join(', ')||'nenhuma'}. Tempo: ${fmtTime(timeSpent[x.i]||0)}.<br>${esc(x.q.e)}</div>`).join(''):'Nenhuma questão errada ou marcada até o momento.';document.getElementById('errorsDialog').showModal();}
function redoErrors(){let errs=questions.filter((q,i)=>answers[i]!==undefined&&answers[i]!==q.c);if(!errs.length)return;questions=errs;answers={};marks={};timeSpent={};current=0;finished=false;setTimerIdle();activeSet='refazer erradas';document.getElementById('errorsDialog').close();save();render();}
function exportCSV(){let lines=['numero,prova_base,disciplina,tema,dificuldade,resposta,correta,situacao,tempo_segundos,revisar,duvida,chutei,dificil'];questions.forEach((q,i)=>{let ans=answers[i]===undefined?'':String.fromCharCode(65+answers[i]);let cor=String.fromCharCode(65+q.c);let st=answers[i]===undefined?'BRANCO':answers[i]===q.c?'CERTO':'ERRADO';let m=marks[i]||{};lines.push(`${i+1},"${sourceLabel(q.source)}","${q.d}","${q.t}","${q.diff}",${ans},${cor},${st},${Math.round(timeSpent[i]||0)},${m.review?1:0},${m.doubt?1:0},${m.guess?1:0},${m.hard?1:0}`)});downloadText(lines.join('\n'),'desempenho_simulado_pge_ce_v07.csv','text/csv;charset=utf-8');}
function shuffleQuestions(){trackTime();questions=[...questions].sort(()=>Math.random()-.5);answers={};marks={};timeSpent={};current=0;finished=false;setTimerIdle();save();render();}
function resetExam(){if(!confirm('Reiniciar respostas?'))return;questions=[...QUESTION_BANK];answers={};marks={};timeSpent={};current=0;finished=false;setTimerIdle();totalSeconds=4*60*60;activeSet='completo';document.getElementById('disciplineFilter').value='TODAS';localStorage.removeItem(STORAGE_KEY);render();}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify({answers,marks,current,elapsedBase:elapsedSeconds(),timeSpent,activeSet,totalSeconds,questions:questions.map(q=>QUESTION_BANK.indexOf(q))}));}
function load(){let raw=localStorage.getItem(STORAGE_KEY);if(!raw){setTimerIdle();return;}try{let s=JSON.parse(raw);if(Array.isArray(s.questions)&&s.questions.length)questions=s.questions.map(i=>QUESTION_BANK[i]).filter(Boolean);answers=s.answers||{};marks=s.marks||{};current=Math.min(s.current||0,questions.length-1);elapsedBase=s.elapsedBase||0;examStarted=false;started=null;lastTick=Date.now();timeSpent=s.timeSpent||{};activeSet=s.activeSet||'completo';totalSeconds=s.totalSeconds||4*60*60;renderStartButton();}catch(e){setTimerIdle();}}
function saveHistory(c,w,b,sc,elapsed,weak,pareto){let hist=JSON.parse(localStorage.getItem(HIST_KEY)||'[]');hist.push({data:new Date().toISOString(),conjunto:activeSet,questoes:questions.length,acertos:c,erros:w,branco:b,nota:sc,tempo:elapsed,prioridade:weak,pareto:(pareto||[]).map(x=>x.theme)});localStorage.setItem(HIST_KEY,JSON.stringify(hist.slice(-30)));}
function showHistory(){let hist=JSON.parse(localStorage.getItem(HIST_KEY)||'[]');document.getElementById('historyContent').innerHTML=hist.length?`<table class='table'><thead><tr><th>Data</th><th>Conjunto</th><th>Nota</th><th>Acertos</th><th>Erros</th><th>Tempo</th><th>Prioridade</th><th>Pareto 80/20</th></tr></thead><tbody>${hist.slice().reverse().map(h=>`<tr><td>${new Date(h.data).toLocaleString('pt-BR')}</td><td>${esc(h.conjunto)}</td><td>${fmt(h.nota)}</td><td>${h.acertos}/${h.questoes}</td><td>${h.erros}</td><td>${fmtTime(h.tempo)}</td><td>${esc((h.prioridade||[]).join(', '))}</td><td>${esc((h.pareto||[]).join(', '))}</td></tr>`).join('')}</tbody></table>`:'Ainda não há tentativas finalizadas.';document.getElementById('historyDialog').showModal();}
function clearHistory(){if(confirm('Limpar histórico de tentativas?')){localStorage.removeItem(HIST_KEY);showHistory();}}
function showRadar(){let rows=RADAR.map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td><span class='pill ${r[2]==='Alta'?'danger':'warn'}'>${r[2]}</span></td><td>${esc(r[3])}</td></tr>`).join('');document.getElementById('radarContent').innerHTML=`<p class='small'>Use este painel para priorizar revisão. Ele combina padrão de cobrança jurídico da banca com temas estratégicos em provas de Procuradoria.</p><table class='table'><thead><tr><th>Disciplina</th><th>Tema</th><th>Incidência</th><th>Como treinar</th></tr></thead><tbody>${rows}</tbody></table>`;document.getElementById('radarDialog').showModal();}
function loadChecklistState(){try{return JSON.parse(localStorage.getItem(CHECK_KEY)||'{}')}catch(e){return {}}}
function saveChecklistState(st){localStorage.setItem(CHECK_KEY,JSON.stringify(st));}
function showChecklist(){let st=loadChecklistState();let html=Object.entries(CHECKLIST).map(([grupo,itens])=>`<h3>${esc(grupo)}</h3><div class='grid2'>${itens.map(item=>{let key=grupo+'::'+item;return `<label class='checkItem'><input type='checkbox' ${st[key]?'checked':''} onchange='toggleChecklist("${esc(key)}",this.checked)'><span><b>${esc(item)}</b><br><span class='small'>Marque quando estiver estudado/revisado/dominado.</span></span></label>`}).join('')}</div>`).join('');document.getElementById('checklistContent').innerHTML=html;document.getElementById('checklistDialog').showModal();}
function toggleChecklist(key,val){let st=loadChecklistState();st[key]=val;saveChecklistState(st);}
function exportChecklist(){let st=loadChecklistState();let lines=['grupo,item,status'];Object.entries(CHECKLIST).forEach(([g,itens])=>itens.forEach(item=>{let key=g+'::'+item;lines.push(`"${g}","${item}",${st[key]?'MARCADO':'PENDENTE'}`)}));downloadText(lines.join('\n'),'checklist_edital_pge_ce.csv','text/csv;charset=utf-8');}

function normalizeTerm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
function radarIncidence(q){
  let nq=normalizeTerm((q.d||'')+' '+(q.t||''));
  let match=(typeof RADAR!=='undefined'?RADAR:[]).find(r=>nq.includes(normalizeTerm(r[1]))||normalizeTerm(r[1]).includes(normalizeTerm(q.t||'')));
  if(!match)return {label:'Baixa',weight:1};
  return {label:match[2],weight:match[2]==='Alta'?3:match[2]==='Média'?2:1};
}
function priorityClass(p){return p>=80?'priorityMax':p>=55?'priorityHigh':'priorityMedium';}
function priorityLabel(p){return p>=80?'Máxima':p>=55?'Alta':'Média';}
function buildParetoAnalysis(){
  let totalWrong=0,totalBlank=0,totalAnswered=Object.keys(answers).length;
  let byTheme={};
  questions.forEach((q,i)=>{
    let key=`${q.d} — ${q.t}`;
    let inc=radarIncidence(q);
    byTheme[key]=byTheme[key]||{theme:key,discipline:q.d,topic:q.t,total:0,answered:0,correct:0,wrong:0,blank:0,guess:0,doubt:0,hard:0,review:0,incidence:inc.label,incWeight:inc.weight,time:0};
    let o=byTheme[key];o.total++;o.time+=(timeSpent[i]||0);
    let m=marks[i]||{}; if(m.guess)o.guess++; if(m.doubt)o.doubt++; if(m.hard)o.hard++; if(m.review)o.review++;
    if(answers[i]===undefined){o.blank++;totalBlank++;return;}
    o.answered++;
    if(answers[i]===q.c)o.correct++; else {o.wrong++;totalWrong++;}
  });
  let items=Object.values(byTheme).map(o=>{
    let errorLoad=o.wrong + o.blank*0.35 + o.guess*0.45 + o.doubt*0.35 + o.hard*0.25;
    let accuracy=o.answered?o.correct/o.answered:null;
    let weakness=accuracy===null?0.45:(1-accuracy);
    let scoreRaw=(errorLoad*28)+(o.incWeight*18)+(weakness*22)+(o.review*4);
    let priority=Math.min(100,Math.round(scoreRaw));
    return {...o,errorLoad,accuracy,priority};
  }).sort((a,b)=>b.priority-a.priority||b.wrong-a.wrong||b.incWeight-a.incWeight);
  let accumulated=0;
  items.forEach(o=>{accumulated+=o.wrong;o.cumWrongPct=totalWrong?Math.round(accumulated/totalWrong*100):0;});
  let critical=items.filter(o=>o.wrong>0||o.blank>0||o.guess>0||o.doubt>0).slice(0,Math.max(5,Math.ceil(items.length*.2)));
  if(!critical.length)critical=items.slice(0,Math.max(5,Math.ceil(items.length*.2)));
  return {items,totalWrong,totalBlank,totalAnswered,critical};
}
function renderParetoBlock(pareto,full=true){
  let top=pareto.items.slice(0,10);
  let critical=pareto.critical.slice(0,8);
  let totalThemes=pareto.items.length;
  let criticalWrong=critical.reduce((a,x)=>a+x.wrong,0);
  let coverage=pareto.totalWrong?Math.round(criticalWrong/pareto.totalWrong*100):0;
  let cards=`<div class='paretoGrid'><div class='paretoCard'><b>${critical.length}/${totalThemes}</b><span>temas priorizados</span></div><div class='paretoCard'><b>${coverage}%</b><span>dos erros cobertos pelo bloco crítico</span></div><div class='paretoCard'><b>${pareto.totalWrong}</b><span>erros mapeados</span></div></div>`;
  let table=`<table class='table'><thead><tr><th>Rank</th><th>Tema</th><th>Incidência</th><th>Erros</th><th>Acertos</th><th>Marcadores</th><th>Prioridade</th><th>Concentração</th></tr></thead><tbody>${top.map((o,i)=>`<tr><td><span class='rankBadge'>${i+1}</span></td><td><b>${esc(o.theme)}</b><br><span class='small'>Tempo acumulado: ${fmtTime(o.time)} • Questões: ${o.total}</span></td><td><span class='pill ${o.incidence==='Alta'?'danger':o.incidence==='Média'?'warn':''}'>${o.incidence}</span></td><td>${o.wrong}</td><td>${o.correct}/${o.answered||0}</td><td class='small'>Chute: ${o.guess} • Dúvida: ${o.doubt} • Difícil: ${o.hard} • Revisar: ${o.review}</td><td><span class='pill ${priorityClass(o.priority)}'>${priorityLabel(o.priority)} (${o.priority})</span></td><td><div class='paretoBar'><span style='width:${Math.min(100,o.cumWrongPct||0)}%'></span></div><span class='small'>${o.cumWrongPct||0}% acumulado</span></td></tr>`).join('')}</tbody></table>`;
  let plan=`<h3>Plano 80/20 de revisão</h3><ol>${critical.map(o=>`<li><b>${esc(o.theme)}</b> — revise primeiro porque combina ${o.incidence.toLowerCase()} incidência, ${o.wrong} erro(s), ${o.blank} branco(s) e ${o.guess+o.doubt+o.hard+o.review} marcação(ões).</li>`).join('')}</ol>`;
  let tip=pareto.totalWrong?`<div class='info'><b>Leitura:</b> os temas acima concentram a maior parte da perda de pontos. A prioridade máxima é revisar primeiro o que tem alta incidência Cebraspe e baixo desempenho pessoal.</div>`:`<div class='notice'><b>Sem erros suficientes ainda.</b> O painel está usando incidência Cebraspe, marcações e distribuição do banco para sugerir revisão preventiva.</div>`;
  return `${full?tip:''}${cards}${plan}${table}`;
}
function showPareto(){let p=buildParetoAnalysis();document.getElementById('paretoContent').innerHTML=renderParetoBlock(p,true);document.getElementById('paretoDialog').showModal();}
function exportPareto(){let p=buildParetoAnalysis();let lines=['rank,disciplina,tema,incidencia,total,respondidas,acertos,erros,brancos,chutei,duvida,dificil,revisar,tempo_segundos,prioridade,prioridade_texto,percentual_acumulado_erros'];p.items.forEach((o,i)=>lines.push(`${i+1},"${o.discipline}","${o.topic}","${o.incidence}",${o.total},${o.answered},${o.correct},${o.wrong},${o.blank},${o.guess},${o.doubt},${o.hard},${o.review},${Math.round(o.time||0)},${o.priority},"${priorityLabel(o.priority)}",${o.cumWrongPct||0}`));downloadText(lines.join('\n'),'pareto_80_20_pge_ce.csv','text/csv;charset=utf-8');}

function copyReport(){navigator.clipboard&&navigator.clipboard.writeText(lastReport);alert('Relatório copiado.');}
function downloadText(text,name,type){let blob=new Blob([text],{type});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}

function showSources(){
  let catalog=(typeof SOURCE_CATALOG!=='undefined'?SOURCE_CATALOG:[]);
  let rows=catalog.map(s=>{
    let count=QUESTION_BANK.filter(q=>q.source===s.id).length;
    return `<tr><td><b>${esc(s.orgao)} ${s.ano}</b><br><span class='small'>${esc(s.tipo)} • ${esc(s.formato)} • ${s.questoes||'—'} questões oficiais</span></td><td>${count} questões autorais vinculadas</td><td>${esc(s.observacao)}</td><td><a href="${esc(s.url)}" target="_blank" rel="noopener">Abrir fonte oficial</a></td></tr>`;
  }).join('');
  let notes=(typeof SOURCE_NOTES!=='undefined'?SOURCE_NOTES:[]).map(n=>`<li>${esc(n)}</li>`).join('');
  document.getElementById('sourcesContent').innerHTML=`<div class='notice'><b>Critério de uso:</b><ul>${notes}</ul></div><table class='table'><thead><tr><th>Prova oficial analisada</th><th>Na base</th><th>Uso no simulado</th><th>Fonte</th></tr></thead><tbody>${rows}</tbody></table>`;
  document.getElementById('sourcesDialog').showModal();
}
function exportSources(){
  let catalog=(typeof SOURCE_CATALOG!=='undefined'?SOURCE_CATALOG:[]);
  let lines=['id,orgao,ano,tipo,formato,questoes,url,questoes_autorais_vinculadas,observacao'];
  catalog.forEach(s=>lines.push(`${s.id},"${s.orgao}",${s.ano},"${s.tipo}","${s.formato}",${s.questoes},"${s.url}",${QUESTION_BANK.filter(q=>q.source===s.id).length},"${s.observacao}"`));
  downloadText(lines.join('\n'),'fontes_cebraspe_pge.csv','text/csv;charset=utf-8');
}

document.getElementById('mode').addEventListener('change',render);document.getElementById('disciplineFilter').addEventListener('change',applyFilter);let sf=document.getElementById('sourceFilter');if(sf)sf.addEventListener('change',applyFilter);initFilters();load();render();renderStartButton();updateTimer();
