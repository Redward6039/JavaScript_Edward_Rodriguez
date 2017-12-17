var Calculadora={
  pantallaCalculadora: document.getElementById("display"),
  pantallaValor: "0",
  uno: 0,
  dos: 0,
  tres: 0,
  resultado: 0,
  operacion: " ",
  botonIgualdad: false,

  init: (function() {
    this.añadirEventosBotones(".tecla");
    this.añadirEventosFuncion();
  }),

  //metodo reducir tamaño botones
  reducirBotones: function(elemento) {
    var a = elemento.id;
    if (a=="1" || a=="2" || a=="3" || a=="igual" || a=="0" || a=="punto"){
      elemento.style.width = "28%";
      elemento.style.height = "62px";
    }else if (a=="mas") {
      elemento.style.width = "88%";
      elemento.style.height = "98%";
    }else {
      elemento.style.width = "21%";
      elemento.style.height = "62px"
    }
  },

  //metodo aumentar botones
  aumentarBotones: function(elemento) {
    var a = elemento.id;
    if (a=="1" || a=="2" || a=="3" || a=="igual" || a=="0" || a=="punto"){
      elemento.style.width = "29%";
      elemento.style.height = "62.91px";
    }else if (a=="mas") {
      elemento.style.width = "90%";
      elemento.style.height = "100%";
    }else {
      elemento.style.width = "22%";
      elemento.style.height = "62.91px";
    }
  },

  //Eventos
  eventoReducirBotones: function(evento) {
    Calculadora.reducirBotones(evento.target);
  },
  eventoAumentarBotones: function(evento) {
    Calculadora.aumentarBotones(evento.target);
  },

  añadirEventosBotones: function(selector) {
    var a = document.querySelectorAll(selector);
    for (var i = 0; i<a.length;i++){
      a[i].onmouseover = this.eventoReducirBotones;
      a[i].onmouseover = this.eventoAumentarBotones;
    };
  },

  añadirEventosFuncion: function() {
    document.getElementById("0").addEventListener("click", function() {Calculadora.ingresoNumero("0");});
    document.getElementById("1").addEventListener("click", function() {Calculadora.ingresoNumero("1");});
  }
};

Calculadora.init();
