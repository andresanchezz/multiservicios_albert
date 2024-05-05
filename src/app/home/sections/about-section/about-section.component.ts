import { Component } from '@angular/core';
import { SectionLayoutComponent } from '../../layouts/section-layout/section-layout.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionLayoutComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

}
