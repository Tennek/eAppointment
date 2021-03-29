import { WizardWhat } from "./wizard-what.model";
import { WizardWhen } from "./wizard-when.model";
import { WizardWho } from "./wizard-who.model";

export class Wizard {
    who: WizardWho;
    what: WizardWhat;
    when: WizardWhen;

    constructor() {
        this.who = new WizardWho();
        this.what = new WizardWhat();
        this.when = new WizardWhen();
    }
}