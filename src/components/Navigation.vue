<template>
  <div>
    <div class="Navigation">
        <div id ="nav" class="container">
            <router-link to="/" id="home" class="nav_centent">
                <img src="../icon/home.png" alt="" style="height:5vh; width:5vh; "/> 
                홈
            </router-link>
            <router-link to="/calendar" id="calender" class="nav_centent">
                <img src="../icon/calendar.png" alt="" style="height:5vh; width:5vh; "/> 
                캘린더
            </router-link>
            <router-link to="/cummunity" id="cummunity" class="nav_centent">
                <img src="../icon/community.png" alt="" style="height:5vh; width:5vh;"/>
                커뮤니티
            </router-link>
            <router-link to="/hospital" id="hospital"  class="nav_centent">
                <img src="../icon/location.png" alt="" style="height:5vh; width:5vh; "/>
                병원찾기
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>
