
// GESTIONNAIR DE FORMULAIRE DE BOOSTRAP

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  let messageEnregistre = document.querySelector('.messageEnregistrement')
  let inputNomClient = document.querySelector('#validationCustom01')
  let textNomClient = document.querySelector('#nomClient')


  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          event.preventDefault()
          textNomClient.textContent = inputNomClient.value

          setTimeout(() => {
          messageEnregistre.classList.add('messageEnregistrementOpener')
          $('.messageEnregistrement').fadeOut(7000)
            
          }, 100);

        }


        form.classList.add('was-validated')
      }, false)
    })
    
})()




   
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
//     let mss = document.querySelectorAll('.valid-feedback')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//         console.log(messageEnregistre);

//       })
//   })()




           //CHANGER LA COULEUR ET LA TAILLE DES LOREM EN FIN DE PAGE

let couleur = document.querySelector('#couleur')           
let taille = document.querySelector('#taille')
let valeurTaille = document.querySelector('#tail')
let allPAragrapheAccordion = document.querySelectorAll('.accordion-body >p')

couleur.addEventListener('change', function(e){
  allPAragrapheAccordion.forEach((p)=>{
    p.style.color = this.value
   })
  
})



taille.addEventListener('change',function(e){
 let valeur = this.value
  valeurTaille.textContent= valeur

  allPAragrapheAccordion.forEach((p)=>{
   p.style.fontSize = this.value+'px'

  })

})

//            FAIRE PASSER LA CLASSE EN COURS EN LA MARQUANT SUR LE NAV

let liens = document.querySelectorAll('.nor')
liens.forEach(lien =>{
  lien.addEventListener('click',function(e){
    document.querySelector('.one .active')?.classList.remove('active')
    lien.classList.add('active')
  })
})

let lienss = document.querySelectorAll('.resp')
lienss.forEach(liens =>{
  liens.addEventListener('click',function(e){
    document.querySelector('.two .active')?.classList.remove('active')
    liens.classList.add('active')
  })
})


//      OUVERTURE ET FERMETURE DE LA BOITE CONTENANT LE NOMBRE DE COMMANDES

let carte = document.querySelector('.nav-cart')
let crte = document.querySelector('.nav-cart-bas')
let board = document.querySelector('.carte')
let overlayIndex = document.querySelector('#overlayIndex')

          // OUVERTURE

carte.addEventListener('click', function(e){

  board.style.transform = 'translate(-50%) scale(1)'
  overlayIndex.classList.toggle('activer')
  board.classList.toggle('actif')

})
crte.addEventListener('click', function(e){
  board.classList.toggle('actif')

  board.style.transform = 'translate(-50%) scale(1)'
  overlayIndex.classList.toggle('activer')

})


        //FERMETURE

        let fermeur = document.querySelector('#fermeurCarte')
        fermeur.addEventListener('click', function(e){
          board.classList.toggle('actif')

          board.style.transform = 'translate(-50%) scale(0)'
          overlayIndex.classList.toggle('activer')
        })   
        
        
        //FERMETURE AU CLICK SUR L'OVERLAY

        overlayIndex.addEventListener('click', function(e){
          board.classList.toggle('actif')

          board.style.transform = 'translate(-50%) scale(0)'
          overlayIndex.classList.toggle('activer')
        })




        //      REMPLISSAGE DU NOMBRE DE MENUS AUX CLICK SUR LE BOUTON ADDTOCART


let allAddRemoverButton = document.querySelectorAll('.add_remove')
let textInBoutonChariotBas = document.querySelector('#cart-number-item-bas')
let textInBoutonChariot = document.querySelector('#cart-number-item')
let textIncarte = document.querySelector('#nombreCommande')
let nombreElement = 0

allAddRemoverButton.forEach((addRemover) =>{
  
  addRemover.addEventListener('click', function(e){

if(addRemover.textContent == 'Add to Cart'){
  addRemover.textContent = 'Remove to Cart'
  nombreElement++
}else if(addRemover.textContent == 'Remove to Cart'){
  addRemover.textContent = 'Add to Cart'
  nombreElement--

}
textIncarte.textContent =nombreElement
textInBoutonChariotBas.textContent =nombreElement
textInBoutonChariot.textContent =nombreElement
console.log(nombreElement);

  })
})

//          APPARITION DU MESSAGE QUI PROUVE L'ENREGISTREMENT LORSQU'ON SOUMET LE FORMULAIRE OU CLIK SUR COMMANDER

