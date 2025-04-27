import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
    sliderExpanded = false;
  
    expandSlider() {
      this.sliderExpanded = true;
      document.body.style.overflow = 'hidden';
    }
  
    // Call this when slider is closed
    onSliderClosed() {
      this.sliderExpanded = false;
      document.body.style.overflow = 'auto';
    }
  }
