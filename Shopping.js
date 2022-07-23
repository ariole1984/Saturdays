//loop first array
for (let i = 0; i < shoppingList.length; i++) {
    //grab each element on first array
    let shoppingListItem = shoppingList[i]
    //create a variable that keeps track if we found it in the second array
    let similarToFirstArray = false
    //loop through second array
    for (let j = 0; j < cart.length; j++){
      let cartItem = cart[j]
      //check whether the element on the first array exits in the index of the second array
      if (shoppingListItem === cartItem){
        //if it exists then set the variable similarToFirstArray to true
        similarToFirstArray = true
      }
    }
    //if it does not exist in any element of the second array then
    if (similarToFirstArray === false){
      //push it to the final list
      finalList.push(shoppingListItem)
    }
  }
  console.log(finalList)