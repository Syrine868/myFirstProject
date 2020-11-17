import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  parmurl = "";
  parmur = "";

  constructor(private activatedroute: ActivatedRoute) {    
}

  ngOnInit(): void {
    /*this.activatedroute.paramMap .subscribe
(result => this.parmurl=result.get('id'));*/
    this.activatedroute.paramMap.subscribe(result => {
      this.parmurl = result.get('nom') ,
        this.parmur = result.get('capacite')
    });
    console.log(this.parmurl);
    console.log(this.parmur);
  }

}
