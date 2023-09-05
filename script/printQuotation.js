const list = document.querySelector('[data-lista]')

function printQuotation(name, value){
    list.innerHTML = ''

    for(let multiplier = 1; multiplier <= 1000; multiplier *= 10){
        const listItem = document.createElement('li')
        listItem.innerHTML = `${multiplier} ${name}: R$${(value * multiplier).toFixed(2)}`
        list.appendChild(listItem)
    }
}

export default printQuotation