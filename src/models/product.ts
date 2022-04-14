
export class Product {

    id: number;

    code: string;

    name: string;

    desc: string;

    unit: number;

    rate: number;

    constructor() {}

    copyFromAny(o: any): void {
        this.copyFrom(Product.from(o));
    }

    copyFrom(o: Product): void {
        this.code = o.code;
        this.name = o.name;
        this.desc = o.desc;
        this.unit = o.unit;
        this.rate = o.rate;
    }

    static from(o: any): Product {
        return {
            id: o.id,
            code: o.code,
            name: o.name,
            desc: o.desc,
            unit: o.unit,
            rate: o.rate
        } as Product
    }
}
