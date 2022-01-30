import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'

export default function Blank(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Blank
                </h2>
            }
        >
            <Head title="Blank" />

            <div></div>
        </Authenticated>
    )
}
