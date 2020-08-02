import React from 'react';
import './App.css';

import HomePage from './pages/homePage/HomePage'
import DetailsPage from './pages/detailsPage/DetailsPage'

import {Switch,Route} from 'react-router-dom'

import {connect} from 'react-redux'
// import {} from 'reselect'
import {fetchRecipesStart} from './redux/recipes/recipesActions'

class App extends React.Component
{
  render() {
    return (
      <>
        <div className="app">
          <Switch>
            <Route path='/' component={HomePage}/>
            <Route path='/:recipeId' component={DetailsPage}/>
          </Switch>
        </div>
      </>
    );
  }

  componentDidMount()
  {
    const {fetchRecipesStart} = this.props
    fetchRecipesStart()
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRecipesStart : () => dispatch(fetchRecipesStart())
})

export default connect(null,mapDispatchToProps)(App);
