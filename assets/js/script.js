//! Copying text to clipboard
function copy(text) {
    let input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}


function setTooltip(e,message) {
  $(e.trigger).tooltip({
  trigger: 'click',
  placement: 'top'
});
$(e.trigger).tooltip('hide')
 .attr('data-original-title', message)
 .tooltip('show');
}

function hideTooltip(e) {
  setTimeout(function() {
    $(e.trigger).tooltip('hide');
  }, 1000);
}

// Clipboard

var clipboard = new Clipboard('footer_element');

clipboard.on('success', function(e) {
  setTooltip(e,'Copied!');
  hideTooltip(e);
});

clipboard.on('error', function(e) {
  setTooltip(e,'Failed!');
  hideTooltip(e);
});