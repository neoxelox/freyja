import { ReactNode } from "react";

export type ModalState = Modal[];
export let modalState: ModalState = [];
export let subscribedCallback: () => void;

export interface Modal {
    name?: string;
    modal: ReactNode;
}

export enum ActionType {
    SHOW_MODAL,
    HIDE_MODAL,
}

type Action =
    | {
          type: ActionType.SHOW_MODAL;
          modal: Modal;
          callback?: () => void;
      }
    | {
          type: ActionType.HIDE_MODAL;
          modalName?: string;
          callback?: () => void;
      };

export const showModal = (modal: ReactNode, options?: { modalName?: string; callback?: () => void }): void => {
    dispatch({
        type: ActionType.SHOW_MODAL,
        modal: { modal, name: options?.modalName },
        callback: options?.callback,
    });
};

export const hideModal = (options?: { modalName?: string; callback?: () => void }): void => {
    dispatch({
        type: ActionType.HIDE_MODAL,
        modalName: options?.modalName,
        callback: options?.callback,
    });
};

export const modalIsActive = (modalName: string): boolean => {
    return modalState.some((m) => m.name === modalName);
};

export const reducer = (state: ModalState, action: Action): ModalState => {
    switch (action.type) {
        case ActionType.SHOW_MODAL:
            action.callback?.();
            return action.modal.name && modalIsActive(action.modal.name) ? state : state.concat(action.modal);

        case ActionType.HIDE_MODAL:
            action.callback?.();
            return action.modalName && modalIsActive(action.modalName)
                ? state.filter((m) => m.name !== action.modalName)
                : state.slice(0, state.length - 1);
    }
};

export const dispatch = (action: Action) => {
    modalState = reducer(modalState, action);
    subscribedCallback();
};

export const subscribeModalsChange = (callback: () => void): void => {
    subscribedCallback = callback;
};
