// 1. Со помош на for loop креирајте ја кулата на Марио со помош на hashtags (#)
// output во конзолата :
// #
// ##
// ###
// ####
// #####
// ######

for (let i = 1; i <= 6; i++) {
    let tower = " ";
    for (let j = 1; j <= i; j++) {
      tower += "#";
    }
    console.log(tower);
  }
  
//2.Имате две низи:направете нова низа во која што ќе ги ставите сите имиња кои двете низи ги делат (Jill, Kate)

// var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
// var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
// var Mutual = [];


var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var Mutual = [];

for (var i = 0; i < JohnFollowers.length; i++) {
  if (JaneFollowers.includes(JohnFollowers[i])) {
    if (!Mutual.includes(JohnFollowers[i])) {
      Mutual.push(JohnFollowers[i]);
    }
  }
}
console.log(Mutual);



// 3. Креирајте функција која се вика exclaim.
// Оваа функција прима еден параметар, кој е стринг. Кога ќе ја повикате, оваа функција треба да го врати тој стринг и на неговиот крај да додаден извичник. 
// Пример za резултат во конзолата : Javascript!


function exclaim(str) {
    return str + "!";
}
  
var result = exclaim("JavaSript");
console.log(result); 



// 4.  Креирајте низа наречена books. Нека има пет објекти, во кој ќе има три properties:
// Title -> име на книгата //string
// Author -> име на авторот //string
// Price -> цена на книгата //number
// Цел на задачата: вратете ги книгите кој се поевтини од 400 денари во нова низа, наречена filteredBooks


var books = [
{
      Title: "A Little Life",
      Author: "Hanya Yanagihara",
      Price: 300
    },
{
      Title: "Love Your Life",
      Author: "Sophie Kinsella",
      Price: 500
    },
{
      Title: "Breaking Point",
      Author: "C.J. Box",
      Price: 250
    },
{
      Title: "That Weekend",
      Author: "Kara Thomas",
      Price: 400
    },
{
      Title: "Full Disclosure",
      Author: "Camryn Garret",
      Price: 350 
    }
  ];
  
  var filteredBooks = books.filter(function(book) {
    return book.Price < 400;
  });
  
  console.log(filteredBooks);



//5. Креирајте функција која се вика LargestNumber.
//Оваа функција прима еден параметар: низа од бројки. Вратете го најголемиот број од таа низа.
 

function LargestNumber(arr) {
    var largest = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }
  
  //Primer
  var numbers = [9, 1, 8, 14, 10];
  var result = LargestNumber(numbers);
  console.log(result);