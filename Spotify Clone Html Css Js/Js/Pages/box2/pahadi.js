const box1PahadiBtn = document.getElementById("pahadi_button");
const box2PahadiBtn = document.getElementById("box2_pahadi_mainPage")
const PahadiMainPage = document.getElementById("pahadi_Songs");
const box2pahadiResendlyPlayed = document.getElementById("box2_pahadi_Resendly_Played")

box1PahadiBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    likedBtn.style.display = "none";
    bollywoodSongBtn.style.display = "none";
    ArjitMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "";
    PahadiMainPage.style.display = "block";
    gymPhonkMainPage.style.display = "none"
    karanAjulaMainPage.style.display = "none"
    Box2PritumSongs.style.display = ""
    SachinSongs.style.display = ""
    AdityaRikhaiSongs.style.display = ""
    mahabharatMainPage.style.display = "none";



    box1ArijitBtn.style.backgroundColor = "";
    box1PahadiBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
    box1BollywoodBtn.style.backgroundColor = "";
    likedSongIcon.style.backgroundColor = "";
    box1AnupJainBtn.style.backgroundColor = "";
    Box1KaranAjulabtn.style.background = "";
    box1GymPhonkBtn.style.backgroundColor = "";
    box1mahabharatBtn.style.backgroundColor = ""
});


box2PahadiBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    PahadiMainPage.style.display = "block";

    box1PahadiBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
});


 box2pahadiResendlyPlayed.addEventListener("click",()=>{
    PahadiMainPage.style.display = "block";
     mainPage.style.display = "none";


      box1PahadiBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
 })