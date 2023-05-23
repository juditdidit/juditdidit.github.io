import { Injectable } from '@angular/core';
import { PROJECT, Project } from './project-data';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor() { }

    getAllProjects(): Project[] {
        return PROJECT;
    }

    getProjectBySlug(slug: string): Project {
        const project = PROJECT.find(project => project.slug === slug);
        return project || PROJECT[0];
    }

    getProjectsByPortfolio(portfolio: string): Project[] {
        let projects: Project[] = [];
        PROJECT.find(project => {
            if (project.portfolio === portfolio) {
                projects.push(project);
            } else if (project.portfolio === 'shared') {
                projects.push(project);
            }
        });
        return projects;
    }
}
