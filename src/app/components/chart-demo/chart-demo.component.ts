import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as PluginDataLabels from 'chartjs-plugin-datalabels';
import _ from 'lodash';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.scss'],
})
export class ChartDemoComponent implements OnInit {
  @ViewChild('canvasElement') canvasElement: ElementRef<HTMLCanvasElement>;
  constructor() {}

  ngOnInit(): void {}
}
