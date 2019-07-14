import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  detailsOpened = false;

  constructor() {
  }

  ngOnInit() {
  }

  openDetails() {
    this.detailsOpened = true;
  }

  closeDetails() {
    this.detailsOpened = false;
  }
}
