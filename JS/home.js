/*function sort()
{
    let x = document.getElementById("sort1");
    let y = document.getElementById("sort2");
    let z = document.getElementById("sort3");

    if(x.style.display === "block")
    {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
    
    else if(y.style.display === "block")
    {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }
    else
    {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}*/


function sort() {
    let x = document.getElementById("sort1");
    let y = x.classList;

    for (let i = 0; i < y.length; i++) {
        if (y[i] == "uil-sort") {
            y.remove(y[i]);
            y.add("uil-sort-amount-down");
            return;
        }
        else if (y[i] == "uil-sort-amount-down") {
            y.remove(y[i]);
            y.add("uil-sort-amount-up");
            return;
        }
        else if (y[i] == "uil-sort-amount-up") {
            y.remove(y[i]);
            y.add("uil-sort");
            return;
        }
    }
}


/* function openModal() {
    document.querySelector(".modal").classList.add("open");
}

function closeModal() {
    document.querySelector(".modal").classList.remove("open");
}

function fav(fav_icon) {
    fav_icon.classList.toggle('uis-star')
} */


function search() {
    let sort = document.getElementById('sort');
    let set = document.getElementById('set');
    let pro = document.getElementById('pro');
    let sear = document.getElementById('srch');
    let search_text = document.getElementById('search-text');

    let search_bar = document.getElementById('search-bar');


    if (sear.className == "actv") {
        sear.style.display = "none";
        search_bar.style.display = "flex";
        search_bar.style.transition = "0.6s";
        sear.className = "dummy";
        sort.style.display = "none";
        set.style.display = "none";
        pro.style.display = "none";
    }

    else {
        sear.style.display = "block";
        search_bar.style.display = "none";
        sear.className = "actv";
        sort.style.display = "block";
        set.style.display = "block";
        pro.style.display = "block";
        search_text.value = "";
    }
}


const popupScreen = document.querySelector(".popup-screen");
/* const popupBox = document.querySelector(".popup-box"); */
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

openBtn.addEventListener("click", () => {
    popupScreen.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active");
});
