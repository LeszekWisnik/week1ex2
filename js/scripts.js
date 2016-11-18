
(function() {
	$(document).ready(function($) {
		
		//wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”
		$('.grid.grid-12').css('color', '#0000ff');

        //Wszystkie elementy &lt;a&gt;, których atrybut "href" zaczyna się na "http", znajdujące się w elemencie o klasie "nav"
        $('.nav a[href^="http"]').css('background', '#ff0000');

		//Wszystkie elementy &lt;input&gt;, których typ to "radio" lub "checkbox" oraz dodatkowo nie są aktualnie zaznaczone (checked).
       	//$("input[type='radio'], input[type='checkbox']").not(':checked').addClass('week1ex2c');
		//$('input:radio, input:checkbox').not(':checked').addClass('week1ex2c');
		$('input[type=radio], input[type=checkbox]').not(':checked').addClass('week1ex2c');


		//Wyłącznie pierwszy element &lt;p&gt;, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie &lt;div&gt; z identyfikatorem "text"
        //$('#text p:first:empty').addClass('week1ex2d');
        $("div#text p:first:empty").addClass('week1ex2d');
        $()

		//wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>
		$(':not(span).pagination-item').css('color', '#0000ff');

	
	});
})();