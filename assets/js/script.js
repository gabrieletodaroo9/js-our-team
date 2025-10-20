// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

// (trovate l’array del team all’interno della cartella in allegato)

// Bonus

// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Seleziono l'elemento cardcontainer

const cardContainer = document.getElementById("card-container")

// Creo una variabile di appoggio per tutto il markup
function createCardMarkup(membersArray) {
  let cardMarkUp = ""

  //Con un ciclo inserisco il markup dentro il documento ad ogni interazione  

  for (let i = 0; i < membersArray.length; i++) {

    cardMarkUp += `<div class="col-12 col-md-6 col-lg-4 my-3">
                    <div class="d-flex bg-dark text-white" style="height: 100px;">
                        <img src="./assets/${membersArray[i].img}" style="width:100px; height: 100px;" alt="">
                        <div class="p-3 d-flex flex-column justify-content-center">
                            <h3 class="fw-bold text-uppercase pt-3">${membersArray[i].name}</h3>
                            <p class="text-white">${membersArray[i].role}</p>
                            <p class="text-primary">${membersArray[i].email}</p>
                        </div>
                    </div>
                </div>
   `
  }
  return cardMarkUp
}


// Pusho gli elementi nell'HTML

cardContainer.innerHTML = createCardMarkup(teamMembers)

// Seleziono il nodo del Dom del form e i nodi degli input

const addMemberForm = document.getElementById("add-member-form")
const nameField = document.getElementById("member-name")
const roleField = document.getElementById("member-role")
const emailField = document.getElementById("member-email")

// Creo un'evento di ascolto sul bottone che previene il default

addMemberForm.addEventListener("submit", function (event) {
  event.preventDefault()
  
  // - Creo una variabile per salvare ognuno dei valori inviati dagli input

  const name = nameField.value
  const role = roleField.value
  const email = emailField.value
  console.log(name, role, email);


// Aggiungo un immagine per i nuovi elementi 

const newMemberImg = "img/tod.PNG"

  // - Creo un nuovo oggetto contenente i risultati dell'input

  const newMember = {
    name, 
    role, 
    email,
    img : newMemberImg
  }
  console.log(newMember);
  // - Pusho nell'array iniziale il nuovo oggetto e riavvio la funzione per farlo visualizzare in pagina

teamMembers.push(newMember)
console.log(teamMembers);
cardContainer.innerHTML = createCardMarkup(teamMembers)

// - Pulisco il form 

nameField.value = ""
roleField = ""
emailField = ""

}
)




