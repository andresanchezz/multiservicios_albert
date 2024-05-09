import { Component } from '@angular/core';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { ServicesSectionComponent } from '../sections/services-section/services-section.component';
import { AboutSectionComponent } from '../sections/about-section/about-section.component';


@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [SliderComponent, ServicesSectionComponent, AboutSectionComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})

export class HomeViewComponent {

}
