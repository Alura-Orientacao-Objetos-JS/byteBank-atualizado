import selectQuotation from "./printQuotation.js";

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
    selectQuotation("dolar", value)
    addData(graphForDolar, time, value)
})

const graphYen = document.querySelector('#graficoIene')
const graphForYen = new Chart(graphYen, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerIene = new Worker("./script/workers/workerIene.js")
workerIene.postMessage("iene")
workerIene.addEventListener("message", e => {
    let time = getTime()
    let value = e.data.ask
    selectQuotation("iene", value)
    addData(graphForYen, time, value)
})

const graphPesoArg = document.querySelector('#graficoPesoArg')
const graphForPesoArg = new Chart(graphPesoArg, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Peso Argentino',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerPesoArg = new Worker("./script/workers/workerPesoArg.js")
workerPesoArg.postMessage("Peso Argentino")
workerPesoArg.addEventListener("message", e => {
    let time = getTime()
    let value = e.data.ask
    selectQuotation("peso argentino", value)
    addData(graphForPesoArg, time, value)
})