import { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action) {
        case 'TANG':
            return state + 1;
        case 'GIAM':
            return state - 1;
        case 'XOA_TAT_CA':
            return 0;
        default:
            return state;
    }
}

const Example1 = () => {

    const [count, dispatch] = useReducer(reducer, 0)
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('TANG')}>Tăng</button>
            <button onClick={() => dispatch('GIAM')}>Giảm</button>
            <button onClick={() => dispatch('XOA_TAT_CA')}>Xoá hết dữ liệu</button>
        </div>
    )
}

export default Example1
