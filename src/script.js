let names = ["Rafael", "Manoel", "Daniel"];
function positions(arr){
    if(arr.indexOf("Daniel") === 0) {
        return "Daniel é o vencedor";
    } else {
        let originalPosition = arr.indexOf("Daniel");
        let aux = arr[originalPosition - 1];
        arr[originalPosition - 1] = "Daniel";
        arr[originalPosition] = aux;
        return "Este é o pódio".concat(`1° ${arr[0]} 2° ${arr[1]} 3° ${arr[2]}`);
    }
}