<template>
  <div v-if="IsOpen" class = "EditorBackground">
    <div class = "Area_Editor">
  <div class = "Area_Head">
        <FONT class = "Label_EditorHead">{{Title}}</FONT>
        <FONT class = "EditorClose"
          v-on:click = "Close()">&times;</FONT>
      </div>
      <FONT class = "Label_EventTitle">Event Title</FONT>
      <input class = "Input_EventTitle"
        :value = "Clone.Title"
        @input = "Clone.Title = $event.target.value"
        placeholder = "ADD EVENT TITLE">
      <FONT class = "Label_Location">Location</FONT>
      <input class = "Input_Location"
        :value  = "Clone.Location"
        @input = "Clone.Location = $event.target.value"
        placeholder = "ENTER A LOCATION">
      <FONT class = "Label_Date">Date</FONT>
      <date-picker v-model = "Clone.Date" width = "240px" class = "Input_Date" placeholder = "PICK A DATE">
        <div class = "Picker" slot="calendar-icon">
          <i class = "fas fa-calendar-alt Icon"
            v-on:click = "OpenDatepicker()"></i>
        </div>
      </date-picker>
      <button class = "EditorSave"
        @click = "Save">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import Event from './Event.js'
import DatePicker from 'vue2-datepicker/lib/datepicker.js'
import 'vue2-datepicker/lib/datepicker.css'

export default {
  name: 'EventEditor',
  components: { DatePicker },
  data () {
    return {
      IsOpen: false,
      Editing: new Event(),
      Clone: new Event(),
      Title: ''
    }
  },
  methods:
  {
    Open: function (event, title) {
      this.Editing = event
      this.Clone.Title = event.Title
      this.Clone.Location = event.Location
      this.Clone.Date = event.Date
      this.IsOpen = true
      this.Title = title
    },
    mounted: function () {
    },
    Close: function () {
      this.IsOpen = false
    },
    Save: function () {
      this.Editing.Title = this.Clone.Title
      this.Editing.Location = this.Clone.Location
      this.Editing.Date = this.Clone.Date
      this.Close()
      this.$emit('save', this.Editing)
    }
  }
}
</script>

<style scoped src="../css/EditorStyle.css">
</style>
<style scoped src="../css/EditorStyle.css">
</style>
<style scoped src="../css/Fontawesome/css/fontawesome.css">
</style>
<style scoped src="../css/Fontawesome/css/brands.css">
</style>
<style scoped src="../css/Fontawesome/css/solid.css">
</style>
