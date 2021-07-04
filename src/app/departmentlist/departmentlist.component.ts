import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {



  departments=[
    
    {"id":1,"dept":"Angular"},
    {"id":2,"dept":"React"},
    {"id":3,"dept":"Java"},
    {"id":4,"dept":"python"}
  ]
  
 public selectedId=0;
  onselect(dept:any)
  {
    //APPEND THE ID WITH EXIXTING URL WITH HELP OF RELATIVE PATH
    //this.router.navigate(['/departments',dept.id]);// /departments/1
    this.router.navigate([dept.id],{relativeTo:this.route})
  }

  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    //GETTING A ID FROM URL USING PARAMS AND OBSERVABLE
    this.route.paramMap.subscribe((param:ParamMap)=>{
      let id=parseInt(param.get('id')!);
      this.selectedId=id;
    })
  }


  onselected(dept:any)//Returns true or false
  {
    
    console.log("The selected id 2:"+this.selectedId)
    return dept.id===this.selectedId
  }
}
