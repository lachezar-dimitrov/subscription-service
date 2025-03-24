export enum NotificationType {
    Email,
    SMS,
    PushNotification,
}

export interface Notification {
    type: NotificationType;
    from: unknown;
    createdAt: Date;
}

export interface NotificationService {}
