import React from 'react';
import RecipeCard from './RecipeCard';

const recipes = [
  {
    title: 'Spaghetti Bolognese',
    description: 'A classic Italian pasta dish with rich meat sauce.',
    image: 'https://t3.ftcdn.net/jpg/03/00/74/92/360_F_300749252_rQnob8AxgSAqkAGfNTzhxt94ypz010cj.jpg',
    details: 'Spaghetti Bolognese is a traditional Italian dish that features a hearty meat sauce served over spaghetti. The sauce is made with ground beef, tomatoes, onions, garlic, and a mix of Italian herbs. This dish is perfect for a family dinner and can be enjoyed with a side of garlic bread and a fresh salad.'
  },
  {
    title: 'Chicken Curry',
    description: 'A spicy and flavorful Indian chicken curry.',
    image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
    details: 'Chicken Curry is a popular dish in Indian cuisine. This recipe features tender chicken pieces simmered in a spicy and aromatic sauce made with tomatoes, onions, garlic, ginger, and a blend of traditional Indian spices such as cumin, coriander, and turmeric. Serve it with steamed rice or naan for a complete meal.'
  },
  {
    title: 'Vegetable Stir Fry',
    description: 'A quick and healthy vegetable stir fry.',
    image: 'https://t4.ftcdn.net/jpg/02/55/72/09/360_F_255720974_LwbSsbWusIrwvB8LBaMZBmSkBjkdVkCg.jpg',
    details: 'Vegetable Stir Fry is a quick and healthy meal option that is packed with fresh vegetables. This dish typically includes bell peppers, broccoli, carrots, and snap peas stir-fried in a light soy sauce and garlic sauce. It’s a versatile dish that can be customized with your favorite veggies and served over rice or noodles.'
  },
  {
    title: 'Beef Tacos',
    description: 'Delicious Mexican-style beef tacos.',
    image: 'https://img.freepik.com/free-photo/fresh-beef-taco-wooden-table-with-sauce-generative-ai_188544-8042.jpg',
    details: 'Beef Tacos are a staple in Mexican cuisine, featuring seasoned ground beef served in a crispy or soft tortilla. Toppings can include shredded lettuce, diced tomatoes, cheese, sour cream, and salsa. These tacos are perfect for a quick and satisfying meal and can be customized to suit individual preferences.'
  },
  {
    title: 'Caesar Salad',
    description: 'A classic Caesar salad with creamy dressing.',
    image: 'https://media.istockphoto.com/id/534139231/photo/healthy-grilled-chicken-caesar-salad.jpg?s=612x612&w=0&k=20&c=TR_sE5S5ChmjFywg3dh_J5V_ha-BcwgTU26BvsgbsjY=',
    details: 'Caesar Salad is a popular salad made with romaine lettuce, croutons, Parmesan cheese, and a creamy Caesar dressing. The dressing is typically made with garlic, anchovies, lemon juice, Dijon mustard, Worcestershire sauce, and olive oil. This salad is a perfect side dish or can be enjoyed as a light meal.'
  },
  {
    title: 'Chocolate Chip Cookies',
    description: 'Homemade chocolate chip cookies.',
    image: 'https://img.freepik.com/premium-photo/chocolate-chip-cookies_786587-1148.jpg',
    details: 'Chocolate Chip Cookies are a favorite treat for many, featuring a soft and chewy texture with melted chocolate chips. The dough is made with butter, sugar, eggs, vanilla extract, flour, baking soda, and a pinch of salt. These cookies are perfect for any occasion and are loved by kids and adults alike.'
  },
];

export default function Main() {
  return (
    <main className="main container">
      <h1>Recipe Book</h1>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
