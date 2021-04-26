// JS de la premiere question
const container1_img = document.querySelector(".container1-img");
container1_img.style.position = "absolute";
container1_img.style.top = "50%";
container1_img.style.left = "50%";
container1_img.style.transform = "translate(-50%, -50%)";
container1_img.addEventListener('mouseover', (e)=>{
    e.target.style.borderColor = "blue";
    e.target.style.borderWidth = "3px";
    e.target.style.borderStyle = "dotted";
    e.target.style.cursor = "pointer";
});
container1_img.addEventListener('mouseout', (e)=>{
    e.target.style.border = "none";
    e.target.style.cursor = "none";
})
// JS de la deuxieme question
const container2_button = document.querySelector('.container2-button');
container2_button.addEventListener('click', (e)=>{
    e.target.classList.toggle('changeButton');
    e.target.parentElement.classList.toggle('changeBack');
})