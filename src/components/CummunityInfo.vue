<template>
<div id="CummunityInfo">
    <div class="section">
        <form method="post" name="dataForm">
            <div id="cummunity_info_bar" class="container">
                <div class="cummunity_info_content1" v-on:click="back">
                    ←
                </div>
                <div class="cummunity_info_content2">
                    {{post.title}}
                </div>
                <div class="cummunity_info_content3" v-on:click="heart">
                    ♡
                </div>
            </div>
        </form>
    </div>
        <div class="section">
            <div id="cummunity_info_likedate" class="container">
                <div class="cummunity_info_half">
                    좋아요 : {{post.likeCount}}
                </div>
                <div class="cummunity_info_half">
                    작성일: 2018.05.18
                </div>
            </div>
        </div>
        <div class="section">
            <div id="cummunity_info_content" class="container">
                {{post.content}}
            </div>
        </div>
        <div class="section">
            <div id="cummunity_info_comment" v-if="comments.comments[0]" class="container">
                댓글, {{comments.comments[0].content}} 
                <!-- if문 댓글있을때 출력 -->
                <ul>
                  <div v-for="comment in comments.comments" v-bind:key="comment.content._id">
                      {{comment.content}}
                  </div>
                </ul>
            </div>
        </div>
</div>
</template>
<script>
export default {
  template: '#cummunityinfo',
  name: 'cummunityinfo',
  created: function () {
    let id = this.$route.params.id
    this.$http.get(`http://13.125.254.107:3030/posts/${id}`)
    .then((response) => {
      this.post = response.data
    })
    this.$http.get(`http://13.125.254.107:3030/posts/${id}/comments`)
    .then((response) => {
      this.comments = response.data
    })
  },
  data: function () {
    return {
      post: {},
      counter: 0,
      comments: []
    }
  },
  methods: {
    back: function (event) {
      this.$router.push('/cummunity')
    },
    heart: function (event) {
      this.counter += 1
      this.select()
    },
    select: function (event) {
      if (this.counter % 2 === 1) {
        this.post.likeCount += 1
      } else {
        this.post.likeCount -= 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
