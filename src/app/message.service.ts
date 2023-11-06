import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log(`MessageService: ${message}`); // This will log to the console
  }

  clear() {
    this.messages = [];
  }

  getMessages() {
    return this.messages;
  }
}
