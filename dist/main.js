"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var inputNombre = document.getElementById('inputNombre');
var inputMBA = document.getElementById('inputMBA');
var inputDeducciones = document.getElementById('inputDeducciones');
var button = document.getElementById('button');
var result = document.getElementById('result');

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(newNombre) {
      this.nombre = newNombre;
    }
  }, {
    key: "getImpuesto",
    get: function get() {
      return this.impuesto.impuesto;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(mba, deducciones) {
      var impuesto = (mba - deducciones) * 0.21;
      if (!impuesto) return;
      this.impuesto = {
        impuesto: impuesto
      };
    }
  }]);

  return Cliente;
}();

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(mba, deducciones) {
    _classCallCheck(this, Impuestos);

    this.mba = mba;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMBA",
    get: function get() {
      return this.mba;
    }
  }, {
    key: "setMBA",
    set: function set(newMBA) {
      this.mba = newMBA;
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(newDeducciones) {
      this.deducciones = newDeducciones;
    }
  }]);

  return Impuestos;
}();

button.addEventListener('click', function (e) {
  e.preventDefault;
  var nombreNormalizado = inputNombre.value;
  var mbaNormalizado = Number(inputMBA.value);
  var deduccionesNormalizado = Number(inputDeducciones.value);

  if (!nombreNormalizado || !mbaNormalizado || !deduccionesNormalizado) {
    alert('Debe rellenar todos los campos.');
    return;
  }

  var Cliente1 = new Cliente(nombreNormalizado);
  var Impuesto1 = new Impuestos(mbaNormalizado, deduccionesNormalizado);
  Cliente1.calcularImpuesto(Impuesto1.getMBA, Impuesto1.getDeducciones);
  result.innerText = Cliente1.getImpuesto;
});