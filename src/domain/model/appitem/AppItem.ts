import {AppItemDetailPage} from "./AppItemDetailPage";
import { AppItemDownloadSource } from "./AppItemDownloadSource";

export interface AppItem {
    name: string
    description: string
    accentColor: string
    logoSrc: string
    detailPages: AppItemDetailPage[]
    downloadSources: AppItemDownloadSource[]
    /** Anchor used for navigation within the same page */
    anchor: string
}
