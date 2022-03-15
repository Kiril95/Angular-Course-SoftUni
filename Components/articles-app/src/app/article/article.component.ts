import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = new Article("", "", "", "");
  @Input() articleDesc: string = this.article.description;
  @Input() author: string = this.article.author;

  descToShow: string = '';
  authorToShow: string = '';
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";
  isReadMore: boolean = false;

  ngOnInit(): void {
  }

  readMore(event: any): void { // The event has to have an 'any' type to work
    this.isReadMore = event.target.textContent == 'Read More' ? true : false;
    
    if (this.isReadMore) {
      this.descToShow = this.articleDesc;
      this.authorToShow = this.author;
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } 
  }

  toggleImage(): void {
    if (this.imageButtonTitle === 'Show Image') {
      this.imageButtonTitle = 'Hide Image';
      this.imageIsShown = true;
    } else {
      this.imageButtonTitle = 'Show Image';
      this.imageIsShown = false;
    }
  }

  hideDesc(): void {
    this.authorToShow = '';
    this.descToShow = '';
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
