import React from 'react'
/*
Pra passar NUMEROS coloca em {}
Strings em ""

podemos Usar OPERADORES TERNARIOS <3
*/




export default props => {


    return (
        <div>
            <h2>O Numero é {props.numero}</h2>
            {props.numero % 2 === 0
                ? <span>Par</span>
                : <span>Impar</span>}
        </div>

    )
}