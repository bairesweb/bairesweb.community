<% const findIcon = (name) => _.find(glyphs, function(icon) { return icon.name === name; }) %>
<% const getIconCode = (icon) => icon ? icon.unicode[0].charCodeAt(0).toString(16) : ''; %>

/** <%= fontPath %> */
@font-face {
	font-family: "<%= fontName %>";
	src: url('<%= fontPath %><%= fontName %>.eot');
	src: url('<%= fontPath %><%= fontName %>.eot?#iefix') format('eot'),
		url('<%= fontPath %><%= fontName %>.woff2') format('woff2'),
		url('<%= fontPath %><%= fontName %>.woff') format('woff'),
		url('<%= fontPath %><%= fontName %>.ttf') format('truetype'),
		url('<%= fontPath %><%= fontName %>.svg#<%= fontName %>') format('svg');
}

@mixin <%= cssClass%>-styles {
	font-family: "<%= fontName %>";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	font-style: normal;
	font-variant: normal;
	font-weight: normal;
	// speak: none; // only necessary if not using the private unicode range (firstGlyph option)
	text-decoration: none;
	text-transform: none;
}

%<%= cssClass%> {
	@include <%= cssClass%>-styles;
}

@function <%= cssClass%>Char($filename) {
	$char: "";
<% _.each(glyphs, function(glyph) { %>
	@if $filename == '<%= glyph.name %>' {
		$char: "\<%= getIconCode(glyph) %>";
	}
<% }); %>

	@return $char;
}

@mixin <%= cssClass%>($filename, $insert: before, $extend: true) {
	&:#{$insert} {
		@if $extend == true {
			@extend %<%= cssClass%>;
		} @else {
			@include <%= cssClass%>-styles;
		}
		content: <%= cssClass%>Char($filename);
	}
}

<% _.each(glyphs, function(glyph) { %>
// <%= Object.keys(glyph) %>
.<%= cssClass%>-<%= glyph.name %> {
	@include <%= cssClass%>('<%= glyph.name %>');
}
<% }); %>
