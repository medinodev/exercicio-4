function mdc(a,b){
        
    while (b !== 0) {
        var temp = a;
        a = b;
        b = temp % b;
    }

   return a;
}

module.exports = mdc;