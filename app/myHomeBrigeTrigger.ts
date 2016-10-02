//require('./decorators/restify.decorator.ts');
import restify = require('restify');
import TriggerController from './controllers/trigger.controller';

import { TriggerService }  from './services/trigger.service';
import { TriggerModel } from './models/trigger.model';

restify.CORS.ALLOW_HEADERS.push('authorization');

var server = restify.createServer();
server.use(restify.CORS());

let triggerModel = new TriggerModel();
let triggerService = new TriggerService(triggerModel);
let triggerController = new TriggerController(triggerService);
server.get('/trigger/push', triggerController.push.bind(triggerController));

server.listen(3040, function() {
  console.log('%s listening at %s', server.name, server.url);
});