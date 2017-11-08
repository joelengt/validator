import Joi from 'Joi'
import regexList from '../regex'

const schemaText = Joi.object().keys({
  value: Joi.string()
})

const schemaNumber = Joi.object().keys({
  value: Joi.number().alphanum().min(1).max(30)
})

const schemaPhone = Joi.object().keys({
  value: Joi.number().max(9)
})

const schemaEmail = Joi.object().keys({
  value: Joi.string().email().regex(regexList['input-email'].regex)
})

const schemDNI = Joi.object().keys({
  value: Joi.number().alphanum().max(8)
})

const schemPassword = Joi.object().keys({
  value: Joi.string().regex(regexList['input-password'].regex),
})

const schemGender = Joi.object().keys({
  value: Joi.string().regex(regexList['input-gender'].regex),
})

const schemDate = Joi.object().keys({
  value: Joi.number().integer().min(1900).max(2013)
})

export default const rulers = {
  'input-text':_  schemaText,
  'input-number': schemaNumber,
  'input-dni':    schemDNI,
  'input-email':  schemaEmail,
  'input-date':   schemDate,
  'input-gender': schemGender,
  'input-password': schemPassword,
  'input-phone':  schemaPhone
}