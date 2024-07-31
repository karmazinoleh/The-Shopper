import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editor-menu',
  templateUrl: './editor-menu.component.html',
  styleUrls: ['./editor-menu.component.scss']
})
export class EditorMenuComponent {
  @Output() addModule = new EventEmitter<any>();

  addNewModule() {
    const newModule = {
      id: Date.now(),
      type: 'example-module',
      content: 'Example content'
    };
    this.addModule.emit(newModule);
  }
}
