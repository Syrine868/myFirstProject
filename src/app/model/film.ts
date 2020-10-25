export default class Film {

  nom: string;
  duree: number;
  categorie: string;

  constructor()
  {

   };

  getNom(): string{
    return this.nom;
  }


  getDuree(): number{
    return this.duree;
  }


  getCategorie(): string{
    return this.categorie;
  }

  setNom(nom: string) {
    this.nom = nom;
  }

  setDuree(duree: number) {
    this.duree = duree;
  }

  setCategorie(categorie: string) {
    this.categorie = categorie;
   }

}
