const messageRequired = 'El campo es obligatorio'

const messages = {
  'input-text': {
    'required': messageRequired,
    'success': '',
    'fail': 'El campo texto no es valido'
  },
  'input-number': {
    'required': messageRequired,
    'success': '',
    'fail': 'El campo numero no es valido'
  },
  'input-email': {
    'required': messageRequired,
    'success': '',
    'fail': 'El campo email no es valido'
  },
  'input-dni': {
    'required': messageRequired,
    'success': '',
    'fail': 'El campo dni debe tener min 8 digitos'
  },
  'input-phone': {
    'required': messageRequired,
    'success': '',
    'fail': 'El campo telefono debe tener min 9 digitos'
  },
  'input-gender': {
    'required': messageRequired,
    'success': '',
    'fail': 'El campo genero debe ser M o F'
  }
}

export default messages