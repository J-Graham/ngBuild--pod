import { Component } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    navbarOpen = false;
    faTwitter = faTwitter;
    toggleNavbar(): void {
        this.navbarOpen = !this.navbarOpen;
    }
}
