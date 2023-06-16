import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { GraphicsComponent } from './pages/portfolio-page/graphics/graphics.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ProjectComponent } from './pages/portfolio-page/project/project.component';
import { WebComponent } from './pages/portfolio-page/web/web.component';

const routes: Routes = [
    { path: '', component: IntroPageComponent },
    { path: 'portfolio', component: PortfolioPageComponent },
    { path: 'portfolio/web', component: WebComponent },
    { path: 'portfolio/web/:slug', component: ProjectComponent },
    { path: 'portfolio/graphics', component: GraphicsComponent },
    { path: 'portfolio/graphics/:slug', component: ProjectComponent },
    { path: 'about', component: AboutPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
