import React from 'react';
import RecipePage from './RecipePage';
import Nav from './Nav';
import RecipeCardContainer from './RecipeCardContainer';
import RecipeCard from './RecipeCard';

const App: React.FC= () => {

  return (
    <main>
      <h1>Quick Fix Landing Page</h1>
      <RecipePage />
      <Nav />
      <RecipeCardContainer />
      <RecipeCard />
    </main>
  )
}

export default App;
