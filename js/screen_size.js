let windowSizeDiv = document.createElement('div');
windowSizeDiv.innerHTML = document.body.clientWidth;
document.body.prepend(windowSizeDiv);
windowSizeDiv.style.position = 'fixed';
windowSizeDiv.style.color = '#fff';
windowSizeDiv.style.background = '#000';
windowSizeDiv.style.top = '100%';
windowSizeDiv.style.transform = 'translateY(-100%)';
windowSizeDiv.style.left = '0';
windowSizeDiv.style.zIndex = '1000';
windowSizeDiv.style.padding = '0 8px';

window.addEventListener('resize', () => {
    windowSizeDiv.innerHTML = document.body.clientWidth;
} )