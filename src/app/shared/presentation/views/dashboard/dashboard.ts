import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Dashboard view — fleet overview (placeholder).
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {}
