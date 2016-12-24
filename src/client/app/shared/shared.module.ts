import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonsModule, DropdownModule, ModalModule, TabsModule } from 'ng2-bootstrap';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      ButtonsModule.forRoot(),
      DropdownModule.forRoot(),
      ModalModule.forRoot(),
      TabsModule.forRoot()
  ],
  declarations: [ToolbarComponent, NavbarComponent],
  exports: [
      ToolbarComponent,
      NavbarComponent,
      CommonModule,
      FormsModule,
      RouterModule,
      ButtonsModule,
      DropdownModule,
      ModalModule,
      TabsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
