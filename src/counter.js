import React from 'react';

const Counter = () => {
    return (
        <div className="block-center">
            <div className="block-counter">
            <div className="counter">0</div>
            </div>
            <div className="btns">
                <button className="btn btn-success">
                    <img src="./img/plus.svg" alt="plus"/>
                </button>
                <button className="btn btn-orange">
                    <img src="./img/minus.svg" alt="minus"/>
                </button>
                <button className="btn btn-danger">
                    <img src="./img/reset.svg" alt="reset"/>
                </button>
            </div>
        </div>
    )
}

export default Counter;