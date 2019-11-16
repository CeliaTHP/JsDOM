var x = document.getElementsByTagName('p')
console.log(`Il y a ${x.length} élements de type p`)

var y = document.getElementById('coucou').textContent
console.log(y)

var z = document.getElementsByTagName('a')
console.log(z[2].href)

var c = document.getElementsByClassName('compte-moi')
console.log(`Il y a ${c.length} élements de type compte moi`)

var l = document.querySelectorAll("li.compte-moi")
console.log(`Il y a ${l.length} élements listes de type compte moi`)

var o = document.querySelectorAll("ol li.compte-moi")
console.log(`Il y a ${o.length} élements listes dans une OL de type compte moi`)

let gg = document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].getElementsByTagName('li')[0]
console.log(gg.textContent);
