import { Component } from '@angular/core';
import { Project } from 'src/data/project-data';
import { ProjectService } from 'src/data/project.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
})
export class PortfolioPageComponent {
    projects: Project[];

    constructor(private projectService: ProjectService) {
        this.projects = this.projectService.getAllProjects();
    }
}
