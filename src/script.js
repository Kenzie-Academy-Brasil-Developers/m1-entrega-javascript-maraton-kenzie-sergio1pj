let names = ["Rafael", "Manoel", "Daniel"];
function positions(arr){
    const str = "Este é o pódio";
    if(arr.indexOf("Daniel") != 0) {
        const originalPosition = arr.indexOf("Daniel");
        const aux = arr[originalPosition - 1];
        arr[originalPosition - 1] = "Daniel";
        arr[originalPosition] = aux;
        return str.concat(`: 1° ${arr[0]} 2° ${arr[1]} 3° ${arr[2]}`);
        
    } else {
        return "Daniel é o vencedor";
    }
}
console.log(positions(names));