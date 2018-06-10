function Plotter( context ) {
		this.context = context;
		this.width = context.canvas.width;
		this.height = context.canvas.height;
		this.horizontalMargin = 10;
		this.verticalMargin = 20;
}

Plotter.prototype = {
	constructor: Plotter,

	dibujar: function( onda, muestras ) {
		if ( muestras === undefined )
			muestras = 1000;

		this.borrar();
		this.dibujarEjes();
		this.dibujarOnda( onda, muestras );
	},

	borrar: function() {
		this.context.fillStyle = 'white';
		this.context.fillRect( 0, 0, this.width, this.height );
	},

	dibujarEjes: function() {
		this.context.beginPath();
		this.context.strokeStyle = 'black';
		this.context.moveTo( 0, this.height / 2 );
		this.context.lineTo( this.width, this.height / 2 );
		this.context.stroke();
	},

	dibujarOnda: function( onda, muestras ) {
		var self = this;
		var origenX = this.width * 0.1;
		var anchoX = this.width * 0.8;
		var origenY = this.height / 2;
		var amplitudY = this.height * 0.8 / 2;

		this.context.beginPath();
		this.context.strokeStyle = 'red';
		this.context.moveTo( origenX, origenY - amplitudY * onda.valor( 0 ) );

		onda.recorrer( muestras, function( t, valor ) {
			var coordenadaX = origenX + t * anchoX;
			var coordenadaY = origenY - amplitudY * valor;

			self.context.lineTo( coordenadaX, coordenadaY );
		} );

		this.context.stroke();
	}
};