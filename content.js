"use strict";(()=>{try{if(typeof window==="undefined"||window!==window.top)return;function ue(i,n=.5){if(i.length<3)return!1;let e=i.replace(/[\s\d\p{P}]/gu,"");return e.length===0?!1:e.replace(/[^a-zA-Z]/g,"").length/e.length>=n}var Qe={short:8,medium:12,long:18},me=new Set(["and","or","but","nor","yet","so"]),H=new Set(["because","although","though","whereas","unless","whenever","wherever","whether"]),I=new Set(["as","since","while","if","when","until","before","after","once"]),X=new Set(["which","who","whom","whose","where","that"]),ei=new Set(["which","who","whom","whose","where"]),ze=new Set(["however","therefore","thus","hence","nevertheless","nonetheless","moreover","furthermore","meanwhile","otherwise","consequently","accordingly"]),ii=new Set(["about","from","into","through","across","toward","towards","without","despite","between","on","for","with","by","in","over","under","beyond","against","compared","including"]),ni=new Set(["how","why","what"]),ai=new Set([...H,...I,...X]),ti=new Set(["know","knew","known","knows","think","thought","thinks","believe","believed","believes","say","said","says","tell","told","tells","feel","felt","feels","find","found","finds","show","showed","shown","shows","suggest","suggested","suggests","argue","argued","argues","claim","claimed","claims","report","reported","reports","explain","explained","explains","realize","realized","realizes","notice","noticed","notices","assume","assumed","assumes","hope","hoped","hopes","expect","expected","expects","confirm","confirmed","confirms","reveal","revealed","reveals","mean","meant","means","understand","understood","understands","indicate","indicated","indicates","ensure","ensured","ensures","note","noted","notes","prove","proved","proven","proves","agree","agreed","agrees","conclude","concluded","concludes","discover","discovered","discovers","learn","learned","learnt","learns","remember","remembered","remembers","mention","mentioned","mentions","deny","denied","denies","insist","insisted","insists","decide","decided","decides","state","stated","states","declare","declared","declares"]),ri=new Set(["accept","achieve","act","add","address","admit","adopt","advance","affect","afford","agree","aim","allow","announce","answer","appear","apply","approach","argue","arrange","arrive","ask","assume","attack","attempt","attract","avoid","balance","base","bear","beat","become","begin","believe","belong","benefit","bet","bite","blame","block","blow","bother","break","breathe","bring","build","burn","buy","call","care","carry","catch","cause","celebrate","challenge","change","charge","check","choose","claim","clean","clear","climb","close","collect","combine","come","commit","communicate","compare","compete","complain","complete","concern","conclude","confirm","connect","consider","consist","construct","contain","continue","contribute","control","convert","convince","cook","cope","correct","cost","count","cover","crash","create","cross","cry","cut","damage","dance","dare","deal","debate","decide","declare","decline","defend","define","deliver","demand","demonstrate","deny","depend","deploy","describe","design","desire","destroy","detect","determine","develop","die","differ","dig","direct","disappear","discover","discuss","display","distinguish","distribute","do","dominate","doubt","draft","drag","draw","dream","dress","drink","drive","drop","dry","earn","eat","embrace","emerge","emphasize","employ","enable","encounter","encourage","end","engage","enjoy","ensure","enter","escape","establish","evaluate","examine","exceed","exchange","excite","exclude","excuse","execute","exercise","exhibit","exist","expand","expect","experience","experiment","explain","explore","expose","express","extend","extract","face","fail","fall","favor","fear","feature","feed","feel","fight","figure","fill","find","finish","fire","fit","fix","fly","focus","fold","follow","force","forget","forgive","form","found","frame","free","fund","gain","gather","generate","get","give","go","grab","grant","grasp","grow","guarantee","guess","guide","handle","hang","happen","hate","have","head","hear","help","hide","highlight","hire","hit","hold","hope","hurt","identify","ignore","illustrate","imagine","impact","implement","imply","import","impose","impress","improve","include","incorporate","increase","indicate","influence","inform","initiate","inject","innovate","insert","insist","inspire","install","intend","interact","interpret","introduce","invest","investigate","invite","involve","isolate","join","judge","jump","justify","keep","kick","kill","kiss","knock","know","label","lack","land","last","laugh","launch","lay","lead","lean","learn","leave","lend","let","leverage","lie","lift","light","like","limit","link","listen","live","load","lock","look","lose","love","maintain","make","manage","manufacture","mark","match","matter","maximize","mean","measure","meet","mention","merge","might","mind","miss","mix","model","modify","monitor","motivate","move","multiply","name","navigate","need","note","notice","observe","obtain","occur","offer","open","operate","oppose","optimize","order","organize","outline","overcome","overlap","oversee","own","pack","paint","participate","pass","pause","pay","perceive","perform","permit","persist","pick","place","plan","play","please","point","pose","position","post","pour","practice","predict","prefer","prepare","present","preserve","press","pretend","prevent","print","prioritize","process","produce","program","project","promise","promote","propose","protect","prove","provide","publish","pull","purchase","pursue","push","put","question","quit","raise","range","reach","react","read","realise","realize","receive","recognise","recognize","recommend","record","recover","recruit","reduce","refer","reflect","refuse","regard","register","regulate","reinforce","reject","relate","release","rely","remain","remember","remind","remove","render","repair","repeat","replace","reply","report","represent","reproduce","request","require","rescue","research","reserve","resign","resist","resolve","respond","rest","restore","restructure","restrict","result","retain","retire","retrieve","return","reveal","reverse","review","ride","ring","rise","risk","roll","rule","run","rush","sacrifice","satisfy","save","say","scale","scan","schedule","score","screen","search","secure","see","seek","seem","select","sell","send","separate","serve","set","settle","shake","shape","share","shelter","shift","ship","shoot","shop","shout","show","shut","signal","simplify","sing","sit","skip","sleep","slide","slow","smile","solve","sort","sound","speak","specialize","specify","spend","spin","split","sponsor","spread","stand","start","state","stay","steal","steer","step","stick","stimulate","stop","store","strengthen","stress","stretch","strike","struggle","structure","study","submit","succeed","suffer","suggest","suit","summarize","supply","support","suppose","surface","surprise","surround","survive","suspect","sustain","swap","switch","symbolize","tackle","take","talk","target","teach","tell","tend","terminate","test","thank","think","threaten","throw","tie","touch","track","trade","train","transfer","transform","translate","travel","treat","trigger","trust","try","turn","type","understand","undertake","unite","unlock","update","upgrade","urge","use","utilize","validate","value","vary","verify","view","visit","volunteer","vote","wait","wake","walk","want","warn","wash","waste","watch","wear","weigh","welcome","will","win","wish","wonder","work","worry","write","yield"]),si=new Set(["the","a","an","him","her","them","us","me","it","its","you","himself","herself","themselves","ourselves","myself","yourself","yourselves","itself","my","your","his","our","their","this","that","these","those","some","any","no","every","each","all","both","such","several","many","few","much","more","most","other","another","either","neither","enough","what","which","whose","in","on","at","of","for","with","by","about","between","among","through","during","before","after","above","below","from","into","out","up","down","off","over","under","one","two","three","four","five","six","seven","eight","nine","ten"]),je=new Set(["i","you","he","she","it","we","they","there","this","these","those","one","someone","everyone","anyone","nobody","everybody","somebody","anybody","nothing","something","everything","anything","people","my","your","his","her","its","our","their","many","most","few","several","some","all","both","each","every","no","neither","either","another","such","enough","half","none","other","not","never"]),xe=new Set(["can","could","will","would","shall","should","may","might","must"]),qe=new Set(["is","are","was","were","has","have","had","do","does","did","am"]),J=new Set(["something","nothing","everything","anything","morning","evening","thing","nothing","building","meaning","feeling","meeting","beginning","understanding","opening","clothing","setting","training"]),oi=new Set(["start","starts","started","starting","begin","begins","began","begun","beginning","continue","continues","continued","continuing","try","tries","tried","trying","want","wants","wanted","wanting","need","needs","needed","needing","like","likes","liked","liking","love","loves","loved","loving","hate","hates","hated","hating","hope","hopes","hoped","hoping","expect","expects","expected","expecting","plan","plans","planned","planning","decide","decides","decided","deciding","manage","manages","managed","managing","fail","fails","failed","failing","refuse","refuses","refused","refusing","seem","seems","seemed","seeming","appear","appears","appeared","appearing","tend","tends","tended","tending","afford","affords","afforded","affording","agree","agrees","agreed","agreeing","promise","promises","promised","promising","offer","offers","offered","offering","learn","learns","learned","learnt","learning","choose","chooses","chose","chosen","choosing","prefer","prefers","preferred","preferring","claim","claims","claimed","claiming","pretend","pretends","pretended","pretending","threaten","threatens","threatened","threatening","deserve","deserves","deserved","deserving","struggle","struggles","struggled","struggling","cease","ceases","ceased","ceasing","hesitate","hesitates","hesitated","hesitating","proceed","proceeds","proceeded","proceeding","long","longs","longed","longing","wish","wishes","wished","wishing","seek","seeks","sought","seeking","aim","aims","aimed","aiming","prepare","prepares","prepared","preparing","happen","happens","happened","happening","used","able","enough","likely","unlikely","going","about","have","has","had","having","ought","how","what","where","when","whom","whether","not","never"]),di=new Set(["same","big","new","old","particular","very","other","specific","certain","exact","entire","whole","original","initial","final","single","simple","general","basic","major","minor"]);function z(i){return i.toLowerCase().replace(/[^a-z'-]/g,"")}function pe(i){return/[,;]$/.test(i)}function li(i){let n=0;for(let e of i){let a=z(e);ai.has(a)&&n++}return n}function Ee(i){let n=z(i);return H.has(n)||I.has(n)}function Le(i){return i==="\u2014"||i==="\u2013"||i==="--"||i==="-"}function ci(i,n){if(n+1>=i.length)return!1;let e=z(i[n+1]);return!!(di.has(e)||/(?:ful|ous|ive|able|ible|less|ent|ant|ical|ary|ory)$/.test(e))}function gi(i){let n=z(i),e=n.includes("'")?n.split("'")[0]:n;return je.has(n)||je.has(e)||n==="the"||n==="a"||n==="an"||xe.has(n)||xe.has(e)||qe.has(n)||qe.has(e)?!0:/(?:ful|ous|ive|able|ible|less|ent|ant|ical|ary|ory)$/.test(n)||n.endsWith("ed")&&n.length>3?!1:n.endsWith("ing")&&n.length>4?!!J.has(n):!!(/^[A-Z]/.test(i)&&i.length>1)}var Y=new Set(["about","above","across","after","against","along","among","around","at","before","behind","below","beneath","beside","between","beyond","by","despite","down","during","except","for","from","in","inside","into","like","near","of","off","on","onto","out","outside","over","past","through","to","toward","towards","under","underneath","until","up","upon","with","within","without"]);function ui(i){let n=z(i);return!!(Y.has(n)||n.endsWith("ly")&&n.length>3||/(?:ful|ous|ive|able|ible|less|ent|ant|ical|ary|ory)$/.test(n)||n.endsWith("ing")&&n.length>4&&!J.has(n)||n.endsWith("ed")&&n.length>3)}function mi(i){let n=z(i);return!!(Y.has(n)||n.endsWith("ly")&&n.length>3||/(?:ful|ous|ive|able|ible|less|ent|ant|ical|ary|ory)$/.test(n))}function pi(i){if(i.length<=1)return i;let n=[];for(let e=0;e<i.length;e++){let a=i[e],t=a.text.split(/\s+/).length;if(t<3&&n.length>0){let r=n[n.length-1];r.text+=" "+a.text}else t<3&&e<i.length-1?i[e+1]={text:a.text+" "+i[e+1].text,level:a.level}:n.push({...a})}return n}function hi(i,n="medium"){let e=i.match(/\S+/g);if(!e||e.length===0)return[];let a=n==="fine"?12:15,t=n==="fine"?3:5,r=n==="fine"?3:5,s=n==="fine"?3:4,o=e.length>=a,d=[],u=[],g=0,v=Ee(e[0]);if(!v){let p=z(e[0]);if(p.endsWith("ing")&&p.length>4&&!J.has(p))v=!0;else if(p.endsWith("ed")&&p.length>3)v=!0;else if(Y.has(p))v=!0;else if(e.length>=2&&(p.endsWith("ly")||p==="not"||p==="never")){let l=z(e[1]);(l.endsWith("ing")&&l.length>4&&!J.has(l)||l.endsWith("ed")&&l.length>3)&&(v=!0)}}for(let p=0;p<e.length;p++){let c=e[p],l=z(c),b=p>0?e[p-1]:"",k=pe(b),h=!1,m=0;if(u.length>=1){if(b.endsWith(";"))h=!0,m=Ee(c)?1:0;else if(b.endsWith(":")&&!b.includes("//")&&!/^\d/.test(c))e.length-p>=4&&(h=!0,m=Math.min(g+1,2));else if(Le(c)&&u.length>=2)h=!0,m=g;else if(!Le(b)&&(b.endsWith("\u2014")||b.endsWith("\u2013")))h=!0,m=g;else if(c.startsWith("(")&&u.length>=2)h=!0,m=Math.min(g+1,2);else if(b.endsWith(")")&&g>0)h=!0,m=Math.max(g-1,0);else if(me.has(l)&&k)h=!0,m=0;else if(H.has(l)&&z(b)!=="even")h=!0,m=Math.min(g+1,2);else if(l==="even"&&p+1<e.length){let y=z(e[p+1]);(I.has(y)||H.has(y))&&(h=!0,m=Math.min(g+1,2))}else if(I.has(l)&&k)h=!0,m=Math.min(g+1,2);else if(X.has(l)&&k)if(l==="that"){let y=z(b.replace(/[,;]$/,""));ti.has(y)||ci(e,p)||(h=!0,m=Math.min(g+1,2))}else h=!0,m=Math.min(g+1,2);else if(ze.has(l)&&(k||p===0))h=!0,m=0;else if(k&&(l==="the"||l==="a"||l==="an")&&!(g>=1||v||o&&u.length>=10)){for(let y=p+1;y<Math.min(p+7,e.length);y++)if(pe(e[y])){h=!0,m=Math.min(g+1,2);break}}else(g>=1||v||o&&u.length>=10)&&k&&!me.has(l)&&!H.has(l)&&!I.has(l)&&!X.has(l)&&!ze.has(l)&&(gi(c)?(h=!0,m=0,v=!1):g>=1&&!mi(c)?(h=!0,m=0):v&&!ui(c)&&(h=!0,m=0,v=!1));if(!h&&n!=="coarse"&&o&&u.length>=t){let y=e.length-p;if(me.has(l)&&y>=r)h=!0,m=0;else if(I.has(l)&&y>=s)h=!0,m=Math.min(g+1,2);else if(ei.has(l)&&y>=s)h=!0,m=Math.min(g+1,2);else if(l==="to"&&p+1<e.length&&y>=4){let j=z(b);if(!oi.has(j)){let w=z(e[p+1]);ri.has(w)&&!si.has(w)&&(h=!0,m=Math.min(g+1,2))}}}if(!h&&n==="fine"&&o&&u.length>=4){let y=e.length-p;ii.has(l)&&y>=4||ni.has(l)&&y>=4?(h=!0,m=Math.min(g+1,2)):/^["'\u201C\u2018]/.test(c)&&u.length>=3&&(h=!0,m=0)}}if(h&&u.length>0){if(X.has(l)&&u.length>=1){let y=u[u.length-1],j=z(y);if(Y.has(j)&&!pe(y)){let w=u.pop();u.length>0&&d.push({text:u.join(" "),level:g}),u=[w,c],g=m;continue}}d.push({text:u.join(" "),level:g}),u=[c],g=m}else u.push(c)}return u.length>0&&d.push({text:u.join(" "),level:g}),pi(d)}function Z(i,n="medium",e="medium"){let a=i.trim(),t=a.split(/\s+/).filter(d=>d.length>0),r=Qe[n];if(t.length<r)return{chunks:[{text:a,level:0}],needsLLM:!1};let s=hi(a,e);return s.length>1?{chunks:s,needsLLM:!1}:li(t)>=3?{chunks:[{text:a,level:0}],needsLLM:!0}:{chunks:[{text:a,level:0}],needsLLM:!1}}function he(i){return i.map(n=>"  ".repeat(n.level)+n.text).join(`
`)}var Q=["zk","gz","gk","cet4","cet6","ky","adv"];function getWordInfoFromBackground(word){return new Promise(resolve=>{chrome.runtime.sendMessage({type:"QUERY_WORD",word:word},r=>resolve(r!=null?r:{exists:false,level:null,definition:null}))})}function getWordInfosFromBackground(words){if(!words.length)return Promise.resolve([]);return new Promise(resolve=>{chrome.runtime.sendMessage({type:"QUERY_WORDS",words:words},r=>resolve(Array.isArray(r)?r:words.map(()=>({exists:false,level:null,definition:null}))))})}function bi(i){return!!(i.length<3||/^\d+$/.test(i)||/[^a-zA-Z'-]/.test(i)||i.includes("'"))}async function ne(i){const r=await getWordInfoFromBackground(i);return r.exists?r.level:null}async function yi(i,n="zk"){const r=await getWordInfoFromBackground(i);if(!r.exists)return!1;const e=Q.indexOf(n),a=e>=0?e:0,t=Q.indexOf(r.level);return t>=0&&t<=a}async function vi(i){const r=await getWordInfoFromBackground(i);return r.definition??null}async function ae(i,n,e="zk"){let a=i.match(/\b[a-zA-Z][a-zA-Z'-]*[a-zA-Z]\b|[a-zA-Z]{3,}\b/g);if(!a)return[];let t=new Set,candidates=[];for(let s of a){let o=s.toLowerCase();if(t.has(o)||(t.add(o),bi(s))||n.has(o))continue;candidates.push(o)}if(!candidates.length)return[];const infos=await getWordInfosFromBackground(candidates);const r=[];const levelIdx=Q.indexOf(e),a0=levelIdx>=0?levelIdx:0;for(let i=0;i<candidates.length;i++){const info=infos[i];if(info&&info.exists&&info.level&&Q.indexOf(info.level)>=0&&Q.indexOf(info.level)<=a0)continue;if(info&&info.definition)r.push({word:candidates[i],definition:info.definition})}return r}async function aeAll(i){let a=i.match(/\b[a-zA-Z][a-zA-Z'-]*[a-zA-Z]\b|[a-zA-Z]{3,}\b/g);if(!a)return[];let t=new Set,candidates=[];for(let s of a){let o=s.toLowerCase();if(t.has(o)||(t.add(o),bi(s)))continue;candidates.push(o)}if(!candidates.length)return[];const infos=await getWordInfosFromBackground(candidates);const r=[];for(let i=0;i<candidates.length;i++){const info=infos[i];if(info&&info.definition)r.push({word:candidates[i],definition:info.definition})}return r}function be(i){return i.map(n=>({word:n.word,definition:n.definition}))}async function Pe(i,n,e,a=ne){let t=Q.indexOf(n);if(t<0||t>=3)return{newLevel:n,newCounter:e,upgraded:!1};let r=Q[t+1];if(await a(i)!==r)return{newLevel:n,newCounter:e,upgraded:!1};let o=e+1;return o>=10?{newLevel:r,newCounter:0,upgraded:!0}:{newLevel:n,newCounter:o,upgraded:!1}}var fi={"n.":"noun","v.":"verb","vt.":"verb","vi.":"verb","adj.":"adj","a.":"adj","adv.":"other","ad.":"other","prep.":"other","conj.":"other","num.":"other","pron.":"other","int.":"other","interjection.":"other","abbr.":"other","aux.":"verb","neg.":"other","quant.":"other"},ki=new Set(["the","a","an","this","that","these","those","my","your","his","her","its","our","their","some","any","no","every","each","both","many","much","few","several","another","such","in","on","at","for","of","with","from","by","about","into","through","during","without","between","under","over","after","before","among","against"]),Se=new Set(["will","would","can","could","may","might","must","shall","should","to","do","does","did","not","n't"]),wi=new Set(["is","are","was","were","been","being","very","quite","rather","extremely","so","more","most","less","least"]);function zi(i){if(i.length===0)return null;let n=i[i.length-1],e=i.length>1?i[i.length-2]:"";return(n==="not"||n==="n't")&&Se.has(e)||Se.has(n)?"verb":wi.has(n)?"adj":ki.has(n)?"noun":null}var ji=/^(n\.|v\.|vt\.|vi\.|adj\.|a\.|adv\.|ad\.|prep\.|conj\.|num\.|pron\.|int\.|interjection\.|abbr\.|interj\.|aux\.|neg\.|pl\.|quant\.)\s*/;function xi(i){if(!i)return[];let n=i.split("\\n"),e=[];for(let a of n){let t=a.trim();if(!t||/^\[/.test(t))continue;let r=t.match(ji);r?e.push({pos:r[1],defs:t.slice(r[0].length)}):e.length>0?e[e.length-1].defs+=", "+t:e.push({pos:"",defs:t})}return e}function qi(i,n=2){return i.map(e=>{if(/；/.test(e.defs)){let t=e.defs.split(/；/).map(r=>r.trim()).filter(Boolean).map(r=>r.split(/[,，]/).map(o=>o.trim()).filter(Boolean)[0]||r);return{pos:e.pos,defs:t.slice(0,n).join("\uFF1B")}}else{let a=e.defs.split(/[,，]/).map(t=>t.trim()).filter(Boolean);return{pos:e.pos,defs:a.slice(0,n).join(", ")}}})}function Re(i,n){let e=qi(xi(i));if(e.length<=1)return e.map(o=>o.pos?`${o.pos} ${o.defs}`:o.defs).join("  ");let a=zi(n);if(!a)return e.map(o=>o.pos?`${o.pos} ${o.defs}`:o.defs).join("  ");let t=[],r=[];for(let o of e)(fi[o.pos]||"other")===a?t.push(o):r.push(o);return[...t,...r].map(o=>o.pos?`${o.pos} ${o.defs}`:o.defs).join("  ")}var Ei={gemini:{apiKey:"",model:"gemini-3.1-flash-lite-preview"},chatgpt:{apiKey:"",model:"gpt-4.1-mini"},deepseek:{apiKey:"",model:"deepseek-chat"},qwen:{apiKey:"",model:"qwen3-flash"},kimi:{apiKey:"",model:"kimi-k2.5"}},Ie={llm:{activeProvider:"gemini",providers:{...Ei}},sensitivity:3,scanThreshold:"medium",chunkGranularity:"fine",chunkIntensity:5,disabledSites:[]};var on=10080*60*1e3;function Li(i){let n=i.split(`
`),e=[];for(let a of n){if(a.trim()===""){e.push({indent:0,text:"",isParagraphBreak:!0});continue}let t=a.match(/^(\s*)/),r=t?t[1].length:0,s=Math.min(Math.floor(r/2),5),o=a.trim();o=o.replace(/^\[(.+)\]$/,"$1"),e.push({indent:s,text:o})}return e.filter(a=>a.text.length>0||a.isParagraphBreak)}function D(i,n){if(n.length===0)return te(i);let e=n.map(t=>t.word.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),a=new Map(n.map(t=>[t.word.toLowerCase(),t.definition]));return te(i).replace(new RegExp(`\\b(${e})\\b`,"gi"),t=>{let r=a.get(t.toLowerCase())??"";return`<span class="enlearn-word" data-def="${te(r)}" data-word="${t.toLowerCase()}">${t}</span>`})}function te(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Si(i,n){return i.map(e=>{if(e.isParagraphBreak)return'<span class="enlearn-para-break" style="display:block !important;height:0.8em"></span>';let a=D(e.text,n),t=e.indent>0?`padding-left:${e.indent}em;`:"";return`<span class="enlearn-line enlearn-indent-${e.indent} enlearn-depth-${e.indent}" style="display:block !important;${t}">${a}</span>`}).join("")}function Ci(i,n){return i.map(e=>{if(e.isParagraphBreak)return'<span class="enlearn-para-break" style="display:block !important;height:0.8em"></span>';let a=D(e.text,n),t=e.indent>0?`padding-left:${e.indent}em;`:"";return`<span class="enlearn-line enlearn-indent-${e.indent} enlearn-depth-0" style="display:block !important;${t}">${a}</span>`}).join("")}function Ti(i,n){return i.map(e=>e.isParagraphBreak?'<span class="enlearn-para-break" style="display:block !important;height:0.8em"></span>':`<span class="enlearn-line enlearn-indent-0 enlearn-depth-0" style="display:block !important">${D(e.text,n)}</span>`).join("")}function Ai(i,n){let e=[],a="";for(let s of i)s.indent===0&&a?(e.push(a),a=s.text):a+=(a?" ":"")+s.text;return a&&e.push(a),`<span class="enlearn-inline-content">${e.map(s=>D(s,n)).join('<span class="enlearn-separator">\xB7</span>')}</span>`}function Mi(i,n){return`<span class="enlearn-inline-content">${i.map(a=>{if(a.isParagraphBreak)return" ";let t=D(a.text,n);return a.indent>0?`<span class="enlearn-dim">${t}</span>`:t}).join(" ")}</span>`}function Pi(i,n=5){if(i.isSimple)return"";let e=Li(i.chunked),a=n<=2,t=a?"enlearn-chunked enlearn-chunked-inline":"enlearn-chunked",r;switch(n){case 1:r=Mi(e,i.newWords);break;case 2:r=Ai(e,i.newWords);break;case 3:r=Ti(e,i.newWords);break;case 4:r=Ci(e,i.newWords);break;default:r=Si(e,i.newWords);break}return`<div class="${t}"${a?"":' style="display:block !important"'} data-original="${te(i.original)}">${r}</div>`}function re(i,n=5){if(i.isSimple)return null;let e=document.createElement("div");return e.innerHTML=Pi(i,n),e.firstElementChild}var Ne=`
/* \u5206\u5757\u5BB9\u5668 \u2014 \u4E0D\u7528 position:relative\uFF0C\u907F\u514D\u6321\u4F4F Reddit \u7B49\u7AD9\u70B9\u7684\u8986\u76D6\u5BFC\u822A\u94FE\u63A5 */
.enlearn-chunked {
  display: block !important;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5;
  padding: 0;
  margin: 1px 0;
  background: transparent;
  border-radius: 0;
  transition: background 0.2s;
}

.enlearn-chunked:hover {
  background: rgba(37, 99, 235, 0.03);
}

/* \u6BB5\u843D\u95F4\u8DDD */
.enlearn-para-break { display: block !important; height: 0.8em; }

/* \u7F29\u8FDB\u5C42\u7EA7 */
.enlearn-line { display: block !important; }
.enlearn-indent-0 { padding-left: 0; }
.enlearn-indent-1 { padding-left: 1.0em; }
.enlearn-indent-2 { padding-left: 2.0em; }
.enlearn-indent-3 { padding-left: 3.0em; }
.enlearn-indent-4 { padding-left: 4.0em; }
.enlearn-indent-5 { padding-left: 5.0em; }

/* \u989C\u8272\u5C42\u7EA7 \u2014 \u4E3B\u53E5\u6B63\u5E38\u8272\uFF0C\u4ECE\u53E5\u9010\u7EA7\u53D8\u6DE1 */
.enlearn-depth-0 { opacity: 1; }
.enlearn-depth-1 { opacity: 0.75; }
.enlearn-depth-2 { opacity: 0.55; }
.enlearn-depth-3 { opacity: 0.45; }
.enlearn-depth-4 { opacity: 0.38; }
.enlearn-depth-5 { opacity: 0.32; }

/* L2/L1\uFF1Ainline \u6A21\u5F0F\u5BB9\u5668 */
.enlearn-chunked-inline .enlearn-inline-content {
  display: inline;
}

/* L2\uFF1A\u884C\u5185\u5206\u9694\u7B26 */
.enlearn-separator {
  margin: 0 0.3em;
  color: rgba(37, 99, 235, 0.35);
  user-select: none;
  font-weight: 400;
}

/* L1\uFF1A\u4ECE\u53E5\u53D8\u6DE1 */
.enlearn-dim {
  opacity: 0.5;
}

/* \u751F\u8BCD\u8F7B\u6807\u8BB0 */
.enlearn-word {
  border-bottom: 1px dotted rgba(37, 99, 235, 0.45);
  cursor: pointer;
  transition: border-color 0.15s;
}

.enlearn-word:hover {
  border-bottom-color: #2563eb;
}

/* \u5168\u5C40\u6D6E\u7A97 \u2014 \u7528\u5168\u5C4F\u5C42\u5305\u88F9\uFF0C\u907F\u514D\u88AB\u7F51\u9875\u5B9A\u4F4D\u5C42\u6291\u76D6 */
#enlearn-tooltip-root {
  position: fixed !important;
  inset: 0 !important;
  z-index: 2147483647 !important;
  pointer-events: none !important;
}
.enlearn-tooltip {
  position: fixed !important;
  display: none;
  background: #1a1a2e;
  color: #e2e8f0;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.5;
  white-space: nowrap;
  z-index: 2147483647 !important;
  pointer-events: auto !important;
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  align-items: center;
  gap: 8px;
  isolation: isolate;
}

.enlearn-tooltip-def {
  display: inline;
}

.enlearn-tooltip-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-left: 2px;
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 50%;
  color: rgba(255,255,255,0.25);
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  line-height: 1;
  flex-shrink: 0;
}

.enlearn-tooltip-btn:hover {
  background: rgba(34,197,94,0.15);
  border-color: rgba(34,197,94,0.5);
  color: #4ade80;
}

/* \u624B\u52A8\u89E6\u53D1\u6309\u94AE \u2014 inline \u663E\u793A\uFF0C\u4E0D\u4F1A\u88AB overflow:hidden \u88C1\u526A */
.enlearn-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  margin-left: 6px;
  border-radius: 4px;
  background: transparent;
  border: none;
  color: rgba(37, 99, 235, 0.35);
  cursor: pointer;
  opacity: 0.2;
  transition: all 0.2s;
  user-select: none;
  padding: 0;
  line-height: 1;
  pointer-events: auto !important;
}

.enlearn-trigger svg {
  width: 14px;
  height: 14px;
}

.enlearn-trigger.enlearn-trigger-visible {
  opacity: 0.6;
}

.enlearn-trigger:hover {
  opacity: 1 !important;
  background: rgba(37, 99, 235, 0.08);
  color: #2563eb;
}

.enlearn-trigger.enlearn-trigger-loading {
  opacity: 1;
  pointer-events: none;
  animation: enlearn-pulse 1s ease-in-out infinite;
}

@keyframes enlearn-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* \u52A0\u8F7D\u4E2D\u72B6\u6001 \u2014 shimmer \u6548\u679C */
.enlearn-loading {
  position: relative;
  overflow: hidden;
}

.enlearn-loading::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(37, 99, 235, 0.06) 50%,
    transparent 100%
  );
  animation: enlearn-shimmer 1.5s ease-in-out infinite;
}

@keyframes enlearn-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* \u9690\u85CF\u539F\u59CB\u5143\u7D20\uFF08\u5144\u5F1F\u63D2\u5165\u7B56\u7565\uFF1A\u539F\u59CB\u5143\u7D20\u9690\u85CF\uFF0C\u5206\u5757\u4F5C\u4E3A\u5144\u5F1F\u663E\u793A\uFF09 */
.enlearn-original-hidden {
  display: none !important;
}

/* DOM \u4FDD\u62A4\u7AD9\u70B9\uFF08Notion \u7B49\uFF09\uFF1Aoverlay \u5BB9\u5668
   fixed \u8986\u76D6\u5728 scroller \u4E0A\uFF0C\u900F\u660E spacer + \u6EDA\u52A8\u540C\u6B65\u8BA9\u6807\u9898\u81EA\u7136\u6EDA\u8D70 */
#enlearn-overlay-container {
  z-index: 10;
}
#enlearn-overlay-container .enlearn-chunked {
  position: static !important;
  margin-bottom: 4px;
}

/* \u8986\u76D6\u622A\u65AD\u6837\u5F0F\uFF0C\u4F7F\u5206\u5757\u5185\u5BB9\u5B8C\u5168\u53EF\u89C1\uFF08Twitter line-clamp / Reddit -webkit-box \u7B49\uFF09
   \u6CE8\u610F\uFF1A\u4E0D\u5728 CSS \u4E2D\u8BBE display:block\uFF0C\u53EA\u5728 JS \u4E2D\u5BF9 webkit-box \u5143\u7D20\u8BBE\uFF08\u907F\u514D\u7834\u574F flex \u5E03\u5C40\uFF09 */
.enlearn-clamp-override {
  -webkit-line-clamp: unset !important;
  -webkit-box-orient: unset !important;
  max-height: none !important;
  overflow: visible !important;
  text-overflow: unset !important;
}

/* \u6682\u505C\u72B6\u6001 \u2014 \u663E\u793A\u539F\u6587\u3001\u9690\u85CF\u5206\u5757 */
body.enlearn-paused .enlearn-chunked { display: none !important; }
body.enlearn-paused .enlearn-trigger { display: none !important; }
body.enlearn-paused .enlearn-original-hidden { display: block !important; }

/* \u6697\u8272\u6A21\u5F0F\u9002\u914D */
@media (prefers-color-scheme: dark) {
  .enlearn-chunked:hover {
    background: rgba(96, 165, 250, 0.05);
  }

  .enlearn-word {
    border-bottom-color: rgba(96, 165, 250, 0.45);
  }

  .enlearn-word:hover {
    border-bottom-color: #60a5fa;
  }

  .enlearn-tooltip {
    background: #0f0f1a;
    color: #e2e8f0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }

  .enlearn-tooltip-btn {
    border-color: rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.2);
  }

  .enlearn-trigger {
    color: rgba(96, 165, 250, 0.35);
  }

  .enlearn-trigger:hover {
    opacity: 1 !important;
    background: rgba(96, 165, 250, 0.12);
    color: #60a5fa;
  }

  .enlearn-separator {
    color: rgba(96, 165, 250, 0.35);
  }

  .enlearn-loading::after {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(96, 165, 250, 0.08) 50%,
      transparent 100%
    );
  }

}
`;var q={...Ie},L=!1,N=!1,S=new WeakSet,oe=new Map,F=null,$=null,x=null,P=[],_=new Set,V=!1,C="zk",se=0,f=null,W=null,E=null,U=null;function _i(){if(!f){W=document.createElement("div");W.id="enlearn-tooltip-root";W.style.cssText="position:fixed !important;inset:0 !important;z-index:2147483647 !important;pointer-events:none !important";f=document.createElement("div");f.className="enlearn-tooltip";f.style.pointerEvents="auto";W.appendChild(f);document.body.appendChild(W);f.addEventListener("mouseenter",()=>{E&&(clearTimeout(E),E=null)}),f.addEventListener("mouseleave",()=>{Ue()}),f.addEventListener("click",Oi),document.addEventListener("mouseover",Wi),document.addEventListener("mouseout",Bi),document.addEventListener("mouseover",Di),document.addEventListener("mouseout",Ui)}}function Ue(){E&&clearTimeout(E),E=setTimeout(()=>{f&&(f.style.display="none"),U=null,E=null},150)}async function Oi(i){if(!i.target.closest?.(".enlearn-tooltip-btn")||!U)return;let e=U;_.add(e);try{await chrome.storage.local.set({knownWords:[..._]})}catch{}let a=await Pe(e,C,se,ne);se=a.newCounter,a.upgraded&&(C=a.newLevel);try{await chrome.storage.local.set({levelUpCounter:se}),a.upgraded&&await chrome.storage.sync.set({vocabLevel:C})}catch{}document.querySelectorAll(".enlearn-word").forEach(t=>{if(t.dataset.word?.toLowerCase()===e){let r=document.createTextNode(t.textContent||"");t.parentNode?.replaceChild(r,t)}}),f&&(f.style.display="none"),U=null}function Wi(i){let n=i.target.closest?.(".enlearn-word");if(!n||!f)return;let e=n.getAttribute("data-def");if(!e)e="\u6682\u65E0\u91CA\u4E49";E&&(clearTimeout(E),E=null),U=(n.dataset.word||n.textContent||"").toLowerCase(),f.innerHTML=`<span class="enlearn-tooltip-def">${Hi(e)}</span><button class="enlearn-tooltip-btn" title="\u6807\u8BB0\u4E3A\u5DF2\u638C\u63E1">\u2713</button>`,f.style.display="flex",f.style.position="fixed",f.style.zIndex="2147483647";let a=n.getBoundingClientRect(),t=f.getBoundingClientRect(),r=a.left+a.width/2-t.width/2,s=a.top-t.height-6;r<4&&(r=4),r+t.width>window.innerWidth-4&&(r=window.innerWidth-4-t.width),s<4&&(s=a.bottom+6),f.style.left=`${r}px`,f.style.top=`${s}px`;W&&document.body.appendChild(W)}function Bi(i){!i.target.closest?.(".enlearn-word")||!f||Ue()}function Hi(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Di(i){let e=i.target.closest?.(".enlearn-trigger-wrap, [data-enlearn-trigger]");if(!e)return;let a=e.querySelector(".enlearn-trigger");a&&a.classList.add("enlearn-trigger-visible")}function Ui(i){let e=i.target.closest?.(".enlearn-trigger-wrap, [data-enlearn-trigger]");if(!e)return;let a=i.relatedTarget;if(a&&e.contains(a))return;let t=e.querySelector(".enlearn-trigger");t&&t.classList.remove("enlearn-trigger-visible")}async function Fi(){let i=document.createElement("style");i.textContent=Ne,i.id="enlearn-styles",document.head.appendChild(i),_i();
try{C=(await chrome.storage.sync.get({vocabLevel:"gz"})).vocabLevel}catch{}try{let e=await chrome.storage.local.get({knownWords:[],levelUpCounter:0});if(Array.isArray(e.knownWords))for(let a of e.knownWords)_.add(a);se=e.levelUpCounter||0}catch{}q=await O({type:"getConfig"}),(await O({type:"checkActive"})).active&&Be(),chrome.runtime.onMessage.addListener(e=>{e.type==="activate"?Be():e.type==="deactivate"?$i():e.type==="pause"?Gi():e.type==="resume"&&Vi()})}function Be(){L||(L=!0,V=Xi(),Je(),de(),Ze(),chrome.storage.onChanged.addListener($e))}function $i(){L&&(L=!1,F?.disconnect(),F=null,$?.disconnect(),$=null,P.length=0,x&&(clearTimeout(x),x=null),oe.clear(),Ve(),document.querySelectorAll(".enlearn-trigger").forEach(i=>i.remove()),document.querySelectorAll("[data-enlearn-trigger]").forEach(i=>{i.classList.remove("enlearn-trigger-wrap"),i.removeAttribute("data-enlearn-trigger")}),S=new WeakSet,chrome.storage.onChanged.removeListener($e))}function Gi(){if(!(!L||N))if(N=!0,$?.disconnect(),F?.disconnect(),P.length=0,x&&(clearTimeout(x),x=null),V){let i=document.getElementById("enlearn-overlay-container");i&&i.style.setProperty("display","none","important");let n=document.getElementById("enlearn-hide-blocks");n&&(n.disabled=!0)}else document.querySelectorAll(".enlearn-chunked").forEach(i=>{i.style.setProperty("display","none","important")}),document.querySelectorAll(".enlearn-trigger").forEach(i=>{i.style.setProperty("display","none","important")}),document.querySelectorAll(".enlearn-original-hidden").forEach(i=>{i.style.removeProperty("display"),i.classList.remove("enlearn-original-hidden"),i.classList.add("enlearn-was-hidden")})}function Vi(){if(!(!L||!N)){if(N=!1,V){let i=document.getElementById("enlearn-overlay-container");i&&i.style.removeProperty("display");let n=document.getElementById("enlearn-hide-blocks");n&&(n.disabled=!1)}else document.querySelectorAll(".enlearn-was-hidden").forEach(i=>{i.style.setProperty("display","none","important"),i.classList.add("enlearn-original-hidden"),i.classList.remove("enlearn-was-hidden")}),document.querySelectorAll(".enlearn-chunked").forEach(i=>{i.style.removeProperty("display")}),document.querySelectorAll(".enlearn-trigger").forEach(i=>{i.style.removeProperty("display")});Fe(),Je(),Ze()}}function Fe(){Ve(),document.querySelectorAll(".enlearn-trigger").forEach(i=>i.remove()),document.querySelectorAll("[data-enlearn-trigger]").forEach(i=>{i.classList.remove("enlearn-trigger-wrap"),i.removeAttribute("data-enlearn-trigger")}),S=new WeakSet,oe.clear(),P.length=0,x&&(clearTimeout(x),x=null),de()}function $e(i){let n=!1;i.chunkIntensity&&(q.chunkIntensity=i.chunkIntensity.newValue,n=!0),i.chunkGranularity&&(q.chunkGranularity=i.chunkGranularity.newValue,n=!0),i.scanThreshold&&(q.scanThreshold=i.scanThreshold.newValue,n=!0),i.vocabLevel&&(C=i.vocabLevel.newValue,n=!0),n&&L&&!N&&Fe()}function G(i){let n="";for(let e of i.childNodes)if(e.nodeType===Node.TEXT_NODE)n+=e.textContent;else if(e.nodeType===Node.ELEMENT_NODE){let a=e.tagName;if(Xe.has(a))continue;a==="BR"?n+=`
`:n+=G(e)}return n}function Ki(i){return G(i).split(/\n+/).map(e=>e.trim()).filter(e=>e.length>0)}function Ge(i){return i.split(/(?<=[.!?])\s+(?=[A-Z\u201C"'])/).filter(e=>e.trim().length>0)}function le(i,n){let e=window.getComputedStyle(i);n.style.fontSize=e.fontSize,n.style.fontFamily=e.fontFamily,n.style.lineHeight=e.lineHeight,n.style.color=e.color,n.style.letterSpacing=e.letterSpacing,n.style.wordSpacing=e.wordSpacing}function Xi(){return!!(document.querySelector("[data-content-editable-leaf]")||location.hostname.includes("notion.so")||location.hostname.includes("notion.site"))}function ce(i,n){if(V){let t=i.closest("[data-block-id]");if(t){let r=t.getAttribute("data-block-id")||"",s=document.getElementById("enlearn-overlay-container");if(!s){s=document.createElement("div"),s.id="enlearn-overlay-container";let u=document.querySelector(".notion-scroller");if(u){let g=u.getBoundingClientRect(),p=t.getBoundingClientRect().top-g.top;s.style.position="fixed",s.style.top=g.top+"px",s.style.left=g.left+"px",s.style.width=g.width+"px",s.style.height=g.height+"px",s.style.overflowY="auto",s.style.boxSizing="border-box";let c=document.createElement("div");c.id="enlearn-overlay-spacer",c.style.height=p+"px",c.style.pointerEvents="none",s.appendChild(c);let l=document.createElement("div");l.style.background="var(--color-bg-primary, #191919)",l.style.minHeight=g.height-p+"px";let b=document.createElement("div");b.id="enlearn-overlay-inner",b.style.maxWidth="560px",b.style.margin="0 auto",b.style.padding="16px",b.style.boxSizing="border-box",l.appendChild(b),s.appendChild(l),s.addEventListener("scroll",()=>{u.scrollTop=Math.min(s.scrollTop,p)},{passive:!0})}document.body.appendChild(s)}let o=s.querySelector("#enlearn-overlay-inner")||s;n.setAttribute("data-enlearn-block",r),o.appendChild(n);let d=document.getElementById("enlearn-hide-blocks");d||(d=document.createElement("style"),d.id="enlearn-hide-blocks",document.head.appendChild(d)),d.textContent+=`[data-block-id="${r}"] { display: none !important; }
`;return}}i.matches('[data-testid="tweetText"]')&&i.parentElement?.querySelector('[data-testid="tweet-text-show-more-link"]')?(i.style.setProperty("height","0","important"),i.style.setProperty("overflow","hidden","important"),i.style.setProperty("padding","0","important"),i.style.setProperty("margin","0","important"),i.classList.add("enlearn-collapsed")):i.style.setProperty("display","none","important"),i.classList.add("enlearn-original-hidden"),i.parentNode?.insertBefore(n,i.nextSibling);let a=i.parentElement;for(let t=0;t<6&&a;t++){let r=a.tagName;if(r==="A"||r==="ARTICLE"||a.getAttribute("role")==="article")break;let s=a.className||"",o=window.getComputedStyle(a),d=s.includes("line-clamp")||s.includes("text-ellipsis")||o.webkitLineClamp&&o.webkitLineClamp!=="none"||o.display==="-webkit-box"||o.display==="-webkit-inline-box",u=(o.overflow==="hidden"||o.overflowY==="hidden")&&!d;d?(a.classList.add("enlearn-clamp-override"),a.style.setProperty("-webkit-line-clamp","unset","important"),a.style.setProperty("-webkit-box-orient","unset","important"),a.style.setProperty("display","block","important"),a.style.setProperty("max-height","none","important"),a.style.setProperty("overflow","visible","important")):u&&(a.classList.add("enlearn-clamp-override"),a.style.setProperty("max-height","none","important"),a.style.setProperty("overflow","visible","important")),a=a.parentElement}}function Ve(){document.querySelectorAll(".enlearn-chunked").forEach(e=>e.remove()),document.querySelectorAll(".enlearn-original-hidden").forEach(e=>{e.classList.contains("enlearn-collapsed")?(e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("padding"),e.style.removeProperty("margin"),e.classList.remove("enlearn-collapsed")):e.style.removeProperty("display"),e.classList.remove("enlearn-original-hidden")}),document.querySelectorAll(".enlearn-clamp-override").forEach(e=>{e.style.removeProperty("-webkit-line-clamp"),e.style.removeProperty("-webkit-box-orient"),e.style.removeProperty("display"),e.style.removeProperty("max-height"),e.style.removeProperty("overflow"),e.classList.remove("enlearn-clamp-override")});let i=document.getElementById("enlearn-overlay-container");i&&i.remove();let n=document.getElementById("enlearn-hide-blocks");n&&n.remove()}function ve(i,n,e){O({type:"saveSentence",text:i,source_url:window.location.href,source_hostname:window.location.hostname,manual:n,new_words:e}).catch(()=>{})}function ye(i){return!!i.parentElement?.closest('a[href^="http"]')}function Ji(i,n){let e=i.parentElement,a=n.parentElement;if(!e||!a)return!1;if(e!==a&&e.closest(":has(> br, > div, > p)"))return!0;let t=i.nextSibling;for(;t&&t!==n;){if(t.nodeType===Node.ELEMENT_NODE){let r=t.tagName;if(r==="BR"||r==="DIV"||r==="P")return!0}t=t.nextSibling}return!1}async function Ke(i,n){let e=i.cloneNode(!0),a=[],t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode(c){return ye(c)?NodeFilter.FILTER_REJECT:!c.textContent||c.textContent.trim()===""?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}}),r;for(;r=t.nextNode();)a.push(r);if(a.length===0)return;let s=[],o="";for(let c of a){let l=c.textContent||"";s.push({node:c,globalStart:o.length,globalEnd:o.length+l.length}),o+=l}let d=[],u=[],g=0;for(let c=1;c<a.length;c++)Ji(a[c-1],a[c])&&(u.push({startIdx:g,endIdx:c-1}),g=c);u.push({startIdx:g,endIdx:a.length-1});for(let c of u){let l=s[c.startIdx].globalStart,b=s[c.endIdx].globalEnd,k=o.slice(l,b),h=Ge(k),m=l;for(let y=0;y<h.length;y++){let j=h[y],w=j.trim();if(!w)continue;let T=o.indexOf(w,m);if(T===-1){m+=j.length;continue}y>0&&T>l&&d.push({offset:T,level:0});let R=Z(w,q.scanThreshold,q.chunkGranularity);if(R.chunks.length>1){let ge=T;for(let W=0;W<R.chunks.length;W++){let we=R.chunks[W].text.split(/\s+/);if(W>0){let K=we[0],B=o.indexOf(K,ge);B>=0&&d.push({offset:B,level:R.chunks[W].level})}for(let K of we){let B=o.indexOf(K,ge);B>=0&&(ge=B+K.length)}}}m=T+w.length}}if(d.length===0){let w=await aeAll(n);w.length>0&&Yi(i,w);ke(i,n);return}d.sort((c,l)=>l.offset-c.offset);for(let c of d){let l=s.find(m=>c.offset>=m.globalStart&&c.offset<m.globalEnd);if(!l||ye(l.node))continue;let b=c.offset-l.globalStart;if(b<=0||b>=(l.node.textContent?.length||0))continue;let k=l.node.splitText(b),h=document.createElement("br");if(k.parentNode.insertBefore(h,k),c.level>0){let m=document.createElement("span");m.className=`enlearn-indent-${c.level} enlearn-depth-${c.level}`,m.style.paddingLeft=`${c.level}em`,m.style.display="inline",k.parentNode.insertBefore(m,k);let y=[],j=k;for(;j;){let w=j.nextSibling;if(j.nodeType===Node.ELEMENT_NODE&&j.tagName==="BR")break;y.push(j),j=w}for(let w of y)m.appendChild(w)}}let v=await aeAll(n);v.length>0&&Yi(e,v),e.classList.add("enlearn-chunked"),e.setAttribute("data-original",n),e.style.setProperty("display","block","important"),le(i,e),ce(i,e);let p=v.map(c=>c.word);ve(n,!1,p)}function Yi(i,n){let e=new Map(n.map(d=>[d.word.toLowerCase(),d.definition])),a=n.map(d=>d.word.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),t=new RegExp(`\\b(${a})\\b`,"gi"),r=[],s=document.createTreeWalker(i,NodeFilter.SHOW_TEXT,{acceptNode(d){return ye(d)?NodeFilter.FILTER_REJECT:!d.textContent||d.textContent.trim()===""?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}}),o;for(;o=s.nextNode();)r.push(o);for(let d=r.length-1;d>=0;d--){let u=r[d],g=u.textContent||"",v=[],p;for(t.lastIndex=0;p=t.exec(g);)v.push({index:p.index,length:p[0].length,word:p[0]});if(v.length===0)continue;let c=u;for(let l=v.length-1;l>=0;l--){let b=v[l],k=c.splitText(b.index+b.length),h=c.splitText(b.index),m=document.createElement("span");m.className="enlearn-word";let y=e.get(b.word.toLowerCase())||"",w=g.slice(Math.max(0,b.index-60),b.index).trim().split(/\s+/).slice(-3).map(R=>R.toLowerCase().replace(/[^a-z']/g,"")),T=Re(y,w);m.setAttribute("data-def",T),m.setAttribute("data-word",b.word.toLowerCase()),m.textContent=h.textContent,h.parentNode.replaceChild(m,h)}}}var He=['[data-testid="tweetText"]','[role="article"] div[lang="en"]',".Post-body p",".Comment-body p",'[data-testid="post-content"] p','shreddit-post [slot="text-body"] p','[id^="t3_"][id$="-post-rtjson-content"] p',"article p","main p",'[role="main"] p','div[data-block="true"]',"section p",".content p",".post p",".entry-content p",".article-body p","#content p",".page-content p","ul li","ol li",".theme-doc-markdown p",".theme-doc-markdown ul li",".theme-doc-markdown ol li",".markdown p",".markdown ul li",".markdown ol li","span[data-as=\"p\"]","#content span[data-as=\"p\"]","#content ul li","#content ol li","#content h2","#content h3",".mdx-content span[data-as=\"p\"]",".mdx-content ul li",".mdx-content ol li"].join(", "),De=new Set(["DIV","P","LI","BLOCKQUOTE","SECTION","ARTICLE","ASIDE","MAIN","DD","DT","FIGCAPTION","OL","UL","DL","H1","H2","H3","H4","H5","H6","PRE","HR","FIGURE","DETAILS","SUMMARY"]),Xe=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","CANVAS","VIDEO","AUDIO","IFRAME","OBJECT","EMBED","INPUT","TEXTAREA","SELECT","BUTTON","LABEL","NAV","HEADER","FOOTER","TABLE","FORM","FIELDSET"]);function Zi(){let i=[],n=document.body.querySelectorAll("*"),e={notBlock:0,excluded:0,processed:0,enlearn:0,hiddenAncestor:0,hasBlockChild:0,tooShort:0,notEng:0,tooFewWords:0,customTag:0};for(let a of n){if(!De.has(a.tagName)){e.notBlock++;continue}if(a.tagName!=="LI"&&a.closest('nav, header, footer, aside, form, [role="navigation"], [role="banner"], [role="complementary"], [role="grid"], [role="gridcell"], [role="row"], [role="rowgroup"], [role="table"], [role="listbox"]')){e.excluded++;continue}if(S.has(a)){e.processed++;continue}if(fe(a)){e.enlearn++;continue}if(a.closest(".enlearn-original-hidden")){e.hiddenAncestor++;continue}let t=!1,r="";for(let o of a.children){if(De.has(o.tagName)||Xe.has(o.tagName)){t=!0,r=o.tagName;break}if(o.tagName.includes("-")){t=!0,r="custom:"+o.tagName,e.customTag++;break}}if(t){e.hasBlockChild++;continue}let s=G(a).trim();if(s.length<=2){e.tooShort++;continue}if(!ue(s)){e.notEng++;continue}i.push(a)}return i}async function de(){if(!L||N)return;let i=document.querySelectorAll(He);for(let e of i){if(S.has(e)||fe(e)||(e.tagName!=="LI"&&e.closest('nav, header, footer, aside, form, [role="link"], [role="navigation"], [role="banner"], [role="complementary"], [role="grid"], [role="gridcell"], [role="row"], [role="rowgroup"], [role="table"], [role="listbox"]'))||e.querySelector(He)||e.closest(".enlearn-original-hidden"))continue;let a=G(e).trim();if(a.length>2&&ue(a))await Qi(e,a)}let n=Zi();for(let e of n){let a=G(e).trim();S.add(e),await Ke(e,a)}let h=document.querySelectorAll("#content-area header .eyebrow,#content-area header #page-title");for(let y of h){if(S.has(y)||fe(y))continue;let m=G(y).trim();if(m.length>2&&ue(m)){let j=await aeAll(m);j.length>0&&(S.add(y),Yi(y,j))}}}async function Qi(i,n){if(S.add(i),i.querySelector('a[href^="http"]')!==null){await Ke(i,n);return}let a=Ki(i),t=[],r=!1;for(let d=0;d<a.length;d++){d>0&&t.push("");let u=Ge(a[d]);for(let g of u){let v=Z(g,q.scanThreshold,q.chunkGranularity);v.chunks.length>1?(r=!0,t.push(he(v.chunks))):t.push(g)}}let sNew=await ae(n,_,C),s=await aeAll(n),o=sNew.map(d=>d.word);if(r){let d=t.join(`
`),u={original:n,chunked:d,isSimple:!1,newWords:be(s)},g=re(u,q.chunkIntensity);g&&(le(i,g),ce(i,g))}else{s.length>0&&Yi(i,s);ke(i,n)}ve(n,!1,o)}function fe(i){return i.closest(".enlearn-chunked")!==null||i.classList.contains("enlearn-chunked")}var en='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="1" y1="3" x2="13" y2="3"/><line x1="4" y1="7" x2="13" y2="7"/><line x1="7" y1="11" x2="13" y2="11"/></svg>';function ke(i,n){i.setAttribute("data-enlearn-trigger","1"),i.classList.add("enlearn-trigger-wrap");let e=document.createElement("span");e.className="enlearn-trigger",e.innerHTML=en,e.title="\u63B0\u5F00\u8FD9\u53E5",e.addEventListener("click",async a=>{a.stopPropagation(),a.preventDefault(),e.classList.add("enlearn-trigger-loading");try{let t=await O({type:"hasApiKey"}),r=null;if(t.hasKey){let s=await O({type:"chunk",sentences:[n],source_url:window.location.href});s?.results?.[0]&&!s.results[0].isSimple&&(r=s.results[0])}else{let s=Z(n,"short","fine");if(s.chunks.length>1){let o=await ae(n,_,C);r={original:n,chunked:he(s.chunks),isSimple:!1,newWords:be(o)}}}if(r){let s=re(r,q.chunkIntensity);if(s){le(i,s),ce(i,s),e.remove();let o=r.newWords?.map(d=>d.word)??[];ve(n,!0,o)}}else e.remove(),i.classList.remove("enlearn-trigger-wrap"),i.removeAttribute("data-enlearn-trigger")}catch{e.classList.remove("enlearn-trigger-loading")}}),i.appendChild(e)}function Je(){F=new IntersectionObserver(i=>{let n=[];for(let e of i)e.isIntersecting&&(n.push(e.target),F?.unobserve(e.target));n.length>0&&nn(n)},{rootMargin:"100% 0px"})}function nn(i){P.unshift(...i),x&&clearTimeout(x),x=setTimeout(Ye,100)}async function Ye(){if(P.length===0||!L)return;let i=P.splice(0,5),n=[],e=new Map;for(let r of i){let s=oe.get(r);s&&(n.push(s),e.set(s,r),oe.delete(r))}if(n.length===0)return;let a=new Promise(r=>setTimeout(()=>r(null),15e3)),t=new Set;try{let r=await Promise.race([O({type:"chunk",sentences:n,source_url:window.location.href}),a]);if(r){let s=r;for(let o of s.results){let d=e.get(o.original);if(!d||o.isSimple)continue;let u=re(o,q.chunkIntensity);u&&(le(d,u),ce(d,u),t.add(o.original))}}}catch{}for(let[r,s]of e)t.has(r)||ke(s,r);P.length>0&&L&&(x=setTimeout(Ye,50))}function an(i){if(V){let t=i.closest("[data-block-id]");if(t){let r=t.getAttribute("data-block-id");if(r){let o=document.getElementById("enlearn-overlay-container")?.querySelector(`.enlearn-chunked[data-enlearn-block="${r}"]`);o&&o.remove();let d=document.getElementById("enlearn-hide-blocks");d&&(d.textContent=d.textContent.replace(`[data-block-id="${r}"] { visibility: hidden !important; }
`,""))}S.delete(i);return}}if(!i.classList.contains("enlearn-original-hidden"))return;let n=i.nextElementSibling;n?.classList.contains("enlearn-chunked")&&n.remove(),i.classList.contains("enlearn-collapsed")?(i.style.removeProperty("height"),i.style.removeProperty("overflow"),i.style.removeProperty("padding"),i.style.removeProperty("margin"),i.classList.remove("enlearn-collapsed")):i.style.removeProperty("display"),i.classList.remove("enlearn-original-hidden");let e=i.parentElement;for(let t=0;t<6&&e;t++){let r=e.tagName;if(r==="A"||r==="ARTICLE"||e.getAttribute("role")==="article")break;e.classList.contains("enlearn-clamp-override")&&(e.style.removeProperty("-webkit-line-clamp"),e.style.removeProperty("-webkit-box-orient"),e.style.removeProperty("display"),e.style.removeProperty("max-height"),e.style.removeProperty("overflow"),e.classList.remove("enlearn-clamp-override")),e=e.parentElement}S.delete(i);let a=i.querySelector(".enlearn-trigger");a&&a.remove(),i.classList.remove("enlearn-trigger-wrap"),i.removeAttribute("data-enlearn-trigger")}function Ze(){$=new MutationObserver(i=>{let n=!1,e=new Set;for(let a of i){let t=a.target;if(t instanceof Element){let r=t.classList.contains("enlearn-original-hidden")?t:t.closest(".enlearn-original-hidden");if(r){e.add(r);continue}}else if(t.parentElement){let r=t.parentElement.closest(".enlearn-original-hidden");if(r){e.add(r);continue}}for(let r of a.removedNodes)if(r.nodeType===Node.ELEMENT_NODE){let s=r;if(s.classList.contains("enlearn-original-hidden")){let o=a.target;if(o instanceof Element){let d=o.querySelectorAll(":scope > .enlearn-chunked");for(let u of d){let g=u.previousElementSibling;(!g||!g.classList.contains("enlearn-original-hidden"))&&u.remove()}}S.delete(s),n=!0}}for(let r of a.addedNodes)r.nodeType===Node.ELEMENT_NODE&&(fe(r)||(n=!0))}if(e.size>0){for(let a of e)an(a);setTimeout(de,300)}n&&setTimeout(de,300)}),$.observe(document.body,{childList:!0,subtree:!0,characterData:!0})}function O(i){return new Promise(n=>{chrome.runtime.sendMessage(i,n)})}if(typeof window!=="undefined"){window.__baiitTestHooks={runInitialScan:de};}Fi();}catch(e){console.warn("[掰it]",e);}})();
