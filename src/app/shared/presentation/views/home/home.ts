import {Component, OnInit, signal, effect} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {KPICardComponent, type KPICardData} from '../../components/kpi-card/kpi-card';
import {AlertCardComponent} from '../../components/alert-card/alert-card';
import {FleetApi, type Alert, type MaintenanceActivity, type EquipmentStatusDetail} from '../../../infrastructure/fleet-api';

interface ChartDataPoint {
  label: string;
  scheduled: number;
  completed: number;
}

/**
 * Home view - TexCheck Dashboard Overview
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    KPICardComponent,
    AlertCardComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  constructor(private fleetApi: FleetApi) {}

  // Signals for data
  kpiCards = signal<KPICardData[]>([]);
  maintenanceChartData = signal<MaintenanceActivity[]>([]);
  equipmentStatus = signal({ operational: 0, maintenance: 0, down: 0, total: 0 });
  equipmentStatusDetails = signal<EquipmentStatusDetail[]>([]);
  alerts = signal<Alert[]>([]);
  isLoading = signal(true);

  ngOnInit(): void {
    this.loadDashboardData();
  }

  /**
   * Load all dashboard data from API
   */
  private loadDashboardData(): void {
    // Load KPIs
    this.fleetApi.getKPIs().subscribe({
      next: (kpis: any) => {
        this.kpiCards.set(
          kpis.map((kpi: any) => ({
            title: kpi.title,
            value: kpi.value,
            unit: kpi.unit,
            icon: kpi.icon,
            status: kpi.status as any,
            subtitle: kpi.subtitle,
            statusMessage: kpi.statusMessage,
            trend: kpi.trend ? { value: kpi.trend, isPositive: kpi.trend >= 0 } : undefined
          }))
        );
      },
      error: (err: any) => console.error('Error loading KPIs:', err)
    });

    // Load Alerts
    this.fleetApi.getAlerts().subscribe({
      next: (alerts: any) => {
        this.alerts.set(alerts);
      },
      error: (err: any) => console.error('Error loading alerts:', err)
    });

    // Load Maintenance Activity
    this.fleetApi.getMaintenanceActivity().subscribe({
      next: (data: any) => {
        this.maintenanceChartData.set(data);
      },
      error: (err: any) => console.error('Error loading maintenance activity:', err)
    });

    // Load Equipment Status
    this.fleetApi.getEquipmentStatus().subscribe({
      next: (data: any) => {
        this.equipmentStatus.set(data);
      },
      error: (err: any) => console.error('Error loading equipment status:', err)
    });

    // Load Equipment Status Details
    this.fleetApi.getEquipmentStatusDetails().subscribe({
      next: (data: any) => {
        this.equipmentStatusDetails.set(data);
        this.isLoading.set(false);
      },
      error: (err: any) => {
        console.error('Error loading equipment status details:', err);
        this.isLoading.set(false);
      }
    });
  }

  /**
   * Get max value for chart scaling
   */
  getMaxValue(): number {
    const data = this.maintenanceChartData();
    if (data.length === 0) return 1;
    return Math.max(...data.map(d => Math.max(d.scheduled, d.completed)));
  }

  /**
   * Get percentage for bar chart
   */
  getPercentage(value: number): number {
    return (value / this.getMaxValue()) * 100;
  }
}

