import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {escapeHtml} from "../utils/string-utils";

@Pipe({
  name: 'newLineToParagraph',
  standalone: true
})
export class NewLineToParagraphPipe implements PipeTransform {

  private readonly sanitizer = inject(DomSanitizer);

  transform(value: string): SafeHtml {
    if (!value) return '';

    const html = value.split('\n')
      .map(line => `<p>${escapeHtml(line)}</p>`)
      .join('')

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
