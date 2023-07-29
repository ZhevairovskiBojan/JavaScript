// 1. Da se napishe programa za vnesuvanje na faktoriel za nekoj broj...

function Faktoriel(number) {
	if (number == 0 || number == 1) {
	  return 1;
	} else {
	  let Faktoriel = 1;
	  for (let i = 2; i <= number; i++) {
		Faktoriel *= i;
	  }
	  return Faktoriel;
	}
  }
  
  const Input = prompt("Enter a number:");
  const number = parseInt(Input);
  
  if (isNaN(number)) {
	console.log("Invalid input. Please enter a valid number.");
  } else {
	const factorial = Faktoriel(number);
	console.log(`The Faktoriel of ${number} is: ${factorial}`);
  }



// 2. Vnesuvaj broevi vo niza se dodeka ne vneses karakter. 
// Od vnesenite broevi odredi kolku od niv se dellivi so 5 i 3, koi samo so 5 i koi samo so 3?


let value = Number(prompt("Vnesi broj za presmetuvanje, vnesi karakter za izlez"));
let dellivoSo5i3 = 0;
let dellivoSo5 = 0;
let dellivoSo3 = 0;

while(!isNaN(value)) {
    value = Number(prompt("Vnesi broj za presmetuvanje, vnesi karakter za izlez"));
if(value % 5 == 0 && value % 3 == 0){
    dellivoSo5i3++
}
else if(value % 5 == 0){
    dellivoSo5++
}
else if(value % 3 == 0){
    dellivoSo3++
}
}
console.log("Dellivi so 5 i 3",dellivoSo5i3)
console.log("Dellivi samo so 5",dellivoSo5)
console.log("Dellivi samo so 3",dellivoSo3)



// 3. Da se napishe programa koja na ekran ke gi ispecati site cetiri-cifreni broevi kaj koi zbirot na trite
// najmalku znacajni cifri e ednakov so najznacajnata cifra. Primer->(5302->5=3+0+2;4310->4=3+1+0).


for (let broj = 1000; broj < 10000; broj++) {
    let iljadnici = Math.floor(broj / 1000);
    let stotici = Math.floor((broj / 100) % 10);
    let desetici = Math.floor((broj / 10) % 10);
    let edinici = broj % 10;
  
    if (iljadnici == stotici + desetici + edinici) {
      console.log(broj);
    }
  }


// 4. Da se napise objekt koj ke sodrzi poveke kluc-vrednost parovi, kade sto vrednostite ke bidat od tip string, broj, niza i objekt. 
// Da se ispecatat site svojstva na objektot vo sledniot format kluc:vrednost.  
// Dokolku vrednosta e niza da se napisat elementite od nizata vo nov red so prazni mesta pred elementot. Array.is.Array()


let Obj = {
    ime: "Bojan",
    godini: 18,
    adresa: {
      ulica: "Skopje",
      broj: 800
    },
    interes: ["programiranje", "muzika", "sport"]
  };
  
  for (let kluch in Obj) {
    let vrednost = Obj[kluch];
  
    if (Array.isArray(vrednost)) {
      console.log(kluch + ":");
      vrednost.forEach(element => {
        console.log("  " + element);
      });
    } else {
      console.log(kluch + ": " + vrednost);
    }
  }
  


// 5. Kreirajte niza od uchenici (ime, prezime, poeni) i presmetajte go prosechniot broj na poeni

let ucenici = [
    { ime: "Ana", prezime: "Ivanovska", poeni: 89 },
    { ime: "Leo", prezime: "Petrovski", poeni: 91 },
    { ime: "Eva", prezime: "Popovska", poeni: 78 },
    { ime: "Toni", prezime: "Nikolovski", poeni: 86 },
    { ime: "Sara", prezime: "Georgievska", poeni: 94 }
  ];
  
  let sumaPoeni = 0;
  
  for (let i = 0; i < ucenici.length; i++) {
    sumaPoeni += ucenici[i].poeni;
  }
  
  let prosecniPoeni = sumaPoeni / ucenici.length;
  
  console.log("Prosecen broj na poeni: " + prosecniPoeni);
  



// 6. y = x^n


function power(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }

// Primer 
let x = 2;
let n = 3;
let y = power(x, n);
console.log(y);




// 7.Vnesuvajte broevi vo niza dodeka ne vnesete karakter
// bonus: Od vneseni broevi vo niza odredete koja e najgolemata max suma od dva posledovatelni broevi


let broevi = [];

while (true) {
  let input = prompt('Vnesete broj(ili karakter za prekin):');

  if (isNaN(input)) {
    break;
  }

  broevi.push(Number(input));
}

console.log('Vnesenite broevi se:');
console.log(broevi);


// bonus


let maxSuma = 0;

let prethodenBroj = broevi[0];

for (let i = 1; i < broevi.length; i++) {
  let tekovenBroj = broevi[i];
  let tekovnaSuma = prethodenBroj + tekovenBroj;

if (tekovnaSuma > maxSuma) {
    maxSuma = tekovnaSuma;
  }

prethodenBroj = tekovenBroj;

}

console.log('Najgolemata max suma na dvata posledovatelni broevi e: ' + maxSuma);