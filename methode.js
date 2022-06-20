//concat() adalah untuk menggabungkan dua atau lebih array
//  Metode ini tidak mengubah array yang ada, 
//  tetapi mengembalikan/mereturn array baru.

const skill = ['PHP', 'HTML', 'CSS'];
const newSkill = ['Javascript', 'CI'];
const combineSkill = skill.concat(newSkill);

console.log(combineSkill);

//toLowerCast() untuk merubah nilai menjadi hurup kecil semua
let str = "Cek Satu Dua "
const lowercaseStr = str.toLowerCase();
console.log(lowercaseStr);

// replace()
// Method yang digunakan untuk mengganti kata dalam sebuah string
let str1 = "Aku benci kamu";
console.log(str1.replace("benci", "sayang"));

// shift() menghapus elemen pertama dari array 
// dan mereturn elemen yang telah dihapus (diluar array yang ada). 
// dan metode ini mengubah panjang array karena udah d hapus element pertamanya.
const array1 = ['sss', 'aaa', 'vvvv'];

const firstElement = array1.shift();
console.log(array1);
console.log(firstElement);

//find() memunculkan atau me return satu data pada array sesuai masukan yang kita inputkan untuk dicari
const student = [
    {name: 'ica', age: 10},
    {name: 'jhon', age: 15},
    {name: 'doe', age: 14}
  ];
  
  function profil(stdn) {
     return stdn.name === "ica" ;     }
  
  console.log(student.find(profil));

// toUpperCase()
// Method yang digunakan untuk mengganti tulisan string menjadi kapital semua
let nameBootcamp = "fazztrack";
console.log(nameBootcamp.toUpperCase())
console.log(sumNum);


//pop() untuk menghapus nilai terakhir pada array
const student2 = ['ica', 'sri', 'marisa', 'siti', 'muhsonah'];

console.log(student2.pop()); 
console.log(student2);

//splice() untuk menyisipkan element array ditengah, 
// juga bisa menghapus atau menambahkan element aray dimanapun setelah indek ditentukan
//splice( indexAwal, jumlahHapus, isiElemenBaru)

const number = ['1', '2', '4', '5'];
number.splice(2, 2, '3');

console.log(number);

//slice() untuk mengiris sebuah array dan menjadikan array baru
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'cat'];
console.log(animals.slice(0,5));
console.log(animals);

//getDate() mereturn tanggal pada waktu itu.
const birthday = new Date('August 20, 1975 23:15:30');
const date1 = birthday.getDate();

console.log(date1);
