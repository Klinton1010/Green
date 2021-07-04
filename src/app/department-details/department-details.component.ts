import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap} from '@angular/router';



@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentid=0;
  constructor(private route:ActivatedRoute,private r:Router) { }

  ngOnInit(){
    // let id=parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.departmentid=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get("id")!);
      this.departmentid=id;
    })
  }

  goPrevious()
  {
  let previousId:Number=this.departmentid-1;
  this.r.navigate([{id:previousId}],{relativeTo:this.route});
  }
  goNext()
  {
  let nextId=this.departmentid+1

  // /departments/1
  this.r.navigate([{id:nextId}],{relativeTo:this.route})
  }

  goBack()
  {
    //If dept id is there assign dept id otherwise assign null
    let next=this.departmentid?this.departmentid:null;
    //this.r.navigate(["/departments",{id:next}])
    this.r.navigate(["../",{id:next}],{relativeTo:this.route})

  }

  overview()
  {
   this.r.navigate(['overview'],{relativeTo:this.route})
  }

  contact()
  {
   this.r.navigate(['contactlist'],{relativeTo:this.route})
  }
}
