function limpiarFormulario(){
	document.getElementById("miForm").reset();
}

var comparar=function(n1,n2,n3){

	var a = parseInt(document.getElementById("a").value);

	var b = parseInt(document.getElementById("b").value);

	var c = parseInt(document.getElementById("c").value);

			if (a<b && a<c) {
				menor=a;
			}
			else{
				if (b<c) {
					menor=b;
				}
				else{
					menor=c;
				}
			}

	return menor;
}


function limpiarFormulario(){
	document.getElementById("miForm").reset();
}

var convertir=function(n1){

	var a = parseFloat(document.getElementById("a").value);

	var resultado = a/2.54;

	return resultado;
}


function limpiarFormulario(){
	document.getElementById("miForm").reset();
}

var convertir=function(n1){

	var a = parseInt(document.getElementById("a").value);

	var resultado = a*1.094;

	return resultado;
}