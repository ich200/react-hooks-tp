import { useState, useEffect } from "react";

// TODO: Exercice 3.1 - Créer le hook useDebounce
// TODO: Exercice 3.2 - Créer le hook useLocalStorage

const useProductSearch = (searchTerm) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // TODO: Exercice 4.2 - Ajouter l'état pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);

  const fetchProducts = async (currentPage) => {
    try {
      // TODO: Exercice 4.2 - Modifier l'URL pour inclure les paramètres de pagination
      const skip = (currentPage - 1) * limit;
      let url = `https://api.daaif.net/products?limit=${limit}&skip=${skip}`;

      // Add search term to the URL if it exists
      if (searchTerm) {
        url = `https://api.daaif.net/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("Erreur réseau");
      const data = await response.json();
      setProducts(data.products);
      setTotalItems(data.total);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, searchTerm]); // TODO: Exercice 4.2 - Ajouter les dépendances pour la pagination

  // TODO: Exercice 4.1 - Ajouter la fonction de rechargement
  const reloadProducts = async () => {
    fetchProducts(currentPage, searchTerm);
  };

  // TODO: Exercice 4.2 - Ajouter les fonctions pour la pagination
  const nextPage = () => {
    if (currentPage < Math.ceil(totalItems / limit)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    products,
    loading,
    error,
    // TODO: Exercice 4.1 - Retourner la fonction de rechargement
    reloadProducts,
    // TODO: Exercice 4.2 - Retourner les fonctions et états de pagination
    totalPages: Math.ceil(totalItems / limit),
    currentPage,
    nextPage,
    previousPage,
  };
};

export default useProductSearch;
