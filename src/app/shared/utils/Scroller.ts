import { ViewportScroller } from "@angular/common";
import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Scroller{
    private viewportScroller = inject(ViewportScroller)

    scrollToTop():void{
        this.viewportScroller.scrollToPosition([0,0])
    }
}