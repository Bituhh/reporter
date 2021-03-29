import {TemplateRef} from '@angular/core';
import {AlertButtonSettings} from './alert-button-settings.model';

export interface AlertDialogData {
  title: string;
  message?: string;
  html?: string;
  template?: TemplateRef<any>;
  confirm?: AlertButtonSettings;
  deny?: AlertButtonSettings;
  cancel?: AlertButtonSettings;
}

export interface ToastDialogData {
  message: string;
}
