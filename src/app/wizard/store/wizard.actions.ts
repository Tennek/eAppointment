import { createAction, props } from '@ngrx/store';

import { WizardWhat } from "../model/wizard-what.model";
import { WizardWhen } from "../model/wizard-when.model";
import { WizardWho } from "../model/wizard-who.model";

export const SET_WIZARD_WHO = '[Wizard] Set Who';
export const SET_WIZARD_WHAT = '[Wizard] Set What';
export const SET_WIZARD_WHEN = '[Wizard] Set When';

export const setWizardWho = createAction(
    SET_WIZARD_WHO,
    props<{payLoad: WizardWho}>()
);

export const setWizardWhat = createAction(
    SET_WIZARD_WHAT,
    props<{payLoad: WizardWhat}>()
);

export const setWizardWhen = createAction(
    SET_WIZARD_WHEN,
    props<{payLoad: WizardWhen}>()
);