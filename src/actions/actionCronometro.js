export const SET_CRONOMETRO= 'SET_CRONOMETRO'

function setTimer(tempo) {
  return { type: SET_CRONOMETRO, tempo}
}

export default setTimer;