var a = document.getElementById("numberA");
var b = document.getElementById("numberB");
var res = document.getElementById("result");

function add() {
    if (isNaN(a.value) || isNaN(b.value)) {
        alert("Saisir un nombre !");
    } else {
        res.value = parseInt(a.value) + parseInt(b.value);
    }
}

function mult() {
    if (isNaN(a.value) || isNaN(b.value)) {
        alert("Saisir un nombre !");
    } else {
        res.value = parseInt(a.value) * parseInt(b.value);
    }
}

function sub() {
    if (isNaN(a.value) || isNaN(b.value)) {
        alert("Saisir un nombre !");
    } else {
        res.value = parseInt(a.value) - parseInt(b.value);
    }
}

function div() {
    if (b.value == 0) {
        alert("Division est impossible ! ERROR !!");
        res.value = "Erreur de calcul";
    }
    if (isNaN(a.value) || isNaN(b.value)) {
        alert("Saisir un nombre !");
    } else {
        res.value = parseInt(a.value) / parseInt(b.value);
    }
}