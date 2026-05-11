import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FooterContent} from '../footer-content/footer-content';
import {CommonModule} from '@angular/common';

interface SidebarItem {
  label: string;
  link: string;
  icon: string;
  badge?: number;
}

/**
 * Main shell component that hosts top-level navigation and routed content.
 */
@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FooterContent,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  /**
   * Array of main navigation options for the sidebar.
   */
  sidebarItems = signal<SidebarItem[]>([
    {link: '/home', label: 'Dashboard', icon: 'dashboard'},
    {link: '/assets', label: 'Assets', icon: 'inventory_2'},
    {link: '/maintenance', label: 'Maintenance', icon: 'build'},
    {link: '/failures', label: 'Failures', icon: 'warning', badge: 3},
    {link: '/reports', label: 'Reports', icon: 'assessment'}
  ]);

  /**
   * System section items.
   */
  systemItems = signal<SidebarItem[]>([
    {link: '/notifications', label: 'Notifications', icon: 'notifications', badge: 5},
    {link: '/users', label: 'Users', icon: 'people'},
    {link: '/settings', label: 'Settings', icon: 'settings'}
  ]);
}
