import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from '@ngx-translate/core';

export type DashboardAlertStatus = 'critical' | 'warning' | 'scheduled' | 'resolved';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslatePipe, MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly alertRows: ReadonlyArray<{
    icon: string;
    titleKey: string;
    zoneKey: string;
    status: DashboardAlertStatus;
    timeKey: string;
  }> = [
    {
      icon: 'vibration',
      titleKey: 'dashboard.alerts.items.a1.title',
      zoneKey: 'dashboard.alerts.items.a1.zone',
      status: 'critical',
      timeKey: 'dashboard.alerts.items.a1.time',
    },
    {
      icon: 'thermostat',
      titleKey: 'dashboard.alerts.items.a2.title',
      zoneKey: 'dashboard.alerts.items.a2.zone',
      status: 'warning',
      timeKey: 'dashboard.alerts.items.a2.time',
    },
    {
      icon: 'event',
      titleKey: 'dashboard.alerts.items.a3.title',
      zoneKey: 'dashboard.alerts.items.a3.zone',
      status: 'scheduled',
      timeKey: 'dashboard.alerts.items.a3.time',
    },
    {
      icon: 'check_circle',
      titleKey: 'dashboard.alerts.items.a4.title',
      zoneKey: 'dashboard.alerts.items.a4.zone',
      status: 'resolved',
      timeKey: 'dashboard.alerts.items.a4.time',
    },
    {
      icon: 'bolt',
      titleKey: 'dashboard.alerts.items.a5.title',
      zoneKey: 'dashboard.alerts.items.a5.zone',
      status: 'critical',
      timeKey: 'dashboard.alerts.items.a5.time',
    },
  ];

  alertStatusKey(status: DashboardAlertStatus): string {
    return `dashboard.alerts.status.${status}`;
  }
}
