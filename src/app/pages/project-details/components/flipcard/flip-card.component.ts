import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../models/projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})

export class FlipCardComponent implements OnInit {
  @Input() project: Project;

  constructor(private router: Router) {
  }

  ngOnInit() { }

  openProjectEditPage(project: Project) {
    this.router.navigate(['app/edit-project'],
      { queryParams:
          {
            "project": JSON.stringify(project)
          }
      }
    );
  }
}