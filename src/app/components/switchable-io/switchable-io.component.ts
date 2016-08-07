import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-switchable-io',
  templateUrl: 'app/components/switchable-io/switchable-io.component.html'
})

export class SwitchableIOComponent {
  @Input() value: string;
  @Input() editable: boolean;
}
