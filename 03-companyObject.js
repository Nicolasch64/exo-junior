/*  Écrivez une fonction employesParPoste qui prend l'objet entreprise et un poste en paramètre et retourne un tableau des noms des employés occupant ce poste. 

Instructions :
1) Créer un objet : 
L'objet entreprise doit contenir les propriétés suivantes :

- nom (string) : Le nom de l'entreprise (par exemple, "TechCorp").
- secteur (string) : Le secteur d'activité de l'entreprise (par exemple, "Technologie").
- adresse (object) : Un objet contenant les informations de l'adresse de l'entreprise avec les propriétés suivantes :
        * rue (string) : L'adresse de la rue (par exemple, "123 rue de l'Innovation").
        * ville (string) : La ville où l'entreprise est située (par exemple, "Paris").
        * codePostal (string) : Le code postal (par exemple, "75000").
    - employes (array) : Un tableau d'objets représentant les employés de l'entreprise. Chaque employé possède les propriétés suivantes :
        *nom (string) : Le nom de l'employé (par exemple, "Alice").
        *poste (string) : Le poste de l'employé (par exemple, "Développeur", "Designer", etc.).
        *salaire (number) : Le salaire de l'employé (par exemple, 50000).
*/

/* Ajoutez au moins 3 employés différents dans la propriété employes, chacun avec un nom, un poste et un salaire. */

/* Testez votre objet en affichant dans la console le nom de l'entreprise et l'adresse complète. */

// Affichage du nom de l'entreprise et de son adresse complète
// console.log(entreprise.nom); // TechCorp
// console.log(entreprise.adresse.rue); // 123 rue de l'Innovation
// console.log(entreprise.adresse.ville); // Paris
// console.log(entreprise.adresse.codePostal); // 75000

const entreprise = {
  nom: "stark",
  secteur: "Technologie",

  adresse: {
    rue: "123 rue des champions",
    ville: "beziers",
    codepostal: "0001",
  },
  employes: [
    {
      nom: "jean",
      poste: "balayeur",
      salaire: 20,
    },

    { nom: "corine", poste: "chiante", salaire: 10 },

    { nom: "bob", poste: "rentier", salaire: 200 },
  ],
};

console.log("Nom de l'entreprise : ", entreprise.nom);
console.log(entreprise.adresse.rue);
console.log(entreprise.adresse.ville);
console.log(entreprise.adresse.codepostal);

entreprise.employes.forEach((carotte) => {
  console.log(carotte);
});
