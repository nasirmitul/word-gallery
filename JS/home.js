/*---------------- Popup open and close ----------------*/
const popupScreen = document.querySelector(".popup-screen");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

openBtn.addEventListener("click", () => {
    popupScreen.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active");
});
/*---------------- Popup open and close ----------------*/

/*---------------- Sorting icons change ----------------*/
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
/*---------------- Sorting icons change ----------------*/

/*---------------- Add favorite ----------------*/
function fav(fav_icon) {
    fav_icon.classList.toggle('uis-star')
}
/*---------------- Add favorite ----------------*/

/*---------------- Search expand and close ----------------*/
function search() {
    let searchbox = document.getElementById('searchbox');
    let search_text = document.getElementById('search-text');
    let remove = document.getElementById('act');
    let sort = document.getElementById('sort');
    let set = document.getElementById('set');
    let pro = document.getElementById('pro');

    searchbox.classList.toggle('active');

    if (remove.className == 'actv') {
        sort.style.display = "none";
        set.style.display = "none";
        pro.style.display = "none";
        remove.className = "dummy";
    }

    else {
        setTimeout(function () {
            sort.style.display = "block";
            set.style.display = "block";
            pro.style.display = "block";
            remove.className = "actv";
            search_text.value = "";
        }, 700);
    }
}
/*---------------- Search expand and close ----------------*/



/* function search() {
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
} */