import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
