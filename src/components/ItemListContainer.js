import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../firebase/firebase"
import { collection , getDocs, query , where } from "firebase/firestore"

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {

    const prodCollection = collection(db,"productos")
    const funcVal = (consulta) => {
      consulta
        .then(resultado => setProductos(resultado.docs.map(doc => doc.data())))
        .catch(() => toast.error("Error al cargar los productos"))
        .finally(() => setLoading(false))
    }

    if(!categoryId) {

      const consulta = getDocs(prodCollection)

      funcVal(consulta)

    } else {

      const filtro = query(prodCollection,where("category","==",categoryId))
      const consulta = getDocs(filtro)

      funcVal(consulta)

    }

  },[categoryId])

  return (
    <>
      {loading ? <h1 className="load">Cargando...</h1> : <ItemList productos={productos}/>}
    </>
  )
}

export default ItemListContainer