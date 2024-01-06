import { Attribute } from "@angular/core";
import { Mod } from "./mod";

export class Race {
    name: string = "Race";
    description: string | undefined;
    mods: Mod<string, string>[] | undefined;
}

export class Theme {
    name: string = "Theme"
    description: string | undefined;
}

export class Class {
    name: string = "Class"
    description: string | undefined;
}