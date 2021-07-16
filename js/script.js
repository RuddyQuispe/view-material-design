(function () {
    var formulario = document.formulario_registro,
        elementos = formulario.elements;

    // Functions
    var validarInputs = function () {
        for (var index = 0; index < elementos.length; index++) {
            if (elementos[index].type == "text" || elementos[index].type == "email" || elementos[index].type == "password") {
                if (elementos[index].value.length == 0) {
                    console.log("El usuario no escribio datos en: " + elementos[index].name);
                    elementos[index].className = elementos[index].className + " error";
                    return false;
                } else {
                    elementos[index].className = elementos[index].className.replace("error", "");
                }
            }
        }
        if (elementos.pass.value != elementos.pass2.value) {
            elementos.pass.value = "";
            elementos.pass2.value = "";
            elementos.pass.className = elementos.pass.className + " error";
            elementos.pass2.className = elementos.pass2.className + " error";
        } else {
            elementos.pass.className = elementos.pass.className.replace("error", "");
            elementos.pass2.className = elementos.pass2.className.replace("error", "");
        }
        return true;
    }

    var validarRadios = function () {
        var opciones = document.getElementsByName('sexo'),
            resultado = false;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
                // Recorremos los radio button
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked) {
                        resultado = true;
                        break;
                    }
                }
                if (resultado == false) {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log('El campo sexo esta incompleto');
                    return false;
                } else {
                    // Eliminamos la clase Error del radio button
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }
    };

    var validarCheckbox = function () {
        var opciones = document.getElementsByName('terminos'),
            resultado = false;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "checkbox") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked) {
                        resultado = true;
                        break;
                    }
                }
                if (resultado == false) {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log('El campo checkbox esta incompleto');
                    return false;
                } else {
                    // Eliminamos la clase Error del checkbox
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }
    };

    // funciones para eventos
    var enviar = function (e) {
        e.preventDefault()
        if (!validarInputs()) {
            console.log("Falto validadr los inputs")
            e.preventDefault()
        } else if (!validarRadios()) {
            console.log("Falto validadr los radios")
            e.preventDefault()
        } else if (!validarCheckbox()) {
            console.log("Falto validadr los checkbox")
            e.preventDefault()
        } else {
            console.log("envia correctamente")
            // comentar linea cuando
            e.preventDefault()
        }
    }

    // funcionae blur y focus
    var focusInput = function () {
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    }

    var blurInput = function () {
        if (this.value <= 0) {
            this.parentElement.children[1].className = "label";
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";

        }
    }

    // eventos
    formulario.addEventListener("submit", enviar)
    for (var index = 0; index < elementos.length; index++) {
        if (elementos[index].type == "text" || elementos[index].type == "email" || elementos[index].type == "password") {
            elementos[index].addEventListener("focus", focusInput)
            elementos[index].addEventListener("blur", blurInput)
        }

    }
}())