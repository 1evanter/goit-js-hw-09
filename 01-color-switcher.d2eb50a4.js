!function(){let t={startBtnEl:document.querySelector("button[data-start]"),stopBtnEl:document.querySelector("button[data-stop]")},n=null,e=!1;t.startBtnEl.addEventListener("click",function(){e||(e=!0,n=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3))}),t.stopBtnEl.addEventListener("click",function(){clearInterval(n),e=!1})}();
//# sourceMappingURL=01-color-switcher.d2eb50a4.js.map