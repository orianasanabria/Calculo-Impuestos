const inputNombre = document.getElementById('inputNombre');
const inputMBA = document.getElementById('inputMBA');
const inputDeducciones = document.getElementById('inputDeducciones');
const button = document.getElementById('button');
const result = document.getElementById('result');

class Cliente {
  constructor(nombre, impuesto = {}){
    this.nombre = nombre;
    this.impuesto = impuesto;
  }
  get getNombre() {
    return this.nombre;
  }
  set setNombre(newNombre){
    this.nombre = newNombre;
  }
  get getImpuesto() {
    return this.impuesto.impuesto;
  }
  calcularImpuesto(mba, deducciones){
    const impuesto = ((mba - deducciones) * 0.21);
    if (!impuesto) return;
    this.impuesto = {
      impuesto,
    }
  }
}

class Impuestos {
  constructor(mba, deducciones){
    this.mba = mba;
    this.deducciones = deducciones;
  }
  get getMBA(){
    return this.mba;
  }
  set setMBA(newMBA) {
    this.mba = newMBA
  }
  get getDeducciones(){
    return this.deducciones;
  }
  set setDeducciones(newDeducciones){
    this.deducciones = newDeducciones;
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault;
  const nombreNormalizado = inputNombre.value;
  const mbaNormalizado = Number(inputMBA.value);
  const deduccionesNormalizado = Number(inputDeducciones.value);

  if (
    !nombreNormalizado ||
    !mbaNormalizado ||
    !deduccionesNormalizado
  ){
    alert('Debe rellenar todos los campos.');
    return;
  }

  const Cliente1 = new Cliente(nombreNormalizado);
  const Impuesto1 = new Impuestos(mbaNormalizado, deduccionesNormalizado);

  Cliente1.calcularImpuesto(Impuesto1.getMBA, Impuesto1.getDeducciones);

  result.innerText = (Cliente1.getImpuesto);
})