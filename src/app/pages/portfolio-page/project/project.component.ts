import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/data/project-data';
import { ProjectService } from 'src/data/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
    project!: Project;
    subscription$: Subscription = new Subscription;

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.subscription$ = this.route.params.subscribe(param => {
            this.project = this.projectService.getProjectBySlug(param['slug']);
        });
    }

    ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }
}
