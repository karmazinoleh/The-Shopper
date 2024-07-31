import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private modules: any[] = [];

  addModule(type: string) {
    const module = { type };
    this.modules.push(module);
    this.addModuleToCanvas(type);
  }

  addModuleToCanvas(type: string) {
    const canvas = document.getElementById('canvas');
    if (canvas) {
      const div = document.createElement('div');
      div.classList.add(type);
      canvas.appendChild(div);
    }
  }

  saveModules() {
    const json = JSON.stringify(this.modules);
    localStorage.setItem('modules', json);
    alert('Modules saved!');
  }

  getModules() {
    return this.modules;
  }

  clearModules() {
    this.modules = [];
  }
}
