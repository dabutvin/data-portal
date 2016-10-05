import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'dynamic-input',
    templateUrl: 'dynamic-input.directive.html'
})
export class DynamicInputDirective {
    id: string;
    @Input() type: 'textbox' | 'dropdown' | 'checkbox';
    @Input() editable: boolean;
    @Input() value: string | boolean;
    @Input() options: Array<string>;
    @Input() label: string;
    @Input() required: boolean;

    constructor() {
        this.id = this.randomId(5);
        this.editable = false;
    }

    randomId(length: number): string {
        let result: string = '';
        while (result.length < length) {
            let n = Math.floor(Math.random() * 62);
            if (n < 10) {
                result += n.toString();
                break;
            }
            if (n < 36) {
                result += String.fromCharCode(n + 55);
                break;
            }
            result += String.fromCharCode(n + 61);
        }
        return result;
    }

    get isValid(): boolean {
        return true;
    }
}