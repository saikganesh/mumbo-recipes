import {all,call} from 'redux-saga/effects'

import recipesSagas from './recipes/recipesSagas'

function* rootSaga()
{
    yield all([call(recipesSagas)])
}

export default rootSaga