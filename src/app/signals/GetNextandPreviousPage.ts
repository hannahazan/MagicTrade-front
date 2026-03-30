import { Injectable, signal, WritableSignal } from "@angular/core";
import { PaginationCursor } from "../models/PaginationCursor";
import { PaginationPages } from "../models/PaginationPages";

@Injectable({
    providedIn : "root"
})
export class GetNextAndPreviouspage{

    nextAndPreviousCursor:WritableSignal<PaginationCursor[]> = signal<PaginationCursor[]>([])

    setPaginationCursor(pagination : PaginationCursor):void{
        this.nextAndPreviousCursor.update((pages) => {
    const exists = pages.some(p => p.previousCursorFisrtEntry === pagination.previousCursorFisrtEntry);
    return exists ? pages : [...pages, pagination];
  })
    }

    resetPaginationCursor(){
        this.nextAndPreviousCursor.set([]);
    }

    getPaginationCursor():PaginationCursor[]{
        return this.nextAndPreviousCursor();
    }

    private readonly paginationPagesStarter:PaginationPages ={
        currentPage : 0,
        previousPage: 0
    }

    nextAndPreviousPages:WritableSignal<PaginationPages> = signal<PaginationPages>(this.paginationPagesStarter)
    
    setPaginationPages(pagination : PaginationPages):void{
        this.nextAndPreviousPages.set(pagination)
    }

    getPaginationpages():PaginationPages{
        return this.nextAndPreviousPages();}
    
    resetPaginationPages(){
        this.nextAndPreviousPages.set(this.paginationPagesStarter)
    }
    
}