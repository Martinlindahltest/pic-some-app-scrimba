import React, { useContext } from 'react'
import { Context } from '../Context'
import Image from '../components/Image'
import { getClass } from "../utils"

export default function Photos() {

    const allPhotosContext = useContext(Context)
    console.log('context', allPhotosContext)
    const { allPhotos } = allPhotosContext
    const jsxArray = allPhotos.map((img, i) => <Image key={img.id} img={img} className={getClass(i)} />)
    console.log('jsxArray', jsxArray)
    return (

        <main className="photos">
            {jsxArray}
        </main>
    )
}
