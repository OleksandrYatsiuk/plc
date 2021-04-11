import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private defaultConf: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'end',
    verticalPosition: 'top',
    panelClass: 'toast--success'
  };
  constructor(private snackBar: MatSnackBar) { }


  openSuccess(message: string, config?: MatSnackBarConfig): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, 'X', { ...this.defaultConf, ...config });
  }

  openError(message: string, config?: MatSnackBarConfig): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, 'X', {
      ...this.defaultConf,
      panelClass: 'toast--error', duration: 6000, ...config
    });
  }
}
