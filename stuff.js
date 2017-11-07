
--> main -> functions to use it
--> messages -> { val: message }
--> regex -> { val: exp }

const val = x => y => x + y

-- rules

--> affects input by class
--> class main defined => text, number, email, date, password, 
--> class states: text, text-success, text-fail (The form how this work is, first the class "text" is normal, then if the user type or send the event, if the data is ok, text-success, and if fail text-fail)
--> define elements with class by default. This class are without styles, 
--> the event class need to put a "div" box bellow the main box, with the message and the class-fail-message


>> Input box class

-> input-text (user need to put into a input first)
-> input-success
-> input-fail

>> div box class

-> box-message
-> box-message-success
-> box-message-fail

>> First the user put the class into a input. (like "text", "email", etc)
>> js define, handle, put and remove, these classes, from the DOM element


>> "each class" have a conditional rule
 * text, email, number, data. To define the content input value
 * required: this input need a content to have success request



>>> rules format

* required -> if the input is empty -> change status to "input-fail" and "message-fail"
* type (text, email, number, etc) -> have a default rules, and sometimes have regex

>>> States block

>> "Each class-block-state" have a behavior
 * good value content =>
    
    - main block

      REMOVE:
        - input-fail
      
      ADD:
        - input-success

    - message block

      REMOVE:
        - box-message-fail

      ADD:
        - box-message-success

 * fail value content => input

    - main block

      REMOVE:
        - input-success
      
      ADD:
        - input-fail

    - message block

      REMOVE:
        - box-message-success

      ADD:
        - box-message-fail


* use joi?

* types

text
number
email
date
gender
password

* each one have the validations defined
* each one have a regular expresion if needs

** How to Use it

Step 1

> Just pick out a class and put into a input box class then then the validation works.
> It's needs a input trigger (like a event button) to read the current input state and validate the next state to get a success event to next step or promp the message errors
  a function that:
    - find out the inputs in the current DOM 
    - validate the rules and change the status to each one


// check in the event button
- message: the field is required
- message: the field type format is not valid. Follow the rules and the regex

// check in the event change
- don't allow numbers, characters if the field don't allow in its rules



>> rules

required

only text
only number
text and number

limit min length
limit max length

regex format 


> default ?
  only add classes

> free custom ?
  js to create schema, and desides the basic rules



input-number

//-------
const sample = ''

// define Rules
const schemaText = Joi.object().keys({
  value: Joi.string()
})

const schemaNumber = Joi.object().keys({
  value: Joi.number().alphanum().min(3).max(30)
})

const schemaTelphone = Joi.object().keys({
  value: Joi.number().min(3).max(30)
})

const schemaEmail = Joi.object().keys({
  value: Joi.string().email()
})

const schemDNI = Joi.object().keys({
  value: Joi.number().alphanum().min(3).max(30)
})

const schemPassword = Joi.object().keys({
  value: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
})

const schemDate = Joi.object().keys({
  value: Joi.number().integer().min(1900).max(2013)
})


// --------

// use schema
let value = $('input-text').val()
// let result = Joi.validate({ value: value }, schemaText)

// callback
Joi.validate({ value: value }, schemaText, (err, value) => {
  if (err) {
    return err
  }
  // validation
})

// with promise
var promise = Joi.validate({ value: value }, schemaText)
  promise.then((value) => {

  })
  promise.catch((err) => {
    return err
  })



required_Message: "Este campo es obligatorio"

// message text
export default const messages = {
  'input-text': {
    success: '', // not message
    fail: 'el campo no es valido', // dynamic message
    regex: 'el formato no es valido. Ejemplo validio: juanelrac125@gmail.com' // dynamic message
    required: 'Este campo es obligatorio'
  }
}


// regex
export default const regex = {
  'input-text': {
    regex: /^[a-zA-Z0-9]{3,30}$/
  },
  'input-email': {
    regex: '/+*/5[(¨¨/(*)]*/'
  },
  'input-dni': {
    regex: '/+*/5[(¨¨/(*)]*/'
  }
}

// use
import regex from './regex'
const schemPassword = Joi.object().keys({
  value: Joi.string().regex(regex['input-text']),
})


// List enabled
let current = {
  'input-text': {
    rules: schemaText,
    messages: messageText,
    regex: regexText
  },
  'input-number': {
    rules: schemaText,
    messages: messageText,
    regex: regexText
  },
  'input-email': {
    rules: schemaText,
    messages: messageText,
    regex: regexText
  },
  'input-dni': {
    rules: schemaText,
    messages: messageText,
    regex: regexText
  }
}


function eventEvaluation (ctx, val) {
  return function (ctx) {
    return ctx + '.Joi'
  }
}

function mainEvent('doma') {
  eventEvaluation()
}


var $eventClick = $('.btnEventClick')

$eventClick.on('click', (event) => {
  mainEvent()
})




function mainEvent() {
  var $e1 = $('.e1')
  var $e2 = $('.e2') // not required
  var $e3 = $('.e3')
  var $e4 = $('.e4')
  var $e5 = $('.e5')

  $e1
}


// First evaluate all requeried fields wasn't empty
  // If anyone is empty, change status and put message * required

// Second: Evaluate rules and regexp
  // If anyone don't follow the rule, change status and put message


// Each fields single validation
> Required Fields
* field empty -> message error * required
* field content validation with rules and regexp -> message error

> Not Required Fields
* fields content validation with rules and regexp -> message error


>>> event cycle
  * if field have classs "required"
    -> isEmpty?
        true -> 
        false -> 

  * fields validation




function isEmpty(value) {
  let isEmptyObject = (a) => {
    if (typeof a.length === 'undefined') { // it's an Object, not an Array
      let hasNonempty = Object.keys(a).some(nonEmpty(element) => {
        return !isEmpty(a[element]);
      })
      return hasNonempty ? false : isEmptyObject(Object.keys(a))
    }

    return !a.some(nonEmpty(element) => { // check if array is really not empty as JS thinks
      return !isEmpty(element); // at least one element should be non-empty
    })
  }

  return (
    value == false ||
    typeof value === 'undefined' ||
    value == null ||
    (typeof value === 'object' && isEmptyObject(value))
  )
}

xss -> protection

// it's a class, that say we can have a lot items with the same class
// for this reason we need to use a .querySelectorAll('.input-text') en evaluate the event to each single one
