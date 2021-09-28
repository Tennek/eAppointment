import { Action, createReducer, on } from '@ngrx/store';

import { WizardWhat } from "../model/wizard-what.model";
import { WizardWhen } from "../model/wizard-when.model";
import { WizardWho } from "../model/wizard-who.model";
import * as WizardActions from './wizard.actions';

export interface State {
    who: WizardWho,
    what: WizardWhat,
    when: WizardWhen
}

const initialState: State = {
    who: {firstName: "", lastName: ""},
    what: {what: ""},
    when: {when: ""}
}

const _wizardReducer = createReducer(initialState
    , on(WizardActions.setWizardWho, (state, { payLoad }) => ({ ...state, who: {...payLoad} }))
    , on(WizardActions.setWizardWhat, (state, { payLoad }) => ({ ...state, what: {...payLoad} }))
    , on(WizardActions.setWizardWhen, (state, { payLoad }) => ({ ...state, when: {...payLoad} }))
)

export function wizardReducer(state: State | undefined, action: Action) {
    return _wizardReducer(state, action);
}