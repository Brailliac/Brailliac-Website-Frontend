import {AppItemDetailPage} from "./AppItemDetailPage";

export interface AppItem {
    name: string
    description: string
    accentColor: string
    logoSrc: string
    detailPages: AppItemDetailPage[]
    playStoreUrl: string
    /** Anchor used for navigation within the same page */
    anchor: string
}
