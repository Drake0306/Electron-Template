import { useSelector, useDispatch } from "react-redux";
import { 
    incriment, 
    decrement,
    incrimentByAmount,
} from "../reducers/counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrimentAmount, setIncrimentAmount] = useState(0);

    const addValue = Number(incrimentAmount) || 0;

    return (
        <>
            <section>
                <p>{count}</p>
                <div>
                    <button onClick={() => dispatch(incriment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </div>

                <input type="text" value={incrimentAmount} onChange={(e) => setIncrimentAmount(e.target.value)} />

                <div>
                    <button onClick={() => dispatch(incrimentByAmount(addValue))}>Add Amount</button>
                </div>
            </section>
        </>
    )
}

export default Counter;