import { Component } from '@angular/core';
import { SectionLayoutComponent } from '../../layouts/section-layout/section-layout.component';


interface providedServices {
  title: string,
  logo: string,
  descript: string,
  alt: string
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [SectionLayoutComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})


export class ServicesSectionComponent {

  providedServices: providedServices[] = [
    {
      title: `Mantenimiento preventivo equipos de energía regulada`,
      logo: '',
      descript: 'lorem2 0wqdujn hbqwu iodhq wduioqw hdq wodu qwhd qwiuodjh qwodiw',
      alt: ''
    },
    {
      title: 'UPS y Reguladores',
      logo: '',
      descript: 'lorem2 0wqdujnh bqwuiodhqwduio qwhdqwod qwhdqwiu odjhqwodiw',
      alt: ''
    },
    {
      title: 'Cableado estructurado.  CCTV (circuito cerrado de televisión)',
      logo: '',
      descript: 'lorem20wqdujn hbqwuiodhqwdui oqwhdqwoduqwhdqw iuodjhqwodiw',
      alt: ''
    },
    {
      title: 'Redes de baja tensión.',
      logo: '',
      descript: 'lorem20w qdujnhb qwuiodhqwduioq whdqwoduqwhdq wiuodjhqwodiw',
      alt: ''
    },
    {
      title: 'Mantenimiento y reformas locativas',
      logo: '',
      descript: 'lorem20wqd ujnhbqw uiodhqwduioqwh dqwoduqwhdqw iuodj hqwodiw',
      alt: ''
    },
    {
      title: 'Mantenimiento y formateo de computadoras',
      logo: '',
      descript: 'lorem20wqdujnhbq wuiodhqwduioq whdqwoduq whdqwiuodj hqwodiw',
      alt: ''
    },
    {
      title: 'Desarrollo web',
      logo: '',
      descript: 'lorem2 0wqd ujnhbqwuio hqwduioqwh dqwoduqwhdq wiuodjhqwodiw',
      alt: ''
    },
  ]
}
