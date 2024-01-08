function parimpar(n) {
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let n = parimpar(32)
console.log(`Resultado é ${n}`)