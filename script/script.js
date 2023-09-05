import printQuotation from "./printQuotation.js";

const graphDolar = document.querySelector('#graficoDolar')

const graphForDolar = new Chart(graphDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Dólar',
        data: [],
        borderWidth: 1
      }]
    }
  });

setInterval(() => connectAPI(), 5000)

async function connectAPI(){
    const connect = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    const connectJSON = await connect.json()
    let time = getTime()
    let value = connectJSON.USDBRL.ask
    addData(graphForDolar, time, value)
    printQuotation("dolar", value)
}

function getTime(){
    let date = new Date()
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    return time
}

function addData(graph, subtitle, data){
    graph.data.labels.push(subtitle)
    graph.data.datasets.forEach((dataset) => {
        dataset.data.push(data)
    })
    graph.update()
}