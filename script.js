// const apikey = 'cqut68hr01qvea0c5qg0cqut68hr01qvea0c5qgg';
// const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
// const stock_container = document.getElementsByClassName("stock_container");
// const crypto_container = document.getElementsByClassName("crypto_container");


// const Base_url = async () => {
//     console.log("Getting Data.......");
//     let response = await fetch(url);
//     let data = await response.json();
//     fetchCryptoData('AAPL');
//     fetchStockData('BINANCE:BTCUSDT');
// }

// function fetchStockData(symbol) {
//     if (data.c) {
//         stock_container.innerHTML = data.c;
//     }
//     else {
//         stock_container.innerHTML = 'No data found';
//     }
// }

// function fetchCryptoData(symbol) {
//     if (data.c) {
//         crypto_container.innerHTML = data.c;
//     }
//     else {
//         crypto_container.innerHTML = 'No data found';
//     }
// }


// Base_url();


const apikey = 'cqut68hr01qvea0c5qg0cqut68hr01qvea0c5qgg';
const stock_container = document.getElementsByClassName("stock_container")[0]; // Corrected to reference the first element
const crypto_container = document.getElementsByClassName("crypto_container")[0]; // Corrected to reference the first element

const Base_url = () => {
    console.log("Getting Data.......");
    fetchStockData('AAPL'); 
    fetchCryptoData('BINANCE:BTCUSDT'); 
}

async function fetchStockData(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        stock_container.innerHTML = `Stock Price (${symbol}): $${data.c}`;
    } else {
        stock_container.innerHTML = 'No stock data found';
    }
}

async function fetchCryptoData(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.c) {
        crypto_container.innerHTML = `Crypto Price (${symbol}): $${data.c}`;
    } else {
        crypto_container.innerHTML = 'No crypto data found';
    }
}

Base_url();
