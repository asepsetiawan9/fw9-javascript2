function filterName(str, limit, cb) {
    str = str.toLowerCase();
  console.log(str);
    const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

    //const map1 = array1.map(x => x * 2);
    const lowercaseName = name.map(x => x.toLowerCase());

    //console.log(lowercaseName);

    //const result = words.filter(word => word.length > 6);
    const resultFilter = lowercaseName.filter(el => el.includes(str));
    //console.log(resultFilter);
    const limitResult = resultFilter.slice(0, limit);
    cb(limitResult);
  }
filterName('An', 3, console.log);

