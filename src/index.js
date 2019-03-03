import Vue from "vue"

Vue.component('test-post', {
    props: ['post'],
    template: `
      <div>
        <h3>{{ post.title }}</h3>
        <button v-on:click="log">
            Change title
        </button>
      </div>
    `,
    methods: {
        log: function() {
            this.post.title='Changed title';
            this.$emit('changed-title')
        }
    }
  })

  new Vue({
    el: '#test-posts',
    data: {
      posts: [
        { id: 1, title: 'Title 1' },
        { id: 2, title: 'Title 2' },
        { id: 3, title: 'Title 3' }
      ]
    },
    methods: {
        log: function(item) {
            console.log(item)
        }
    }
  })