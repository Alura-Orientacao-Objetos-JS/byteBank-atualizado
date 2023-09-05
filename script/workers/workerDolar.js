async function connectAPI(){
    const connect = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    const connectJSON = await connect.json()
    postMessage(connectJSON.USDBRL)
}

addEventListener('message', () => {
    connectAPI()
    setInterval(() => connectAPI(), 5000)
})