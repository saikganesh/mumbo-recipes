import React from 'react'
import './RecipesList.scss'

import RecipeCard from '../recipeCard/RecipeCard'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {recipesSelector,searchTermSelector} from '../../redux/recipes/recipesSelectors'

class RecipesList extends React.Component
{

    filterRecipes = () => {
        const {recipes,searchTerm} = this.props
        return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    render() {
        const filteredRecipes = this.filterRecipes()
        return (
            <div className='recipesList'>
                <div className='recipesListHeading'>
                    <p>CATEGORY</p>
                    <h1>Pizza & Noodles</h1>
                </div>
                <div className='recipesListContainer'>
                    {
                        filteredRecipes.map((recipe,index) => {
                            return <RecipeCard recipe={recipe} key={recipe.id} isOdd={index%2}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    recipes : recipesSelector,
    searchTerm : searchTermSelector
})

export default connect(mapStateToProps)(RecipesList)