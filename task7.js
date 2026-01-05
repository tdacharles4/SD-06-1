function coche(marca, modelo, year, color, puertas, kmj, tipoMotor){
    this.marca = marca,
    this.modelo = modelo,
    this.year = year,
    this.color = color,
    this.puertas = puertas,
    this.kmj = kmj,
    this.tipoMotor = tipoMotor
}

cochesLimit = process.argv[2]*7
cochesArray = []

for(i=0;i<cochesLimit;i+=7){
    cocheNuevo = new coche(
        process.argv[i+3],
        process.argv[i+4],
        process.argv[i+5],
        process.argv[i+6],
        process.argv[i+7],
        process.argv[i+8],
        process.argv[i+9]
    ),
    console.log()
    cochesArray.push(cocheNuevo)
}

console.log(cochesArray)
