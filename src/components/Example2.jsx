import { useReducer } from 'react'

const reducer2 = (state, action) => {
    switch(action.type) {
        case 'GAN_GIA_TRI':
            return action.data;
        default:
            return state;
    }
}

const Example2 = () => {

    const [count2, dispatch2] = useReducer(reducer2, 0);

    return (
        <div>
            <p>Count 2: {count2}</p>
            <button onClick={() => dispatch2({
                type: 'GAN_GIA_TRI',
                data: 10
            })}>
                Gán giá trị
            </button>
        </div>
    )
}

export default Example2
