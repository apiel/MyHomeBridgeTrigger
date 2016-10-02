var fs = require('fs'); // look for typescript solution
var path = require('path'); // look for typescript solution
import { Trigger } from './trigger';

export class TriggerModel{
    filePath: string = "/../data/trigger.json";
    
    triggers: Trigger[];
    
    constructor() {
        this.filePath = path.dirname(require.main.filename) + this.filePath;
        this.load();
    }
    
    all(): Trigger[] {
        return this.triggers;
    }
    
//    get(id: string): Item {
//        let item: Item = this.triggers[id];
//         if (!item) {
//            throw "Unknown item key";
//        }        
//        return item;
//    }
    
    load() {
        console.log("Load triggers.");
        if (fs.existsSync(this.filePath)) {
            this.triggers = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
        }
        else {
            throw 'Path to data model folder does not exist: ' + this.filePath;
        }        
    }
    
    save() {
        console.log("Save items.");
        fs.writeFileSync(this.filePath, JSON.stringify(this.triggers, null, 4), 'utf8');
    }
}