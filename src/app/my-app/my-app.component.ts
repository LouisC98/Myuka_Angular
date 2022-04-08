import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {
  
  produit = new FormControl("")

  public titre : string;
  public code : number;
  public  marque : string;
  public photo : string;
  public ingredients : string;
  public valNutri : string;
  public nova : string;
  public palme: string;
  public nutriscoreG : string;
  public nutriscoreS: number;
  public quantity: string;
  public packaging: string;
  public categories: string;
  public origins: string;
  public countries: string;
  

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
  }

  public afficherProduit() {
    console.log("Code produit : "+this.produit.value)
    return this.http.get('https://world.openfoodfacts.org/api/v0/product/'+this.produit.value)
    .subscribe((data) => {
      if(Object.values(data)[1] === 0 || Object.values(data)[2] == "product not found") {
        return alert('Produit non trouvé')
      }
      this.code = Object.values(data)[0];
      this.titre = Object.values(data)[1]["generic_name"];
      this.marque = Object.values(data)[1]["brands"];
      this.photo = Object.values(data)[1]["image_url"];
      this.ingredients = (Object.values(data)[1]["ingredients_text"]);
      this.valNutri = Object.values(data)[1]["image_nutrition_url"];
      this.nova = Object.values(data)[1]["nova_group"]; 
      if(Object.values(data)[1]["ingredients_from_or_that_may_be_from_palm_oil_n"] === 0) {
        this.palme = "Ce produit ne contient pas d'huile de palme"
      } else {
        this.palme = "Ce produit contient de l'huile de palme"
      }
      this.nutriscoreG = (Object.values(data)[1]["nutriscore_grade"]).toUpperCase()
      this.nutriscoreS = Object.values(data)[1]["nutriscore_score"]
      this.quantity = Object.values(data)[1]["quantity"]
      this.packaging = Object.values(data)[1]["packaging"]
      this.categories = Object.values(data)[1]["categories"]
      this.origins = Object.values(data)[1]["origins"]
    })
  }
  
}

