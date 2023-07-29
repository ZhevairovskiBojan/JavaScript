
//1. Ispecatete hello world vo konzola

console.log("Hello World")
        


//2. Ispecatete go zbirot na 5+5 vo konzola

console.log(5+5)



//3. Vnesete go vasheto ime preku promt i ispechatete go

var ime = prompt("Vnesi ime")
console.log(ime)




//4. Preku promt vnesete dva broja i presmetajte go proizvodot

let broj1 = Number(prompt("vnesi broj 1"))
let broj2 = Number(prompt("vnesi broj 2"))
let proizvod = broj1 * broj2;
console.log(proizvod)




//5. Od prethodno vnesenite broevi prikazete koj e pogolem

if (broj1 > broj2) {
    console.log(broj1)
} else {
    console.log(broj2)
}




//6. Vnesete poeni preku prompt od 0-100 i ispecatete koja e ocenkata

let poeni = prompt("0-100")

if (poeni >= 0 && poeni <= 100) {
  if (poeni >= 90) {
    console.log("Ocenka: 5")
  } else if (poeni >= 80) {
    console.log("Ocenka: 4")
  } else if (poeni >= 70) {
    console.log("Ocenka: 3")
  } else if (poeni >= 60) {
    console.log("Ocenka: 2")
  } else {
    console.log("Ocenka: 1")
  }
} else {
  console.log("Vnesenite ocenki, ne se vo opsegot od 0 do 100.")
}


