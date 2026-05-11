import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface KPICardData {
  title: string;
  value: string | number;
  unit?: string;
  icon: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
  status?: 'healthy' | 'warning' | 'critical';
  statusMessage?: string;
}

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="kpi-card" [class]="data.status">
      <div class="kpi-header">
        <div class="kpi-icon" [class]="data.status">
          <mat-icon>{{ data.icon }}</mat-icon>
        </div>
        @if (data.trend) {
          <div class="kpi-trend" [class.positive]="data.trend.isPositive">
            @if (data.trend.isPositive) {
              <span>↑</span>
            } @else {
              <span>↓</span>
            }
            {{ data.trend.value }}%
          </div>
        }
      </div>

      <div class="kpi-value">
        {{ data.value }}<span class="kpi-unit">{{ data.unit }}</span>
      </div>

      <div class="kpi-title">{{ data.title }}</div>

      @if (data.subtitle) {
        <div class="kpi-subtitle">{{ data.subtitle }}</div>
      }

      @if (data.statusMessage) {
        <div class="kpi-status-message" [class]="data.status">
          {{ data.statusMessage }}
        </div>
      }
    </div>
  `,
  styles: [`
    .kpi-card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .kpi-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .kpi-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }

    .kpi-icon {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #E8F0F3;
    }

    .kpi-icon.healthy {
      background-color: rgba(57, 211, 83, 0.1);
      color: #39D353;
    }

    .kpi-icon.warning {
      background-color: rgba(255, 165, 2, 0.1);
      color: #FFA502;
    }

    .kpi-icon.critical {
      background-color: rgba(255, 71, 87, 0.1);
      color: #FF4757;
    }

    mat-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }

    .kpi-trend {
      font-weight: 600;
      font-size: 14px;
      color: #FF4757;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .kpi-trend.positive {
      color: #39D353;
    }

    .kpi-value {
      font-size: 32px;
      font-weight: 700;
      color: #0B1F33;
      margin-bottom: 8px;
      display: flex;
      align-items: baseline;
    }

    .kpi-unit {
      font-size: 16px;
      color: #636E72;
      margin-left: 4px;
    }

    .kpi-title {
      font-size: 13px;
      color: #636E72;
      font-weight: 500;
    }

    .kpi-subtitle {
      font-size: 12px;
      color: #DFE6E9;
      margin-top: 8px;
    }

    .kpi-status-message {
      font-size: 12px;
      margin-top: 12px;
      padding: 8px;
      border-radius: 6px;
      background-color: rgba(57, 211, 83, 0.1);
      color: #39D353;
    }

    .kpi-status-message.warning {
      background-color: rgba(255, 165, 2, 0.1);
      color: #FFA502;
    }

    .kpi-status-message.critical {
      background-color: rgba(255, 71, 87, 0.1);
      color: #FF4757;
    }
  `]
})
export class KPICardComponent {
  @Input() data!: KPICardData;
}
