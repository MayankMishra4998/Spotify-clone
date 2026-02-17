const box1ArijitBtn = document.getElementById("Arijit_song_button");
const box2arititBtn = document.getElementById("box2_arjitSingh_mainPage")
const ArjitMainPage = document.getElementById("arjit_Songs");

box1ArijitBtn.addEventListener("click", () => {
    ArjitMainPage.style.display = "block";
    mainPage.style.display = "none";
    likedBtn.style.display = "none";
    bollywoodSongBtn.style.display = "none";
    PahadiMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "";
    gymPhonkMainPage.style.display = "";
    karanAjulaMainPage.style.display = "";
    mahabharatMainPage.style.display = "none";
    Box2PritumSongs.style.display = ""
    SachinSongs.style.display = ""
    AdityaRikhaiSongs.style.display = ""


    box1ArijitBtn.style.backgroundColor = " rgba(38, 38, 38, 0.816)";
    box1AnupJainBtn.style.backgroundColor = "";
    likedSongIcon.style.backgroundColor = "";
    box1BollywoodBtn.style.backgroundColor = "";
    Box1KaranAjulabtn.style.background = "";
    box1PahadiBtn.style.backgroundColor = "";
    box1GymPhonkBtn.style.backgroundColor = "";
    Box1KaranAjulabtn.style.background = "";
    box1mahabharatBtn.style.backgroundColor = ""

})

box2arititBtn.addEventListener("click", () => {

    ArjitMainPage.style.display = "block"
    mainPage.style.display = "none";


    box1ArijitBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";

})