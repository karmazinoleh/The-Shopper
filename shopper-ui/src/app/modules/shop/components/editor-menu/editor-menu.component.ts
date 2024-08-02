import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editor-menu',
  templateUrl: './editor-menu.component.html',
  standalone: true,
  styleUrls: ['./editor-menu.component.scss']
})
export class EditorMenuComponent {
  @Output() addModule = new EventEmitter<any>();

  public addNewModule(moduleName: string) {
    const newModule = {
      id: Date.now(),
      type: moduleName,
      content: 'Example content'
    };
    this.addModule.emit(newModule);
  }
}
