import { Component } from '@angular/core';
import { Project } from 'src/data/project-data';
import { ProjectService } from 'src/data/project.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
})
export class GraphicsComponent {
    projects: Project[];

    constructor(private projectService: ProjectService) {
        this.projects = this.projectService.getProjectsByPortfolio('graphics');
    }
}
