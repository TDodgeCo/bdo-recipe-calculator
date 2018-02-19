var recipes = [{
  'fish': [
    {name: 'fisheyes', quant: 2},
    {name: 'butter', quant: 6},
    {name: 'salt', quant: 2},
    {name: 'cherry', quant: 3}
  ],
  'ipa beer': [
    {name: 'carp', quant: 5},
    {name: 'butterfly', quant: 2},
    {name: 'pepper', quant: 3},
    {name: 'milk', quant: 4}
  ],
  'dressing': [
    {name: 'egg', quant: 1},
    {name: 'mineral water', quant: 1},
    {name: 'olive oil', quant: 2}
  ]
}]

function calcIngredients (recipe, ing, amount) {
  let quants = recipes[0][recipe]
  for (i = 0; i < quants.length; i++) {
    if (quants[i].name == ing) {
      let amt = Math.floor(amount / quants[i].quant) 
      console.log('recipe can be crafted ' + amt + ' times')
      for (j = 0; j < quants.length; j++) {
        let amt2 = Math.floor(amt * quants[j].quant)
        console.log('You will require ' + amt2 + ' ' + quants[j].name)
      }
    }
  }
}


calcIngredients('ipa beer', 'pepper', 1700)

// console.log(recipes[0].beer)

// function getRecipe (recipe) {
//   let quants = (recipes[0][recipe])
//   for (n in quants) {
//     console.log(quants[n].quant)
//   }
// }
