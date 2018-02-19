document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault()
  var theRecipe = document.getElementById('recipeSelect').value
  var theIngredient = document.getElementById('ingredientSelect').value
  var theAmount = document.getElementById('amountSelect').value

  calcIngredients(theRecipe, theIngredient, theAmount)
})