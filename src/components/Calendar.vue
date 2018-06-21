<template>
  <div class="Calendar">
    <div class="section">
        <div class="container" id="calendar_header">
        </div>
    </div>
    <div class="section">
        <div class="container" id="calendar_calendar">
           <vue-event-calendar :events="demoEvents" @day-changed="handleDayChanged" @month-changed="handleMonthChanged"></vue-event-calendar>
            <template scope="props">
              <div v-for="(event, index) in props.showEvents" class="event-item" v-bind:key="index">
                {{event}}
              </div>
          </template>
        </div>
    </div>
  </div>
</template>

<script>
let today = new Date()
export default {
  name: 'calendar',
  data () {
    return {
      movies: [],
      demoEvents: [{
        date: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
        title: 'Title-1',
        desc: 'longlonglong description'
      },
      {
        date: `${today.getFullYear()}/${today.getMonth() + 1}/13}`,
        title: 'Title-1',
        desc: 'longlonglong description'
      },
      {
        date: `${today.getFullYear()}/${today.getMonth() + 1}/15`,
        title: 'Title-1',
        desc: 'longlonglong description'
      },
      {
        date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
        title: 'Title-2'
      },
      {
        date: `${today.getFullYear()}/${today.getMonth() === 11 ? 1 : today.getMonth() + 2}/06`,
        title: 'Title-3',
        desc: 'description'
      }]
    }
  },
  methods: {
    handleDayChanged (data) {
    },
    handleMonthChanged (data) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

