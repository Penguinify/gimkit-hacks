(()=>{"use strict";const e=JSON.parse('{"a$":"bUshEA","YM":"ihVPuW","wv":"imvEeI","Wr":"hitgke","yt":"iGaLUl","iH":"cuMdqS","Rw":"ZMQKI"}');var n=[];function t(){return console.log(document.getElementsByClassName(e.iH).length),document.getElementsByClassName(e.iH).length>0}function o(e,t){if(console.log(n),n.length>0)for(let t=0;t<n.length;t++)if(n[t].question===e)return;n.push({question:e,answer:t}),console.log(n)}function s(){return!(document.getElementsByClassName(e.Wr).length>0)&&(document.getElementsByClassName(e.yt).length>0?(console.log("I SAW IT"),!0):void 0)}function l(e){for(let t=0;t<n.length;t++)if(n[t].question===e)return n[t].answer;return null}function r(){let n=document.getElementsByClassName(e.iH)[0],t=document.getElementsByClassName(e.Rw)[0],r=document.getElementsByClassName(e.wv)[0].innerText,a=l(document.getElementsByClassName(e.wv)[0].innerText);a&&(console.log("shoudlve worked"),n.placeholder=a),t.addEventListener("mouseup",(e=>{console.log("mouseup"),setTimeout((()=>{s()&&o(r,n.value)}),250)})),n.addEventListener("keyup",(e=>{console.log("keyup"),13===e.keyCode&&setTimeout((()=>{s()&&o(r,n.value)}),250)}))}(function(){if("gimkit"!==window.location.href.split(".")[1])return alert("You must be on a Gimkit game page to use this script."),!1;try{if(e)return alert("Gimkit hacks are already running."),!1}catch(e){console.log("Have fun!")}var e=!0;return!0})()&&(alert("Answer Questions to save answers. Correct answers will appear larger once you have answered enough questions."),console.log("Adding listeners..."),window.setInterval((function(){document.getElementsByClassName(e.a$).length>0?t()?(window.clearInterval(),r()):(window.clearInterval(),function(){let n=document.getElementsByClassName(e.YM),t=l(document.getElementsByClassName(e.wv)[0].innerText);for(let l=0;l<n.length;l++)n[l].addEventListener("mouseup",(t=>{console.log("mousedown");var r=document.getElementsByClassName(e.wv)[0].innerText,a=n[l].innerText;setTimeout((()=>{s()&&(console.log("correct"),o(r,a))}),250),n[l].removeEventListener("mousedown",(()=>{}))})),n[l].innerText===t&&(n[l].style.transform="scale(1.3)")}()):t()&&(window.clearInterval(),r())}),50))})();