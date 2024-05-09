import { Component } from '@angular/core';
import { SectionLayoutComponent } from '../../layouts/section-layout/section-layout.component';


interface providedServices {
  title: string,
  image: string,
  descript: string,
  alt: string,
  imgFilled: string,
  relatedImage: string,
  isMouseOver: boolean
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [SectionLayoutComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})


export class ServicesSectionComponent {

  routeSelectedImage = '../../../../assets/images/services/battery.svg';
  isFirstMouseOver = true

  providedServices: providedServices[] = [
    {
      title: `UPS y reguladores`,
      image: '../../../../assets/images/services/battery.svg',
      descript: 'Un texto corto, descripción breve del servicio de máx 3 líneas',
      alt: 'Descripción de la imagen',
      imgFilled: '../../../../assets/images/services/battery_fill.svg',
      relatedImage: '',
      isMouseOver: true
    },
    {
      title: `Cableado estructurado`,
      image: '../../../../assets/images/services/battery.svg',
      descript: 'Un texto corto, descripción breve del servicio de máx 3 líneas',
      alt: 'Descripción de la imagen',
      imgFilled: '../../../../assets/images/services/battery_fill.svg',
      relatedImage: '',
      isMouseOver: false
    },
    {
      title: `Circuito cerrado de
        televisión`,
      image: '../../../../assets/images/services/battery.svg',
      descript: 'Un texto corto, descripción breve del servicio de máx 3 líneas',
      alt: 'Descripción de la imagen',
      imgFilled: '../../../../assets/images/services/battery_fill.svg',
      relatedImage: '',
      isMouseOver: false
    },
    {
      title: `Software y Hardware`,
      image: '../../../../assets/images/services/battery.svg',
      descript: 'Todo lo relacionado con computadoras y sitios web',
      alt: 'Descripción de la imagen',
      imgFilled: '../../../../assets/images/services/battery_fill.svg',
      relatedImage: '',
      isMouseOver: false
    },
  ]

  providedServicesMap: Map<string, providedServices> = new Map();

  constructor() {
    this.providedServices.forEach(element => {
      this.providedServicesMap.set(element.title, element);
    });

  }

  getFromStart(): providedServices[] {
    const halfOfArray = Math.ceil(this.providedServicesMap.size / 2);
    const servicesArray = Array.from(this.providedServicesMap.values());
    return servicesArray.slice(0, halfOfArray);
  }

  getFromMiddle(): providedServices[] {
    const halfOfArray = Math.ceil(this.providedServicesMap.size / 2);
    const servicesArray = Array.from(this.providedServicesMap.values());
    return servicesArray.slice(halfOfArray);
  }

  colorImage(service: providedServices): void {
    service.isMouseOver = true
    this.routeSelectedImage = service.image;

    if (this.isFirstMouseOver) {
      const firstItem = this.providedServicesMap.get('UPS y reguladores');
      if (firstItem && service.title != firstItem.title) {
        firstItem.isMouseOver = false
      }
      this.isFirstMouseOver = false
    }

  }

  removeColorImage(service: providedServices): void {
    service.isMouseOver = false
  }


}
