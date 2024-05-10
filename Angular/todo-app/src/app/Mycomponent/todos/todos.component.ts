import { Component, OnInit} from '@angular/core';
import { title } from 'process';
import { Todo } from '../../Todo';
// import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(){
    this.todos=[
      {sno:3,
      title:"This is title 1",
      desc:"Description",
      active:true
    },
    {sno:2,
      title:"This is title 2", 
      desc:"Description",
      active:true
    },
    {sno:1,
      title:"This is title 1",
      desc:"Description",
      active:true
    }
    ]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
