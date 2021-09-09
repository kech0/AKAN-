const maleNames = ['Kwasi','Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', ' Kwame'];
const femaleNames = ['Akosua', ' Adwoa', 'Abenaa', ' Akua', 'Yaa', 'Afua', 'Ama'];


const frm = document.querySelector("#form1");
const fd = new FormData(frm);


frm.addEventListener("submit", function(e){
    e.preventDefault();
    const d = new Date(fd.get('dob')).getDay()

