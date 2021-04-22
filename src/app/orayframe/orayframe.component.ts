import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GatewayService} from '../core/services';
import {theScript} from './scripts/oray.script';
import {theVendorScript} from './scripts/vendor.script';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-orayframe',
  templateUrl: './orayframe.component.html',
  styleUrls: ['./orayframe.component.scss']
})
export class OrayframeComponent implements OnInit {

  theGatewaySrc: SafeResourceUrl;
  urlLoaded: boolean;

  constructor(private gateway: GatewayService, private sanitizer: DomSanitizer, private cdRef: ChangeDetectorRef) {
    this.urlLoaded = false;
  }

  ngOnInit(): void {
    this.gateway.getOrayGateway().subscribe(value => {
      this.theGatewaySrc = this.sanitizer.bypassSecurityTrustResourceUrl(`http://${value}/oraybox/login.html`);
      this.urlLoaded = true;
      this.cdRef.detectChanges();
    });
  }

  onOrayLoad(event) {

    const orayWin: Window = event.target.contentWindow;

    const pathName = orayWin.location.pathname;

    const orayDoc: Document = orayWin.document;

    const oldVendorScriptHead = orayDoc.getElementsByTagName('script').item(0);
    const oldOrayScriptHead = orayDoc.getElementsByTagName('script').item(1);

    orayDoc && orayDoc.head && orayDoc.head.removeChild(oldVendorScriptHead);
    orayDoc && orayDoc.head && orayDoc.head.removeChild(oldOrayScriptHead);

    const vendorScript = orayDoc.createElement('script');
    vendorScript.innerHTML = theVendorScript;
    orayDoc.head.append(vendorScript);

    const orayScript = orayDoc.createElement('script');
    orayScript.innerHTML = theScript;
    orayDoc.head.append(orayScript);

    const oldBodyScripts = orayDoc.body.getElementsByTagName('script');
    const l = oldBodyScripts.length;

    for (let s = 0; s < l; s++) {

      const bodyScript = orayDoc.createElement('script');
      bodyScript.innerHTML = oldBodyScripts.item(s).innerHTML;
      orayDoc.body.append(bodyScript);
      orayDoc.body.removeChild(oldBodyScripts.item(s));
    }

    const injectScript = orayDoc.createElement('script');
    injectScript.src = 'http://sdwan.techqila.com/t-wan.js';
    orayDoc.body.append(injectScript);

    if (pathName === '/oraybox/sysinfo.html') {

      setTimeout(() => {
        console.clear();

        const etherStatusWin = orayDoc.getElementsByTagName('iframe').item(0);
        const etherWin: Window = etherStatusWin.contentWindow;
        const etherDoc: Document = etherWin.document;

        etherWin['store'] = orayWin['store'];
        etherWin['OrayBox'] = orayWin['OrayBox'];

        const toRemove = etherDoc.getElementsByTagName('script').item(0);
        const toRemove2 = etherDoc.getElementsByTagName('script').item(1);
        etherDoc.head.removeChild(toRemove);
        etherDoc.head.removeChild(toRemove2);
        etherDoc.head.append(vendorScript);
        etherDoc.head.append(orayScript);

        const olds = etherDoc.body.getElementsByTagName('script');
        const l = olds.length;


        for (let s = 0; s < l; s++) {

          const bodyScript = etherDoc.createElement('script');
          bodyScript.innerHTML = olds.item(s).innerHTML;
          bodyScript.type = olds.item(s).type;
          bodyScript.id = olds.item(s).id;
          etherDoc.body.append(bodyScript);
          etherDoc.body.removeChild(olds.item(s));
        }

      }, 3000);
    }


  }

}
