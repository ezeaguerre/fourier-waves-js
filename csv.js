function crearCSV( onda, muestras ) {
	var contenido = 'Tiempo,Amplitud\r\n';

	onda.recorrer( muestras, function( t, valor ) {
		contenido += t + ',' + valor + '\r\n';
	} );

	descargarCSV( contenido );
}

function descargarCSV( contenido ) {
	var link = document.createElement( 'a' );
	link.setAttribute( 'href', 'data:text/csv;charset=UTF-8,' + encodeURIComponent( contenido ) );
	link.setAttribute( 'download', 'datos.csv' );
	link.style.display = 'none';
	document.body.appendChild( link );
	link.click();
	document.body.removeChild( link );
}