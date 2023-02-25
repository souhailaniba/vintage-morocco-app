import { Component,OnInit} from '@angular/core';
import { CrudServiceService } from 'src/app/Service/crud-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reviews:any=[];
  username: string = '';

  constructor(private crudService:CrudServiceService){}
  ngOnInit():void{
    this.crudService.GetReviews().subscribe(res=>{
      console.log(res);
      this.reviews = Object.values(res).map((review: any) => {
        // Convert the created_at string to a Date object
        const createdAt = new Date(review.created_at);

        // Format the date string in the desired format
        const formattedDate = createdAt.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' });

        
        // Return a new object with the formatted date
        const result = { ...review, created_at: formattedDate }
        console.log(result);
        return result;
      });
    });
}

  delete(id:any,i:any){
    console.log(id);
    this.crudService.deleteReview(id).subscribe(res=>{
      this.reviews.splice(i,1);
    })
  }
}
