import {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import clientHttp from '../../services/ClientHttp';

const TipoProductoList=()=>{
    const [tipoProducto,setTipoProducto]=useState([]);

    const navegacion = useNavigate();

    useEffect(()=>{
        clientHttp.get(`/TipoProducto`)
        .then((response)=>{
            //console.log(response);
            setTipoProducto(response.data); 
        });
    },[]);

    const handlerEditar=(tipoProducto)=>{
        navegacion(`/admin/tipoProducto/${tipoProducto.id}`)
    }

    return <table className="table">
        <thead>
        <tr>
            <th >Identificación</th>
            <th >Nombre</th>
            <th >Acciones</th>
        </tr>
        </thead>
        <tbody>
            {tipoProducto.map((cli)=>
                <tr key={cli.id}>
                    <td>{cli.id}</td>
                    <td>{cli.nombre}</td>
                    <td><button onClick={(e)=>handlerEditar(cli)}>Editar</button></td>
                </tr>)} 
        </tbody>
    </table>
}
export default function TypeProductAdmin(){
    return <TipoProductoList/>
}