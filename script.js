const BOTON = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

BOTON.addEventListener("click", () => {
    var Peso = document.getElementById("peso").valueAsNumber;

    if (Peso > 0) {
        ERROR.style.display = "none";
        let metodo;
        let calculo;
        if (Peso > 30) {
            metodo = "SC";
            let superficieCorporal = ((Peso * 4) + 7) / (Peso + 90);
            let valorDiario1500 = superficieCorporal * 1500;
            let valorDiario2000 = superficieCorporal * 2000;
            calculo = `Superficie Corporal (SC) * 1500 cc/hr: ${valorDiario1500.toFixed(2)} cc/hr<br>Superficie Corporal (SC) * 2000 cc/hr: ${valorDiario2000.toFixed(2)} cc/hr`;
            FLU.innerHTML = `Volumen diario:<br>${calculo}`;
        } else {
            metodo = "Holliday-Segar";
            let flujo = calcFlujo(Peso);
            let mantenimiento = flujo / 24;
            let medioMantenimiento = mantenimiento * 1.5;
            calculo = "Cálculo según Holliday-Segar";
            FLU.innerHTML = `Volumen diario: ${flujo} cc<br>Mantenimiento: ${mantenimiento.toFixed(2)} cc/hr<br>m+m/2: ${medioMantenimiento.toFixed(2)} cc/hr`;
            
        }
        
    } else {
        ERROR.style.display = "block";
    }
    
    FLU.style.display = 'block'; // Mover esta línea fuera del bloque if/else
    MAN.style.display = 'block'; // Mover esta línea fuera del bloque if/else
});

// function calcFlujo(peso) {
//     let resto = peso;
//     let flujo = 0;
//     if (resto > 20) {
//         let aux = resto - 20;
//         flujo += aux * 1;
//         resto -= aux;
//     }
//     if (resto > 10) {
//         let aux = resto - 10;
//         flujo += aux * 2;
//         resto -= aux;
//     }
//     flujo += resto * 4;
//     return flujo;
// }
function calcFlujo(peso) {
    let flujo = 0;
    if (peso <= 10) {
        flujo = peso * 100;
    } else if (peso <= 20) {
        flujo = 1000 + ((peso - 10) * 50);
    } else {
        flujo = 1500 + ((peso - 20) * 20);
    }
    return flujo;
}
