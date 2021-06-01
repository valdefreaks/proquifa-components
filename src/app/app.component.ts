import { Component } from '@angular/core';
import { IPercentageBarItems } from './models/models';
import { fadeInBottom } from './util/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInBottom],
})
export class AppComponent {
  title = 'proquifa-components';
  popUpIsVisible = false;
  items: IPercentageBarItems[] = [
    {
      id: '1',
      percentage: '35%',
      title: 'ORIGINALES',
      subtitle: 'VALOR TOTAL $20,000 USD',
      color: '#2fd2e0',
    },
    {
      id: '1',
      percentage: '35%',
      title: 'ORIGINALES',
      subtitle: 'VALOR TOTAL $20,000 USD',
      color: '#12b0bd',
    },
    {
      id: '1',
      percentage: '30%',
      title: 'ORIGINALES',
      subtitle: 'VALOR TOTAL $20,000 USD',
      color: '#008894',
    },
  ];
  items2: IPercentageBarItems[] = [
    {
      id: '1',
      percentage: '80%',
      title: 'ORIGINALES',
      subtitle: 'VALOR TOTAL $20,000 USD',
      color: '#CCCCCC',
    },
    {
      id: '1',
      percentage: '20%',
      title: 'ORIGINALES',
      subtitle: 'VALOR TOTAL $20,000 USD',
      color: '#000000',
    },
  ];

  showPopUp() {
    this.popUpIsVisible = true;
  }
}
