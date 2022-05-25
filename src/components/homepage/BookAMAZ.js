import React, { useState } from "react";
import list from "./Books";
import Cards from "./BookCard";
import "./Book.css";


const BookAMAZ = ({ handleClick }) => {
  return (
  
<div className="">
<section className="sizeofcards">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
</div>

   
  );
};

export default BookAMAZ;
