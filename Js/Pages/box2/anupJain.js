const box1AnupJainBtn = document.getElementById("anupJain_button");
const box2AnupJainBtn = document.getElementById("box2_anupjain_mainPage")
const AnuvJainMainPage = document.getElementById("anuvJain_Songs")
const Box2Dailymix2 = document.getElementById("box2_dailymix2")

box1AnupJainBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    likedBtn.style.display = "none";
    bollywoodSongBtn.style.display = "none";
    ArjitMainPage.style.display = "none";
    PahadiMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "block";
    gymPhonkMainPage.style.display = "none"
    karanAjulaMainPage.style.display = "none"
    mahabharatMainPage.style.display = "none";
    Box2PritumSongs.style.display = ""
    SachinSongs.style.display = ""
    AdityaRikhaiSongs.style.display = ""



    box1ArijitBtn.style.backgroundColor = "";
    box1PahadiBtn.style.backgroundColor = "";
    box1BollywoodBtn.style.backgroundColor = "";
    likedSongIcon.style.backgroundColor = "";
    box1AnupJainBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
    box1GymPhonkBtn.style.backgroundColor = "";
    Box1KaranAjulabtn.style.background = "";
    box1mahabharatBtn.style.backgroundColor = ""
});


box2AnupJainBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    likedBtn.style.display = "none";
    bollywoodSongBtn.style.display = "none";
    ArjitMainPage.style.display = "none";
    PahadiMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "block";
    karanAjulaMainPage.style.display = "none"
   


    box1AnupJainBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
});


Box2Dailymix2.addEventListener("click" , ()=>{
    AnuvJainMainPage.style.display = "block";
     mainPage.style.display = "none";


     box1AnupJainBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
})