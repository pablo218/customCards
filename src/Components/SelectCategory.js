import React, { useState, useContext } from "react";
//import SearchIcon from '@material-ui/icons/Search';
import Button from '../Shared/UI/Button'
import { Language } from "../Shared/Context";

import './SelectCategory.scss'


const SelectCategory = ({ setCategory, categoryLength }) => {

  const [inputValue, setInputValue] = useState("");

  const eng = useContext(Language).english;


  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategory(inputValue)
      setInputValue("");
    }
  };

  return (
    <form
      className="SelectCategory"
      onSubmit={submitHandler}
    >
      <div className="SelectCategory__searchContanier">
        <input
          className="SelectCategory__search-box"
          placeholder={eng ? 'Category... e.g: "dogs" "birds" "christmas"' : 'Categoria... v.g: "perros" "aves" "navidad"'}
          type="search"
          aria-label="Search"
          name="category"
          value={inputValue}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>

      <Button clicked={submitHandler}>{eng ? "search" : "Buscar"}</Button>


    </form>
  );
};

export default SelectCategory;


