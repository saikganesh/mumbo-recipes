import recipesSagas from "./recipesSagas"

const recipesTypes = {
    fetchRecipesStart :'fetchRecipesStart',
    fetchRecipesSuccess :'fetchRecipesSuccess',
    fetchRecipesFailure :'fetchRecipesFailure',

    setSearchTerm : 'setSearchTerm'
}

export default recipesTypes