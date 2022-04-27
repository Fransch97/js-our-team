console.log("Hi master");
// esercizio di oggi: **Our Team**
// nome repo: **js-our-team**
// Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
// Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

const randomNumber = () => Math.ceil(Math.random()*8)


//creat team array object
const team = [
    {
        fullName: "Wayne Barnett",
        profession: "Founder & CEO",
        imgID: "wayne-barnett-founder-ceo.jpg"
    },
    {
        fullName: "Angela Caroll",
        profession: "Chief Editor",
        imgID: "angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Walter Gordon",
        profession: "Office Manager",
        imgID: "walter-gordon-office-manager.jpg"
    },
    {
        fullName: "Angela Lopez",
        profession: "Social Media Manager",
        imgID: "angela-lopez-social-media-manager.jpg"
    },
    {
        fullName: "Scott Enstrada",
        profession: "Developer",
        imgID: "scott-estrada-developer.jpg"
    },
    {
        fullName: "Barbara Ramos",
        profession: "Graphic Designer",
        imgID: "barbara-ramos-graphic-designer.jpg"
    }
];
//test team object
console.log(team);

//get needed part html
const teamSectionHtml = document.querySelector('.team-container');
console.log(teamSectionHtml);//test

//insert objects from team objects into html
for(let i in team){
    console.log(team[i]);//test
    teamSectionHtml.innerHTML += 
    `
    <div class="team-card">
        <div class="team-card">
            <div class="card-image">
              <img
                src="img/${team[i].imgID}"
                alt="${team[i].fullName}"
              />
            </div>
            <div class="card-text">
              <h3>${team[i].fullName}</h3>
              <p>${team[i].profession}</p>
            </div>
        </div>
    </div>


    
    `;
}

// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.


//get html element's
// const gtElmnt = (element) => document.querySelector(element);
// function gtElmnt(element){// LEARNED WHY DON'T DO THIS: don't feels for other methods from JS
//     return  document.querySelector(element);  
// }
// const addinrHtml = (gtElmnt, msg) => gtElmnt.innerHTML += msg; //not needed for now just tested
const gtValue = (element) => document.querySelector(element).value; // new idea

//COMMENTED BECAUSE DON'T WORKS
// console.log(gtElmnt('div'))//test
// const nameInput = gtElmnt('#name');
// console.log(nameInput)//test
// const professionInput = gtElmnt('#role');
// console.log(professionInput)//test
// const imgInput = gtElmnt('#image');
// console.log(imgInput)//test

const btn = document.querySelector('#addMemberButton')//gtElmnt();
console.log(btn)//test
const inrTeamMmbr = (fullname, profession,imgID ) => {
    team.push({
        fullName: fullname,
        profession: profession,
        imgID: imgID
    })
}

btn.addEventListener('click',()=>{
    const valueName = gtValue('#name');
    console.log(valueName)//tested
    const valueProfession = gtValue('#role');
    console.log(valueProfession)//tested
    const valueimgID = gtValue('#image');
    console.log(valueimgID)
    inrTeamMmbr(valueName,valueProfession,valueimgID)
    console.log(team)//tested
    if(valueName === ""){
        alert("devi inserire un Nome e Cognome");
    }else if(valueProfession === ""){
        alert("Devi inserire una professione")
    }else if(valueimgID === " "){

        teamSectionHtml.innerHTML += 
        `
            <div class="team-card">
                <div class="team-card">
                    <div class="card-image">
                    <img
                        src="img/${valueimgID}"
                        alt="${valueName}"
                    />
                    </div>
                    <div class="card-text">
                    <h3>${valueName}</h3>
                    <p>${valueProfession}</p>
                    </div>
                </div>
            </div>
        `;
    }else{
        teamSectionHtml.innerHTML += 
        `
            <div class="team-card">
                <div class="team-card">
                    <div class="card-image">
                    <img
                        src="img/img2/no-img${randomNumber()}.jpg"
                        alt="${valueName}"
                    />
                    </div>
                    <div class="card-text">
                    <h3>${valueName}</h3>
                    <p>${valueProfession}</p>
                    </div>
                </div>
            </div>
        `;
    }

})
