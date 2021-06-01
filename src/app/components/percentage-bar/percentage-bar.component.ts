import { Component, Input, OnInit } from '@angular/core';
import { IPercentageBarItems } from 'src/app/models/models';

@Component({
  selector: 'app-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.scss'],
})
export class PercentageBarComponent implements OnInit {
  @Input() items: IPercentageBarItems;

  constructor() {}

  ngOnInit(): void {}
}
