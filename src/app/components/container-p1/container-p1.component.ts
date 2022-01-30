import { Component, OnInit } from '@angular/core';
import { Documents } from 'src/app/model/documents.modele';
import { Documents2 } from 'src/app/model/documents2.model';

@Component({
  selector: 'app-container-p1',
  templateUrl: './container-p1.component.html',
  styleUrls: ['./container-p1.component.css']
})
export class ContainerP1Component implements OnInit{

  documents:Documents[];
  documents2:Documents2[];


  constructor (){
    this.documents=[
  {
    TypeDocument:"Fiche de suivi(cr visite)",
    Date:"03/01/2020",
    Libelle:"controle de traitement sommeil",
    destinataire:"Docteur jean louis bernard"
  },
  {
    TypeDocument:"Relever Machine   ",
    Date:"10/032019",
    Libelle:"Fiche de suivi respirtoire",
    destinataire:"Docteur jean louis bernard"
  },
  {
    TypeDocument:"Fiche de suivi(cf)",
    Date:"03/12/2019",
    Libelle:"Fiche de suivi respirtoire",
    destinataire:"Docteur jean louis bernard"
  },
  {
    TypeDocument:"Relever Machine",
    Date:"03/12/2019",
    Libelle:"Courbe Potter Pauline2019 06 29 controle traitement",
    destinataire:"Docteur jean louis bernard"
  },
  {
    TypeDocument:"Relever Machine",
    Date:"03/12/2019",
    Libelle:"Fiche de suivi respirtoire Al du 17/12/2019",
    destinataire:"Docteur jean louis bernard"
  },
  {
    TypeDocument:"Relever Machine",
    Date:"03/12/2019",
    Libelle:"Fiche de suivi respirtoire Al du 14/11/2019",
    destinataire:"Docteur jean louis bernard"
  }
    ];

    this.documents2=[
      {
        TypeDocument2:"DEP ou ordonnance",
        Date2:"07/01/2020",
        Libelle2:"Ordonnance Poitier Pauline 07/01/2020",
        destinataire2:"Docteur jean louis bernard"
      },
      {
        TypeDocument2:"DEP ou ordonnance",
        Date2:"10/01/2019",
        Libelle2:"Ordonnance Poitier Pauline 10/01/2019",
        destinataire2:"Docteur jean louis bernard"
      },
      {
        TypeDocument2:"DEP ou ordonnanc",
        Date2:"03/11/2019",
        Libelle2:"Ordonnance Poitier Pauline 03/11/2019",
        destinataire2:"Docteur jean louis bernard"
      },
      {
        TypeDocument2:"DEP ou ordonnanc",
        Date2:"16/10/2019",
        Libelle2:"Ordonnance Poitier Pauline 16/10/2019",
        destinataire2:"Docteur jean louis bernard"
      }


    ]
  }
  ngOnInit(){
   
  }

  

}
