// task 1
console.log("My name is Abdul");

// task2
const name = "Abdul";
console.log(name);

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
let bookPrice = 15;
let bookAmount = 120;
let totalValue = bookPrice * bookAmount;
console.log("Depodaki bütün kitablarin ümumi dəyəri: " + totalValue + " AZN");

// task 5
let kmhSpeed = 90;
let msSpeed = kmhSpeed * 1000 / 3600;
console.log("Sürət m/s: " + msSpeed);

// task 6
// let dogumTarixi = prompt("Doğum tarixinizi daxil edin (YYYY-MM-DD formatinda):");
// let dogum = new Date(dogumTarixi);
// let bugun = new Date();
// let diff = bugun - dogum;
// let gunler = Math.floor(diff / (1000 * 60 * 60 * 24));

// console.log("Siz " + gunler + " gün yaşamisiniz!");

// task 7
let num = 12;
console.log("Beşinci dərəcə qüvvət: " + (num ** 5));
console.log("3-ə bölünmədən qaliği: " + ((num ** 5) % 3));


// task 8
// let firstName = "Abdulrahman";
// let lastName = "Rehimzade";
// console.log("Sizin adiniz " + firstName + " " + lastName + ". Tanişliğimiza çox şadam!");


// task 9
// let firstName = "Abdulrahman";
// let lastName = "Rehimzade";
// console.log(`Sizi bir daha görməyimizə şadiq, ${firstName} ${lastName}`);


// task 10
// let firstName = "Abdulrahman";
// console.log(firstName.length);

// task 11
// let firstName = "Abdulrahman";
// let lastName = "Rehimzade";
// let fullName = firstName + " " + lastName;
// let initials = fullName.split(" ").map(name => name[0].toUpperCase()).join("");
// console.log("Baş hərflər: " + initials);

// task 12
let fullName = prompt("Tam adinizi 'AD SOYAD' formatinda daxil edin:");
let parts = fullName.split(" ");
let reversed = parts[1] + " " + parts[0];
console.log("SOYAD AD formatinda: " + reversed);

// task 13
let ad = prompt("Adinizi daxil edin:");
console.log(`Salam, ${ad}!`);

// task 14
let num1 = Number(prompt("Birinci ədədi daxil edin:"));
let num2 = Number(prompt("İkinci ədədi daxil edin:"));

console.log("Toplama: " + (num1 + num2));
console.log("Çixma: " + (num1 - num2));
console.log("Vurma: " + (num1 * num2));
console.log("Bölmə: " + (num1 / num2));