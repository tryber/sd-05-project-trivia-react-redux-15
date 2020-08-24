import React from 'react';
import { connect } from 'react-redux'
import setTimer from '../actions/actionCronometro'

class Cronometro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tempo: [30]
    }
  }
  render() {
    const tempo = this.state
    return(
      <div>
        <h1>Tempo: {tempo}</h1>
      </div>
    )
  }

  // o método de construcao do cronometro foi feito baseado no codigo explicado neste vídeo: https://www.youtube.com/watch?v=NAx76xx40jM
  componentDidMount() {
    this.intervalo = setInterval(() => {
      this.setState(({ tempo: this.state.tempo - 1 }))
    }, 1000)
//    this.props.setTimer();
  }
}

/* const mapDispatchToProps = (dispatch) => ({
  setTimer: () => dispatch(setTimer(this.state.tempo)),
})

export default connect(null, mapDispatchToProps)(Cronometro); */
export default Cronometro