/* Créez deux objets représentant des employés. L'un contient les informations de base (nom, poste), et l'autre contient des informations supplémentaires (salaire, date de naissance).  */

/* Utilisez Object.assign() pour fusionner ces deux objets en un seul. */

/* Ensuite, créez un autre objet contenant l'adresse postale de l'employé avec les propriétés suivantes :
street (rue)
city (ville)
zipcode (code postal) */

/* Utilisez l'opérateur spread (...) pour ajouter l'adresse postale à l'objet de l'employé, puis affichez l'objet final combiné qui contient à la fois les informations personnelles et l'adresse de l'employé.
 */

const obj1 = {
  nom: "jean",
  poste: "info",
};
const obj2 = {
  slaire: 4,
  naissance: 1985,
};

const cible = {};
Object.assign(cible, obj1, obj2);

const obj3 = {
  rue: "de la paix",
  ville: "paris",
  codpos: "75000",
};

const merged = {
  ...cible,
  ...obj3,
};

console.log(merged);

// console.log(cible);
