import { Component } from '@angular/core';
import { Project } from 'src/data/project-data';
import { ProjectService } from 'src/data/project.service';

@Component({
    selector: 'app-web',
    templateUrl: './web.component.html',
})
export class WebComponent {
    projects: Project[];

    constructor(private projectService: ProjectService) {
        this.projects = this.projectService.getProjectsByPortfolio('web');
    }
}
