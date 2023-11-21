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
        photo: "barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        job: "Graphic Designer"
    },
    {
        photo: "scott-estrada-developer.jpg",
        name: "Scott Estrada",
        job: "Developer"
    },
    {
        photo: "walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        job: "Office Manager"
    },
    {
        photo: "wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        job: "Founder & CEO"
    },
];


for (let i = 0; i < teamMembers.length; i++){

    document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teamMembers[i].photo}" class="card-img-top" alt="Angela">
        <div class="card-body">
            <p class="card-text">${teamMembers[i].name}</p>
            <p>${teamMembers[i].job}</p>
        </div>
    </div>
    `

}

/*
for (let member in teamMembers) {
    document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teamMembers[member].photo}" class="card-img-top" alt="Angela">
        <div class="card-body">
            <p class="card-text">${teamMembers[member].name}</p>
            <p>${teamMembers[member].job}</p>
        </div>
    </div>
    `
}
*/