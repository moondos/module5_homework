let marks = new Map([

  ["John", "A"],

  ["Ellis", "C"],

  ["Bolat",    "B"],

  ["Alma", "D"],

  ["Dan",    "F"],

]);
for (let key of marks.keys()) {

   console.log(`Ключ - ${key}, Значение - ${marks.get(key)}`); 
}
