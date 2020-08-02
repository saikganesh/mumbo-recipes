import recipesTypes from './recipesTypes'

export const fetchRecipesStart = () => ({
    type : recipesTypes.fetchRecipesStart
})

export const fetchRecipesSuccess = (recipies) => ({
    type : recipesTypes.fetchRecipesSuccess,
    payload : recipies
})

export const fetchRecipesFailure = (error) => ({
    type : recipesTypes.fetchRecipesFailure,
    payload : error
})

export const setSearchTerm = (searchTerm) => ({
    type : recipesTypes.setSearchTerm,
    payload : searchTerm
})