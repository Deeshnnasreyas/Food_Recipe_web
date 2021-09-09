import React, { useState } from 'react';
import "./FilteredList.scss";


const FilteredList = (props) => {
    const [allMenus, setallMenus] = useState(props.allMenus);
    const [filteredDishes, setfilteredDishes] = useState([]);
    // Check category & mapping
    const categorySelectedHandler = (category) => {
        console.log("category selected", category);
        const FilteredDishesAre = props.allMenus.filter((items) => {
            return items.strCategory === category
        }).map((items) => {
            return (<li><img src={items.strMealThumb} alt="" />
                <h4>{items.strMeal}</h4>
                <h5>{items.strCategory}</h5>s

            </li>);
        })
        // update the state
        setfilteredDishes(FilteredDishesAre);

    }

    // List all categorydataSnd
    const categorydataSnditems = props.categorydataSnd.map((items) => {
        return (<div key={items.idCategory}>
            <li onClick={() => { categorySelectedHandler(items.strCategory) }}>{items.strCategory}</li>
        </div>);
    });
    return (
        <div className="filter-dishes">
            <div className="container">
                <div className="text-center">
                    <h1>Choose your Dishes</h1>
                    <p>If you choose to describe your dishes, make sure you’re truthful
                        so customers know exactly what to expect and aren’t disappointed.
                        You’ll learn more about how to describe dishes shortly.</p>
                </div>
                {/* list of category */}
                <div className="filterd-dishes">
                    <ul>
                        {categorydataSnditems}
                    </ul>
                </div>
                {/* list of filterd category */}
                <div className="filterd-dishes-results">
                    <ul className="flex flex-wrap gap">
                        {filteredDishes}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FilteredList
