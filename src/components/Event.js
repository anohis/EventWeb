export default class Event {
  constructor () {
    this.Title = 'New Event'
    this.Location = 'Taiwan'
    this.Date = new Date()
    this.Saved = false
  }
  get Day () {
    return this.Date.getDate()
  }
  get Month () {
    return this.Date.getMonth()
  }
  get Year () {
    return this.Date.getFullYear()
  }
  get DateString () {
    return this.Date.getMonth() + '/' + this.Date.getDate() + '/' + this.Date.getFullYear()
  }
  get DayString () {
    var day = this.Date.getDate()
    return ('0' + day).slice(-2)
  };
  get MonthString () {
    var month = new Array(12)
    month[0] = 'JAN'
    month[1] = 'FEB'
    month[2] = 'MAR'
    month[3] = 'APR'
    month[4] = 'MAY'
    month[5] = 'JUN'
    month[6] = 'JUL'
    month[7] = 'AUG'
    month[8] = 'SEP'
    month[9] = 'OCT'
    month[10] = 'NOV'
    month[11] = 'DEC'
    return month[this.Date.getMonth()]
  };
}
