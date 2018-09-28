<template>
  <main>
    <div class="login">
      <h3 class="font-weight-light text-main text-center mb-5">Sign Up</h3>
      <div class="login-form container">
        <div class="form-group mb-4">
          <hs-input-icon v-model="email" placeholder="Your email address" type="email" icon="fa fa-envelope"></hs-input-icon>
          <small class="text-danger" v-if="errors.has('email')">{{errors.get('email')}}</small>
        </div>
        <div class="form-group mb-4">
          <hs-input-icon v-model="name" placeholder="Username" icon="fa fa-user"></hs-input-icon>
          <small class="text-danger" v-if="errors.has('name')">{{errors.get('name')}}</small>
        </div>
        <div class="form-group mb-4">
          <hs-input-icon v-model="password" placeholder="Password" type="password" icon="fa fa-lock"></hs-input-icon>
          <small class="text-danger" v-if="errors.has('password')">{{errors.get('password')}}</small>
        </div>
        <div class="form-group mb-4">
          <hs-input-icon v-model="passwordConfiramtion" placeholder="Confirm Password" type="password" icon="fa fa-lock"></hs-input-icon>
          <small class="text-danger" v-if="errors.has('password_confiramtion')">{{errors.get('password_confiramtion')}}</small>
        </div>
        <div class="form-group">
          <b-btn class="btn-main" @click="signUp" block>
            <span v-if="!loading">Sign Up</span>
            <div v-if="loading" class="loader mx-auto"></div>
          </b-btn>
        </div>
        <div class="form-group">
          <b-btn class="outline-main" to="login" block>
            Back to log in
          </b-btn>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import HsInputIcon from "../components/htmlstream/HsInputIcon";
  import WelcomeHeader from "../components/WelcomeHeader";
  import {Errors} from "../bootstrap";
  import {router} from "../router/router";

  export default {
    name: "SignUp",
    data() {
      return {
        errors: new Errors(),
        email: '',
        name: '',
        password: '',
        passwordConfiramtion: '',
        loading: false
      }
    },
    methods: {
      signUp() {
        this.loading = true;
        axios.post('/register', {
          email: this.email,
          name: this.name,
          password: this.password,
          password_confirmation: this.passwordConfiramtion
        })
            .then(response => {
              this.loading = false;
              router.push('/');
            })
            .catch(errors => {
              this.loading = false;
              this.errors.record(errors.response.data.errors);
            })
      }
    },
    components: {WelcomeHeader, HsInputIcon}
  }
</script>

<style scoped>
  .loginButton {
    background-color: #422C69;
    border-color: #422C69;
  }

  .loginButton:hover {
    background-color: #513681 !important;
    border-color: #513681 !important;
  }
</style>