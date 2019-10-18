import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class AlertService {

  constructor(private messageService: MessageService) {
  }

  success(summary: string, message: string) {
    this.messageService.add({ severity: 'success', summary: summary, detail: message });
  }

  info(summary: string, message: string) {
    this.messageService.add({ severity: 'info', summary: summary, detail: message });
  }

  warning(summary: string, message: string) {
    this.messageService.add({ severity: 'warn', summary: summary, detail: message });
  }

  error(summary: string, message: string) {
    this.messageService.add({ severity: 'error', summary: summary, detail: 'Validation failed' });
  }
}
