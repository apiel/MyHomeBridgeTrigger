import { Statement } from './statement';

export class Trigger {
    name: string;
    url: string;
    trigger: Statement[];
}