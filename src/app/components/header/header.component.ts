import { Component, OnInit } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit() {
    if (window.innerWidth >= 1024) {
      this.menuOpen = false;
    }
  }
}
