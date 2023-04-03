Our Team
===
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
## MILESTONE 0:  
  - Creare l’array di oggetti con le informazioni fornite.
  ```
  const team = [
  {
    name: "Wayne Barnett " ,
    role: "Fouder & CEO",
    image:"wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll" ,
    role: "Chief Editor",
    image:"angela-caroll-chief-editor.jpg"
  },
  ....ecc
  ```
  .
## MILESTONE 1:
  - Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.
Utilizzate liberamente il tipo di ciclo che preferite (for, for in o for of)
```
for(let member of team){
  console.log(member);
  ```
.
## MILESTONE 2: 
  - Stampare le stesse informazioni su DOM sottoforma di stringhe
  ```
  const teamInfo = document.querySelector('.row') 
    teamInfo.innerHTML += `

  <div class="col-4 "> 
  <img src="img/${member.image}">
  <h4> ${member.name} </h4>
  <p> ${member.role} </p>
  </div>

  `;
  ```
mi richiamo in una const la row
e tramite inner.HTML inserisco nella row tante "col" quanti sono gli oggetti presenti in listaarray.
