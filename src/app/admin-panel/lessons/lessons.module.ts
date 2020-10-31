import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonItemComponent } from './lesson-item/lesson-item.component';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsFormComponent } from './lessons-form/lessons-form.component';



@NgModule({
  declarations: [LessonItemComponent, LessonsComponent, LessonsFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    LessonsRoutingModule
  ],
  exports: [LessonsComponent]
})
export class LessonsModule { }
