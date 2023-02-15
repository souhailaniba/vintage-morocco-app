import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalUsers = 1000;
  totalOrders = 500;
  totalRevenue = 20000;
  totalItems = 8000;
}
