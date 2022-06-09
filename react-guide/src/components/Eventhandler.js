import React from "react";

//a demonstration of event handle
//you can pass in props 



const SelectCategories = ( {option1Value, changeCategory}) => {
    

    return (
        <>
            <label htmlFor="categories">Filter By</label>
            <select id="category" changeCategory={changeCategory}>
                <option value={option1Value}>All</option>
                <option value="accessories">Accessories</option>
                <option value="sunglasses">Sunglasses</option>
            </select>
        </>
    );
};

export default SelectCategories;