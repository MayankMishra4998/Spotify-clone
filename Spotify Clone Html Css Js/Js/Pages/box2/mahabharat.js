const box1mahabharatBtn = document.getElementById("krishna_button")
const box2mahabharatBtn = document.getElementById("box2_mahabharat_mainPage")
const mahabharatMainPage = document.getElementById("mahabharat_Songs")
const box2krishnaResendlyPlayed = document.getElementById("box2_krishna_Resendly_Played")

box1mahabharatBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    likedBtn.style.display = "none";
    bollywoodSongBtn.style.display = "none";
    ArjitMainPage.style.display = "none";
    PahadiMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "none";
    gymPhonkMainPage.style.display = "none";
    karanAjulaMainPage.style.display = "none";
    mahabharatMainPage.style.display = "block";
    Box2PritumSongs.style.display = ""
    SachinSongs.style.display = ""
    AdityaRikhaiSongs.style.display = ""


    box1ArijitBtn.style.backgroundColor = "";
    box1PahadiBtn.style.backgroundColor = "";
    box1BollywoodBtn.style.backgroundColor = "";
    likedSongIcon.style.backgroundColor = "";
    box1AnupJainBtn.style.backgroundColor = "";
    box1GymPhonkBtn.style.backgroundColor = "";
    Box1KaranAjulabtn.style.background = "";
    box1mahabharatBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)"
})


box2mahabharatBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    likedBtn.style.display = "none";
    bollywoodSongBtn.style.display = "none";
    ArjitMainPage.style.display = "none";
    PahadiMainPage.style.display = "none";
    AnuvJainMainPage.style.display = "none";
    gymPhonkMainPage.style.display = "none";
    karanAjulaMainPage.style.display = "none";
    mahabharatMainPage.style.display = "block";


    box1mahabharatBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)"
})

box2krishnaResendlyPlayed.addEventListener("click",()=>{
    mahabharatMainPage.style.display = "block";
    mainPage.style.display = "none";


    box1mahabharatBtn.style.backgroundColor = "rgba(38, 38, 38, 0.816)"
})