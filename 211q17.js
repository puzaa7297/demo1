
const symbol1 = Symbol.for('myGlobalSymbol');
const symbol2 = Symbol.for('myGlobalSymbol');
console.log(symbol1 === symbol2); 
const uniqueSymbol1 = Symbol('myUniqueSymbol');
const uniqueSymbol2 = Symbol('myUniqueSymbol');
console.log(uniqueSymbol1 === uniqueSymbol2);

