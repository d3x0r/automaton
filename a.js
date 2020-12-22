function makeNode( extra ) {
	var svg = document.createElementNS( "http://www.w3.org/2000/svg","svg" );
 svg.setAttribute( "width", 66 );
 svg.setAttribute( "height", 66 );
	svg.setAttribute( "viewBox", "-10 0 150 150")
	svg.innerHTML = `
				<defs>
				<radialGradient id="gradient-0n" gradientUnits="userSpaceOnUse" cx="32.806" cy="38.359" r="31.21" gradientTransform="matrix(0.556701, 0.060335, -0.061948, 0.571572, 35.942307, 40.952184)"><stop offset="0" style="stop-color: rgba(255, 249, 249, 0.72);"></stop><stop offset="1" style="stop-color: rgba(255, 255, 255, 0);"></stop></radialGradient>
				<radialGradient id="gradient-1n" gradientUnits="userSpaceOnUse" cx="37.916" cy="50.156" r="31.21" gradientTransform="matrix(1.665372, 0.004509, -0.004806, 1.773443, -10.723868, -25.421527)"><stop offset="0" style="stop-color: rgba(227, 227, 227, 0);"></stop><stop offset="1" style="stop-color: rgba(0, 0, 0, 0.45);"></stop></radialGradient>
				<radialGradient id="gradient-2n" gradientUnits="userSpaceOnUse" cx="35.259" cy="46.687" r="31.21" gradientTransform="matrix(1.490671, 0.00387, 0.00009, 1.829344, 1.658628, -19.147887)"><stop offset="0" style="stop-color: rgba(246, 243, 243, 0);"></stop><stop offset="1" style=""></stop></radialGradient>
				<linearGradient id="gradient-4n" gradientUnits="userSpaceOnUse" x1="47.355" y1="12.732" x2="47.355" y2="74.298" gradientTransform="matrix(0.770686, -0.637215, 0.374193, 0.45257, 22.306562, 74.687881)"><stop offset="0" style="stop-color: rgba(227, 227, 227, 0.29);"></stop><stop offset="1" style="stop-color: rgba(0, 0, 0, 0.06);"></stop></linearGradient>
			</defs>
			<circle  style="fill: rgb(225, 195, 135); fill-opacity:0.5" cx="63" cy="78" r="60"></circle>
			<ellipse ID="nodeColor"  style="fill: rgb(255, 255, 0);" cx="63.354" cy="78.071" rx="30.93" ry="30.717"></ellipse>
<circle style="fill:url(&quot;#gradient-2n&quot;); fill-opacity: 0.68;" cx="69.539" cy="83.618" r="30.783" transform="matrix(1.062366, 0, 0, 1.046363, -8.38973, -7.437199)"></circle>
	<circle style="fill: url(&quot;#gradient-0n&quot;); fill-opacity: 0.68;" cx="63.14" cy="78.072" r="30.783"></circle>
		` + (extra?extra():"")  ;
	svg.setColor = function(c) {
		var color = svg.children.nodeColor;
		if( color ){
			color.style.fill = c;
		}
	}
	svg.setIconColor = function(c) {
		var color = svg.children.iconColor;
		if( color ){
			color.style.fill = c;
			color.style.stroke = c;
		}
	}
	return svg;
}

		function convert(image) {
			var svghtml = image.outerHTML;
			if( !svghtml.includes( "xmlns=\"") )
			svghtml =[ svghtml.slice( 0, 5 ), "xmlns='http://www.w3.org/2000/svg' ", svghtml.slice( 5 ) ].join("");

			var svg = "data:image/svg+xml" /*+ ";base64"*/ + "," + encodeURI( svghtml )
			wrapper = document.createElement( "img" );
			wrapper.width = image.getAttribute("width");
			wrapper.height = image.getAttribute("height");
			wrapper.src = svg;
			return wrapper;
		}

var canvas = document.createElement( "canvas" );
canvas.width = 1024;
canvas.height = 1024;
canvas.style.width="100vh";
canvas.style.height="100vh";
document.body.appendChild( canvas );
var ctx = canvas.getContext( "2d" );

var svg = makeNode();
document.body.appendChild( svg );
var image = convert( svg );

setTimeout( ()=>{

ctx.fillRect( 0, 0, 50, 50 );
ctx.drawImage( image, 0, 0 );
}, 500)