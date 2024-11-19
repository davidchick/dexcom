const dexButton = document.getElementsByClassName('dexcom')[0];
let counter = 0;

let initialURL = '';
let queryString = '';
const mySearchParams = new URLSearchParams(window.location.search);
const myCode = mySearchParams.get('code');

const dexEnvs = {
    sandbox: 'https://sandbox-api.dexcom.com',
    prod: 'https://api.dexcom.com',
};

const initialQuery = {
    client_id: myAppInfo.client_id,
    redirect_uri: myAppInfo.redirect_uri,
    response_type: 'code',
    scope: 'offline_access',
};

let qProperties = Object.getOwnPropertyNames(initialQuery);

initialURL = `${dexEnvs.sandbox}/v2/oauth2/login?`;

qProperties.forEach(element => {
    queryString = `${queryString}${element}=${initialQuery[element]}&`;
});

dexButton.href = `${initialURL}${queryString}`;

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

console.log(myCode);

const formData = {
    grant_type: 'authorization_code',
    code: myCode,
    redirect_uri: myAppInfo.redirect_uri,
    client_id: myAppInfo.client_id,
    client_secret: myAppInfo.client_secret,
};

console.log(`${dexEnvs.sandbox}/v2/oauth2/token`);

if (code) {

    const resp = fetch(
        `${dexEnvs.sandbox}/v2/oauth2/token`,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString(),
        }
    );
  
    const data = resp.text();
    console.log(data);

};

 