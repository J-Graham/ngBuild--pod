import { Component } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    faTwitter = faTwitter;
    constructor() {}
}
