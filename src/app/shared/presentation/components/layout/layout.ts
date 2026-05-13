import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {FooterContent} from '../footer-content/footer-content';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {CommonModule, DatePipe} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

interface SidebarItem {
  labelKey: string;
  link: string;
  icon: string;
  badge?: number;
  exact?: boolean;
}

/**
 * Main shell component that hosts top-level navigation and routed content.
 */
@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    DatePipe,
    TranslatePipe,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FooterContent,
    LanguageSwitcher,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  /** Shown in the header (demo clock). */
  readonly headerDate = new Date();

  /** Header bell badge count (shell demo). */
  readonly headerNotificationCount = 8;

  /**
   * Array of main navigation options for the sidebar.
   */
  sidebarItems = signal<SidebarItem[]>([
    {link: '/', labelKey: 'layout.nav.home', icon: 'home', exact: true},
    {link: '/dashboard', labelKey: 'layout.nav.dashboard', icon: 'dashboard', exact: true},
    {link: '/assets', labelKey: 'layout.nav.assets', icon: 'inventory_2'},
    {link: '/maintenance', labelKey: 'layout.nav.maintenance', icon: 'build'},
    {link: '/failures', labelKey: 'layout.nav.failures', icon: 'warning', badge: 3},
    {link: '/reports', labelKey: 'layout.nav.reports', icon: 'assessment'},
  ]);

  /**
   * System section items.
   */
  systemItems = signal<SidebarItem[]>([
    {
      link: '/notifications',
      labelKey: 'layout.system.notifications',
      icon: 'notifications',
      badge: 5,
    },
    {link: '/users', labelKey: 'layout.system.users', icon: 'people'},
    {link: '/settings', labelKey: 'layout.system.settings', icon: 'settings'},
  ]);
}
