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
  sampledata = {
    "company":{
        "pillars":[{
            "title": "Education",
            "initiatives":[
                {
                    "title": "STEM in Boston",
                    "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                    "goals":[
                        {"amount":50, "descriptor":"Schools reached"},
                        {"amount":20, "descriptor":"Laptops supplied"}
                    ],
                    "active":true,
                    "display":false,
                    "events":[
                        {"title": "Girls Who Code Scholarship",
                         "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                        "type":"scholarship",
                        "goals":[
                            {"amount":50, "descriptor":"Schools reached"},
                            {"amount":20, "descriptor":"Laptops supplied"}
                        ],
                        "active":true
                        },
                        {"title": "Science Equipment Fundraiser",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           },
                           {"title":  "Hour of Code Volunteer Event",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           }
                    ]                    
                },
                {
                    "title": "Arts in Schools",
                    "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                    "goals":[
                        {"amount":50, "descriptor":"Schools reached"},
                        {"amount":20, "descriptor":"Laptops supplied"}
                    ],
                    "active":true,
                    "display":false,
                    "events":[
                        {"title": "ART Supply Drive",
                         "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                        "type":"scholarship",
                        "goals":[
                            {"amount":50, "descriptor":"Schools reached"},
                            {"amount":20, "descriptor":"Laptops supplied"}
                        ],
                        "active":true
                        },
                        {"title": "Art Gallery Fundraiser Event",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           },
                           {"title":  "European Arts Trip Sponsorship",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           }
                    ]                    
                },
                {
                    "title": "School Supplies",
                    "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                    "goals":[
                        {"amount":50, "descriptor":"Schools reached"},
                        {"amount":20, "descriptor":"Laptops supplied"}
                    ],
                    "active":true,
                    "display":false,
                    "events":[
                        {"title": "Backpack Drive",
                         "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                        "type":"scholarship",
                        "goals":[
                            {"amount":50, "descriptor":"Schools reached"},
                            {"amount":20, "descriptor":"Laptops supplied"}
                        ],
                        "active":true
                        },
                        {"title": "Great Teacher Classroom Supply Awards",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           }
                    ]                    
                }               
              
            ]
        },
        {
            "title": "The Environment",
            "initiatives":[
                {
                    "title": "Nature Clean-up",
                    "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                    "goals":[
                        {"amount":50, "descriptor":"Schools reached"},
                        {"amount":20, "descriptor":"Laptops supplied"}
                    ],
                    "active":true,
                    "display":false,
                    "events":[
                        {"title": "Beachcomber Weekend - Virgina Beach",
                         "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                        "type":"scholarship",
                        "goals":[
                            {"amount":50, "descriptor":"Schools reached"},
                            {"amount":20, "descriptor":"Laptops supplied"}
                        ],
                        "active":true
                        },
                        {"title": "Park Pick Up - Shady Grove City Park",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           },
                           {"title":  "Hour of Code Volunteer Event",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           }
                    ]                    
                },
                {
                    "title": "Recycling",
                    "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                    "goals":[
                        {"amount":50, "descriptor":"Schools reached"},
                        {"amount":20, "descriptor":"Laptops supplied"}
                    ],
                    "active":true,
                    "display":false,
                    "events":[
                        {"title": "Plastic Bag Collection Centers",
                         "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                        "type":"scholarship",
                        "goals":[
                            {"amount":50, "descriptor":"Schools reached"},
                            {"amount":20, "descriptor":"Laptops supplied"}
                        ],
                        "active":true
                        },
                        {"title": "Soda to sneakers donation event",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           }
                    ]                    
                
                                    
                }               
              
            ]
        },{
            "title": "Physical Activity",
            "initiatives":[
                {
                    "title": "Active Kids",
                    "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                    "goals":[
                        {"amount":50, "descriptor":"Schools reached"},
                        {"amount":20, "descriptor":"Laptops supplied"}
                    ],
                    "active":true,
                    "display":false,
                    "events":[
                        {"title": "Kids Beat Cancer Dance-a-thon",
                         "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                        "type":"scholarship",
                        "goals":[
                            {"amount":50, "descriptor":"Schools reached"},
                            {"amount":20, "descriptor":"Laptops supplied"}
                        ],
                        "active":true
                        },
                        {"title": "City Soccer Summer Camp Scholarship",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           }
                    ]                    
                }  ,
                {
                    "title": "Athlete in Everyone",
                    "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                    "goals":[
                        {"amount":50, "descriptor":"Schools reached"},
                        {"amount":20, "descriptor":"Laptops supplied"}
                    ],
                    "active":true,
                    "display":false,
                    "events":[
                        {"title": "Inspiring Story Award",
                         "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                        "type":"scholarship",
                        "goals":[
                            {"amount":50, "descriptor":"Schools reached"},
                            {"amount":20, "descriptor":"Laptops supplied"}
                        ],
                        "active":true
                        },
                        {"title": "Kids Prosthetic Program",
                            "description":"Because activate scalable circular boots on the ground, thought partnership corporate social responsibility do-gooder change-makers. Humanitarian big data data, indicators mobilize, grit social capital. Progress, change-makers strengthening infrastructure, justice; corporate social responsibility correlation impact thought provoking. Uplift contextualize compelling impact",
                           "type":"scholarship",
                           "goals":[
                               {"amount":50, "descriptor":"Schools reached"},
                               {"amount":20, "descriptor":"Laptops supplied"}
                           ],
                           "active":true
                           }
                    ]                    
                }  
              
            ]
        }
        
       
        ]
    }
};
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.data = this.sampledata.company;
    this.data.pillars.forEach(pillar => {
      pillar.initiatives.forEach(el => {
        this.list.push(el);
      });
    });
    /* this.getMockEvent().subscribe(res =>{
      this.data = res.company;
      this.data.pillars.forEach(pillar => {
        pillar.initiatives.forEach(el => {
          this.list.push(el);
        });
      });
      console.log(this.list);
    }); */

    
  }

  getMockEvent(): Observable<any> {
    const api = this.http.get('../../assets/sampleData/because.json');
    return api ;
  }
  toggleDetails(index) {
   this.list[index].display = !this.list[index].display;
  }
}
