import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/core/interfaces/courses';
import { ConfirmComponent } from 'src/app/module-shared/components/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
  lesson: Lesson;
  context: SafeHtml;
  text = '';
  isDirtyForm: boolean;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private dialog: MatDialog) {
    this.lesson = this.route.snapshot.data.lesson;
  }

  ngOnInit(): void {
  }


  isDirty(dirty: boolean): void {
    this.isDirtyForm = dirty;
  }
  canDeactivate(): boolean | Observable<boolean> {
    if (this.isDirtyForm) {
      const dialog = this.dialog.open(ConfirmComponent,
        { data: 'Вы дійсно хочете залишити сторінку? Всі не збережені дані будуть видалені!' });
      return dialog.afterClosed();
    } else {
      return true;
    }
  }

}