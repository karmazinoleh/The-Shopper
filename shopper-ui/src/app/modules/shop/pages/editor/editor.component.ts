import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef;
  modules: any[] = [];

  constructor(private http: HttpClient) {}

  addModule(type: string) {
    const module = { type };
    this.modules.push(module);
    this.addModuleToCanvas(type);
  }

  addModuleToCanvas(type: string) {
    const div = document.createElement('div');
    div.classList.add(type);
    this.canvas.nativeElement.appendChild(div);
    const json = JSON.stringify(this.modules);
    localStorage.setItem('modules', json);
  }

  saveModules() {
    const json = JSON.stringify(this.modules);
    const shopId = 1; // ID of the shop to update
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put(`http://localhost:8088/shops/${shopId}/modules`, { modules: json }, { headers })
      .subscribe(response => {
        alert('Modules saved!');
      }, error => {
        console.error('Error saving modules', error);
      });
  }
}
