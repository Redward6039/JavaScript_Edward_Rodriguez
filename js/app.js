var Calculadora={
  pantallaCalculadora: document.getElementById("display"),
  /*var globales*/
  uno: 0,
  dos: 0,
  tres: 0,
  resultado: 0,
  pantallaValor: "0",
  operacion: "",
  botonIgualdad: false,

  /*metodo reducir tamaño botones*/
  reducirBotones: function(e) {
    var a = elemento.id;
    if (a=="1" || a=="2" || a=="3" || a=="igual" || a=="0" || a=="punto"){
      e.style.width = "27%";
      e.style.height = "61px";
    }else if (a=="mas") {
      e.style.width = "87%";
      e.style.height = "97%";
    }else {
      e.style.width = "20%";
      e.style.height = "61px"
    }
  },

  /*metodo aumentar botones*/
  aumentarBotones: function(elemento) {
    var a = elemento.id;
    if (a=="1" || a=="2" || a=="3" || a=="igual" || a=="0" || a=="punto"){
      elemento.style.width = "28%";
      elemento.style.height = "61.92px";
    }else if (a=="mas") {
      elemento.style.width = "91%";
      elemento.style.height = "100%";
    }else {
      elemento.style.width = "21%";
      elemento.style.height = "61.91px";
    }
  },

  /*Eventos al reducir y aumentar botones*/
  eventoReducirBotones: function(evento) {
    Calculadora.reducirBotones(evento.target);
  },
  eventoAumentarBotones: function(evento) {
    Calculadora.aumentarBotones(evento.target);
  },

  añadirEventosBotones: function(selector) {
    var a = document.querySelectorAll(selector);
    var i;
    for (i = 0; i<a.length;i++){
      a[i].onmouseover = this.eventoReducirBotones;
      a[i].onmouseover = this.eventoAumentarBotones;
    };
  },

  /*aqui se le añade los las funciones a los botones*/
  añadirEventosFuncion: function() {
    document.getElementById("0").addEventListener("click", function() {Calculadora.añadirNumero("0");});
    document.getElementById("1").addEventListener("click", function() {Calculadora.añadirNumero("1");});
    document.getElementById("2").addEventListener("click", function() {Calculadora.añadirNumero("2");});
		document.getElementById("3").addEventListener("click", function() {Calculadora.añadirNumero("3");});
		document.getElementById("4").addEventListener("click", function() {Calculadora.añadirNumero("4");});
		document.getElementById("5").addEventListener("click", function() {Calculadora.añadirNumero("5");});
		document.getElementById("6").addEventListener("click", function() {Calculadora.añadirNumero("6");});
		document.getElementById("7").addEventListener("click", function() {Calculadora.añadirNumero("7");});
		document.getElementById("8").addEventListener("click", function() {Calculadora.añadirNumero("8");});
		document.getElementById("9").addEventListener("click", function() {Calculadora.añadirNumero("9");});
		document.getElementById("on").addEventListener("click", function() {Calculadora.borrarPantalla();});
		document.getElementById("sign").addEventListener("click", function() {Calculadora.CambioDeSigno();});
		document.getElementById("punto").addEventListener("click", function() {Calculadora.numeroDecimal();});
		document.getElementById("igual").addEventListener("click", function() {Calculadora.mostrarResultado();});
		document.getElementById("raiz").addEventListener("click", function() {Calculadora.añadirOperacion("raiz");});
		document.getElementById("dividido").addEventListener("click", function() {Calculadora.añadirOperacion("/");});
		document.getElementById("por").addEventListener("click", function() {Calculadora.añadirOperacion("*");});
		document.getElementById("menos").addEventListener("click", function() {Calculadora.añadirOperacion("-");});
		document.getElementById("mas").addEventListener("click", function() {Calculadora.añadirOperacion("+");});
  },

  /*teclas de la calculadora*/
  borrarPantalla: function() {
    this.pantallaValor = "0";
    this.operacion = "";
		this.uno = 0;
		this.dos = 0;
		this.resultado = 0;
		this.Operación = "";
		this.botonIgualdad = false;
		this.tres = 0;
		this.actualizarVisor();
  },
  /*cambio de signo*/
  CambioDeSigno: function() {
    if (this.pantallaValor !="0") {
			var auxiliar;
			if (this.pantallaValor.charAt(0)=="-") {
				auxiliar = this.pantallaValor.slice(1);
			}	else {
				auxiliar = "-" + this.pantallaValor;
			}
		this.pantallaValor = "";
		this.pantallaValor = auxiliar;
		this.actualizarVisor();
		}
  },

  /*permite la funcion de numeros decimales*/
  numeroDecimal: function() {
    if (this.pantallaValor.indexOf(".")== -1) {
			if (this.pantallaValor == ""){
				this.pantallaValor = this.pantallaValor + "0.";
			} else {
				this.pantallaValor = this.pantallaValor + ".";
			}
			this.actualizarVisor();
		}
  },
  añadirNumero: function(valor) {
    if (this.pantallaValor.length < 8) {
			if (this.pantallaValor=="0") {
				this.pantallaValor = "";
				this.pantallaValor = this.pantallaValor + valor;
			} else {
				this.pantallaValor = this.pantallaValor + valor;
			}
		  this.actualizarVisor();
		}
  },

  añadirOperacion: function(o) {
    this.uno = parseFloat(this.pantallaValor);
		this.pantallaValor = "";
		this.operacion = o;
		this.botonIgualdad = false;
		this.actualizarVisor();
  },

  mostrarResultado: function() {
    if(!this.botonIgualdad){
			this.dos = parseFloat(this.pantallaValor);
			this.tres = this.dos;
			this.operacionAritmetica(this.uno, this.dos, this.operacion);
		} else {
		this.operacionAritmetica(this.uno, this.tres, this.operacion);
		}

		this.uno = this.resultado;
		this.pantallaValor = "";
		if (this.resultado.toString().length < 9){
			this.pantallaValor = this.resultado.toString();
		} else {
			this.pantallaValor = this.resultado.toString().slice(0,8) + "...";
		}
		this.botonIgualdad = true;
		this.actualizarVisor();
  },

  operacionAritmetica: function(uno, dos, operacion) {
    switch (operacion) {
      case "+":
        this.resultado = eval(uno + dos);
        break;
      case "-":
        this.resultado = eval(uno - dos);
        break;
      case "*":
        this.resultado = eval(uno * dos);
        break;
      case "/":
        this.resultado = eval(uno / dos)
        break;
      case "raiz":
        this.resultado = eval(Math.sqrt(uno));
        break;

    }
  },

  init: (function() {
    this.añadirEventosBotones(".tecla");
    this.añadirEventosFuncion();
  }),


  actualizarVisor: function() {
    this.pantallaCalculadora.innerHTML = this.pantallaValor;
  }
};

Calculadora.init();
