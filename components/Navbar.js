import Link from 'next/link';
import styled from 'styled-components'

const Nav = styled.nav`
    padding-left: 2rem;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.33rem;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`

const Minecraft = styled.a`
    font-family: 'Minecraft';
    font-weight: 100;
    color: hotpink;
    font-size: 2rem;
`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <Minecraft>Axolotl Services</Minecraft>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href="/about/" passHref>
                    <StyledLink>About</StyledLink>
                </Link>
                <Link href="/services/" passHref>
                    <StyledLink>Services</StyledLink>
                </Link>
                <Link href="/team/" passHref>
                    <StyledLink>Team</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
