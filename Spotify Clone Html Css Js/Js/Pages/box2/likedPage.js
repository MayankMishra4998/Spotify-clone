const likedBtn = document.getElementById("liked_Songs")
const likedSongIcon = document.getElementById("liked_song_button");
const btnPlayPause = document.getElementById("play_pause_toggle");
const firstSongBtn = document.getElementById("Liked_song_after_click_l4_play_pause");
const secondSongBtn = document.getElementById("2nd_song_play_pause")
const theredSongBtn = document.getElementById("3rd_song_play_pause")
const fourthSongBtn = document.getElementById("4th_song_play_pause")
const fifthSongBtn = document.getElementById("5th_song_play_pause")
const sixthSongBtn = document.getElementById("6th_song_play_pause")
const sevenSongBtn = document.getElementById("7th_song_play_pause")
const eightSongBtn = document.getElementById("8th_song_play_pause")
const ninthSongBtn = document.getElementById("9th_song_play_pause")
const tenthSongBtn = document.getElementById("10th_song_play_pause")
const box3Song1likedSong = document.getElementById("box3_song1_likedSong")


firstSongBtn.addEventListener("click", () => {
    const currentText = firstSongBtn.textContent.trim();
    if (currentText === "▶") {
        firstSongBtn.textContent = "⏸"


        secondSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"

    }
    else {
        firstSongBtn.textContent = "▶"
    }


})


secondSongBtn.addEventListener("click", () => {
    let textContent = secondSongBtn.textContent.trim();
    if (textContent === "▶") {
        secondSongBtn.textContent = "⏸"


        firstSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"
    }
    else {
        secondSongBtn.textContent = "▶"
    }
})



theredSongBtn.addEventListener("click", () => {
    let textContent = theredSongBtn.textContent.trim();
    if (textContent === "▶") {
        theredSongBtn.textContent = "⏸"


        firstSongBtn.textContent = "▶"
        secondSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"
    }
    else {
        theredSongBtn.textContent = "▶"
    }
})



fourthSongBtn.addEventListener("click", () => {
    let textContent = fourthSongBtn.textContent.trim();
    if (textContent === "▶") {
        fourthSongBtn.textContent = "⏸"


        firstSongBtn.textContent = "▶"
        secondSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"

    }
    else {
        fourthSongBtn.textContent = "▶"
    }
})



fifthSongBtn.addEventListener("click", () => {
    let textContent = fifthSongBtn.textContent.trim();
    if (textContent === "▶") {
        fifthSongBtn.textContent = "⏸"


        firstSongBtn.textContent = "▶"
        secondSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"
    }
    else {
        fifthSongBtn.textContent = "▶"
    }
})


sixthSongBtn.addEventListener("click", () => {
    let textContent = sixthSongBtn.textContent.trim();
    if (textContent === "▶") {
        sixthSongBtn.textContent = "⏸"


        firstSongBtn.textContent = "▶"
        secondSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"
    }
    else {
        sixthSongBtn.textContent = "▶"
    }
})


sevenSongBtn.addEventListener("click", () => {
    let textContent = sevenSongBtn.textContent.trim();
    if (textContent === "▶") {
        sevenSongBtn.textContent = "⏸"


        firstSongBtn.textContent = "▶"
        secondSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"
    }
    else {
        sevenSongBtn.textContent = "▶"
    }
})


eightSongBtn.addEventListener("click", () => {
    let textContent = eightSongBtn.textContent.trim();
    if (textContent === "▶") {
        eightSongBtn.textContent = "⏸"




        firstSongBtn.textContent = "▶"
        secondSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"
    }
    else {
        eightSongBtn.textContent = "▶"
    }
})


ninthSongBtn.addEventListener("click", () => {
    let textContent = ninthSongBtn.textContent.trim();
    if (textContent === "▶") {
        ninthSongBtn.textContent = "⏸"



        firstSongBtn.textContent = "▶"
        secondSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        tenthSongBtn.textContent = "▶"
    }
    else {
        ninthSongBtn.textContent = "▶"
    }
})


tenthSongBtn.addEventListener("click", () => {
    let textContent = tenthSongBtn.textContent.trim();
    if (textContent === "▶") {
        tenthSongBtn.textContent = "⏸"


        firstSongBtn.textContent = "▶"
        secondSongBtn.textContent = "▶"
        theredSongBtn.textContent = "▶"
        fourthSongBtn.textContent = "▶"
        fifthSongBtn.textContent = "▶"
        sixthSongBtn.textContent = "▶"
        sevenSongBtn.textContent = "▶"
        eightSongBtn.textContent = "▶"
        ninthSongBtn.textContent = "▶"
    }
    else {
        tenthSongBtn.textContent = "▶"
    }
})


likedSongIcon.addEventListener("click", () => {
    if (likedBtn.style.display === "none" || likedBtn.style.display === "") {
        likedBtn.style.display = "block";
        mainPage.style.display = "none";
        bollywoodSongBtn.style.display = "none";
        ArjitMainPage.style.display = "none"
        AnuvJainMainPage.style.display = "";
        PahadiMainPage.style.display = "none";
        gymPhonkMainPage.style.display = ""
        karanAjulaMainPage.style.display = ""
        Box1KaranAjulabtn.style.background = "";
        mahabharatMainPage.style.display = "none";
        box1mahabharatBtn.style.backgroundColor = ""
        Box2PritumSongs.style.display = ""
        SachinSongs.style.display = ""
        AdityaRikhaiSongs.style.display = ""



        box1BollywoodBtn.style.backgroundColor = "";
        box1ArijitBtn.style.backgroundColor = "";
        likedSongIcon.style.backgroundColor = " rgba(38, 38, 38, 0.816)";
        box1PahadiBtn.style.backgroundColor = "";
        box1AnupJainBtn.style.backgroundColor = "";
        box1GymPhonkBtn.style.backgroundColor = "";
    }
})


box3Song1likedSong.addEventListener("click", () => {
    likedBtn.style.display = "block";
    mainPage.style.display = "none";

    likedSongIcon.style.backgroundColor = " rgba(38, 38, 38, 0.816)";
})
