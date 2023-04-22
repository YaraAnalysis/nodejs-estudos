function segundoOperador(){
    console.log("avaliando segundo operador");
    return true;
}

const a = false || segundoOperador();
console.log(a);

const b = true || segundoOperador();
console.log(b);

const c = !b || !a;
console.log(c);