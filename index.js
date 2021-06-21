/**
 * @Author:	  Henry
 * @DateTime:	2016-07-17 16:39:48
 * @Description: Description
 */

(function () {

	var themes = [ "origin", "blue", "green", "purple" ];
	var fonts = [ "lfont", "mfont", "sfont" ];
	var body = document.body;
	var HTML5Api = [ document.querySelectorAll, body.classList ];
	var enviroment = true;

	function main() {

		document.querySelectorAll('i.colorb').forEach( function ( colorb ) {
			var theme;
			themes.forEach( function ( _theme ) {
				if ( colorb.classList.contains( _theme ) ) {
					theme = _theme;
					return false;
				}
			} );
			colorb.addEventListener( 'click', function () { removeThemes(); body.classList.add( theme ); }, false );
		} );

		document.querySelectorAll('i.fontb').forEach( function ( fontb ) {
			var font;
			fonts.forEach( function ( _font ) {
				if ( fontb.classList.contains( _font ) ) {
					font = _font;
					return false;
				}
			} );
			fontb.addEventListener( 'click', function () { removeFonts(); body.classList.add( font ); }, false );
		} );

		document.querySelectorAll('input.copytext').forEach( function ( copytext ) {
			copytext.addEventListener( 'click', function () {
				this.select();
				document.execCommand("Copy");
				document.execCommand("Unselect");
				copytip.classList.add("opacityToOne");
				setTimeout( function () {
					copytip.classList.remove("opacityToOne");
				} ,800);
			}, false );
		} );

		colorpanel.classList.remove( 'hide' );
		fontpanel.classList.remove( 'hide' );

	}

	function removeFonts() {
		fonts.forEach( function ( _font ) {
			body.classList.remove( _font );
		} );
	}

	function removeThemes() {
		themes.forEach( function ( _theme ) {
			body.classList.remove( _theme );
		} );
	}

	HTML5Api.forEach && HTML5Api.forEach( function ( API ) {
		if ( API ) {
			enviroment = true;
		} else {
			enviroment = false;
		}
		return enviroment;
	} );

	enviroment && main();

})();