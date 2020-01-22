import React, { useContext } from 'react'
import { Context } from '../Context'
import Image from '../components/Image'
import { getClass } from "../utils"



export default function Photos() {
    const allPhotosContext = useContext(Context)
    console.log('context', allPhotosContext)


    const { allPhotos } = allPhotosContext

    const jsxArray = allPhotos.map((img, i) => <Image key={img.id} img={img} className={getClass(i)} />
    )

    console.log('jsxArray', jsxArray)


    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />

    return (


        <main className="photos">
            <h1>Images go here</h1>
            {jsxArray}
        </main>
    )
}
