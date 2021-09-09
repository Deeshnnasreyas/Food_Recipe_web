import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import FilteredList from './FilteredList';
import "./Hero.scss";

const MenuList = () => {
    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getallMenu();
        getallCategory();
    }, []);
    // Api call for listing full meals
    async function getallMenu() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        const respone = await fetch(API_URL);
        const data = await respone.json();
        setMenu(data.meals);
        setLoading(false);
    }

    //Api call for List all meal categories
    async function getallCategory() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
        const response = await fetch(API_URL);
        const Categorydata = await response.json();
        //   console.log("Category data",Categorydata.categories);
        setCategory(Categorydata.categories);
    }

    return (
        <div>
            <Hero />
            {!loading == true ? <SpecialDishes specialmenuSnd={menu} /> :
                <div className="loader"> <h1>Loading........</h1></div>}
            {!loading == true ? <FilteredList categorydataSnd={category} allMenus={menu} /> : null}
        </div>
    )
}
export default MenuList;