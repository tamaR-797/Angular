import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appHighlightInvalid]'
})
export class HighlightInvalidDirective {

  @Input('appHighlightInvalid') highlightColor: string = 'red';

  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.control.invalid && (this.control.dirty || this.control.touched)) {
      this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.highlightColor}`);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.control.invalid && (this.control.dirty || this.control.touched)) {
      this.renderer.setStyle(this.el.nativeElement, 'border-right', `2px solid ${this.highlightColor}`);
      this.renderer.setStyle(this.el.nativeElement, 'border-left', 'none');
      this.renderer.setStyle(this.el.nativeElement, 'border-top', 'none');
      this.renderer.setStyle(this.el.nativeElement, 'border-bottom', 'none');
    }
  }
}
