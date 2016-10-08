import * as request from 'request';
import { TriggerModel } from './../models/trigger.model';
import { Trigger } from './../models/trigger';
import { Statement } from './../models/statement';
import { ItemStatus } from './../models/itemStatus';

export class TriggerService{
    constructor(private triggerModel: TriggerModel) {}
    
    parseItemsStatus(itemsStatus: ItemStatus[]): void {
        let _itemsStatus = {};
        for (let itemStatus of itemsStatus) {
            _itemsStatus[itemStatus.id] = itemStatus.status;
        }
        
        for (let trigger of this.triggerModel.all()) {
            let isTrue = false;
            for (let condition of trigger.trigger) {
                let itemStatus = _itemsStatus[condition.item];
                if (itemStatus) {
                    if (condition.operator === 'is') {
                        isTrue = itemStatus == condition.value;
                    }
                    else if (condition.operator === 'lower') {
                        isTrue = itemStatus < condition.value;
                    }
                    else if (condition.operator === 'upper') {
                        isTrue = itemStatus > condition.value;
                    }                
                }
                if (!isTrue) break;
            }
            if (isTrue) {
                console.log(trigger.name + ' is true.');
                this.requestUrl(trigger.url);
            }
        }
    }
    
    requestUrl(url: string) {
        console.log('Call url: ' + url);
        request(url);
    }    
}