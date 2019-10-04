import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-recipes';
  loadedFeature = 'recipes';
  show = true;
  value = 100;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
