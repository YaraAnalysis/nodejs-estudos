function segundoOperador(){
    console.log("avaliando segundo operador");
    return true;
}

const a = false || segundoOperador();
console.log(`a: ${a}`);
console.log(a);

const b = true || segundoOperador();
console.log(`b: ${b}`);
console.log(b);

const c = !b || !a;
console.log(`c: ${c}`);
console.log(c);
