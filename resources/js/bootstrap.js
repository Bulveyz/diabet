import Vue from 'vue';
window._ = require('lodash');
window.Popper = require('popper.js').default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

class Event {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}

window.Event = new Event;

export class Errors {
  /**
   * Create a new Errors instance.
   */
  constructor() {
    this.errors = {};
  }


  /**
   * Determine if an errors exists for the given field.
   *
   * @param {string} field
   */
  has(field) {
    return this.errors.hasOwnProperty(field);
  }


  /**
   * Determine if we have any errors.
   */
  any() {
    return Object.keys(this.errors).length > 0;
  }


  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   */
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }


  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record(errors) {
    this.errors = errors;
  }


  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear(field) {
    if (field) {
      delete this.errors[field];

      return;
    }

    this.errors = {};
  }
}