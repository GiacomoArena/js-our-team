const trName = document.getElementById('teamName');
const teamRole = document.getElementById('teamRole');
const teamImg = document.getElementById('teamImg');


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
  trName.innerHTML += `
  <p> ${member.name} </p>
  `
  teamRole.innerHTML += `
  <p> ${member.role} </p>
  `
  teamImg.innerHTML += `
  <p> ${member.image} </p>
  `
}