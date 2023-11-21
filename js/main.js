// esercizio: crea un array di oggetti per rappresentare i membri del team utilizzando idati forniti.
// ogni membro è caratterizzato dalle seguenti info: nome, ruolo e foto.

//milestone 0: creare l'array di oggetti con le info fornite nella tabella qui sotto.

let teamMembers = [
     {
        photo: "angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        job: " Chief Editor"
    },
    {
        photo: "angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        job: " Socia Media Manager"
    },
    {
        photo: "",
        name: "Barbara Ramos",
        job: "Graphic Designer"
    },
    {
        photo: "",
        name: "Scott Estrada",
        job: "Developer"
    },
    {
        photo: "",
        name: "Walter Gordon",
        job: "Office Manager"
    },
    {
        photo: "",
        name: "Wayne Barnett",
        job: "Founder & CEO"
    },
];


document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teamMembers[0].photo}" class="card-img-top" alt="Angela">
        <div class="card-body">
            <p class="card-text">${teamMembers[0].name}</p>
            <p>${teamMembers[0].job}</p>
        </div>
    </div>

`
document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teamMembers[1].photo}" class="card-img-top" alt="Angela">
        <div class="card-body">
            <p class="card-text">${teamMembers[1].name}</p>
            <p>${teamMembers[1].job}</p>
        </div>
    </div>
`
