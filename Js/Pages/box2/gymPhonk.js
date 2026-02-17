const box1GymPhonkBtn = document.getElementById("gymPhonk_button")
const box2GymPhonkBtn = document.getElementById("box2_gymPhonk_mainPage")
const gymPhonkMainPage = document.getElementById("GYM_PHONK_Songs")
const Box2GYMPHONKResendlyPlayed = document.getElementById("box2_GYMPHONK_Resendly_Played")

box1GymPhonkBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    likedBtn.style.display = "none";
    bollywoodSongBtn.style.display = "none";
    ArjitMainPage.style.display = "none";
    PahadiMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "none";
    karanAjulaMainPage.style.display = "none"
    gymPhonkMainPage.style.display = "block"
    mahabharatMainPage.style.display = "none";
    Box2PritumSongs.style.display = ""
    SachinSongs.style.display = ""
    AdityaRikhaiSongs.style.display = ""



    box1ArijitBtn.style.backgroundColor = "";
    box1PahadiBtn.style.backgroundColor = "";
    box1BollywoodBtn.style.backgroundColor = "";
    likedSongIcon.style.backgroundColor = "";
    box1AnupJainBtn.style.backgroundColor = "";
    box1GymPhonkBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
    Box1KaranAjulabtn.style.background = "";
    box1mahabharatBtn.style.backgroundColor = ""

})

box2GymPhonkBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    likedBtn.style.display = "none";
    bollywoodSongBtn.style.display = "none";
    ArjitMainPage.style.display = "none";
    PahadiMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "none";
    karanAjulaMainPage.style.display = "none";
    gymPhonkMainPage.style.display = "block";


    box1GymPhonkBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
})


Box2GYMPHONKResendlyPlayed.addEventListener("click", () => {
    gymPhonkMainPage.style.display = "block";
    mainPage.style.display = "none";

    box1GymPhonkBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)";
})