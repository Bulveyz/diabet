<template>
  <main>
    <div class="container text-white">
      <div class="form-group mb-4">
        <b-form-input class="form--pill" placeholder="Product name" v-model="name" required></b-form-input>
      </div>
      <div class="form-group mb-4">
        <b-form-select class="form--pill" v-model="type">
          <option value="gramm">Gramm</option>
          <option value="ml">Milligram</option>
          <option value="count">Unit</option>

        </b-form-select>
        <small class="text-gray">Calculate in {{type}}</small>
      </div>
      <div class="form-group mb-4">
        <b-form-input class="form--pill" type="number" placeholder="Carbohydrates"
                      v-model="carbohydrates"></b-form-input>
        <small class="text-gray">Сarbohydrates per 100 grams</small>
      </div>

      <div class="form-group mb-4">
        <b-form-input class="form--pill" type="number" :placeholder="type.charAt(0).toUpperCase() + type.slice(1)"
                      v-model="counten"></b-form-input>
        <small class="text-gray">Default {{type}}</small>
      </div>

      <div class="form-group mb-4">
        <b-btn @click="productAdded" class="mb-2 btn-main" variant="success" block>Add</b-btn>
        <small class="text-main" v-if="success">Product has added</small>
        <small class="text-danger" v-if="error">{{error[0]}}</small>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </main>
</template>

<script>
  export default {
    name: "Product",
    data() {
      return {
        name: '',
        carbohydrates: 0,
        type: 'gramm',
        counten: 100,
        success: false,
        error: false
      }
    },
    methods: {
      productAdded() {
        axios.post('product', {
          name: this.name,
          carbohydrates: this.carbohydrates,
          type: this.type,
          counten: this.counten
        })
            .then(response => {
              this.carbohydrates = 0;
              this.type = 'gramm';
              this.counten = 100;
              this.success = true;
            })
            .catch(errors => {
              this.loading = false;
              this.error = errors.response.data.errors.name;
            })
      }
    },
    watch: {
      type() {
        if (this.type === 'ml') {
          this.counten = 250;
        } else if (this.type === 'count') {
          this.counten = 1;
        } else if (this.type === 'gramm') {
          this.counten = 100;
        }
      }
    }
  }
</script>

<style scoped>

</style>