import restify = require('restify');
import { TriggerService }  from './../services/trigger.service';
import { Trigger } from './../models/trigger';
import { Statement } from './../models/statement';
import { ItemStatus } from './../models/itemStatus';

export default class TriggerController {
    constructor(private triggerService: TriggerService) {}
    
    push(req: restify.Request, res: restify.Response, next: restify.Next) {
        //console.log(req.body.status);
        let itemsStatus: ItemStatus[] = JSON.parse(req.params.status);
        this.triggerService.parseItemsStatus(itemsStatus);
        //console.log(req.params);
        //console.log(req);
        //let id = req.params['id'];
        try {
            //let _switch: Switch = this.switchService.get(id);            
            res.json(200, {ok: true});
            //res.json(200, req);
        }
        catch(e) {
            res.json(200, {error: e});
        }
        return next();
    }  
}
