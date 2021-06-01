import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-strategy-pop-up',
  templateUrl: './strategy-pop-up.component.html',
  styleUrls: ['./strategy-pop-up.component.scss'],
})
export class StrategyPopUpComponent implements OnInit {
  @Output() closeEmitter: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  closePopUp() {
    this.closeEmitter.emit(true);
  }
}
