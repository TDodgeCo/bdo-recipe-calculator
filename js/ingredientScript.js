var selectedRecipe = document.getElementById('recipeSelect').value;
console.log(selectedRecipe)
var ingOptions = recipes[0][selectedRecipe]

// Listen for recipe input changes and update the DOM accordingly
document.getElementById("recipeSelect").addEventListener('input', function() {
  var element = document.getElementById("ingredientSelect");
  element.parentNode.removeChild(element);

  var selectedRecipe = document.getElementById('recipeSelect').value;
  var ingOptions = recipes[0][selectedRecipe]
  document.getElementById('ingredientInput').appendChild(makeIngredientOptions(ingOptions));
})

function makeIngredientOptions(array) {
    var list = document.createElement('select');
    list.setAttribute('id', 'ingredientSelect')
    for(var i = 0; i < array.length; i++) {
        var item = document.createElement('option');
        item.appendChild(document.createTextNode(array[i].name));
        item.setAttribute("name", array[i].name);
        list.appendChild(item);
    }
    return list;
}
document.getElementById('ingredientInput').appendChild(makeIngredientOptions(ingOptions));
