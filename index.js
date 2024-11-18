const dexButton = document.getElementsByClassName('dexcom')[0];
let counter = 0;

const callDexcom = function (e) {

    if (counter < 1) {
        const spanEl = document.createElement('span');
        const spanText = document.createTextNode('Connecting...');
        spanEl.appendChild(spanText);
        document.getElementsByTagName('body')[0].appendChild(spanEl);
    }
    counter++;
};

dexButton.addEventListener('click', e => {callDexcom()});


