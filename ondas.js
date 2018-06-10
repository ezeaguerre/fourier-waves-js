function ondaSinusoidal( multiplo, amplitud, fase ) {
	return function( t ) {
		return amplitud * Math.sin( 2 * Math.PI * multiplo * t + fase );
	}
}

function ondaConstante( amplitud ) {
	return function( t ) {
		return amplitud;
	}
}

function ondaCompuesta( ondas ) {
	return new Onda( function( t ) {
		var valor = 0;
		for ( let onda of ondas )
			valor += onda( t );
		return valor;
	} );
}