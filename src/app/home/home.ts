import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  notificationStatus: string = '';
  isPermissionGranted: boolean = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.updateNotificationStatus();
  }

  /**
   * Solicita permiso para mostrar notificaciones
   */
  async requestNotificationPermission(): Promise<void> {
    try {
      const granted = await this.notificationService.requestPermission();
      this.updateNotificationStatus();
      
      if (granted) {
        // Mostrar notificación de confirmación
        await this.notificationService.showNotification(
          '¡Permisos otorgados!',
          'Ahora puedes recibir notificaciones de esta PWA.',
          '/favicon.ico'
        );
      }
    } catch (error) {
      console.error('Error al solicitar permisos:', error);
    }
  }

  /**
   * Prueba una notificación de demostración
   */
  async testNotification(): Promise<void> {
    if (!this.isPermissionGranted) {
      console.warn('No se puede mostrar notificación: permisos no otorgados');
      return;
    }

    try {
      await this.notificationService.showNotification(
        '🚀 Notificación PWA',
        '¡Esta es una notificación de prueba desde tu Progressive Web App!',
        '/favicon.ico'
      );
    } catch (error) {
      console.error('Error al mostrar notificación de prueba:', error);
    }
  }

  /**
   * Actualiza el estado de los permisos de notificación
   */
  private updateNotificationStatus(): void {
    this.notificationStatus = this.notificationService.getPermissionStatus();
    this.isPermissionGranted = this.notificationService.isPermissionGranted();
  }

  /**
   * Obtiene las clases CSS para el badge de estado
   */
  getStatusBadgeClass(): string {
    switch (this.notificationStatus) {
      case 'granted':
        return 'bg-success';
      case 'denied':
        return 'bg-danger';
      case 'default':
        return 'bg-secondary';
      default:
        return 'bg-secondary';
    }
  }
}
