const image_carousel = document.querySelectorAll(".image_carousel")
const bouton_gauche = document.querySelector("#Gauche")
const btn_droite = document.querySelector("#Droite")
const section_deux = document.querySelector(".section_deux")
let video_carousel = document.querySelector(".video_carousel")
const image_carousel_svg = document.querySelector(".bi-play")
let produits = document.querySelector(".Produits")
let produits_i = document.querySelector(".Produits i")
let indice_element_active = 1




window.onload = () => {
    augmenter(image_carousel[indice_element_active])
    
    video_carousel.style = "border-radius: 20px;"
    bouton_gauche.addEventListener("click", slideGauche)
    btn_droite.addEventListener("click", slideDroite)

//    for(let i = 0; i < image_carousel.length; i++) {
//         image_carousel[i].addEventListener("click", () => {
//            return slideDroite()
//         })
//     } 

// let x = 8;

// while (x <= image_carousel.length) {

//     image_carousel[x].addEventListener("click", () => {
//         slideGauche()
//     })
//     x++
// }

// let i = 0;

// while (i <= image_carousel.length) {

//     image_carousel[i].addEventListener("click", () => {
//         slideDroite()
//     })
//     i++
// }

    

//    titreAddEffet(image_carousel[+1])
   playAddEffet(document.querySelector("#image_carousel"))
   playRemoveEffet(document.querySelector("#image_carousel"))


}
// Fin chargement de la page




