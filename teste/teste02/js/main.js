const PopUp = document.getElementById('PopUp');

function AbrirPopUp() {
    PopUp.style.display = "block";
}

function FecharPopUp() {
    PopUp.style.display = "none";
}

setInterval(AbrirPopUp, 10000);