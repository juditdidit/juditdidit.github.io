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

    /**
     * Get project that matches the slug given
     */
    getProjectBySlug(slug: string): Project {
        const project = PROJECT.find(project => project.slug === slug);
        return project || PROJECT[0];
    }

    /**
     * Get all projects that fit the given category,
     * and any projects under the "shared" category.
     */
    getProjectsByPortfolio(category: string): Project[] {
        let projects: Project[] = [];
        PROJECT.find(project => {
            if (project.category === category) {
                projects.push(project);
            } else if (project.category === 'shared') {
                projects.push(project);
            }
        });
        return projects;
    }
}
