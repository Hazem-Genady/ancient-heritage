let storeData = localStorage.getItem("user")
let userData = JSON.parse(storeData);

if (userData.Name == undefined) {
    document.getElementById("userName").innerText = "Welcome Back!";
    document.getElementById("userEmail").innerText = userData.Email;
} else {
    document.getElementById("userName").innerText = "Hello " + userData.Name;
    document.getElementById("userEmail").innerText = userData.Email;
}


if (userData.Name == "") {
    document.getElementById("userName").innerText = "Welcome Back";
}
function removeFromLocal(key, id) {
    let savedItems = JSON.parse(localStorage.getItem(key)) || [];
    let updatedItems = savedItems.filter(el => el.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedItems));
}





let Data = localStorage.getItem("favorite");
let artifactData = JSON.parse(Data);

for (let j of artifactData) {
    let card = document.createElement("div");
    let pic = document.createElement("img");
    let picDiv = document.createElement("div");
    let textContainer = document.createElement("div");//creating elements for every piece of artifact
    let nameInfo = document.createElement("div");
    let name = document.createElement("h2");
    let matrial = document.createElement("h5");
    let cardFooter = document.createElement("div");
    let categ = document.createElement("h6");
    let iconDiv = document.createElement("div");
    let icon = document.createElement("i");
    let icon2 = document.createElement("i");
    let link =document.createElement("a");
    link.setAttribute("href", "search.html")
    icon.classList.add("fa-solid", "fa-heart", "heart-icon");
    icon2.classList.add("fa-solid", "fa-arrow-right");

    icon.onclick = () => {
        removeFromLocal("favorite", j.id);
        card.remove();
        let remainingCards = document.querySelectorAll(".container");
        if (remainingCards.length === 0) {
            document.getElementById("art").innerText = "add something you like!";
        }
    };

    iconDiv.classList.add("iconBox");
    cardFooter.classList.add("cardFooter");//adding classes 
    textContainer.classList.add("text");
    picDiv.classList.add("picture");
    card.classList.add("container");
    nameInfo.classList.add("nameInfo")

    card.appendChild(picDiv);
    picDiv.appendChild(pic);
    card.appendChild(textContainer);
    nameInfo.appendChild(name);
    nameInfo.appendChild(matrial);
    textContainer.appendChild(nameInfo)
    textContainer.appendChild(cardFooter);
    cardFooter.appendChild(categ);
    cardFooter.appendChild(iconDiv);
    iconDiv.appendChild(icon);
    link.appendChild(icon2)
    iconDiv.appendChild(link);


    
    pic.setAttribute("src", j.image);
    name.innerText = j.artifactName;
    matrial.innerText = j.header;
    categ.innerText = j.category;


    document.querySelector(".fav").appendChild(card)
}

