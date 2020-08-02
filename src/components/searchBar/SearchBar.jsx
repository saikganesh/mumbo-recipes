import React from 'react'
import './SearchBar.scss'

import {FiSearch} from 'react-icons/fi'

import {connect} from 'react-redux'
import {setSearchTerm} from '../../redux/recipes/recipesActions'
import { createStructuredSelector } from 'reselect'
import { searchTermSelector } from '../../redux/recipes/recipesSelectors'

class SearchBar extends React.Component
{
    render() {
        const {searchTerm,setSearchTerm} = this.props
        return (
            <div className='searchBar'>
                <div className='searchBarContainer'>
                    <span className='searchBarIcon'>
                        <FiSearch size='20'/>
                    </span>
                    <input 
                        type='text' 
                        className='searchBarText' 
                        placeholder='Search your favourite recipe...'
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    searchTerm : searchTermSelector
})

const mapDispatchToProps = (dispatch) => ({
    setSearchTerm : (searchTerm) => dispatch(setSearchTerm(searchTerm))
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)