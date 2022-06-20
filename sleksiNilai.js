//no 3
//const nilaiArray = new Array(15,20,[2,25,4,14,17,30,18]);
const nilaiArray = new Array(5,3,[2,25,4,14,17,30,8]);
const merge = [].concat.apply([], nilaiArray);
const firstV = nilaiArray[0];
const lastV = merge.pop();
const countArr = merge.length+1;

function sleksiNilai(dataArray, nilaiAwal, nilaiAkhir){

  if(nilaiAwal > nilaiAkhir){
    console.log('Nilai akhir harus lebih besar dari nilai awal');
    
  }else if(countArr <= 5){
    console.log('Jumlah Angka Didalam Array harus lebih dari 5');
  }else{
    console.log(dataArray.slice(1,8));
  }
  
}
console.log(sleksiNilai(merge, firstV, lastV));
