<template>
  <div class = "Area_Event">
  <FONT class = "Title">{{ event.Title }}</FONT>
    <FONT class = "Day">{{ event.DayString }}</FONT>
    <FONT class = "Month">{{ event.MonthString }}, {{ event.Year }}</FONT>
    <FONT class = "Time">7pm-10pm</FONT>
    <div class = "Area_Address">
      <i class = "fas fa-map-marker-alt Icon"></i>
      <FONT class = "Address">{{ event.Location }}</FONT>
    </div>
    <div class = "Area_Info">
      <FONT class = "GuestsCount">87</FONT>
      <FONT class = "Label_Guests">Guests attending</FONT>
      <i class = "fas fa-pencil-alt Icon" v-on:click = "Edit()"></i>
      <FONT class = "Label_Editor">Edit event</FONT>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPlane',
  props: ['event'],
  methods:
  {
    Edit: function () {
      this.$emit('edit')
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
