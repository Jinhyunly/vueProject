<template>
<div id="Write">
    <div class="section">
        <div id="cummunity_write_bar" class="container">
            <div class="cummunity_write_content1" v-on:click="back">
                ←
            </div>
            <div class="cummunity_write_content2">
                글쓰기
            </div>
            <div class="cummunity_write_content3">
                
            </div>
        </div>
    </div>
    <div class="section">
    </div>
    <form method="post" id="myForm" @submit.prevent="sendPost" name="dataForm">
      <div class="section">
          <div id="cummunity_write_title" class="container">
            <div id="">
              title: 
            </div>
            <div>
              <input type="text" name="title" v-model="title">
            </div>
          </div>
      </div>
      <div class="section">
          <div id="cummunity_write_content" class="container">
            <div id="">
              content:  
            </div>
            <div>
              <textarea rows="6" cols="30" name="content" v-model="content"></textarea>
            </div>
            <button>Send</button>
          </div>
      </div>
    </form>
</div>
</template>
<script>
export default {
  template: '#write',
  name: 'write',
  created: function () {
    let id = this.$route.params.id
    this.$http.get(`http://13.125.254.107:3030/posts/${id}`)
    .then((response) => {
      this.post = response.data
    })
  },
  data: function () {
    return {
      post: {},
      counter: 0,
      comments: [],
      title: '',
      content: ''
    }
  },
  methods: {
    back: function (event) {
      this.$router.push('/cummunity')
    },
    sendPost: function (event) {
      this.$http.post('http://13.125.254.107:3030/posts', {
        title: this.title,
        content: this.content,
        writer: 'jinhyun' //
      })
      .then((response) => {
        if (response.status === 200) {
          this.$router.push('/cummunity')
        }
      }, function () {
        console.log('failed')
      })
    },
    load: function (event) {
      this.$router.push('/cummunity')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
