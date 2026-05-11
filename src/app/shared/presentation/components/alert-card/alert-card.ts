import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface AlertItem {
  id: string;
  title: string;
  zone?: string;
  severity: 'critical' | 'warning' | 'scheduled' | 'resolved';
  timestamp: string;
  icon: string;
  description?: string;
}

@Component({
  selector: 'app-alert-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="alerts-container">
      <div class="alerts-header">
        <h3>Recent Alerts</h3>
        <span class="new-badge">5 New</span>
        <a href="#" class="view-all">View all</a>
      </div>

      <div class="alerts-list">
        @for (alert of alerts(); track alert.id) {
          <div class="alert-item" [class]="alert.severity">
            <div class="alert-icon" [class]="alert.severity">
              <mat-icon>{{ alert.icon }}</mat-icon>
            </div>
            <div class="alert-content">
              <div class="alert-title">{{ alert.title }}</div>
              @if (alert.zone) {
                <div class="alert-zone">{{ alert.zone }}</div>
              }
              @if (alert.description) {
                <div class="alert-description">{{ alert.description }}</div>
              }
            </div>
            <div class="alert-meta">
              <span class="alert-severity" [class]="alert.severity">{{ alert.severity | titlecase }}</span>
              <span class="alert-time">{{ alert.timestamp }}</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .alerts-container {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .alerts-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .alerts-header h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #0B1F33;
    }

    .new-badge {
      background-color: #FF4757;
      color: white;
      border-radius: 12px;
      padding: 4px 12px;
      font-size: 12px;
      font-weight: 600;
    }

    .view-all {
      margin-left: auto;
      color: #0FB9B1;
      text-decoration: none;
      font-size: 12px;
      font-weight: 500;
    }

    .view-all:hover {
      text-decoration: underline;
    }

    .alerts-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .alert-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px;
      border-radius: 8px;
      background-color: #F9F9F9;
      border-left: 4px solid transparent;
    }

    .alert-item.critical {
      background-color: rgba(255, 71, 87, 0.05);
      border-left-color: #FF4757;
    }

    .alert-item.warning {
      background-color: rgba(255, 165, 2, 0.05);
      border-left-color: #FFA502;
    }

    .alert-item.scheduled {
      background-color: rgba(15, 185, 177, 0.05);
      border-left-color: #0FB9B1;
    }

    .alert-item.resolved {
      background-color: rgba(57, 211, 83, 0.05);
      border-left-color: #39D353;
    }

    .alert-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background-color: rgba(15, 185, 177, 0.1);
      color: #0FB9B1;
    }

    .alert-icon.critical {
      background-color: rgba(255, 71, 87, 0.1);
      color: #FF4757;
    }

    .alert-icon.warning {
      background-color: rgba(255, 165, 2, 0.1);
      color: #FFA502;
    }

    .alert-icon.resolved {
      background-color: rgba(57, 211, 83, 0.1);
      color: #39D353;
    }

    mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .alert-content {
      flex: 1;
      min-width: 0;
    }

    .alert-title {
      font-weight: 600;
      font-size: 13px;
      color: #0B1F33;
      margin-bottom: 4px;
    }

    .alert-zone {
      font-size: 12px;
      color: #636E72;
    }

    .alert-description {
      font-size: 11px;
      color: #636E72;
      margin-top: 4px;
    }

    .alert-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
    }

    .alert-severity {
      font-size: 11px;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 4px;
      background-color: rgba(15, 185, 177, 0.1);
      color: #0FB9B1;
    }

    .alert-severity.critical {
      background-color: rgba(255, 71, 87, 0.1);
      color: #FF4757;
    }

    .alert-severity.warning {
      background-color: rgba(255, 165, 2, 0.1);
      color: #FFA502;
    }

    .alert-severity.resolved {
      background-color: rgba(57, 211, 83, 0.1);
      color: #39D353;
    }

    .alert-time {
      font-size: 12px;
      color: #DFE6E9;
    }
  `]
})
export class AlertCardComponent {
  @Input() alerts: any = () => [
    {
      id: '1',
      title: 'Machine #42: Vibration detected',
      zone: 'Zone B — Loom Assembly Line',
      severity: 'critical',
      timestamp: '2 min ago',
      icon: 'warning_amber'
    },
    {
      id: '2',
      title: 'Maintenance due: Loom #12',
      zone: 'Zone A — Weaving Section',
      severity: 'warning',
      timestamp: '18 min ago',
      icon: 'build'
    },
    {
      id: '3',
      title: 'Spinner #7: Overheating',
      zone: 'Zone C — Spinning Unit',
      severity: 'critical',
      timestamp: '34 min ago',
      icon: 'local_fire_department'
    },
    {
      id: '4',
      title: 'Scheduled PM: Dryer #3',
      zone: 'Zone D — Pressing Station',
      severity: 'scheduled',
      timestamp: '1 hr ago',
      icon: 'schedule'
    },
    {
      id: '5',
      title: 'PM Completed: Press #9',
      zone: 'Zone E — Pressing Station',
      severity: 'resolved',
      timestamp: '2 hrs ago',
      icon: 'check_circle'
    }
  ];
}
