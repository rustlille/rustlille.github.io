document.getElementById("mobile-menu").addEventListener("click", (e) => {
     if(e.target.tagName=="A"){
         let menuToggle = document.getElementById("mobile-menu-toggle");
         menuToggle.checked = !menuToggle.checked;
     }
});
