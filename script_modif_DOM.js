function changeTitles()
{
let x = document.getElementsByTagName('h1')[0]
x.innerHTML= "Omg it's working";
let u = document.getElementsByClassName('lead')[0];
u.innerHTML="THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

function changeCallToActions()
{
let b = document.getElementsByClassName('btn')[0]
b.innerHTML= "Omg it's working";
b.setAttribute	("href","http://www.thehackingproject.org")
let d = document.getElementsByClassName('btn')[1]
d.innerHTML= "Ty next";
d.setAttribute("href","https://www.pole-emploi.fr/accueil/")
}

function changeLogoName()
{
	let l = document.getElementsByClassName('navbar')[0]
	l.innerHTML= "The THP Experience"
	l.style.fontSize = ("2em")
	l.style.color = "white"
}

function populateImages()
{
	let imagestochange = document.getElementsByClassName('card-img-top')
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"]
	for(let i in imagestochange)
		imagestochange[i].src = imagesArray[i];
}

function deleteLastCards()
{
	let c = document.querySelectorAll('div.album.py-5.bg-light div.container div.row div.col-md-4')
	for(let x = 0; x < c.length;x++)
	{
		if (x >= (c.length - 3))
		{
		c[x].remove();
	}
}
}

function changeCardText()
{
	let ct= document.getElementsByClassName('card-text')
	let t = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML","JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
	for (let x in ct)
	{
		if (x < 3 )
		ct[x].textContent = t[x]
	}
} 


function changeViewButtons(){
	var boutton = document.querySelectorAll('button.btn-outline-secondary');
	for (let count = 0; count < boutton.length; count += 2){
		boutton[count].classList.add("btn-success");
		boutton[count].classList.remove("btn-outline-secondary");
	}	
}


function addDivAndMove() {
  let row = document.getElementsByClassName('row')[1].parentNode;
  let js = document.getElementsByClassName('col-md-4')[2];
  let newd = document.createElement("div");
  newd.className = "row";
  row.appendChild(newd);
  row.appendChild(js);
}
addDivAndMove();
changeViewButtons();
changeCardText();
deleteLastCards();
populateImages();
changeLogoName();
changeTitles();
changeCallToActions();