(function () {
	var plotter = null;
	var canvas = null;
	var textArea = null;
	var muestras = null;
	var descripcion = null;

	function conLaOnda( callback ) {
		var cantidadMuestras = parseInt( muestras.value.trim() );
		if ( isNaN( cantidadMuestras ) || cantidadMuestras < 1000 || cantidadMuestras > 1000000 ) {
			alert( 'Debe ingresar un número de muestras' );
			return;
		}

		var onda = parsear( textArea.value.trim() );

		callback( onda, cantidadMuestras );
	}

	function ejemploOndaCuadrada( maximoComponente ) {
		textArea.value = '';
		for (var i = 1; i <= maximoComponente; i++) {
			if (i % 2 == 1)
				textArea.value += i + ' 1/' + i + ' 0\n';
		}
	}

	function pedirComponentes() {
		var entradaUsuario = prompt( 'Ingrese el número de armónico más alto que desea utilizar', 100 );
		if ( !entradaUsuario )
			return null;

		var componentes = parseInt( entradaUsuario );

		if ( isNaN( componentes ) || componentes == 0 ) {
			alert( 'Debe ingresar un número' );
			return pedirComponentes();
		}

		return componentes;
	}

	function dibujar() { 
		conLaOnda( plotter.dibujar.bind( plotter ) );
	}

	document.addEventListener( 'DOMContentLoaded', function() {
		canvas = document.getElementById( 'canvas' );
		textArea = document.getElementById( 'datos-entrada' );
		muestras = document.getElementById( 'muestras' );
		descripcion = document.getElementById( 'descripcion' );
		linkDescripcion = document.getElementById( 'mostrar-descripcion' );
		plotter = new Plotter( canvas.getContext( '2d' ) );

		linkDescripcion.addEventListener( 'click', function( evt ) {
			evt.preventDefault();
			var estilo = descripcion.style.display;

			if ( !estilo || estilo === 'block' ) {
				linkDescripcion.innerHTML = '[+]';
				estilo = 'none';
			} else {
				linkDescripcion.innerHTML = '[-]';
				estilo = 'block';
			}

			descripcion.style.display = estilo;
		} );

		document.getElementById( 'dibujar' ).addEventListener( 'click', dibujar );
		document.getElementById( 'descargar' ).addEventListener( 'click', function() {
			conLaOnda( crearCSV );
		} );

		document.getElementById( 'onda-cuadrada' ).addEventListener( 'click', function() {
			var componentes = pedirComponentes();
			if ( componentes ) {
				ejemploOndaCuadrada( componentes );
				dibujar();
			}
		});
	});
})();