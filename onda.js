function Onda( funcion ) {
	this.funcion = funcion;
}

Onda.prototype = {
	constructor: Onda,

	valor: function( t ) {
		return this.funcion( t );
	},

	recorrer: function( muestras, callback ) {
		var t = 0;
		var espacio = 1 / muestras;

		while ( t <= 1.0 ) {
			callback( t, this.funcion( t ) );
			t += espacio;
		}

		callback( t, this.funcion( t ) );
	}
}