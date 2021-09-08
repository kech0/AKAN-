const frm = document.querySelector("#form1");
const fd = new FormData(frm);


frm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(fd.get("gender"));
    
})