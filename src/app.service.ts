import { Injectable } from '@nestjs/common';
import { Notifications } from './data/notifications.model';

@Injectable()
export class AppService {
  getNotifications(page_index: number, page_size: number): any {
    var notificationCount = Notifications.notifications.payload.length;
    var notViewedNotifications = 0;
    for(let i=0;i<notificationCount;i++) {
      if(Notifications.notifications.payload[i].status == 'not_viewed') {
        notViewedNotifications++;
      }
    }
    var notifications: any = {
      payload: [],
      metadata: {
        notifications_count: notificationCount,
        not_viewed_notifications_count: notViewedNotifications
      }
    };

    const start: number = (page_index-1)*page_size;
    const end: number = start*1 + page_size*1 - 1
    console.log('start:'+start, 'end:'+end)
    for(let notif=start;  notif <= end; notif++) {
      if(Notifications.notifications.payload[notif]) {
        notifications.payload.push(Notifications.notifications.payload[notif]);
      } else {
        break;
      }
      
    }

    return notifications;
  }
}


