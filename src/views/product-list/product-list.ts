import { defineComponent } from 'vue';
import router from '@/router'
import { Product } from '../../models/product';
import productService from "../../services/product-service";

export default defineComponent({
    name: 'Products',

    mounted()  {
        this.refresh();
    },

    data()  {
        return {
            items: [] as Product[],
            item: new Product(),
            message: ''
        }
    },

    methods: {
        refresh() {
            productService.findAll().then(res => {
                console.log(res);
                if( res.status === 200) {
                    this.items = res.data.map(o => { return Product.from(o); });
                } else {
                    console.log('Fetching products failed...');
                }
            });
        },
        save() {
            this.message = '';
            console.log(this.item);
            if (!this.item.id) {
                productService.create(this.item).then(res => {
                    console.log(res);
                    if( res.status === 201) {
                        this.refresh();
                        this.add();
                    } else {
                        this.message = 'Create failed...';
                        console.log(this.message);
                    }
                });
            } else {
                productService.update(this.item.id, this.item).then(res => {
                    console.log(res);
                    if( res.status === 200) {
                        this.refresh();
                        this.add();
                    } else {
                        this.message = 'Update failed...';
                        console.log(this.message);
                    }
                });
            }
        },
        add() {
            this.item = new Product();
        },
        edit(item: Product) {
            console.log(item);
            this.item = item
            console.log(this.item);
            productService.findById(this.item.id).then(res => {
                if( res.status === 200) {
                    let o = Product.from(res.data);
                    this.item.id = o.id;
                    this.item.code = o.code;
                    this.item.name = o.name;
                    this.item.desc = o.desc;
                    this.item.unit = o.unit;
                    this.item.rate = o.rate;
                } else {
                    this.message = 'Fetching product failed...';
                    console.log(this.message);
                }
            });
        },
        remove(item: Product) {
            console.log(item);
            this.message = '';
            productService.delete(item.id).then(res => {
                if( res.status === 204) {
                    this.refresh();
                } else {
                    this.message = 'Remove failed...';
                    console.log(this.message);
                }
            });
        }
    },

});