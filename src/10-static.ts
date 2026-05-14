class MyMath{
    static readonly PI = 3.1416 

    static max(...numbers: number[]){
        return numbers.reduce((max, item) => item > max ? item : max, -Infinity)
    }
}

console.log('Max positivo:', MyMath.max(1000, 200, 500, 900)); 
console.log('Max negativo:', MyMath.max(-1, -10, -5, -2)); 
