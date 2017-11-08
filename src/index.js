
import messages from './messages'
import regexp from './regexp'
import $ from 'jquery'

import {isEmpty} from './utils'

// elements
const inputsFormat = {
  'input-text'_ {
    messages: messages['input-text'],
    regexp: regexp['input-text']
  },
  'input-number'_ {
    messages: messages['input-number'],
    regexp: regexp['input-number']
  },
  'input-dni'_ {
    messages: messages['input-dni'],
    regexp: regexp['input-dni']
  },
  'input-email'_ {
    messages: messages['input-email'],
    regexp: regexp['input-email']
  },
  'input-date'_ {
    messages: messages['input-date'],
    regexp: regexp['input-date']
  },
  'input-gender'_ {
    messages: messages['input-gender'],
    regexp: regexp['input-gender']
  },
  'input-phone'_ {
    messages: messages['input-phone'],
    regexp: regexp['input-phone']
  }
}

// Find out all inputs elements from DOM in a block
function findOutInputElements(mainBlockElementClass, inputList) {
  // input Element in the block
  let inputElementInTheBlockList = {}

  // find out all the input-* elements in the block
  for(let input in inputList) {
    let element = $(`.${mainBlockElementClass}  .${ input }`)
    if (element.length) {
      inputElementInTheBlockList[input] = element
    }
  }

  return inputElementInTheBlockList
}

// Evaluate each single input Element
function evaluateElements(inputList) {
  // Evaluate input List from DOM
  for(let input in inputList) {
    // the element have 'input-required' class?
    let currentElement = inputList[input]

    if (currentElement.hasClass('input-required')) {
      // the input isEmpty?
      let elementContent = currentElement.val()
      if(isEmpty(elementContent)) {
        // throw error event
        inputFieldIsRequired(elementContent)
      } else {
        // evaluate rules
        inputRulesContent(elementContent)
      }
    
    } else {
      // evaluate rules
      inputRulesContent(elementContent)
    }
  }
}

function inputRulesContent(elementInput) {

}

function inputFieldIsRequired(elementInput) {
  // add box-message
  // add message
}

function main(mainBlockElementClass) {
  let inputList = findOutInputElements(mainBlockElementClass, inputsFormat)
  evaluateElements(inputList)
}

