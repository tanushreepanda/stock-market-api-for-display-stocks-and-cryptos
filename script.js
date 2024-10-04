
const apikey = 'cqut68hr01qvea0c5qg0cqut68hr01qvea0c5qgg';
const BTC_container = document.getElementsByClassName("BTC_container")[0]; 
const AMZN_container = document.getElementsByClassName("AMZN_container")[0]; 
const MSFT_container = document.getElementsByClassName("MSFT_container")[0]; 
const TSLA_container = document.getElementsByClassName("TSLA_container")[0]; 
const ACET_container = document.getElementsByClassName("ACET_container")[0]; 
const ABT_container = document.getElementsByClassName("ABT_container")[0]; 
const AAPL_container = document.getElementsByClassName("AAPL_container")[0]; 
const USD_container = document.getElementsByClassName("USD_container")[0]; 
const WIMI_container = document.getElementsByClassName("WIMI_container")[0]; 


const Base_url = () => {
    console.log("Getting Data.......");
    BTC('BTC');
    AMZN('AMZN');
    MSFT('MSFT');
    TSLA('TSLA');
    ACET('ACET');
    ABT('ABT');
    AAPL('AAPL');
    USD('USD');
    WIMI('WIMI');
}

async function BTC(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        BTC_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        BTC_container.innerHTML = 'No stock data found';
    }
}

async function AMZN(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        AMZN_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        AMZN_container.innerHTML = 'No stock data found';
    }
}

async function MSFT(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        MSFT_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        MSFT_container.innerHTML = 'No stock data found';
    }
}

async function TSLA(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        TSLA_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        TSLA_container.innerHTML = 'No stock data found';
    }
}

async function ACET(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        ACET_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        ACET_container.innerHTML = 'No stock data found';
    }
}

async function ABT(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        ABT_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        ABT_container.innerHTML = 'No stock data found';
    }
}

async function AAPL(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        AAPL_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        AAPL_container.innerHTML = 'No stock data found';
    }
}

async function USD(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        USD_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        USD_container.innerHTML = 'No stock data found';
    }
}

async function WIMI(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        WIMI_container.innerHTML = `Stock Price (${symbol}): $${data.c} <br> Change Percent : ${data.dp}%`;
    } else {
        WIMI_container.innerHTML = 'No stock data found';
    }
}


Base_url();
setInterval(Base_url, 10000);