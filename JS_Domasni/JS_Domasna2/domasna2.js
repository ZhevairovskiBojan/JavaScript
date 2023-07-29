//1. Vnesete koordinati na edna tochka i kazete vo koj kvadrant se naoga

let x = Number(prompt("Vnesi x koordinata"))
let y = Number(prompt("Vnesi y koordinata"))

if(x>0 && y>0)
console.log("Tochkata se naogja vo I kvadrant")
else if(x<0 && y>0)
console.log("Tochkata se naogja vo II kvadrant")
else if(x<0 && y<0)
console.log("Tochkata se naogja vo III kvadrant")
else if(x>0 && y<0)
console.log("Tochkata se naogja vo IV kvadrant")
else if(x==0 && y==0)
console.log("Tochkata se naogja vo koordinatniot pocetok (0,0)")
else if(x==0 && y>0)
console.log("Tochkata se naogja na pozitivniot del od y-oskata")
else if(x==0 && y<0)
console.log("Tochkata se naogja na negativniot del od y-oskata")
else if(x>0 && y==0)
console.log("Tochkata se naogja na pozitivniot del od x-oskata")
else if(x<0 && y==0)
console.log("Tochkata se naogja na negativniot del od x-oskata")
else console.log("Pogresen podatok, vnesi broj");

// 2. Napravete lista od omileni knigi   

let myFavoriteBooks = ["The Girl With a Dragon Tattoo", "12 Rules for Life", "Normal People"]
console.log(myFavoriteBooks)


