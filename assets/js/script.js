//! Copying text to clipboard
function copy(text, element) {
    let input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    if(!element || element.classList.value.includes('active')) return;
    
    element.classList.toggle('active');
    
    setTimeout(() => {
      element.classList.toggle('active');
    }, 2000)
}