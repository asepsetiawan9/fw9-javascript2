const nilaiArray = new Array(15,20,[2,25,4,14,17,30,18]);
const merge = [].concat.apply([], nilaiArray);
const firstV = nilaiArray[0];
const lastV = merge.pop();
const pushMerge = merge.push(lastV);
var allLengths = nilaiArray.map(element => {
   return element.length;
});
const vLengthArr = allLengths.pop();

var sort = merge.sort(function(a, b) {
  return a - b;
});

function sleksiNilai(dataArray, nilaiAwal, nilaiAkhir){

  if(nilaiAwal > nilaiAkhir){
   return 'Nilai akhir harus lebih besar dari nilai awal';
    
  }else if(vLengthArr <= 5){
    return 'Jumlah Angka Didalam Array harus lebih dari 5';
  }else{
     firstIndex = sort.indexOf(firstV);
    lastIndek = sort.indexOf(lastV);

    return finalResult = sort.slice(firstIndex, lastIndek+1);
    }
  
}
console.log(sleksiNilai(merge, firstV, lastV));