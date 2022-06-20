function filterName(str, limit) {
  
    const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];
   
    //const map1 = array1.map(x => x * 2);
    const lowercaseName = name.map(x => x);
    console.log(lowercaseName);

    //const result = words.filter(word => word.length > 6);
    const resultFilter = lowercaseName.filter(el => el.includes(str));
    console.log(resultFilter);
  }
filterName('an', 3);

