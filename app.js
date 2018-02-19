const grainQuant = document.getElementById('grainQuant')
const agentQuant = document.getElementById('agentQuant')
const sugarQuant = document.getElementById('sugarQuant')
const waterQuant = document.getElementById('waterQuant')
const completed = document.getElementById('completed')

document.getElementById('submit').addEventListener('click', alertIngredient)

function setIngredient () {
    let ing = document.getElementById('ingredientSelect').value;
    return ing;
}

function setAmount () {
    let amount = document.getElementById('amountInput').value;
    return amount;
}

function alertIngredient () {
    let ing = setIngredient()
    let amount = setAmount()

    if (ing == 'grain') {
        beerAmount = Math.floor(amount / 5)
        grainQuant.innerHTML = amount
        agentQuant.innerHTML = beerAmount * 2
        sugarQuant.innerHTML = beerAmount * 1
        waterQuant.innerHTML = beerAmount * 6
        completed.innerHTML = "You can complete the recipe " + beerAmount + " times." 
        console.log(beerAmount)
    }
    if (ing == 'agent') {
        beerAmount = Math.floor(amount / 2)
        grainQuant.innerHTML = beerAmount * 5
        agentQuant.innerHTML = amount
        sugarQuant.innerHTML = beerAmount * 1
        waterQuant.innerHTML = beerAmount * 6
        completed.innerHTML = "You can complete the recipe " + beerAmount + " times."       
        console.log(beerAmount)
    }
    if (ing == 'sugar') {
        beerAmount = Math.floor(amount / 1)
        grainQuant.innerHTML = beerAmount * 5
        agentQuant.innerHTML = beerAmount * 2
        sugarQuant.innerHTML = amount
        waterQuant.innerHTML = beerAmount * 6
        completed.innerHTML = "You can complete the recipe " + beerAmount + " times."    
        console.log(beerAmount)
    }
    if (ing == 'water') {
        beerAmount = Math.floor(amount / 6)
        grainQuant.innerHTML = beerAmount * 5
        agentQuant.innerHTML = beerAmount * 2
        sugarQuant.innerHTML = beerAmount * 1
        waterQuant.innerHTML = amount
        completed.innerHTML = "You can complete the recipe " + beerAmount + " times."   
        console.log(beerAmount)
    }
    
}
