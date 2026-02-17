/* global google */
import React, { useEffect } from 'react'

export default function Autho() {

    const handleCredentialLogin = (response) => {
        console.log(response)
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "12739304913-mdo2hqeuavhms571u4qkbncm3c7mokgj.apps.googleusercontent.com",
            callback: handleCredentialLogin
        })

        google.accounts.id.renderButton(
            document.getElementById("googlesign"),
            { theme: "outline", size: "large" }
        )
    }, [])

    return (
        <div>
            <div id="googlesign"></div>
        </div>
    )
}
