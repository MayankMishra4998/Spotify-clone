const allBtn = document.getElementById("box2_main_page_l1_all");
const musicBtn = document.getElementById("box2_main_page_l1_music");
const podcastBtn = document.getElementById("box2_main_page_l1_podcast");
const musicSelectBtn = document.getElementById("box_main_page_musicPart");
const musicSelect1Btn = document.getElementById("box_main_page_musicPart1");
const musicSelect2Btn = document.getElementById("box_main_page_musicPart2");
const musicSelect3Btn = document.getElementById("box_main_page_musicPart3");

allBtn.addEventListener("click", () => {
    if (allBtn.style.color === "white") {

        allBtn.style.backgroundColor = "white";
        allBtn.style.color = "black";

        musicBtn.style.backgroundColor = "rgb(59, 56, 56)";
        musicBtn.style.color = "white";

        podcastBtn.style.backgroundColor = "rgb(59, 56, 56)";
        podcastBtn.style.color = "white";

        musicSelectBtn.style.display = ""
        musicSelect1Btn.style.display = ""
        musicSelect2Btn.style.display = ""
        musicSelect3Btn.style.display = ""
        podcastShowBtn.style.display = ""
    }

});


musicBtn.addEventListener("click", () => {
    if (musicBtn.style.color = "white") {
        musicBtn.style.backgroundColor = "white";
        musicBtn.style.color = "black";

        allBtn.style.backgroundColor = "rgb(59, 56, 56)";
        allBtn.style.color = "white";

        podcastBtn.style.backgroundColor = "rgb(59, 56, 56)";
        podcastBtn.style.color = "white";

        musicSelectBtn.style.display = "none"
        musicSelect1Btn.style.display = ""
        musicSelect2Btn.style.display = ""
        musicSelect3Btn.style.display = ""
        podcastShowBtn.style.display ="none"
    }
});


podcastBtn.addEventListener("click", () => {
    if (podcastBtn.style.color = "white") {
        podcastBtn.style.backgroundColor = "white";
        podcastBtn.style.color = "black";

        allBtn.style.backgroundColor = "rgb(59, 56, 56)";
        allBtn.style.color = "white";

        musicBtn.style.backgroundColor = "rgb(59, 56, 56)";
        musicBtn.style.color = "white";

        musicSelectBtn.style.display = "none"
        musicSelect1Btn.style.display = "none"
        musicSelect2Btn.style.display = "none"
        musicSelect3Btn.style.display = "none"
        podcastShowBtn.style.display="block"
    }

});

likedBtnMainPage.addEventListener("click" , ()=>{
    if (likedBtnMainPage.style.display === "none" ||  likedBtnMainPage.style.display === "") {
     likedBtn.style.display = "block"; 
     mainPage.style.display = "none" ;
     likedSongIcon.style.backgroundColor= "rgba(55, 54, 54, 0.82)" ;  
    }
})


box2Main2ndLikedBtn.addEventListener("click" , ()=>{
    if (box2Main2ndLikedBtn.style.display === "none" ||  box2Main2ndLikedBtn.style.display === "") {
     likedBtn.style.display = "block"; 
     mainPage.style.display = "none" ;
     likedSongIcon.style.backgroundColor=" rgba(55, 54, 54, 0.82)";  
    }
})


hiddenPodcastPreviseBtn.addEventListener("click", ()=>{
    alert("Something Getting Wrong")
})