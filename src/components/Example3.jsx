import { useReducer } from 'react'

const initialstate = {
    loading: false,
    data: [],
    error: null
}

const userReducer = (state, action) => {
    switch(action.type){
        case 'GET_USER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case 'GET_USER_ERROR':
            return {
                ...state,
                error: action.data,
                data: []
            }
    }
}

const Example3 = () => {

    const [user, userDispatch] = useReducer(userReducer, initialstate);

    const getUsers = () => {

        userDispatch({
            type: 'GET_USER_REQUEST'
        })

        setTimeout(() => {
            fetch('https://reqres.in/api/users')
                .then((res) => res.json())
                .then((res) => {
                    userDispatch({
                        type: 'GET_USER_SUCCESS',
                        data: res
                    })
                })
                .catch((err) => {
                    userDispatch({
                        type: 'GET_USER_ERROR',
                        data: err
                    })
                })
        }, 2000);
    }

    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            
            {
                user.loading ? <p>Loading...</p> : <p>{JSON.stringify(user)}</p>
            }
        </div>
    )
}

export default Example3
