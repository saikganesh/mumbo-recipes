import {takeLatest,all,put,call} from 'redux-saga/effects'

import recipesTypes from './recipesTypes'
import {fetchRecipesSuccess,fetchRecipesFailure} from './recipesActions'


function* fetchRecipesCallback()
{
    try
    {
        const response = yield fetch('http://starlord.hackerearth.com/recipe')
        const  data = yield response.json()
        yield put(fetchRecipesSuccess(data))
    }
    catch(error)
    {
        yield put(fetchRecipesFailure(error))
    }
}


function* fetchRecipesSaga()
{
    yield takeLatest(recipesTypes.fetchRecipesStart,fetchRecipesCallback)
}


function* recipesSagas()
{
    yield all([call(fetchRecipesSaga)])
}

export default recipesSagas