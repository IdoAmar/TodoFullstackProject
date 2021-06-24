import { Color } from "../types/color-type.model";
import { Icon } from "../types/icon-type.model";

export interface listDTO {
    id: string,
    caption: string,
    description: string,
    icon: Icon,
    color: Color
}
export function emptyListDTO(): listDTO {
    return {
        id: "",
        caption: "",
        description: "",
        color: "",
        icon: ""
    }
}