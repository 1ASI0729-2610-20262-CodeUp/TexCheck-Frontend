import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Home view for the shared presentation layer.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
