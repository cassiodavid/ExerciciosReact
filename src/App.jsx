import React from 'react'
import Primeiro from './components/basicos/primeiro'
import ComParametros from './components/basicos/ComParametros'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import './App.css'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Condicionalcomif from './components/basicos/Condicionalcomif'
export default (props) => (
    
    <div className="App">
       
        <Card titulo=" 1 - Primeiro Exemplo" >
            <Primeiro />
        </Card>

        <Card titulo=" 2 -ComParametros">
            <ComParametros titulo="Esse e o titulo"
             subtitulo="Esse e o Subtitulo"/>
        </Card>
        <Card titulo="3 - Card Qualquer" >
            Conteudo do Card
        </Card>

        <Card titulo="4 - ComFilhos ">
        <ComFilhos>
            <ul>
                <li>Bia</li>
                <li>Ana</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        </Card>

        <Card titulo="5 - Repeticao">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="6 - Condicional Versao 1"> 
            <Condicional numero={25860}></Condicional>
        </Card>

        <Card titulo="7 - Condicional versao 2 com IF">
            <Condicionalcomif numero={51}></Condicionalcomif>
        </Card>

       

    </div>
   
)