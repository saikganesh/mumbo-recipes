import {createSelector} from 'reselect'

const recipesReducerSelector = (state) => state.recipes

export const recipesSelector = createSelector(
    [recipesReducerSelector],
    (recipeReducer) => recipeReducer.recipes
)

export const loadingSelector = createSelector(
    [recipesReducerSelector],
    (recipeReducer) => recipeReducer.loading
)

export const errorSelector = createSelector(
    [recipesReducerSelector],
    (recipeReducer) => recipeReducer.error
)

export const searchTermSelector = createSelector(
    [recipesReducerSelector],
    (recipeReducer) => recipeReducer.searchTerm
)

