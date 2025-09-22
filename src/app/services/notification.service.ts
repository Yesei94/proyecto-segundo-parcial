import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private permission: NotificationPermission = 'default';

  constructor() {
    this.checkPermission();
  }

  /**
   * Verifica el estado actual del permiso de notificaciones
   */
  private checkPermission(): void {
    if ('Notification' in window) {
      this.permission = Notification.permission;
    }
  }

  /**
   * Solicita permiso para mostrar notificaciones
   * @returns Promise<boolean> - true si se otorgó el permiso, false en caso contrario
   */
  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.warn('Este navegador no soporta notificaciones');
      return false;
    }

    if (this.permission === 'granted') {
      return true;
    }

    if (this.permission === 'denied') {
      console.warn('Los permisos de notificación han sido denegados');
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      this.permission = permission;
      return permission === 'granted';
    } catch (error) {
      console.error('Error al solicitar permiso de notificaciones:', error);
      return false;
    }
  }

  /**
   * Muestra una notificación de prueba
   * @param title - Título de la notificación
   * @param body - Cuerpo de la notificación
   * @param icon - URL del ícono (opcional)
   */
  async showNotification(
    title: string = 'Notificación de Prueba',
    body: string = 'Esta es una notificación de prueba desde la PWA',
    icon: string = '/favicon.ico'
  ): Promise<void> {
    if (this.permission !== 'granted') {
      console.warn('No se puede mostrar notificación: permisos no otorgados');
      return;
    }

    try {
      const notification = new Notification(title, {
        body,
        icon,
        badge: '/favicon.ico',
        tag: 'pwa-notification',
        requireInteraction: true,
        actions: [
          {
            action: 'view',
            title: 'Ver',
            icon: '/favicon.ico'
          },
          {
            action: 'close',
            title: 'Cerrar',
            icon: '/favicon.ico'
          }
        ]
      });

      // Manejar clics en la notificación
      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Auto-cerrar después de 5 segundos
      setTimeout(() => {
        notification.close();
      }, 5000);

    } catch (error) {
      console.error('Error al mostrar notificación:', error);
    }
  }

  /**
   * Obtiene el estado actual del permiso
   * @returns string - 'granted', 'denied', o 'default'
   */
  getPermissionStatus(): string {
    return this.permission;
  }

  /**
   * Verifica si las notificaciones están permitidas
   * @returns boolean
   */
  isPermissionGranted(): boolean {
    return this.permission === 'granted';
  }

  /**
   * Verifica si las notificaciones están denegadas
   * @returns boolean
   */
  isPermissionDenied(): boolean {
    return this.permission === 'denied';
  }
}
