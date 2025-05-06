// PRomises + Fetch Basic --- the foundation of modern async in JavaScript and the core of how
// Vue Query works under the hood.

// TASK: Fetch a list of coins from GoinGecko
// Endpoint: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd

console.log('🔄 Fetching data...');

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
  .then(response => {
    console.log('✅ Raw response:', response);
    // if (!response.ok) {
    //   throw new Error(`HTTP Error: ${response.status}`);
    // }
    // instead we use
    if (!response.ok) {
      return response.text().then((body) => {
        throw new HttpError(res, body); // Throw inside inner .then
      });
    }
    return response.json();
  })
  .then(data => {
    console.log('📦 Parsed data:', data);
    simulateDelay(2000).then(() => {
      const top5 = data.slice(0, 5);
      console.log('🔥 Top 5 coins:');
      top5.forEach((coin, index) => {
        console.log(`${index + 1}. ${coin.name} - $${coin.current_price}`)
      });
    });
  }).catch(err => {
    if (err instanceof HttpError) {
      console.error('❌ Http Error', err.status, err.body);
    } else {
      console.error('❌ Unknown error', err.message);
    }
  });

console.log('⏳ Request sent...');

function simulateDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class HttpError extends Error {
  constructor(res, body) {
    super(`Request failed: ${res.status} ${res.statusText}`);
    this.name = 'HttpError';
    this.status = res.status;
    this.statusText = res.statusText;
    this.url = res.url;
    this.body = body;
  }
}