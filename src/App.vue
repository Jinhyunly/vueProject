<template>
  <div id="app">
    <router-view></router-view>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Cummunity from './components/Cummunity'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Navigation,
    Cummunity
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

select {
    padding-left: 10px; 
    border: 1px solid #006fff;
    border-radius: 3px;
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
}
select::-ms-expand {
   display: none;            /* 화살표 없애기 for IE10, 11*/
}


/* 공통 */
  .movie{
    display: block;
  }
  [v-cloak] {
    display: none;
  }
  .nav_centent{
    cursor: default;
    text-decoration: none;
    color: black;
  }
  
  body{
    margin:0;
    padding:0;
  }
  .container{
    text-align: center;
  }
  
  /* home layout */
  
  body{
  margin:0;
  padding:0;
}
.container{
  text-align: center;
}
#header{
  height:55vh;
}
#something{
  height:25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;
}
#nav{
  height:10vh;
  
}


/* home header */


#header #displayname{
  text-align: right;
  height: 5vh;
  border-bottom: 0.1px solid black;
  background-color: lightpink;
}
#header #displayCalender{
  display: flex;
  height: 30vh;
  justify-content: space-around;
}
.displayCalender_view{
  width:33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.5px;
}
#displayDate{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: blanchedalmond;
}
#displayDate_content{
  font: 1px;
}
#displayDate h3{
  margin:0
}
#displayDate_info{
  font-size: 0.9rem;
}


#c1:hover, #c2:hover, #c3:hover{
  background-color: lightpink;
}


/* home nav */
#nav{
  display: flex;
  justify-content: space-around;
  background-color: lightpink;
  color : black;
  position: fixed;
  bottom: 0;
  width: 100%;
  
}
.nav_centent{
  width:25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.5px;
}
#home:hover, #calender:hover, #cummunity:hover, #hospital:hover{
  background-color: white;
}
  
  
  /* home nav */
  #nav{
    display: flex;
    justify-content: space-around;
    background-color: lightpink;
    color : black;
    position: fixed;
    bottom: 0;
    width: 100%;
    
  }
  .nav_centent{
    width:25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
  }
  #home:hover, #calender:hover, #cummunity:hover, #hospital:hover{
    background-color: white;
  }
  
  
  
  /* cummunity */
  
  #cummunity_search{
    height: 10vh;
  }
  
  #cummunity_contents{
    height:80vh;
  }
  #cummunity_nav{
    height:10vh;
  }
  
  input[type=text] {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height:100%;
    /* margin: 15px 0 15px 0; */
    /* padding: 10px 15px; */
    font-size: 14px;
    line-height: 1.5;
    border: 1px solid #cccccc;
   
  }
  
    .btn-reset,
    .btn-remove {
      border-radius: 50%;
      background-color: #ccc;
      color: white;
      border: none;
      padding: 2px 5px;
    }
    .btn-reset {
      position: absolute;
      top: 3%;
      right: 18%;
    }
    .btn-reset::before, 
    .btn-remove::before {
      content: 'X'
    }
  
  
  /* cummunity_info */
  
  #cummunity_info_bar{
    height:10vh;
  }
  
  #cummunity_info_likedate{
    height:10vh;
  }
  #cummunity_info_content{
    height:50vh;
  }
  #cummunity_info_comment{
    height:35vh;
  }
  
  
  
  /* cummunity.html  */
  
  #cummunity_search{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
  }
  .cummunity_content1{
    width:15%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
    
  }
  .cummunity_content2{
    width:70%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
  }
  .cummunity_content3{
    width:15%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
  }
  .cummunity_content h3{
    margin:0;
  }
  .cummunity_content{
    height:20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    border : solid black 1px;
  }
  
  #search-result li {
    display: flex;
  }
  #search-result img {
    width: 25%;
    height: 20%;
  }
  #search-result ul{
    margin:0.3vh;
    padding: 0;
  }
  #cummunity_listdiv{
    overflow: scroll;
    height:80vh;
  }
  
  .community_infos{
    height:6vh;
    background-color: antiquewhite;
    border: 0.09vh solid gray;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #info1{
    width:60%;
    height:6vh;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  #info2{
    width:40%;
  }
  /* cummunity_info */
  
  #cummunity_info_bar{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
  }
  .cummunity_info_content1{
    width:15%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
  }
  .cummunity_info_content2{
    width:70%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
    
  }
  .cummunity_info_content3{
    width:15%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
  }
  #cummunity_info_likedate{
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .cummunity_info_half{
    height:5vh;
    width:50%;
    border : solid black 1px;
  }
  #cummunity_info_content{
    display: flex;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
  }
  #cummunity_info_comment{
    display: flex;
    justify-content:center;
    align-items: center;
    border : solid black 1px;
  }
  
  
  
  
  /* calendar layout */
  
  #calendar_header{
    height:5vh;
    background-color: pink;
  }
  #calendar_calendar{
    overflow: scroll;
    background-color: ghostwhite;
  }
  #calendar_date{
    height:5vh;
    background-color: pink;
  }
  .calendar_button_info{
    height:4.7vh;
    background-color: white;
    border: 1px solid black;
  }
  #calendar_header{
    text-align: right;
  }
  #calendar_calendar{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .events-wrapper{
    margin-bottom: 10vh;
  }
  
  
  
  
  
  /* hospital layout */
  
  
  #hospital_header{
    height:5vh;
    background-color: pink;
  }
  #map{
    height:65vh;
  }
  #hospital_confirm{
    height:5vh;
    background-color: pink;
  }
  .hospital_info{
    height:4.7vh;
    border: 1px solid black;
  }
  
  
  #hostpital_nav{
    height:10vh;
    display: flex;
    justify-content: space-around;
    background-color: palevioletred;
    color : black;
  }
  
  
  .hospital_nav_content{
    width:33.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5px;
  }
    
  
  
  
  #hospital_header{
    text-align: right;
  }
  

  
/* cummunity_write */

#cummunity_write_bar{
  height:10vh;
}

#cummunity_write_likedate{
  height:10vh;
}
#cummunity_write_title{
  height:20vh;
}
#cummunity_write_content{
  height:65vh;
}


/* cummunity_write */

#cummunity_write_bar{
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  border : solid black 1px;
}
.cummunity_write_content1{
  width:15%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items: center;
  border : solid black 1px;
}
.cummunity_write_content2{
  width:70%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items: center;
  border : solid black 1px;
  
}
.cummunity_write_content3{
  width:15%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items: center;
  border : solid black 1px;
}

#cummunity_write_title{
  display: flex;
  justify-content:center;
  align-items: center;
  border : solid black 1px;
}
#cummunity_write_content{
  display: flex;
  justify-content:center;
  align-items: center;
  border : solid black 1px;
}

  
  
  
</style>
