const isSwedishMobileNumber = str => /^[070|072|073|076|079]{3}\d{7}$/.test(str);
const normalizeSwedishPhoneNumber = str => str.replace(/[^\d\+]/g, '').replace(/^\+46/, '0');
const formatSwedishMobilePhoneNumber = str => str.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1-$2 $3 $4');

const format = phoneNumber => {
  if (phoneNumber) {
    const normalized = normalizeSwedishPhoneNumber(phoneNumber);
    return isSwedishMobileNumber(normalized) ? formatSwedishMobilePhoneNumber(normalized) : phoneNumber;
  }
};

module.exports = format;
