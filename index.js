/**
 * The specification:
 *
 * https://www.pts.se/sv/Bransch/Telefoni/Nummerfragor/Telefoninummerplanen/Telefoninummerplanens-disposition/
 * http://www.sprakbruk.fi/media/sprakbruk_2009.2_artikel_14.pdf
 */

const subscriberNumberFormats = {
    5: /^(\d{3})(\d{2})$/,
    6: /^(\d{2})(\d{2})(\d{2})$/,
    7: /^(\d{3})(\d{2})(\d{2})$/,
    8: /^(\d{3})(\d{3})(\d{2})$/
};

const isSwedishMobilePhoneNumber = str => /^07[02369]{1}\d{7}$/.test(str);
const isSwedishPhoneNumber = str => str[0] == 0 && str.length > 6 && str.length < 13;
const normalizeSwedishPhoneNumber = str => str.replace(/[^\d\+]/g, '').replace(/^\+46/, '0');
const hasTwoLetterAreaCode = str => /^08/.test(str);
const hasThreeLetterAreaCode = str => /^0(11|13|16|18|19|21|23|26|31|33|35|36|40|42|44|46|54|60|63|90)/.test(str);
const formatSwedishMobilePhoneNumber = str => str.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1-$2 $3 $4');
const formatSubscriberNumber = str => str.replace(subscriberNumberFormats[str.length], (str.length === 5 ? '$1 $2' : '$1 $2 $3'));

const formatSwedishPhoneNumber = str => {
    const [areaCode, subscriberNumber] = splitSwedishPhoneNumber(str);
    return areaCode + '-' + formatSubscriberNumber(subscriberNumber);
};

const splitSwedishPhoneNumber = str => {
    const pos = hasTwoLetterAreaCode(str) ? 2 : (hasThreeLetterAreaCode(str) ? 3 : 4);
    return [str.substring(0, pos), str.substring(pos)];
};

const format = phoneNumber => {
  if (phoneNumber) {
    const normalized = normalizeSwedishPhoneNumber(phoneNumber);

    if (isSwedishMobilePhoneNumber(normalized)) {
      return formatSwedishMobilePhoneNumber(normalized);
    }

    if (isSwedishPhoneNumber(normalized)) {
      return formatSwedishPhoneNumber(normalized);
    }

    return phoneNumber;
  }
};

module.exports = format;
