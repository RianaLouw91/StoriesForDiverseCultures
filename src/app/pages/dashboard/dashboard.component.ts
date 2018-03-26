import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../../api/projects.service';
import { Project } from '../../models/projects';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  // projects: Observable<Project[]>;
  // cols: any = [
  //   { field: 'id', header: 'ID' },
  //   { field: 'name', header: 'Name' },
  //   { field: 'description', header: 'Description' },
  //   { field: 'pages', header: 'Pages' }
  // ];

  // constructor(private projectService: ProjectsService, private router: Router) {
  //   this.projects = projectService.getProjects();
  // }

  // ngOnInit() {
  // }
  //
  // openProjectDetails(rowData: Project) {
  //   this.router.navigate(['app/project-details'],
  //     { queryParams:
  //         {
  //           "project": JSON.stringify(rowData)
  //         }
  //     }
  //   );
  // }

  // send values through as separetly defined properties
  // openProjectDetails(rowData: Project) {
  //   this.router.navigate(['app/project-details'],
  //     { queryParams:
  //         {
  //           "id": rowData.id,
  //           "name": rowData.name,
  //           "description": rowData.description,
  //           "culture": rowData.culture
  //         }
  //     }
  //   );
  // }
}