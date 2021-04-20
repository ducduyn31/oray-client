import {Component, OnInit} from '@angular/core';
import {OrayBoxService} from '../core/services/oraybox/oray-box.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private orayboxService: OrayBoxService) {
  }

  ngOnInit(): void {
    this.orayboxService.getSerialNumber().subscribe(sn => console.log(sn));
  }


}
