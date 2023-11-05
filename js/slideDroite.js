function slideDroite() {
    
    diminuer(image_carousel[indice_element_active])

    section_deux.scrollBy(520 ,0)
    let screenWidth = screen.width;

        
        // screenWidth++

    if(screenWidth <= 900){
        console.log(3);
        section_deux.scrollBy(60 ,0);
    }
        

    augmenter(image_carousel[indice_element_active+1])
    
    indice_element_active = indice_element_active+1
    
    diminuer(image_carousel[8])

    setTimeout(()=> {
        if (indice_element_active >= 8) {

            section_deux.classList.add("transitionUnset")

            smoothUnset(section_deux)
            
            indice_element_active = 1

            augmenter(image_carousel[indice_element_active])
            section_deux.scrollBy(0 ,0)
            section_deux.scroll(0,0)
            
            indice_element_active = indice_element_active
            smooth(section_deux)
            

        }
    })

}
// for(let i = 0; i <= image_carousel.length; i++) {
//     image_carousel[i].addEventListener("click", () => {
//        return slideDroite()
//     })
// }