import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private _opened: boolean;

  @Output()
  openedChange = new EventEmitter();

  constructor() {
  }

  @Input()
  get opened(): boolean {
    return this._opened;
  }

  set opened(value: boolean) {
    this._opened = value;
    this.openedChange.emit(value);
  }

  ngOnInit() {
  }

  close() {
    this.opened = false;
  }
}
