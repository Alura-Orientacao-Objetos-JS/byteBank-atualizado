const graphDolar = document.querySelector('#graficoDolar')

const graphForDolar = new Chart(graphDolar, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    }
  });

setInterval(() => connectAPI(), 5000)

async function connectAPI(){
    const connect = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    const connectJSON = await connect.json()
    console.log(connectJSON)
}

function getTime(){
    let date = new Date()
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    console.log(time)
    return time
}

getTime()