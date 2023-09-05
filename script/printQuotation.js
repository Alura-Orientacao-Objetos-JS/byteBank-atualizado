const list = document.querySelectorAll('[data-lista]')

function selectQuotation(name, value){
    list.forEach((listChosen) => {
        if(listChosen.id == name){
            printQuotation(listChosen, name, value)
        }
    })
}

function printQuotation(listChosen, name, value){
    listChosen.innerHTML = ''
    const plurals = {
        "dolar": "dolares",
        "iene": "ienes",
        "peso argentino": "pesos argentinos"
    }

    for(let multiplier = 1; multiplier <= 1000; multiplier *= 10){
        const listItem = document.createElement('li')
        listItem.innerHTML = `${multiplier} ${multiplier == 1 ? name : plurals[name]}: R$${(value * multiplier).toFixed(2)}`
        listChosen.appendChild(listItem)
    }
}

export default selectQuotation