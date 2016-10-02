import restify = require('restify');
import { TriggerService }  from './../services/trigger.service';
import { Trigger } from './../models/trigger';
import { Statement } from './../models/statement';

export default class TriggerController {
    constructor(private triggerService: TriggerService) {}
    
    push(req: restify.Request, res: restify.Response, next: restify.Next) {
        //let id = req.params['id'];
        try {
            //let _switch: Switch = this.switchService.get(id);            
            res.json(200, {ok: true});
        }
        catch(e) {
            res.json(200, {error: e});
        }
        return next();
    }  
}
