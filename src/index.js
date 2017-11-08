
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
    let element = $(`.${mainBlockElementClass}  .${ input }`) // check only a single element <==
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
        inputFieldIsRequired(currentElement, input)
      } else {
        // evaluate rules
        inputRulesContent(currentElement, input)
      }
    
    } else {
      // evaluate rules
      inputRulesContent(currentElement, input)
    }
  }
}

/* Input Rules */
function inputRulesContent(elementInput) {

}


/* Input isRequired Event*/
function inputFieldIsRequired(elementInput, input) {
  // add box-message
  let boxNext = elementInput.next()
  if(boxNext.hasClass('box-message')) {
    removeMessageBox(elementInput)
  }

  // add new message box
  addMessageBox(elementInput, inputsFormat[input].messages.required)

  // add class: box message - message-box-fail
  messageBoxClassStatus(elementInput, false) // add this
}


/* Message box */
function addMessageBox(elementInput, message) {
  // add or replace a box with message to the next elementInput
  let messageBox = `
    <div class="box-message">
      <p>${message}</p>
    </div>`

  // Add message box after this element 
  elementInput.after(messageBox)
}

function removeMessageBox(elementInput) {
  // remove the next message box
  elementInput.next().html('')
}

function messageBoxClassStatus(elementInput, statusClass) {
  // affect to next close "messageBox" element
  let boxMessage = elementInput.next()
  if (boxMessage.hasClass('box-message')) {
    if(statusClass) { // If is true add success
      // remove box-message-fail
      boxMessage.removeClass('box-message-fail')
      // add box-message-success
      boxMessage.addClass('box-message-success')

    } else { // if is false add fail
      // remove box-message-success
      boxMessage.removeClass('box-message-success')
      // add box-message-fail
      boxMessage.addClass('box-message-fail')
    }
  }
}


/* input box classes status*/
function inputBoxClassStatus(elementInput, statusClass) {
  if(statusClass) { // If is true add success
    // remove box-message-fail
    elementInput.removeClass('input-fail')
    // add box-message-success
    elementInput.addClass('input-success')

  } else { // if is false add fail
    // remove input-success
    elementInput.removeClass('input-success')
    // add input-fail
    elementInput.addClass('input-fail')
  }
}

/* Main Function */
function main(mainBlockElementClass) {
  let inputList = findOutInputElements(mainBlockElementClass, inputsFormat)
  evaluateElements(inputList)
}

