import React from 'react'
import { Route, Routes, Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
    </div>
  )
}
