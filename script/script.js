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

let workerDolar = new Worker('./script/workers/workerDolar.js')
workerDolar.postMessage('usd')

workerDolar.addEventListener("message", e => {
    let time = getTime()
    let value = e.data.ask
    printQuotation("dolar", value)
    addData(graphForDolar, time, value)
})