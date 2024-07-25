import React, { useState } from 'react';

export default function RecipeCard({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <p className="details">{recipe.details}</p>}
    </div>
  );
}
