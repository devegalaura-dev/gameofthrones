const URL_API = "http://localhost:8000/character";
// CRUD (Create, Read, Update, Delete)

// METHOD GET (read)
async function getAllCharacters(){
    const response = await fetch(URL_API, {
        method: "GET",
        headers: {
        "Content-Type": "application/json"
    },
    })
    const character = await response.json();
    return character   
};

// FUNCIÓN QUE PINTE EL GET EN PANTALLA
const characterList = document.getElementById('charactersList');
async function printCharacters(){
    const characters = await getAllCharacters()
    characters.map((character)=>{
    characterList.innerHTML += `
    <li>
    <p>${character.name}<p/>
    <p>${character.house}<p/>
    <p>${character.age}<p/>
    <li/>
    `
    })
}

printCharacters()

// METHOD DELETE (delete)
async function deleteCharacter(){
    
}
// METHOD POST (create)
async function createCharacter(){

}
// METHOD PUT (update)
async function updateCharacter(){
    
}

