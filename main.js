function kebabize(str) {
  // replaces numbers
  str = str.replace(/\d+/g, '');  
  return str.split(/(?=[A-Z])/).join("-").toLowerCase();
}

console.log(kebabize('camelsHaveThreeHumps')) // camels-have-three-humps
console.log(kebabize('camelsHave3Humps')) // camels-have-humps