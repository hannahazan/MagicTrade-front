import {Component, inject, Input} from '@angular/core';
import { NgClass } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { CustomBreakpoints } from '../../core/constants/breakpoints';
import { toSignal } from '@angular/core/rxjs-interop';
import { effect } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import {Profile} from "../../models/user/profile.model";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  private readonly breakpointObserver = inject(BreakpointObserver);
  public readonly authService = inject(AuthService);

  menuOpen = false;

  isDesktop = toSignal(
    this.breakpointObserver
      .observe([CustomBreakpoints.desktop])
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

  logOut():void{
    this.authService.logout()
  }
}
