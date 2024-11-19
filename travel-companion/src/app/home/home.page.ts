import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel
  ],
})
export class HomePage {
  image: string | undefined;
  location: GeolocationPosition | undefined;
  deviceInfo: any;

  constructor(
    private cameraService: CameraService,
    private locationService: LocationService,
    private deviceInfoService: DeviceInfoService
  ) {}

  async testCameraService() {
    try {
      const image = await this.cameraService.takePicture();
      this.image = image;
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }

  async testLocationService() {
    try {
      this.location = await this.locationService.getCurrentPosition() as GeolocationPosition;
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }

  async testDeviceInfoService() {
    try {
      this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
    } catch (error) {
      console.error('Error getting device info:', error);
    }
  }
}