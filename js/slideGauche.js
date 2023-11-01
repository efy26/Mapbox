function slideGauche() {

    

    diminuer(image_carousel[indice_element_active])

    section_deux.scrollBy(-520 ,0)
    augmenter(image_carousel[indice_element_active-1])
    
    indice_element_active = indice_element_active-1

    
    diminuer(image_carousel[0])
      


    setTimeout(()=> {
        if (indice_element_active == 0) {

            section_deux.classList.add("transitionUnset")

            smoothUnset(section_deux)
            
            indice_element_active = 7

            augmenter(image_carousel[indice_element_active])
            section_deux.scrollBy(-520 ,0)
            section_deux.scroll(3120,0)
            
            indice_element_active = indice_element_active
            smooth(section_deux)
            

        }
    }, 160)

    
}
 