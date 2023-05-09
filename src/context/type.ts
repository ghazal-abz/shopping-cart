import {ReactNode} from "react";

export interface ReducerProp {
    state: boolean,
    dispatch: () => void;
}
export interface ContextShopProp {
    children: ReactNode;
}
