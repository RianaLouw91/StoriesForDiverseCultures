import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ProjectsService } from '../../api/projects.service';

@Component({
  selector: 'projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  projects: Observable<Project[]>;
  cols: any = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
    { field: 'pages', header: 'Pages' }
  ];

  constructor(private projectService: ProjectsService, private router: Router) {
    this.projects = projectService.getProjects();
  }

  ngOnInit() {
  }

  openProjectDetails(rowData: Project) {
    this.router.navigate(['app/project-details'],
      { queryParams:
          {
            "project": JSON.stringify(rowData)
          }
      }
    );
  }
}