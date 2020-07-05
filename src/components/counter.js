import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <div className="block-center">
            <div className="block-counter">
            <div className="counter">{counter}</div>
            </div>
            <div className="btns">
                <button onClick={inc} className="btn btn-success">
                    <img src="./img/plus.svg" alt="plus"/>
                </button>
                <button onClick={dec} className="btn btn-orange">
                    <img src="./img/minus.svg" alt="minus"/>
                </button>
                <button onClick={res} className="btn btn-danger">
                    <img src="./img/reset.svg" alt="reset"/>
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
// const mapDispatchToProps = (dispatch) => {
//     // const {inc, dec, res, rnd} = bindActionCreators(actions, dispatch);
//     // return {
//     //     inc,
//     //     dec,
//     //     res,
//     //     rnd
//     // }
//     return bindActionCreators(actions, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);