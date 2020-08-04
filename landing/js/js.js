$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition:'right'
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

