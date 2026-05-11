import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface KPIData {
  id: number;
  title: string;
  value: number;
  unit: string;
  icon: string;
  trend?: number;
  status?: string;
  subtitle?: string;
  statusMessage?: string;
}

export interface Alert {
  id: number;
  title: string;
  zone: string;
  severity: 'critical' | 'warning' | 'scheduled' | 'resolved';
  timestamp: string;
  icon: string;
  description: string;
}

export interface MaintenanceActivity {
  label: string;
  scheduled: number;
  completed: number;
}

export interface EquipmentStatusDetail {
  status: string;
  count: number;
  percentage: number;
  color: string;
}

export interface EquipmentStatus {
  operational: number;
  maintenance: number;
  down: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class FleetApi {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getKPIs(): Observable<KPIData[]> {
    return this.http.get<KPIData[]>(`${this.apiUrl}/kpis`);
  }

  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(`${this.apiUrl}/alerts`);
  }

  getMaintenanceActivity(): Observable<MaintenanceActivity[]> {
    return this.http.get<MaintenanceActivity[]>(`${this.apiUrl}/maintenanceActivity`);
  }

  getEquipmentStatus(): Observable<EquipmentStatus> {
    return this.http.get<EquipmentStatus>(`${this.apiUrl}/equipmentStatus`);
  }

  getEquipmentStatusDetails(): Observable<EquipmentStatusDetail[]> {
    return this.http.get<EquipmentStatusDetail[]>(`${this.apiUrl}/equipmentStatusDetails`);
  }
}
