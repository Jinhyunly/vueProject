<template>
  <div class="Index">
    <div class="section">
        <div id="header" class="container">
            <div id="displayname">
                {{movies[0].name}}
            </div>
            <div id="displayCalender">
                <div id="c1" class="displayCalender_view" v-on:click="seng">
                   <img src="../icon/drop.png" style="height:10vh; width:8vh; border-radius: 50%;"> 
                    생리예정일
                </div>
                <div id="c2" class="displayCalender_view" v-on:click="bae">
                    <img src="../icon/flower.png" style="height:10vh; width:8vh; border-radius: 50% "> 
                    배란예정일
                </div>
                <div id="c3" class="displayCalender_view" v-on:click="ga">
                    <img src="../icon/cells.png" style="height:10vh; width:8vh; border-radius: 50% "> 
                    가임기시작
                </div>
            </div>
            <div id="displayDate">
                <h3 style="margin:0; padding:0">{{movies[0].title}}</h3>
                <div id="displayDate_content">{{movies[0].title}}일 지났습니다.</div>
            </div>
        </div>
    </div>
    <div class="section">
        <div id="info" class="container">
            <div id="displayDate_info">
                최근생리일: {{movies[0].title}}<br>오늘의 임신확률 {{movies[0].title}} <br>
                최근 평균 주기 {{movies[0].title}}
            </div>
        </div>
    </div>
    <div class="section">
        <div id="something" class="container">
            something
        </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('http://13.125.254.107:3030/posts')
    .then((response) => {
      // console.log(response.data)
      this.movies = response.data
    })
  },
  name: 'index',
  data () {
    return {
      movies: []
    }
  },
  methods: {
    seng: function (event) {
      this.movies[0].title = 'seng'
    },
    bae: function (event) {
      this.movies[0].title = 'bae'
    },
    ga: function (event) {
      this.movies[0].title = 'ga'
    }
  }
}
</script>
