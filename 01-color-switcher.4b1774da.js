!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var e=null,o=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),r=document.querySelector("body"),c=(document.querySelector(".color"),function(){r.style.color=t(),r.style.backgroundColor=t()});o.addEventListener("click",(function(){e=setInterval(c,1e3),o.disabled=!0})),n.addEventListener("click",(function(){clearInterval(e),o.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.4b1774da.js.map
