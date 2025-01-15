const mainTitle = document.getElementById("main-title");
const changeTitleButton = document.getElementById("change-title-button");

changeTitleButton.addEventListener("click", function(){
    mainTitle.textContent = "Title was changed";
});



const profilePic = document.getElementById("profile-pic");
const togglePicButton = document.getElementById("toggle-pic-button");

togglePicButton.addEventListener("click", function(){
    
    if(profilePic.style.display === "none"){
        profilePic.style.display = "block";
        togglePicButton.textContent = "Hide profile picture"
    } else {
        profilePic.style.display = "none";
        togglePicButton.textContent = "Show profile picture";
    }

});

const nameSpan = document.getElementById("name");
const hobbySpan = document.getElementById("hobby");
const newNameInput = document.getElementById("new-name");
const newHobbyInput = document.getElementById("new-hobby");
const updateButton = document.getElementById("update-details-button");

updateButton.addEventListener("click", function(){
    const newName = newNameInput.value.trim();
    const NewHobby = newHobbyInput.value.trim();

    if(newName) {
        nameSpan.textContent = newName;
        newNameInput.value = "";
    }

    if (NewHobby){
        hobbySpan.textContent = NewHobby;
        newHobbyInput.value = "";
    }

});



const hobbyList = document.getElementById("hobby-list");
const newHobbyItemInput = document.getElementById("new-hobby-item");
const addHobbyButton = document.getElementById("add-hobby-button");

addHobbyButton.addEventListener("click", function(){
    const newHobby = newHobbyItemInput.value.trim();

    if(newHobby){
        const listItem = document.createElement("li");
        listItem.textContent = newHobby;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";

        removeButton.addEventListener("click", function(){
            listItem.remove();
        })

        listItem.appendChild(removeButton);
        hobbyList.appendChild(listItem);

        newHobbyItemInput.value = "";
    }
});

const clearHobbiesButton = document.getElementById("clear-hobbies-button");

clearHobbiesButton.addEventListener("click", function(){
    hobbyList.innerHTML = "";
});

const  changeThemeButton = document.getElementById("change-theme-button");

changeThemeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("dark-theme")){
        changeThemeButton.textContent = "Switch to light theme";
    } else {
        changeThemeButton.textContent = "Swith to dark theme";
    }
});

document.body.classList.add("light-theme");

const initialHobbies = ["Potaits", "Dancing", "gaming", "fan vet jag", "zumba", "rumba"];

window.addEventListener("DOMContentLoaded", function(){
    initialHobbies.forEach(function (hobby) {
        const listItem = document.createElement("li");
        listItem.textContent = hobby;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";

        removeButton.addEventListener("click", function(){
            listItem.remove();
        });

        listItem.appendChild(removeButton);
        hobbyList.appendChild(listItem);
    });
});

