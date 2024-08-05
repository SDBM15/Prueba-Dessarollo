import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { SideComponent } from '../side/side.component';
import { FootComponent } from '../foot/foot.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layo',
  standalone: true,
  imports: [HeadComponent,SideComponent,FootComponent,RouterOutlet],
  templateUrl: './layo.component.html',
  styleUrl: './layo.component.css'
})
export default class LayoComponent {

}
