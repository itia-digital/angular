import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsComponent } from './components.component';
import { ComponentsRouting } from './components.routing';
import { IDGMatModule } from '@idg/mat';

@NgModule({
    declarations: [ComponentsComponent],
    imports: [CommonModule, IDGMatModule, ComponentsRouting]
})
export class ComponentsModule {}