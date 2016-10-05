import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule, FormsModule }         from '@angular/forms';

import { DynamicInputDirective } from '../../utils/directives/dynamic-input/dynamic-input.directive';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule ],
  declarations: [ DynamicInputDirective ],
  exports:      [ DynamicInputDirective,
    CommonModule, FormsModule ]
})
export class SharedModule { }