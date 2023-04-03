const teamInfo = document.querySelector('.row')


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
  {
    name: "Walter Gordon " ,
    role: "Office Manager",
    image:"walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez" ,
    role: "Social Media Manager",
    image:"angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada" ,
    role: "Developer",
    image:"scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos" ,
    role: "Graphic Designer",
    image:"barbara-ramos-graphic-designer.jpg"
  }
];


for(let member of team){
  console.log(member);

  teamInfo.innerHTML += `
  <div class="col"> 
  <img src="img/${member.image}">
  <p> ${member.name} </p>
  <p> ${member.role} </p>
  </div>

  `;
}