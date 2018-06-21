<template>
  <div class="Cummunity" v-cloak>
      <router-view></router-view>
        <div class="section" id="cummunity_nav">
          <form action="/cummunity">
            <div id="cummunity_search" class="container">
                  <select class="cummunity_content1">
                      <option selected>최신</option>
                      <option value="좋아요">좋아요</option>
                      <option value="댓글">댓글</option>
                  </select>
                  <div class="cummunity_content2">
                      
                      <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어 입력" autofocus>
                      <input v-show="inputValue" v-on:click="inputValue=''" type="reset" class="btn-reset" value="x">
                  </div>
                  <div class="cummunity_content3" v-on:click.prevent="submitted">
                      검색{{inputValue}}
                  </div>
            </div>
          </form>
        </div>
        
        <div id="cummunity_listdiv">
            <div id="search-result">
                <ul>
                  <router-link :to="{ name: 'cummunityinfo', params: {id: post._id}}"  v-for="post in posts" v-bind:key="post._id" style="color:black; text-decoration:none">
                    <div class="community_infos">
                      <div id="info1">
                        제목: {{post.title}} 
                      </div>
                      <div id="info2">
                        따봉:
                      </div>
                    </div>
                  </router-link>
                </ul>
            </div>
        </div>
        <a style="font-size:13vh; color:red; display:scroll; position:fixed; margin-left:33%; bottom:15%; left:50%; text-decoration:none" href="/write">+</a>
    </div>
</template>
<script>
export default {
  name: 'cummunity',
  data () {
    return {
      posts: [],
      inputValue: this.value
    }
  },
  watch: {
  },
  methods: {
    submitted: function (event) {
      this.inputValue = ''
      this.$router.push('/cummunity')
    },
    onKeyup: function (event) {
    }
  },
  created () {
    this.$http.get('http://13.125.254.107:3030/posts')
    .then((response) => {
      this.posts = response.data
      this.loaded = true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
