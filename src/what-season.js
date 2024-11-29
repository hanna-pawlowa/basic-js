const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
//const isValidDateFormat = (date) =>{
//  const dateRegexes = [
//      /^\\d{4}-\\d{2}-\\d{2}$/,
//      /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\\d{4})$/,
//      /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-2])\/\d{4}$/
//  ]
//
//  return dateRegexes.some((regex)=> regex.test(date)) ? "true" : "false"
//}
//
//const isValidDate = (str) =>  {
//  const date = new Date(str);
//
//  return (date instanceof Date) && !isNaN(date) && isValidDateFormat(str);
//}

function getSeason(date) {
  //const timestamp = date.getDate()
  //const isValidDate = isNaN(timestamp) || Number.isFinite(timestamp)
  //
  //const validDate= isValidDate(date)
  //
  //if (!validDate) {
  //  throw new Error('Invalid date!')
  //}

  //const seasons = ['winter', 'spring', 'summer', 'fall']
  //let season = ''
  //
  //const oneBasedMonth = date.getMonth() + 1
  //
  //switch(oneBasedMonth) {
  //  case 1:
  //    season = seasons[0]
  //    break
  //  case 2:
  //    season = seasons[0]
  //    break
  //  case 3:
  //    season = seasons[1]
  //    break
  //  case 4:
  //    season = seasons[1]
  //    break
  //  case 5:
  //    season = seasons[1]
  //    break
  //  case 6:
  //    season = seasons[2]
  //    break
  //  case 7:
  //    season = seasons[2]
  //    break
  //  case 8:
  //    season = seasons[2]
  //    break
  //  case 9:
  //    season = seasons[3]
  //    break
  //  case 10:
  //    season = seasons[3]
  //    break
  //  case 11:
  //    season = seasons[3]
  //    break
  //  case 12:
  //    season = seasons[0]
  //    break
  //}
  //
  //return season
}

module.exports = {
  getSeason
};
