import React, { useState, useContext, useEffect } from "react";
import { LanguageContext, ThemeContext } from "../App";
import useDebounce from "../hooks/useDebounce";

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  const { language } = useContext(LanguageContext);
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (onSearch && typeof onSearch === "function")
      onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const placeholderText =
    language === "fr" ? "Rechercher un produit..." : "Search for a product...";

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={placeholderText}
        className={`form-control ${isDarkTheme ? "bg-dark text-light" : ""}`}
      />
    </div>
  );
};

export default ProductSearch;
