'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".tagsBtn").click(clickTagsBtn);
}

function clickTagsBtn(e) {
  e.preventDefault();
  console.log(gtag);

  ga("send", "event", 'tagsview', 'click');
}
