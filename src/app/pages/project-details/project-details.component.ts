import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/projects';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'project-details',
  templateUrl: 'project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent {
  formtest: any;


  id: any;
  name: any;
  description: any;
  culture: any;
  project: Project;
  startDate: Date;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.project = JSON.parse(params["project"])
    });

    // console.log('Proj Received: ', this.project);

    // this.route.queryParams.subscribe(params => {
    //   this.id = params["id"];
    //   this.name = params["name"];
    //   this.description = params["description"];
    //   this.culture = params["culture"];
    // });
    //
    // console.log('Id Received: ', this.id);
    // console.log('Id Received: ', this.name);
    // console.log('Id Received: ', this.description);
    // console.log('Id Received: ', this.culture);
  }
}