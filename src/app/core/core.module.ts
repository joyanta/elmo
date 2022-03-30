import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { DemoNavigationComponent } from './components/demo-navigation/demo-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';


const components = [
  AboutComponent,
  NotFoundComponent,
  LayoutComponent,
  HeaderComponent,
  SidenavListComponent,
  DemoNavigationComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LayoutModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
const throwIfAlreadyLoaded = (parentModule: any, moduleName: string) => {
  if (parentModule) {
    throw new Error(`${moduleName} has already loaded. Import module in the top level only.`);
  }
}

