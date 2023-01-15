export const GET_CITY = "GET_CITY"
export const GET_DETAIL = "GET_DETAIL"
export const DELETE_CITY = "DELETE_CITY"
export const CLEAN = "CLEAN"

export const getCity = (ciudad) => {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b"
    return function (dispatch) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(response => response.json()) // leer respuesta del cuerpo y devolver como JSON
        .then((data) => {
            if(data.hasOwnProperty('message')) {
                alert("Esa ciudad no existe")
            } else {
                dispatch({type: GET_CITY, payload: data})
            }
        })
    }
}

export const getDetail = (ciudad) => {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b"
    return function (dispatch) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(response => response.json()) // leer respuesta del cuerpo y devolver como JSON
        .then((data) => dispatch({type: GET_DETAIL, payload: data}) )
    }
}

// export const getDetail = (id) => {
//     return {type: GET_DETAIL, payload:id}
// }

export const clean = () => {
    return { type: CLEAN }
}

export const deleteCity = (id) => {
    return {type: DELETE_CITY, payload:id}
}