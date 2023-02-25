import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from 'src/app/dashboard.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {Chart,registerables  }from 'chart.js/auto';
import {product} from '../../Service/Product';
import { CrudServiceService } from 'src/app/Service/crud-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  Chart:any;
  Chart2:any;
  CatsData = {
    labels: ["cat1","cat2","cat3"],
    datasets: [{
      data: [1200, 1700, 800],
      backgroundColor: [
        "#73BCA8",
        "#D2A24D",
        "#CD6C4B"
      ],borderColor:[
        "#73BCA8",
        "#D2A24D",
        "#CD6C4B"
      ]
    }]
  };
  UserData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { data: [12, 15, 18, 14, 11, 19, 12], label: 'Users', borderColor: '#73BCA8', backgroundColor: '#73BCA8' },
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Products', borderColor: '#D2A24D', backgroundColor: '#D2A24D' },
    ]
  };
  ChartOptions={
    responsive: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
      legend: {
          labels: {
              // This more specific font property overrides the global property
              font: {
                  size: 18,
                  family: "Alfa Slab One",
              }
              
          }
      }
  }
  };
  totalUsers = 0;
  totalItems = 0;
  totalOrders = 0;
  totalRevenue = 0;

  constructor(private service: DashboardService,private productService:CrudServiceService) { }

  ngOnInit():void{
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const canvas2 = document.getElementById('theChart') as HTMLCanvasElement;
    Chart.register(...registerables);
   this.Chart= new Chart( canvas,{
      type: 'line',
        data:this.UserData,
       
        options: this.ChartOptions,
      });
      this.Chart2= new Chart( canvas2,{
        type: 'polarArea',
          data:this.CatsData,
          options: this.ChartOptions               
        });
        this.productService.GetProducts().subscribe(products => {
          const counts: {[category: string]: number} = {};
          
          
          products.forEach(product => {
           counts[product.category] = (counts[product.category] || 0) + 1;
          });
          const categories = Object.keys(counts);
          const data = categories.map(category => counts[category]);
          const backgroundColors = ['#73BCA8', '#D2A24D', '#CD6C4B'].slice(0, categories.length);
          const borderColors = backgroundColors;
          this.Chart2.data = {
            labels: categories,
            datasets: [{
              data: data,
              backgroundColor: backgroundColors,
              borderColor: borderColors
            }]
          };
          this.Chart2.update();
        });
        
    this.getTotalUsers()
    this.getTotalProducts()
    this.getTotalRevenue()
    // this.getTotalOrders()
  }

  getTotalUsers(){
    this.service.getTotalUsers().subscribe((res:any)=>{
      this.totalUsers= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }

  getTotalProducts(){
    this.service.getTotalProducts().subscribe((res:any)=>{
      this.totalItems= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }

  getTotalRevenue(){
    this.service.getTotalRevenue().subscribe((res:any)=>{
      this.totalRevenue= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }

  /*
  getTotalRevenue(){
    this.service.getTotalRevenue().subscribe((res:any)=>{
      this.totalRevenue= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }
  */
}
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = true; // Check if user is authenticated
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }

   
}