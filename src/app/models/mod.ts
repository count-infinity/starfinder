export class Mod<T,V> {
    name: string;
    for_attribute: T;
    from: V;
    value: number;

    constructor(name: string,for_attribute: T, from: V, value: number) {
        this.name = name;
        this.for_attribute = for_attribute;
        this.from = from;
        this.value = value;
    }
}