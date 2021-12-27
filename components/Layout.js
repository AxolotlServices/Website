import Navbar from "./Navbar";
import styled from 'styled-components'

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}