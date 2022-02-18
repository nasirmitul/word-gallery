function sort()
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
}


/* function addWord()
{
    let popup = document.getElementById("popup");

    if (popup.style.display === "none")
    {
        popup.style.display = "block";
    }
    else
    {
        popup.style.display === "none";
    }
}

 */


function openModal() {
    document.querySelector(".modal").classList.add("open");
  }

function closeModal() {
    document.querySelector(".modal").classList.remove("open");
  }
  