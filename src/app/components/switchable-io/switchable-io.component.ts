import { Component, Input }    from '@angular/core';

@Component({
  selector: 'as-switchable-io',
  templateUrl: 'app/components/switchable-io/switchable-io.component.html',
  providers: [],  // Do we need any?
  directives: []  // Do we need any?
})

export class SwitchableIOComponent {
  @Input() value: string;
  @Input() editable: boolean;
}