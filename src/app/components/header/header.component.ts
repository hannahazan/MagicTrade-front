import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CustomBreakpoints } from '../../core/constants/breakpoints';
import { toSignal } from '@angular/core/rxjs-interop';
import { effect } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private breakpointObserver = inject(BreakpointObserver);

  menuOpen = false;

  isDesktop = toSignal(
    this.breakpointObserver
      .observe([CustomBreakpoints.tablet])
      .pipe(map((result) => result.matches)),
    { initialValue: false }
  );

  constructor() {
    effect(() => {
      if (!this.isDesktop()) this.menuOpen = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
