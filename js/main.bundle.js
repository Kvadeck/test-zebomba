(()=>{"use strict";var e={p:"./"};const n=[{x:340,y:407},{x:265,y:450},{x:180,y:470},{x:101,y:442},{x:113,y:376},{x:131,y:321},{x:204,y:284},{x:166,y:213},{x:129,y:161},{x:191,y:129},{x:242,y:178}],t=e.p+"images/3c9a43fd031ba06dd21f4fb5028a8be9.png";function a(e){document.querySelector(".menu").insertAdjacentHTML("beforeend",'<button class="btn '.concat(e,'"></button>'))}const s="Рейтинг игроков",c={header:{place:"Место",lastName:"Имя Фамилия",exp:"Опыт"}},o={rating:[{id:"123",name:"Владимир",lastName:"Ларионов",img:"./male.png",points:"463"},{id:"9",name:"Владимир",lastName:"Сергеев",img:"./male.png",points:"521"},{id:"231",name:"Вениамин",lastName:"Васильев",img:"./male.png",points:"865"},{id:"321",name:"Мария",lastName:"Логинова",img:"./female.png",points:"865"},{id:"492",name:"Борис",lastName:"Казанцев",img:"./male.png",points:"784"},{id:"452",name:"Полина",lastName:"Калинина",img:"./female.png",points:"225"},{id:"796",name:"Даниил",lastName:"Воробьёв",img:"./male.png",points:"642"},{id:"4",name:"Эрик",lastName:"Аксёнов",img:"./male.png",points:"150"},{id:"1155",name:"Иван",lastName:"Иванов",img:"./male.png",points:"100"},{id:"12145",name:"Артем",lastName:"Алексеев",img:"./male.png",points:"1000"}],friends:[{id:"9",name:"Владимир",lastName:"Сергеев",img:"./male.png"},{id:"4",name:"Эрик",lastName:"Аксёнов",img:"./male.png"},{id:"15411",name:"Ирина",lastName:"Чеснокова",img:"./female.png"},{id:"15564",name:"Дарина",lastName:"Боброва",img:"./female.png"}]};!function(){try{document.querySelector("#root").insertAdjacentHTML("beforeend",'<main class="game"></main>'),document.querySelector(".game").insertAdjacentHTML("beforeend",'<section class="menu"></section>'),document.querySelector(".menu").insertAdjacentHTML("beforeend",'<div class="slider"><button class="back-btn"></button><button class="addfriend-btn"><img alt="add user" src='.concat(t,"></button></div>")),function(){document.querySelector(".slider").insertAdjacentHTML("beforeend",'<div class="slider-inner"><ul class="slider-list"></ul></div>');for(var e=document.querySelector(".slider-list"),n=[],a='<img alt="no photo user" src='.concat(t,">"),s=10;s--;)n.push('<li class="slider-item">\n            '.concat(s>4?a:'<span class="empty"></span>',"\n        </li>"));e.insertAdjacentHTML("beforeend",n.join(""))}(),document.querySelector(".slider").insertAdjacentHTML("beforeend",'<button class="forward-btn"></button>'),document.querySelector(".forward-btn").addEventListener("click",(function(){document.querySelector(".slider-list").scrollLeft+=60}),!1),document.querySelector(".back-btn").addEventListener("click",(function(){document.querySelector(".slider-list").scrollLeft-=60}),!1),a("chat"),a("university"),a("email"),a("score"),function(){var e=0;document.querySelector(".game").insertAdjacentHTML("beforeend",'<span class="chip"></span>');var t=document.querySelector(".chip");t.addEventListener("animationend",(function(){var a="left: ".concat(n[e].x,"px; top: ").concat(n[e].y,"px;");t.style=a,e++})),document.querySelector(".university").addEventListener("click",(function(){e>=10||(t.style.animation="chip-step-".concat(e," 0.7s linear"),t.style.animationFillMode="forwards")}),!1)}(),function(){document.querySelector(".game").insertAdjacentHTML("beforeend",'<div class="modal"><div class="modal-body"></div><div class="overlay"></div></div>');var e=document.querySelector(".modal-body");e.insertAdjacentHTML("beforeend",'<span class="modal-header">'.concat(s,"</span>")),e.insertAdjacentHTML("beforeend",'<div class="modal-inner"></div>'),document.querySelector(".modal-inner").insertAdjacentHTML("beforeend",'<div class="modal-score"><div class="score-header"><span class="place">'.concat(c.header.place,"</span><span></span><span>").concat(c.header.lastName,'</span><span class="exp">').concat(c.header.exp,"</span></div></div>")),document.querySelector(".modal-score").insertAdjacentHTML("beforeend",'<div class="score-list"></div>');var n,t,a,i=document.querySelector(".score-list");n=[],t=o.rating.sort((function(e,n){return n.points-e.points})).slice(0,7),a=function(e,n){return e.filter((function(e){return e.id===n.id})).length>0},t.forEach((function(e,t){n.push('<div class="score-item"><span class="score-place">'.concat(t+1,'</span><span class="is-friend">').concat(a(o.friends,e)?"Твой друг":"",'</span><span class="score-lastname ').concat(a(o.friends,e)?"friend":"",'">').concat(e.name,"&ensp;").concat(e.lastName,'</span><span class="score-exp">').concat(e.points,"</span></div>"))})),i.insertAdjacentHTML("beforeend",n.join("")),e.insertAdjacentHTML("beforeend",'<button class="modal-close-btn"></button>'),document.querySelector(".modal-close-btn").addEventListener("click",(function(){document.querySelector(".modal").classList.remove("active")}),!1),document.querySelector(".score").addEventListener("click",(function(){document.querySelector(".modal").classList.add("active")}),!1)}()}catch(e){console.log(e)}}()})();