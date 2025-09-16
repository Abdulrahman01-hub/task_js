// task 1
// console.log("My name is Abdul");

// task2
// const name = "Abdul";
// console.log(name);

// task 3
// Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
// Birdən çox variant seçin.

// - `2user`
// - `c@rt`
// - `person`
// - `title color`
// - `console`
// - `$add`
// cavab($add, person)
// Kitabın qiyməti

// task4
// let bookPrice = 15;
// let bookAmount = 120;
// let totalValue = bookPrice * bookAmount;
// console.log("depodaki butun kitablarin umumi deyeri " + totalValue + " AZN");

// task 5
// let kmhSpeed = 90;
// let msSpeed = kmhSpeed * 1000 / 3600;
// console.log("Sürət m/s: " + msSpeed);

// task 6
// let dogumTarixi = prompt("Dogum tarixinizi daxil edin (YYYY-MM-DD formatinda)");
// let dogum = new Date(dogumTarixi);
// let bugun = new Date();
// let diff = bugun - dogum;
// let gunler = Math.floor(diff / (1000 * 60 * 60 * 24));

// console.log("siz " + gunler + " gun yasamisiniz");

// task 7
// let num = 12;
// console.log("besinci derece quvvet: " + (num ** 5));
// console.log("3-e bolunmeden qaliği: " + ((num ** 5) % 3));


// task 8
// let firstName = "Abdulrahman";
// let lastName = "Rehimzade";
// console.log("sizin adiniz " + firstName + " " + lastName + ". Tanisligimiza cox sadam");


// task 9
// let firstName = "Abdulrahman";
// let lastName = "Rehimzade";
// console.log(`sizi bir daha görməyimize sadiq ${firstName} ${lastName}`);


// task 10
// let firstName = "Abdulrahman";
// console.log(firstName.length);

// task 11
// let firstName = "Abdulrahman";
// let lastName = "Rehimzade";
// let fullName = firstName + " " + lastName;
// let initials = fullName.split(" ").map(name => name[0].toUpperCase()).join("");
// console.log("bas herfler: " + initials);

// task 12
// let fullName = prompt("tam adinizi 'AD SOYAD' formatinda daxil edin");
// let parts = fullName.split(" ");
// let reversed = parts[1] + " " + parts[0];
// console.log("SOYAD AD formatinda: " + reversed);

// task 13
// let ad = prompt("Adinizi daxil edin");
// console.log(`Salam, ${ad}!`);

// task 14
// let num1 = Number(prompt("Birinci ededi daxil edin"));
// let num2 = Number(prompt("İkinci ededi daxil edin"));

// console.log("toplama: " + (num1 + num2));
// console.log("cixma: " + (num1 - num2));
// console.log("vurma: " + (num1 * num2));
// console.log("bolme: " + (num1 / num2));



// task 15
// let a = 12345;
// let b = 98765;
// let hasil = a * b;
// let str = String(hasil);
// console.log(hasil);
// let text = str[5];
// console.log("6-ci reqem:", text);

// task 17
// let num = prompt("4 rəqəmli ədəd daxil edin");
// let digits = num.split("");
// let sum = Number(digits[0]) + Number(digits[1]) + Number(digits[2]) + Number(digits[3]);
// console.log(sum);

// task 19
// let price = prompt("qiymeti daxil edin");
// let parts = price.split(".");
// let manat = parts[0];
// let qepik = parts[1] || "00";
// console.log(manat , "AZN" , qepik , "qepik");

// task 20
// let salary = prompt("emek haqqinizi daxil edin");
// salary = Number(salary);
// let salary2 = salary * (1 - 0.13);
// console.log("vergi ile emek haqqiniz: " + salary2 + " AZN");

// task 21
// let fullName = prompt("Soyad, ad və ata adinizi daxil edin");
// let parts = fullName.split(" ");
// let result = parts[0] + " " + parts[1][0] + " " + parts[2][0] + ".";
// console.log(result);

// task 22
<<<<<<< HEAD
// let price = Number(prompt("emanətin mebleğini daxil edin:"));
// let year = Number(prompt("Müddeti il daxil edin:"));
// let rate = Number(prompt("Faiz dərəcəsini (%) daxil edin:"));
// let profit = price * rate / 100 * years; 
// console.log("Mənfəət: " + profit + " AZN"); 
=======
// let price = Number(prompt("emanetin mebleğini daxil edin"));
// let year = Number(prompt("muddeti il daxil edin"));
// let rate = Number(prompt("faiz derecesini % daxil edin"));
// let profit = price * rate / 100 * year;
// console.log("Menfeet" + profit + " AZN");

// task 23

// let value = 20;

// console.log(value === 10);
// console.log(value < 15);
// console.log(value > 5 && value < 15);
// console.log(value !== 20);
// console.log(value % 10 === 0 && value < 15);

// task 24
// let age = prompt("Yaşinizi daxil edin");
// age = Number(age);

// if (age < 18) {
//     alert("Access denied");
// } else {
//     alert("Access granted");
// }

// task 25
// let input = prompt("3 ikireqemli eded daxil edin boşluqla ayirin");
// let numbers = input.split(" ").map(Number);

// if (numbers.length !== 3) {
//     console.log("xeta: Deqiq 3 eded daxil edin");
// } else {
//     let [a, b, c] = numbers;

//     if (a === b || b === c || a === c) {
//         console.log("xeta: ededler eyni ola bilmez");
//     } else {
//         let orta = a + b + c - Math.max(a, b, c) - Math.min(a, b, c);
//         console.log("ortancil eded: " + orta);
//     }
// }

// task 26
// let year = prompt("ili daxil edin:");
// year = Number(year);

// if (year % 4 === 0) {
//     console.log("İl uzun ildir");
// } else {
//     console.log("İl uzun il deyil");
// }

// ? task 31
// let p = 8; // p=8 → p--=8(p=7) --p=6 p++=6(p=7) ++p=8 → q=16
// let q = p-- - --p + p++ + ++p;
// console.log(p, q); // 8 16

// ! task 32
// let a = 6, b = 4, c = 2;
// let x = ++a - b-- + c++ - --b + a++; // ++a=7(a=7) - b--=4(b=3) + c++=2(c=3) - --b=2(b=2) + a++=7(a=8) → x=10
// let y = a-- + --c - ++b + x++ - --a;  // a--=8(a=7) + --c=2(c=2) - ++b=3(b=3) + x++=10(x=11) - --a=6(a=6) → y=11
// console.log(a, b, c, x, y); // 6 3 2 11 11

// task 34
// let number = prompt("Bir eded daxil edin");
// number = Number(number);

// if (number > 0) {
//     console.log("eded musbetdir");
// } else if (number < 0) {
//     console.log("eded menfidir");
// } else {
//     console.log("eded sifirdir");
// }

// task 35
// let a = 5, b = 8, c = 3;
// let largest;

// if (a > b && a > c) {
//     largest = a;
// } else if (b > a && b > c) {
//     largest = b;
// } else {
//     largest = c;
// }

// console.log("en boyuk eded:", largest);



// task 36
// let number = prompt("bir eded daxil edin");
// number = Number(number);
// let result = (number % 2 === 0) ? "eded cutdur" : "eded tekdir";
// console.log(result);

// task 37
// let a = prompt("kvadratin bir terefini daxil edin");
// a = Number(a);

// let area = a * a;
// let perimeter = 4 * a;
// console.log("kvadratin sahesi:", area);
// console.log("kvadratin perimetri", perimeter);

// task 38
// let grade = 82;

// switch (true) {
//     case (grade >= 90 && grade <= 100):
//         console.log("ela");
//         break;
//     case (grade >= 75 && grade <= 89):
//         console.log("yaxsi");
//         break;
//     case (grade >= 60 && grade <= 74):
//         console.log("orta");
//         break;
//     case (grade >= 0 && grade <= 59):
//         console.log("zeif");
//         break;
//     default:
//         console.log("yanlis qiymet");
// }

// task 39
// let randomNumber = Math.floor(Math.random() * 101);
// console.log("tesadufi eded", randomNumber);

// if (randomNumber >= 0 && randomNumber <= 50) {
//     console.log("eded 0-50 arasindadir");
// } else {
//     console.log("eded 51-100 arasindadir");
// }

// task 40
// let a = 5;
// let b = 3;
// let op = "*";
// let result;

// switch (op) {
//   case "+":
//     result = a + b;
//     break;
//   case "-":
//     result = a - b;
//     break;
//   case "*":
//     result = a * b;
//     break;
//   case "/":
//     result = b !== 0 ? a / b : "sifira bolmok olmaz";
//     break;
//   default:
//     result = "duzgun operator daxil et";
// }

// console.log("netice", result);
>>>>>>> d334477 (task)
