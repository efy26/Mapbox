document.querySelector(".barre_block_un").addEventListener("click", () => {
    document.querySelector(".barre_block_un").style ="display: none; transition:3s all; scroll-behavior: smooth;"
    document.querySelector(".menu i").style = "display: unset; transition:3s all; scroll-behavior: smooth;"
    document.querySelector(".all_container_header_options_petit").style = "display: flex;"
})
document.querySelector(".menu i").addEventListener("click", () => {
    document.querySelector(".menu i").style ="display: none; transition:3s all; scroll-behavior: smooth;"
    document.querySelector(".barre_block_un").style = "display: unset; transition:3s all; scroll-behavior: smooth;"
    document.querySelector(".all_container_header_options_petit").style = "display: none;"

})
// var section_deux = document.querySelector(".section_deux")


// var screenWidth = screen.width;
// if(screenWidth <= 900)
// section_deux.scrollBy(60 ,0)