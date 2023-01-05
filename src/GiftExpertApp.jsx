import React, { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //console.log(newCategory);
    //categories.push(newCategory);
    //setCategories(categories => [...categories, "Valorant"])
    setCategories((cat) => [...cat, newCategory]);
  };

  return (
    <>
      <div className="contenedor">
        {/*Titulo */}
        <h1>GiftExpertApp</h1>

        {/*input*/}
        <AddCategory
          //setCategories={setCategories}
          onNewCategory={(event) => onAddCategory(event)}
        />

        {/* Listado de gift*/}

   
          {categories.map((category) => (
            <GifGrid
             key={category}
             category={category}/>
          ))}
    
      </div>
    </>
  );
};
