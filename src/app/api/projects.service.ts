import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Project } from '../models/projects';
import { environment } from '../../environments/environment';

@Injectable()
export class ProjectsService {

  readonly endpoint = `${environment.apiUrl}projects`;
  projects: Observable<Project[]>;
  test: Project[];

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    this.projects = this.http.get<Project[]>(this.endpoint);
    return this.projects;
  }


}