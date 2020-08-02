import recipesTypes from './recipesTypes'

const initialState = {
    recipes : [],
    loading : false,
    error : '',

    searchTerm : ''
}

const recipesReducer = (state = initialState , action) => {
    const {type,payload} = action

    switch(type)
    {
        case(recipesTypes.fetchRecipesStart):
            return {
                ...state,
                loading : true
            }

        case(recipesTypes.fetchRecipesSuccess):
            return {
                ...state,
                recipes : payload,
                loading : false
            }

        case(recipesTypes.fetchRecipesFailure):
            return {
                ...state,
                error : payload
            }

        case(recipesTypes.setSearchTerm):
            return {
                ...state,
                searchTerm : payload
            }

        default :
            return state
    }

} 

export default recipesReducer