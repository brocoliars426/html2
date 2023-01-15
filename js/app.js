const body = document.body;
//selectam span-ul cu id 'mode-toggle'
const darkModeToggler = document.getElementById("mode-toggle")
//selectam container-ul de carduri
const cardsContainer =  document.querySelectorAll(".cards-list")[0]
//selectam formularul de search
const searchForm = document.getElementById("searchForm")

let searchInput;

//verificam daca exista searchForm in pagina
if (searchForm) {
    //selectam elementul input din formular
    searchInput = searchForm.querySelector("input");
    //atasam functia searchProjects la evenimentele de submit si input
    searchForm.addEventListener("submit", searchProjects);
    searchForm.addEventListener("input", searchProjects)
}

//verificam daca valoare introdusa in input se ragaseste si in  numele proiectului

function searchProjects(event) {
    event.preventDefault();
    const searchValue = searchInput.value;
    console.log(searchValue);
    const found = projects.find(proiect => proiect.nume.toLowerCase().includes(searchValue.toLowerCase()));

    console.log(found)
    if (!found || !searchValue) {
        // nu s-a gasit val returnam toate proiectele
        cardsContainer.innerHTML = "";

        projects.forEach(proiect => generateCard(proiect))
    }
    else{
        //s-a gasit o val, returnam doar proiectul respectiv
        cardsContainer.innerHTML="";
        generateCard(found);
    }
}

//adaugam un eveniment de click la mode-toggle
darkModeToggler.addEventListener("click", function(){
    //cand se da click pe mode-toggle se adauga/se scoate clasa "dark-mode" la body
    body.classList.toggle("dark-mode")
})

//verificam culoarea profilului(tema dispozitivului)
if(window.matchMedia("(prefers-color-scheme: dark)").matches && window.matchMedia ){
    body.classList.toggle("dark-mode");
}

// Aici vom salva lista de proiecte din baza de date, pentru a le putea filtra

let projects = [];

//generam elementele html necesare pt carduri folosind informatiile din json
function generateCard(project){
    //generam un list item 
    const li = document.createElement('li')
    // generam div
    const div = document.createElement('div')
    //adaugem clasa 'card' la div
    div.classList.add('card')

    // generam un element <img>
    const cardImg = document.createElement('img')
    //adaugam path-ul imagini camd atributul src
    cardImg.src = project.imagine
    //adaugem un nume imaginii in atributul alt
    cardImg.alt  = project.nume
    //adaugam elementul img in div-ul cu clasa 'card'
    div.append(cardImg)



    //generam uj nou div pt continutul cardului
    const cardContent = document.createElement('div')
    //adaugam clasa card-content la divul generat
    cardContent.classList.add("card-content")
    //generam un titlu h3
    const title = document.createElement('h3')
    //adaugam un nume proiectului in titlu
    title.textContent = project.nume
    cardContent.append(title)
    const descriere = document.createElement('p')
    //adaugam descriere la paragraf
    descriere.textContent = project.descriere
    //adaugam paragraful la divul cardContent
    cardContent.append(descriere)
    //generam un buton
    const cardBtn =  document.createElement('button')
    //adaugem textul butonului
    cardBtn.textContent = 'deschide proiectul'
    //adaugem link-ul proiectului in buton
    cardBtn.onclick =  function(){
        location.href = project.link
    }
    //adaugem butonul in div-ul cardContent
    cardContent.append(cardBtn)



    //adaugam div-ul cardContent in card
    div.append(cardContent)

    //adaugam cardul in li
    li.append(div)

    //adaugam li in container-ul de carduri
    cardsContainer.append(li)

}
