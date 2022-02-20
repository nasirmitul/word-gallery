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


function sort()
{
    let x = document.getElementById("sort1");
    let y = x.classList;

    for(let i=0; i<y.length; i++)
    {
        if(y[i] == "uil-sort")
        {
            y.remove(y[i]);
            y.add("uil-sort-amount-down");
            return;
        }
        else if(y[i] == "uil-sort-amount-down")
        {
            y.remove(y[i]);
            y.add("uil-sort-amount-up");
            return;
        }
        else if(y[i] == "uil-sort-amount-up")
        {
            y.remove(y[i]);
            y.add("uil-sort");
            return;
        }
    }
}



function openModal() {
    document.querySelector(".modal").classList.add("open");
}

function closeModal() {
    document.querySelector(".modal").classList.remove("open");
}
