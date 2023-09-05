addEventListener("message", () => {
    connectAPI()
    setInterval(() => connectAPI(), 5000)
})

async function connectAPI(){
    const connect = await fetch("https://economia.awesomeapi.com.br/json/last/ARS-BRL")
    const connectJSON = await connect.json()
    postMessage(connectJSON.ARSBRL)
}