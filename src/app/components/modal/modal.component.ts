import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  isOpen = false;
  @Input() title: string;
  @Input() buttonText: string;

  constructor() {
    this.title = 'Modal Title';
    this.buttonText = 'Open Modal';
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
