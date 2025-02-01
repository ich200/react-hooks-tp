import { useState, useEffect } from "react";

// TODO: Exercice 3.1 - Créer le hook useDebounce
// TODO: Exercice 3.2 - Créer le hook useLocalStorage

const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // TODO: Exercice 4.2 - Ajouter l'état pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (currentPage) => {
    try {
      // TODO: Exercice 4.2 - Modifier l'URL pour inclure les paramètres de pagination
      const skip = (currentPage - 1) * limit;
      const response = await fetch(
        "https://api.daaif.net/products?limit=${limit}&skip=${skip}&delay=1000"
      );
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
  }, [currentPage]); // TODO: Exercice 4.2 - Ajouter les dépendances pour la pagination

  // TODO: Exercice 4.1 - Ajouter la fonction de rechargement
  const reload = () => {
    fetchProducts(currentPage);
  };
  // TODO: Exercice 4.2 - Ajouter les fonctions pour la pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }

    const previousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    return {
      products,
      loading,
      error,
      // TODO: Exercice 4.1 - Retourner la fonction de rechargement
      reload,
      // TODO: Exercice 4.2 - Retourner les fonctions et états de pagination
      currentPage,
      totalPages,
      nextPage,
      previousPage,
    };
  };
};
export default useProductSearch;
