export const getDateToString = date => {
  let fullYear = date.getFullYear(),
    month = date.getMonth() + 1,
    dateOfMonth = date.getDate()
  let formattedMonth = month < 10 ? "0" + month : month
  let formattedDay = dateOfMonth < 10 ? "0" + dateOfMonth : dateOfMonth
  return fullYear + "-" + formattedMonth + "-" + formattedDay
}
