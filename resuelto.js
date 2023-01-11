//Ejercicio 1

const scoreBoard = {
    'Dave Thomas': 44,
    'Freyja Ćirić': 539,
    'José Valim': 265,
};

function calculaPuntuacion(scoreBoard) {
    var longitud = Object.keys(scoreBoard).length;
    var mediana = 0;
    for (clave in scoreBoard) {
        mediana = mediana + scoreBoard[clave];
    }
    return (mediana / longitud);
}


// Ejercicio 2

function sense(scoreBoard, palabra) {
    var nuevo = {};
    let claves = Object.keys(scoreBoard);
    let valores = Object.values(scoreBoard);
    for (let i = 0; i < claves.length; i++) {
        if (palabra != claves[i]) {
            nuevo[claves[i]] = valores[i];
        }

    }

    return nuevo;

}

//ejercicio 3

//Crear classes amb prototips
class matriu {
    constructor() {
        
    }

    get getWidth() {
        return this.Width;
    }


    get getHeight() {
        return this.getHeight;
    }

    print() {
        var i = 0;
        while (i < matriu.length) {
            console.log(matriu[i]);
            i++;
        }
    }

}



