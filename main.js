$ = (q) => {
    const elements = document.querySelectorAll(q);
    if (elements.length > 1) return elements;
    else if (elements.length === 1) return elements[0];
}

const api_URL = 'https://api.adviceslip.com/advice';

const fetchDataFromServer = async () => {
    const data = await fetch(api_URL);
    const api = await data.json();
    const { id, advice } = api.slip;
    $('#box__heading').textContent = `ADVICE #${id}`;
    $('#advice').textContent = `“${advice}”`;
}

window.addEventListener('load', fetchDataFromServer);
$('.dice').addEventListener('click', fetchDataFromServer);
