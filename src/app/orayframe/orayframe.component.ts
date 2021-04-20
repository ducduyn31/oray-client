import {Component, OnInit} from '@angular/core';
import {GatewayService} from '../core/services';
import {theScript} from './scripts/oray.script';

@Component({
  selector: 'app-orayframe',
  templateUrl: './orayframe.component.html',
  styleUrls: ['./orayframe.component.scss']
})
export class OrayframeComponent implements OnInit {

  protected theGateway: string = null;

  constructor(private gateway: GatewayService) {
  }

  ngOnInit(): void {
    this.gateway.getOrayGateway().subscribe(value => {
      this.theGateway = value;
    });
  }

  onOrayLoad(event) {

    const orayWin: Window = event.target.contentWindow;

    const pathName = orayWin.location.pathname;

    const orayDoc: Document = orayWin.document;

    const oldScriptHead = orayDoc.getElementsByTagName('script').item(1);

    orayDoc.head.removeChild(oldScriptHead);

    const script = orayDoc.createElement('script');
    script.innerHTML = theScript;
    orayDoc.head.append(script);

    const oldBodyScripts = orayDoc.body.getElementsByTagName('script');
    const l = oldBodyScripts.length;

    for (let s = 0; s < l; s++) {

      const bodyScript = orayDoc.createElement('script');
      bodyScript.innerHTML = oldBodyScripts.item(s).innerHTML;
      orayDoc.body.append(bodyScript);
      orayDoc.body.removeChild(oldBodyScripts.item(s));
    }

    if (pathName === '/oraybox/sysinfo.html') {

      setTimeout(() => {

        const etherStatusWin = orayDoc.getElementsByTagName('iframe').item(0);
        console.clear();
        const etherWin: Window = etherStatusWin.contentWindow;
        const etherDoc: Document = etherWin.document;

        etherWin['OrayBox'] = orayWin['OrayBox'];

        const toRemove = etherDoc.getElementsByTagName('script').item(1);
        etherDoc.head.removeChild(toRemove);
        etherDoc.head.append(script);

        const olds = etherDoc.body.getElementsByTagName('script');
        const l = olds.length;


        for (let s = 0; s < l; s++) {

          const bodyScript = etherDoc.createElement('script');
          bodyScript.innerHTML = olds.item(s).innerHTML;
          bodyScript.type = olds.item(s).type;
          etherDoc.body.append(bodyScript);
          etherDoc.body.removeChild(olds.item(s));
        }

      }, 5000);
    }


  }

}
