import {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import clientHttp from '../../services/ClientHttp';


const ProductEdit=()=>{
    
    const [product,setProduct]=useState({});
    const { productId } = useParams();

    useEffect(()=>{
        
        clientHttp.get(``)
            .then((response)=>setProduct(response.data))

    },[])
    
    return <form>
    <div className="col-md-4">
        <label for="validationCustomUsername" className="form-label">Username</label>
        <div className="input-group has-validation">
            <input type="text" className="form-control" id="validationCustomUsername"
            required />
            <div className="invalid-feedback">
                Please choose a username.
            </div>
        </div>
    </div>


    </form>
}


const ProductList=()=>{
    const [products,setProduts]=useState([]);

    const navegacion = useNavigate();

    useEffect(()=>{
        clientHttp.get(`/Producto`)
        .then((response)=>{
            //console.log(response);
            setProduts(response.data.lista); 
        });
    },[]);

    const handlerEditar=(product)=>{
        navegacion(`/admin/producto/${product.id}`)
    }

    return <table className="table">
        <thead>
        <tr>
            <th >Identificación</th>
            <th >Nombre</th>
            <th >Precio</th>
            <th >Observaciones</th>
            <th >Caducidad</th>
            <th >Marca Id</th>
            <th >Marca</th>
            <th >Tipo Producto Id</th>
            <th >Tipo Producto</th>
            <th >Acciones</th>
        </tr>
        </thead>
        <tbody>
            {products.map((cli)=>
                <tr key={cli.id}>
                    <td>{cli.nombre}</td>
                    <td>{cli.precio}</td>
                    <td>{cli.observaciones}</td>
                    <td>{cli.caducidad}</td>
                    <td>{cli.marcaId}</td>
                    <td>{cli.marca}</td>
                    <td>{cli.tipoProductoId}</td>
                    <td>{cli.tipoProducto}</td>
                    <td><button onClick={(e)=>handlerEditar(cli)}>Editar</button></td>
                </tr>)} 
        </tbody>
    </table>
}

export default function ProductAdmin(){
    return <ProductList/>
}