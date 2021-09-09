import React from 'react';
const maxSpecialdish = 8;

const SpecialDishes = ({ specialmenuSnd }) => {
    //mapping of menu 
    const specialMenus = specialmenuSnd.map((items, index) => {
        if (index < maxSpecialdish) {
            return (
                <li key={items.idMeal}><img className="br" src={items.strMealThumb} alt={items.strMealThumb} />
                    <h4>{items.strMeal}</h4>
                    <h5>{items.strCategory}</h5>
                </li>
            );
        }

    });
    return (
        <section className="special-dishes">
            <div className="container">
                <div className="special-dishes-content text-center">
                    <h1>Our Special dishes</h1>
                    <p>The flavor of your food is what most customers focus on when they are deciding what to eat. How you present the dishes on your menu can help build anticipation, and a good menu description could even convince a hesitant customer to try something new. With this in mind, it's important to be precise and thorough when choosing words to describe your food's flavor.
                    </p>
                </div>
                <div className="special-dishes-list">
                    <ul className="flex flex-wrap gap">
                        {/*  Special dishes come here */}
                        {specialMenus}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default SpecialDishes;