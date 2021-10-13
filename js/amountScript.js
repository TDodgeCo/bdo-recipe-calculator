document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault()
  var theRecipe = document.getElementById('recipeSelect').value
  var theIngredient = document.getElementById('ingredientSelect').value
  var theAmount = document.getElementById('amountSelect').value

  document.getElementById('ingList').classList.remove('hide-el')
  document.getElementById('instructions').classList.toggle('hide-el')
  calcIngredients(theRecipe, theIngredient, theAmount)
})
