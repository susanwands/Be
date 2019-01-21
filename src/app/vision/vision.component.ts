import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})



export class VisionComponent implements OnInit {

  list = [];

  data;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMockEvent().subscribe(res =>{
      this.data = res.company;
      this.data.pillars.forEach(pillar => {
        pillar.initiatives.forEach(el => {
          this.list.push(el);
        });
      });
      console.log(this.list);
    });

    
  }

  getMockEvent(): Observable<any> {
    const api = this.http.get('../../assets/sampleData/because.json');
    return api ;
  }
  toggleDetails(index) {
   this.list[index].display = !this.list[index].display;
  }
}
