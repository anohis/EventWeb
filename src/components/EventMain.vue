<template>
  <div>
    <Button v-on:click = "Add()">Add</Button>
    <div class = "Area_EventList">
      <EventPlane v-for="event in List" :key="event" :event="event" v-on:edit="Edit(event)"></EventPlane>
    </div>
    <EventEditor ref="Editor" @save="OnSave"></EventEditor>
  </div>
</template>

<script>
import Event from './Event.js'
import EventPlane from './EventPlane'
import EventEditor from './EventEditor'

export default {
  name: 'EventMain',
  components: { EventPlane, EventEditor },
  data () {
    return {
      List: []
    }
  },
  methods:
  {
    Add: function () {
      this.$refs.Editor.Open(new Event(), 'New Event')
    },
    Edit: function (event) {
      this.$refs.Editor.Open(event, 'Edit Event')
    },
    OnSave: function (event) {
      console.log(event)
      if (!event.Saved) {
        this.List.push(event)
        event.Saved = true
      }
    }
  }
}
</script>

<style scoped src="../css/EventStyle.css">
</style>
<style scoped src="../css/Fontawesome/css/fontawesome.css">
</style>
<style scoped src="../css/Fontawesome/css/brands.css">
</style>
<style scoped src="../css/Fontawesome/css/solid.css">
</style>
