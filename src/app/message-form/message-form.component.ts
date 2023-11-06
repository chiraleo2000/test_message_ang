import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  newMessage = '';

  constructor(private messageService: MessageService) { }

  addMessage() {
    if (this.newMessage) {
      this.messageService.add(this.newMessage);
      this.newMessage = '';
    }
  }
}
