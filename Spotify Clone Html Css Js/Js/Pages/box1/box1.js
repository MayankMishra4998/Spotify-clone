const box1ScrooledPlaylist = document.querySelector("#box1_scrool_playlist") 
const box1ScroolArtist = document.getElementById("box1_scrool_artist")
const box1ScroolPodcast = document.getElementById("box1_scrool_podcast")
const box1ScroolShow = document.getElementById("box1_scrool_show")


box1ScrooledPlaylist.addEventListener("click", () => {
    const currentColor = window.getComputedStyle(box1ScrooledPlaylist).color;

    if (currentColor === "rgb(255, 255, 255)") {
        box1ScrooledPlaylist.style.color = "black";
        box1ScrooledPlaylist.style.backgroundColor = "white";

        box1ArijitBtn.style.display = "none"
        Box1KaranAjulabtn.style.display = "none"
        box1AnupJainBtn.style.display = "none"

        box1mahabharatBtn.style.display = "none"

        likedSongIcon.style.display = ""
        box1BollywoodBtn.style.display = ""
        box1PahadiBtn.style.display = ""
        box1GymPhonkBtn.style.display = ""
    }
    else if (currentColor === "rgb(0, 0, 0)") {
        box1ScrooledPlaylist.style.color = "white";
        box1ScrooledPlaylist.style.backgroundColor = "";
        box1ArijitBtn.style.display = ""
        Box1KaranAjulabtn.style.display = ""
        box1mahabharatBtn.style.display = ""
        box1AnupJainBtn.style.display = ""
    }

    box1ScroolArtist.style.backgroundColor = ""
    box1ScroolArtist.style.color = ""
    box1ScroolPodcast.style.backgroundColor = ""
    box1ScroolPodcast.style.color = ""
    box1ScroolShow.style.backgroundColor = ""
    box1ScroolShow.style.color = ""

});


box1ScroolArtist.addEventListener("click", () => {
    const currentColor = window.getComputedStyle(box1ScroolArtist).color
    
    if (currentColor === "rgb(255, 255, 255)") {
        box1ScroolArtist.style.backgroundColor = "white"
        box1ScroolArtist.style.color = "black"

        box1ArijitBtn.style.display = ""
        Box1KaranAjulabtn.style.display = ""
        box1AnupJainBtn.style.display = ""

        box1mahabharatBtn.style.display = "none"

        likedSongIcon.style.display = "none"
        box1BollywoodBtn.style.display = "none"
        box1PahadiBtn.style.display = "none"
        box1GymPhonkBtn.style.display = "none"

    }
    else {
        box1ScroolArtist.style.backgroundColor = ""
        box1ScroolArtist.style.color = "white"

        box1ArijitBtn.style.display = ""
        Box1KaranAjulabtn.style.display = ""
        box1AnupJainBtn.style.display = ""

        box1mahabharatBtn.style.display = ""

        likedSongIcon.style.display = ""
        box1BollywoodBtn.style.display = ""
        box1PahadiBtn.style.display = ""
        box1GymPhonkBtn.style.display = ""
    }


    box1ScrooledPlaylist.style.color = "";
    box1ScrooledPlaylist.style.backgroundColor = "";
    box1ScroolPodcast.style.backgroundColor = ""
    box1ScroolPodcast.style.color = ""
    box1ScroolShow.style.backgroundColor = ""
    box1ScroolShow.style.color = ""
})


box1ScroolPodcast.addEventListener("click", () => {
    const currentColor = window.getComputedStyle(box1ScroolPodcast).color
    if (currentColor === "rgb(255, 255, 255)") {
        box1ScroolPodcast.style.backgroundColor = "white"
        box1ScroolPodcast.style.color = "black"


        box1ArijitBtn.style.display = "none"
        Box1KaranAjulabtn.style.display = "none"
        box1AnupJainBtn.style.display = "none"

        box1mahabharatBtn.style.display = ""

        likedSongIcon.style.display = "none"
        box1BollywoodBtn.style.display = "none"
        box1PahadiBtn.style.display = "none"
        box1GymPhonkBtn.style.display = "none"
    }
    else {
        box1ScroolPodcast.style.backgroundColor = ""
        box1ScroolPodcast.style.color = "white"


        box1ArijitBtn.style.display = ""
        Box1KaranAjulabtn.style.display = ""
        box1AnupJainBtn.style.display = ""

        box1mahabharatBtn.style.display = ""

        likedSongIcon.style.display = ""
        box1BollywoodBtn.style.display = ""
        box1PahadiBtn.style.display = ""
        box1GymPhonkBtn.style.display = ""
    }


    box1ScrooledPlaylist.style.color = "";
    box1ScrooledPlaylist.style.backgroundColor = "";
    box1ScroolArtist.style.backgroundColor = ""
    box1ScroolArtist.style.color = ""
    box1ScroolShow.style.backgroundColor = ""
    box1ScroolShow.style.color = ""
})


box1ScroolShow.addEventListener("click", () => {
    const currentColor = window.getComputedStyle(box1ScroolShow).color
    if (currentColor === "rgb(255, 255, 255)") {
        box1ScroolShow.style.backgroundColor = "white"
        box1ScroolShow.style.color = "black"


        box1ArijitBtn.style.display = "none"
        Box1KaranAjulabtn.style.display = "none"
        box1AnupJainBtn.style.display = "none"

        box1mahabharatBtn.style.display = "none"

        likedSongIcon.style.display = "none"
        box1BollywoodBtn.style.display = "none"
        box1PahadiBtn.style.display = "none"
        box1GymPhonkBtn.style.display = "none"
    }
    else {
        box1ScroolShow.style.backgroundColor = ""
        box1ScroolShow.style.color = "white"

        box1ArijitBtn.style.display = ""
        Box1KaranAjulabtn.style.display = ""
        box1AnupJainBtn.style.display = ""

        box1mahabharatBtn.style.display = ""

        likedSongIcon.style.display = ""
        box1BollywoodBtn.style.display = ""
        box1PahadiBtn.style.display = ""
        box1GymPhonkBtn.style.display = ""
    }

    box1ScrooledPlaylist.style.color = "";
    box1ScrooledPlaylist.style.backgroundColor = "";
    box1ScroolArtist.style.backgroundColor = ""
    box1ScroolArtist.style.color = ""
    box1ScroolPodcast.style.backgroundColor = ""
    box1ScroolPodcast.style.color = ""

})


