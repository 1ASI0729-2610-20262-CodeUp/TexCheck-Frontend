import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Footer content component displayed at the bottom of the layout.
 */
@Component({
  selector: 'app-footer-content',
  imports: [CommonModule],
  standalone: true,
  template: `
    <footer class="footer">
      <p>&copy; 2024 TexCheck. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #f5f5f5;
      margin-top: 40px;
      border-top: 1px solid #ddd;
      font-size: 14px;
      color: #666;
    }
  `]
})
export class FooterContent {}
