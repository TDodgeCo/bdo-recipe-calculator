/* RECIPE SELECT STUFF */

var recipeOptions = Object.keys(recipes[0]).sort()

function makeIngredientOptions(array) {
    // Create the select element:
    var list = document.createElement('select');
    list.setAttribute('id', 'recipeSelect')
    list.setAttribute('style', 'max-width: 200px;')
    
    for(var i = 0; i < array.length; i++) {
        // Create the option item:
        var item = document.createElement('option');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Set it's name attribute
        item.setAttribute("value", array[i]);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of recipeOptions[0] to #recipeInput:
document.getElementById('recipeInput').appendChild(makeIngredientOptions(recipeOptions));

/* INGREDIENT SELECT STUFF */
