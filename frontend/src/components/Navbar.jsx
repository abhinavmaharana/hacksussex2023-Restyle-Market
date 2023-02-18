import React from "react"

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar--image" src="https://media.discordapp.net/attachments/1076520143020105730/1076568760435093524/logo-ReStyle-Market.png" />
            <a className="navbar--title" href="/"> ReStyle Market </a>
            <div className="navbar--menu">
                {/* <a className="navbar--button" href="/"> Full Clothes List </a> */}
                <a className="navbar--button" href="/login"> Sign In </a>
                <a className="navbar--button" href="/register"> Register </a>
            </div>
        </div>
    )
}