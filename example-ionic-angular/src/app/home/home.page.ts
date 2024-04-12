import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { KeepAwake } from '@capacitor-community/keep-awake';
import { addIcons } from 'ionicons';
import { powerOutline, power, add } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonCol,
    IonRow,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  public isKeptAwake: boolean = false;
  public isSupported: boolean = false;

  constructor() {
    addIcons({ powerOutline });
  }

  ionViewWillEnter() {
    this.checkIsSupported().then(
      isSupported => {
        this.isSupported = isSupported;
        if (isSupported) {
          //By default, the screen will not turn off automatically when page is entered
          KeepAwake.keepAwake();
          this.isKeptAwake = true;
        } else {
          // Keep awake is not supported
          console.log('Not supported');
        }
      },
      err => {
        // Keep awake is not supported
        console.log(err); //
      },
    );
  }

  public async checkIsSupported(): Promise<boolean> {
    const isSupportedResult = await KeepAwake.isSupported();
    return isSupportedResult.isSupported;
  }

  public keepAwake() {
    KeepAwake.keepAwake();
    this.isKeptAwake = true;
  }

  public allowToSleep() {
    KeepAwake.allowSleep();
    this.isKeptAwake = false;
  }
}
