//AFFICHER LE PRIX PAR RAPPORT AU NOMBRE DE PASSER DANS L'INPUT QUANTITE CHANGE


let inputQuantite = document.querySelector('#quantite')
let textMontant = document.querySelector('.montant')
let textMontan = document.querySelector('.montan')

let valeur = 0

inputQuantite.addEventListener('change',() =>{
    valeur = inputQuantite.value * 10000
    textMontant.textContent = valeur
    textMontan.textContent = valeur

})

// AFFICHER LA MODALE POUR LES INFOS ET  LE MODE DE PAYEMENT


let cartePayement = document.querySelector('.payerMaintenant')
let fermerPayement = document.querySelector('#fermerPayement')
let buttonPaie = document.querySelector('#paie')
let overlayPouletDg =document.querySelector('#overlayPouletDg')

// transform: translateX(-50%)
buttonPaie.addEventListener('click', function(){
    cartePayement.classList.toggle('actifPouletDg')
    overlayPouletDg.classList.toggle('activer')
    cartePayement.style.transform = 'translateX(-50%)'

allInput.forEach(function(input){
    input.value = ""
} )

if(mode.value ='Mode de paiement'){
    payer.disabled = true
}

})


//FERMER LA LA MODALE POUR LES INFOS ET  LE MODE DE PAYEMENT


fermerPayement.addEventListener('click', function(){
    cartePayement.classList.toggle('actifPouletDg')
    overlayPouletDg.classList.toggle('activer')
    cartePayement.style.transform = 'translateX(50%)'

    allInput.forEach(function(input){
        input.value = ""
    } )
    mode.value ='Mode de paiement'

})


// GERER LA VALIDATION DU MODE DE PAYEMENT APRES BON REMPLISSAGE

let allInput = document.querySelectorAll('.infoPaiement')
let mode = document.querySelector("#moyenPayement")
let inputName = document.querySelector('#inputName')
let inputAdresse = document.querySelector('#inputAdresse')
let inputPhone = document.querySelector('#inputPhone')


// FONCTION A APPLIQUER A CHAQUE BOUTTON POSSEDANT LA POSSEDANT AU ONCLICK OU AU ONCHANGE

function checkit() {
let payer = document.querySelector('#payer')

var m = true
    

for(let i = 0; i < allInput.length; i++){

    if(allInput[i].value.length == 0){
m = false
    }

    if(m && (mode.value !='Mode de paiement')){
        payer.disabled = false
    }else{
        payer.disabled = true

    }

}
}

// AFFICHER LA CONSOLE COMPORTANT LES INFOS DU PAYEMENT ET LE MODE CHOISI
let modaleRemerciement = document.querySelector('.remerciement')
let fermerRemerciement = document.querySelector('#fermerRemerciement')
let allInfoPaiement = document.querySelectorAll('.infoPaiement')


payer.addEventListener('click', function(){
    cartePayement.classList.toggle('actifPouletDg')
    overlayPouletDg.classList.toggle('activer')
    modaleRemerciement.style.transform = 'translateX(-50%)'


    modaleRemerciement.classList.toggle('actifPouletDg')
    overlayPouletDg.classList.toggle('activer')


})


fermerRemerciement.addEventListener('click', function(){
    modaleRemerciement.classList.toggle('actifPouletDg')
    modaleRemerciement.style.transform = 'translateX(50%)'
    
    overlayPouletDg.classList.toggle('activer')
    
})