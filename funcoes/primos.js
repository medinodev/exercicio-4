function primos(num){
    var aux = 0;

    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            aux += 1;
        }
    }

    if (aux >= 1) {
    return false;
    }else{
    return true;
    }
}

module.exports = primos;