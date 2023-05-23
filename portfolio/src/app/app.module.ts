import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { GraphicsComponent } from './pages/portfolio-page/graphics/graphics.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ProjectComponent } from './pages/portfolio-page/project/project.component';
import { WebComponent } from './pages/portfolio-page/web/web.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/logo/logo.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SiteNavComponent } from './shared/site-nav/site-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroPageComponent,
        PortfolioPageComponent,
        AboutPageComponent,
        SidebarComponent,
        LogoComponent,
        WebComponent,
        GraphicsComponent,
        ProjectComponent,
        FooterComponent,
        SiteNavComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
