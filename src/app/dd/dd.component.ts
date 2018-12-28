import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.scss']
})
export class DDComponent implements OnInit {
  todoText:string="";
  todo=[
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  done=[
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ]

  constructor() { }

  ngOnInit() {
  }
  addItem(list: string, todo: string) {
    if (list === 'todo') {
    this.todo.push(this.todoText);
      //this.todo.push(this.todoText);
      this.todoText='';
    } else {
      this.done.push(this.todoText);
    }
  }
drop(event: CdkDragDrop<string[]>){
  if(event.container === event.previousContainer){
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)

  }
  else{
   transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);

  }
  
}
}
