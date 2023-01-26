import React, { useState } from 'react';
import AppleIcon from '../icons/apple-icon';
import { useSelector, useDispatch } from 'react-redux';
import { finalize } from '../reducers/AppReducer';
import '../styles/apple.scss';

const Apple = (props) => {
    const shakeTree = useSelector((state) => state.shake.shake);
    const isFinalized = useSelector((state) => state.shake.finalize);
    const [startToFall, setStartToFall] = useState(false);
    const dispatch = useDispatch();

    // ağaç sallandığında elma düşmesi için
    if (shakeTree === false && props.fall) {
        //farklı zamanda düşme için 
        setTimeout(() => {
            setStartToFall(true);
            // sallanma bitince düşen elmanın 1 saniye sonra sepete gitmesi için
            setTimeout(() => {
                dispatch(finalize());
            }, 4750);
        }, props.delay);
    }

    return (
        <div className={`apple-container ${shakeTree === false && props.fall && startToFall ? "apple-container--falling" : ""}`} style={{ left: props.x + 'px', display: shakeTree === false && props.fall && startToFall && isFinalized ? "none" : "block" }}>
            <AppleIcon size="24" />
        </div>
    );
};

export default Apple;