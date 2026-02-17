const box1BollywoodBtn = document.getElementById("bollywood_song_button");
const mainBox2BollywoodBtn = document.getElementById("box_main_page_musicPart_bollywoodSong")

box1BollywoodBtn.addEventListener("click", () => {
    bollywoodSongBtn.style.display = "block";
    mainPage.style.display = "none";
    likedBtn.style.display = "none"
    ArjitMainPage.style.display = "none"
    PahadiMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "";
    gymPhonkMainPage.style.display = ""
    karanAjulaMainPage.style.display = ""
    mahabharatMainPage.style.display = "none";
    Box2PritumSongs.style.display = ""
    SachinSongs.style.display = ""
    AdityaRikhaiSongs.style.display = ""



    box1BollywoodBtn.style.backgroundColor = " rgba(38, 38, 38, 0.816)";
    likedSongIcon.style.backgroundColor = "";
    box1ArijitBtn.style.backgroundColor = "";
    box1PahadiBtn.style.backgroundColor = "";
    box1AnupJainBtn.style.backgroundColor = "";
    box1GymPhonkBtn.style.backgroundColor = "";
    Box1KaranAjulabtn.style.background = "";
    box1mahabharatBtn.style.backgroundColor = ""

})


mainBox2BollywoodBtn.addEventListener("click", () => {
    bollywoodSongBtn.style.display = "block";
    mainPage.style.display = "none";
    PahadiMainPage.style.display = "none";

    box1BollywoodBtn.style.backgroundColor = " rgba(38, 38, 38, 0.816)";
})