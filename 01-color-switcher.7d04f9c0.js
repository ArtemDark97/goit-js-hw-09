let t;const e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=document.body;function a(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`;o.style.backgroundColor=t}e.addEventListener("click",(function(){e.disabled=!0,t=setInterval(a,1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.7d04f9c0.js.map
