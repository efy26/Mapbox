function augmenter(variable) {
    variable.style = "z-index:2; transform:scale(1.5, 1.4); border-radius: 20px; cursor: pointer; pointer-events: unset; opacity:unset;"

    variable.addEventListener("mouseover", () => {
        let h6_carosel = document.querySelectorAll(".h6_carosel")
        for (let i = 0; i < h6_carosel.length; i++) {
            h6_carosel[i].style = "background-color: #35d283;"

            variable.addEventListener("mouseout", () => {
                h6_carosel[i].style = "background-color: #228A56;"
            })
            
        }
        
    })

}


function diminuer(variable) {
    variable.style = "z-index:1;  transform:scale(1); border-radius: 10px; opacity:0.2; "
  
}


function smoothUnset(variable) {
    variable.style = "scroll-behavior: unset;"
}

function smooth(variable) {
    variable.style = "scroll-behavior: smooth;"
}

function playAddEffet(variable) {
    variable.addEventListener("mouseover", () => {
        image_carousel_svg.classList.add("playeffet")

    })
}

function playRemoveEffet(variable) {
    variable.addEventListener("mouseout", () => {
        image_carousel_svg.classList.remove("playeffet")

    })
}


// Debut des fonctions pour les efftes

    document.querySelector(".section_trois a").addEventListener("mouseover", () => {
        document.querySelector(".section_trois a i").classList.add("section_trois_a_i")
    })

    document.querySelector(".section_trois a").addEventListener("mouseout", () => {
        document.querySelector(".section_trois a i").classList.remove("section_trois_a_i")
    })

    document.querySelector(".section_quatre_block_un a").addEventListener("mouseover", () => {
        document.querySelector(".section_quatre_block_un a i").classList.add("section_trois_a_i")
    })

    document.querySelector(".section_quatre_block_un a").addEventListener("mouseout", () => {
        document.querySelector(".section_quatre_block_un a i").classList.remove("section_trois_a_i")
    })

    document.querySelector(".section_cinq_block_deux a").addEventListener("mouseover", () => {
        document.querySelector(".section_cinq_block_deux a i").classList.add("section_trois_a_i")
    })

    document.querySelector(".section_cinq_block_deux a").addEventListener("mouseout", () => {
        document.querySelector(".section_cinq_block_deux a i").classList.remove("section_trois_a_i")
    })

    document.querySelector(".section_six_block_un a").addEventListener("mouseover", () => {
        document.querySelector(".section_six_block_un a i").classList.add("section_trois_a_i")
    })

    document.querySelector(".section_six_block_un a").addEventListener("mouseout", () => {
        document.querySelector(".section_six_block_un a i").classList.remove("section_trois_a_i")
    })

    document.querySelector(".section_sept_block_deux a").addEventListener("mouseover", () => {
        document.querySelector(".section_sept_block_deux a i").classList.add("section_trois_a_i")
    })

    document.querySelector(".section_sept_block_deux a").addEventListener("mouseout", () => {
        document.querySelector(".section_sept_block_deux a i").classList.remove("section_trois_a_i")
    })

    document.querySelector(".section_huit_block_trois a").addEventListener("mouseover", () => {
        document.querySelector(".section_huit_block_trois a i").classList.add("section_trois_a_i")
    })

    document.querySelector(".section_huit_block_trois a").addEventListener("mouseout", () => {
        document.querySelector(".section_huit_block_trois a i").classList.remove("section_trois_a_i")
    })

    document.querySelector(".Carrières").addEventListener("mouseover", () => {
        document.querySelector(".PERANT_LA_VOIE_2").style ="color: black"
    })

    document.querySelector(".Carrières").addEventListener("mouseout", () => {
        document.querySelector(".PERANT_LA_VOIE_2").style ="color: black"
    })

    produits.addEventListener("mouseover", () => {
        document.querySelector(".mouseover_menu_all_block").style ="display: flex;"
        produits_i.setAttribute("class", "bi bi-chevron-up")
    })
    
    produits.addEventListener("mouseout", () => {
        document.querySelector(".mouseover_menu_all_block").style ="display: none;"
        produits_i.setAttribute("class", "bi bi-chevron-down")
    })

    document.querySelector(".Solutions").addEventListener("mouseover", () => {
        document.querySelector(".solution_mouseover").style ="display: flex;"
        // produits_i.setAttribute("class", "bi bi-chevron-up")
    })
    
    document.querySelector(".Solutions").addEventListener("mouseout", () => {
        document.querySelector(".solution_mouseover").style ="display: none;"
        // produits_i.setAttribute("class", "bi bi-chevron-down")
    })

    document.querySelector(".Développeurs").addEventListener("mouseover", () => {
        document.querySelector(".mouseover_developpement_all").style ="display: flex;"
        // produits_i.setAttribute("class", "bi bi-chevron-up")
    })
    
    document.querySelector(".Développeurs").addEventListener("mouseout", () => {
        document.querySelector(".mouseover_developpement_all").style ="display: none;"
        // produits_i.setAttribute("class", "bi bi-chevron-down")
    })

    document.querySelector(".Entreprise").addEventListener("mouseover", () => {
        document.querySelector(".mouseover_entreprise_all").style ="display: flex;"
        document.querySelector(".Entreprise i").setAttribute("class", "bi bi-chevron-up")
    })
    
    document.querySelector(".Entreprise").addEventListener("mouseout", () => {
        document.querySelector(".mouseover_entreprise_all").style ="display: none;"
        document.querySelector(".Entreprise i").setAttribute("class", "bi bi-chevron-down")
    })

   


// function clickSurImage() {

//     let tableauCarousel = []
//     tableauCarousel.push(image_carousel)
//     // tableauCarousel = tableauCarousel[0]
//     for (let i = 0; i <= tableauCarousel.length; i++) {

//         image_carousel[indice_element_active+1].addEventListener("click", () => {
//             slideDroite()
//         })

        
//     }


    
// }



// h6_carosel.addEventListener("mouseover", () => {
    
//     document.querySelector(".h6_carosel").style = "color: red;"
// })

// function titreAddEffet(variable) {

//     variable.addEventListener("mouseover", () => {
//         .className = "image_carousel2_titre_effet"

//         // h6_carosel.classList.add("image_carousel2_titre_effet")
//     })
// }

// function titreRemoveEffet(variable) {
//     variable.addEventListener("mouseout", () => {
//         image_carousel_svg.classList.remove("playeffet")
//     })
// }