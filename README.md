# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :

```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :

```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :

```bash
npm install
```

4. Lancer l'application :

```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :

1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets

#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici

_Votre réponse pour l'exercice 1 :_

```
Nous avons modifié le composant ProductSearch pour qu'il envoie le terme de recherche à un hook personnalisé useDebounce.

Le hook useDebounce retarde l'exécution de la fonction de recherche pour éviter de faire trop de requêtes à l'API.

Lorsque l'utilisateur saisit un terme de recherche, celui-ci est d'abord stocké dans l'état local, puis après un délai de 500ms, il est envoyé à la fonction onSearch.

[Ajoutez vos captures d'écran]
```

### Exercice 2 : Context et Internationalisation

#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

_Votre réponse pour l'exercice 2 :_

```
Nous avons créé un LanguageContext pour gérer la langue de l'application.

Nous avons ajouté un sélecteur de langue dans le composant App qui permet à l'utilisateur de choisir entre le français et l'anglais.

La principale difficulté était de comprendre comment utiliser correctement le contexte pour gérer la langue. La solution a été de créer un contexte séparé pour la langue et de l'utiliser dans les composants nécessaires.

[Ajoutez vos captures d'écran]
```

### Exercice 3 : Hooks Personnalisés

#### Objectif : Créer des hooks réutilisables

- [ ] 3.1 Créer le hook useDebounce
- [ ] 3.2 Créer le hook useLocalStorage
- [ ] 3.3 Documenter votre solution ici

_Votre réponse pour l'exercice 3 :_

```
Nous avons créé un hook useLocalStorage qui permet de stocker des données dans le localStorage et de les récupérer lors du chargement de la page.

Ce hook peut être utilisé pour persister des préférences utilisateur, comme le thème ou la langue.

La principale difficulté était de gérer les erreurs potentielles lors de l'accès au localStorage. La solution a été de wrapper les appels au localStorage dans un bloc try-catch.

[Ajoutez vos captures d'écran]
```

### Exercice 4 : Gestion Asynchrone et Pagination

#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_

```
Nous avons ajouté un bouton de rechargement dans le composant ProductList pour permettre à l'utilisateur de recharger la liste des produits.

Nous avons implémenté la pagination en modifiant le hook useProductSearch pour gérer les pages et en ajoutant des contrôles de pagination dans le composant ProductList.

La principale difficulté était de gérer correctement les états de pagination et de s'assurer que les requêtes à l'API étaient correctement synchronisées avec l'état local. La solution a été de bien structurer le hook useProductSearch pour gérer les pages et les états de chargement

[Ajoutez vos captures d'écran]
```

## Rendu

- Ajoutez l'URL de votre dépôt Github dans **Classroom** et envoyer la réponse dès le démarage de votre projet.
- Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran.
- Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.
