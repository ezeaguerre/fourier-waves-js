function parsearNumero( texto ) {
	var pi = Math.PI;
	var e = Math.E;
	return eval( texto );
}


/**
 * @returns Una onda que es la suma de todas las ondas componentes.
 */
function parsear( texto ) {
	var ondas = [];

	var lineas = texto.split( '\n' );

	for (	const linea of lineas ) {
		var partes = linea.trim().split( /\s+/ );
		var multiplo = parsearNumero( partes[0] );
		var amplitud = parsearNumero( partes[1] );
		var fase = parsearNumero( partes[2] );

		if ( multiplo == 0 )
			ondas.push( ondaConstante( amplitud ) );

		ondas.push( ondaSinusoidal( multiplo, amplitud, fase ) );
	}

	return ondaCompuesta( ondas );
}