import React from 'react'

import SearchBar from '../../components/searchBar/SearchBar'
import RecipesList from '../../components/recipesList/RecipesList'

class HomePage extends React.Component
{
    render() {
        return (
            <div>
                <SearchBar />
                <RecipesList />
            </div>
        )
    }
}

export default HomePage