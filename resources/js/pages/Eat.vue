<template>
  <main>
    <div class="container">
      <div class="form-group mb-4">
        <b-form-select class="form--pill" v-model="maleType" :options="options">
          <template slot="first">
            <option :value="null" disabled>Male type</option>
          </template>
        </b-form-select>
      </div>
      <div :class="['form-group', 'mb-4', {'fixed-bottom z-index-1000000 px-3': show}]">
        <b-form-input class="form--pill" v-model="product" placeholder="Product" pill></b-form-input>
        <div v-if="show" class="product-search-menu bg-light rounded mt-2 p-3">
          <div v-if="loading" class="loader position-absolute"></div>
          <div v-if="!loading">
            <p class="product-item" v-for="(product, index) in products" :key="index" @click="productSelect(index)">{{product.name}}</p>
          </div>
        </div>
      </div>

      <div v-if="added" class="product-count bg-light rounded mt-2 p-3">
        <h3 class="text-center">
          {{selectedProduct[0].name}}
        </h3>
        <b-form-input v-model="selectedProduct[0].counten"></b-form-input>
        <small class="mb-2">{{selectedProduct[0].type}}</small>
        <b-btn class="btn-main mb-2 mt-3" @click="productAdded" block>Add</b-btn>
        <b-btn class="outline-main" @click="added = false" block>Cancle</b-btn>
      </div>

      <div class="text-dark px-2 py-1 mb-2 rounded" style="background-color: #fff" v-for="(product, index) in selectedProducts">
        <p class="m-0">{{product.name}} <span class="ml-3">{{product.counten}} / {{productData(product.type)}}</span> <i class="fa fa-times float-right" style="margin-top: 6px;" @click="removeProduct(index)"></i></p>
      </div>

      <h4 class="text-main font-weight-light text-center mb-4">Total: {{total.toFixed(1)}}</h4>

       <b-btn class="btn-main mb-3" variant="danger" block>Add to dire</b-btn>
       <b-btn class="outline-main" block>Cancle</b-btn>

    </div>
    <bottom-bar></bottom-bar>
  </main>
</template>

<script>
  import HsInputIcon from "../components/htmlstream/HsInputIcon";

  export default {
    name: "Eat",
    data() {
      return {
        product: '',
        show: false,
        maleType: null,
        loading: false,
        added: false,
        options: [
          {value: 1, text: 'Breakfast'},
          {value: 2, text: 'Afternoon snack'},
          {value: 3, text: 'Lunch'},
          {value: 4, text: 'Dinner'},
          {value: 5, text: 'Another'},
        ],
        selectedProduct: [],
        products: [],
        selectedProducts: [],
        total: 0
      }
    },
    methods: {
      searchProduct() {
        this.loading = true;
        axios.post('/product-search', {
          product: this.product
        })
            .then(response => {
              this.products = response.data;
              this.loading = false;
            })
      },
      productSelect(index) {
        this.product = '';
        this.added = true;
        this.selectedProduct.push(this.products[index]);
      },
      productAdded() {
        this.added = false;
        this.total = this.total + this.counter(this.selectedProduct[0].counten, this.selectedProduct[0].carbohydrates, this.selectedProduct[0].type)
        this.selectedProducts.push(this.selectedProduct[0]);
        this.products = [];
      },
      productData(type) {
        if (type === 'gramm') {
          return 'g';
        } else if (type === 'povareshki') {
          return 'p';
        } else if (type === 'count') {
          return 'unity';
        } else if (type === 'ml') {
          return 'ml';
        }
      },
      removeProduct(index) {
        let product =  this.selectedProducts[index];
        this.total = this.total - this.counter(product.counten, product.carbohydrates, product.type)
        this.selectedProducts.splice(index, 1);
      },
      counter(counten, carbohydrates, type) {
        let total = 0;
        if (type === 'gramm' || type === 'ml') {
          if (counten >= 100) {
            total = (counten / 100) * (carbohydrates / 12)
          } else if (counten <= 100) {
            total = (carbohydrates / (100 / counten)) / 12
          }
        } else if (type === 'count' || type === 'povareshki') {
          total = (carbohydrates/12) * counten
        }
        return total;
      }
    },
    watch: {
      added() {
        if (this.added === false) {
          this.selectedProduct = [];
        }
      },
      total() {
        if (this.total < 0) {
          this.total = 0;
        }
      },
      product() {
        if (this.product.length > 0) {
          this.show = true;
          this.searchProduct();
        } else {
          this.show = false;
        }
      }
    },
    components: {HsInputIcon}
  }
</script>

<style scoped>
  .product-search-menu {
    position: fixed;
    top: 0;
    width: 95%;
    height: 300px;
    left: 50%;
    transform: translateX(-50%);
    overflow-y: scroll;
  }

  .loader {
    top: 50%;
    border-left-color: #3498DB;
    border-right-color: #3498DB;
    left: 45%;
    transform: translate(-50%, -50%);
  }

  .product-item:hover {
    color: #3498DB;
  }

  .product-count {
    position: fixed;
    width: 92%;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>