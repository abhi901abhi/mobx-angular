import { Directive, ViewContainerRef, TemplateRef, Renderer } from '@angular/core';
import { autorun } from 'mobx';
import {MobxAutorunDirective} from './mobx-autorun.directive';

@Directive({ selector: '[mobxAutorunSync]' })
export class MobxAutorunSyncDirective extends MobxAutorunDirective {
  constructor(
    protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef,
    protected renderer: Renderer) {super(templateRef, viewContainer, renderer); }

  autoDetect(view) {
    console.warn('mobxAutorunSync is deprected, please use mobxAutorun instead - it\'s doing exactly the same thing');

    this.dispose = autorun(() => {
      view['detectChanges']();
    });
  }
}
