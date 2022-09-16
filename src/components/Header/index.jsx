import React, { useState } from "react";
import { Container } from "./style";
import { FaBars } from "react-icons/fa"
import Sidebar from '../Sidebar'

const Header = () => {
    const [sidebar, setSidebar] = useState(false) // começa com o sidebar não aparecendo

    const showSidebar = () => setSidebar(!sidebar) // o onclick chama essa função que vai setar um estado diferente que ja esta no usestate (se estiver false vai para true e vice versa).

    return (
        <Container>
            <FaBars onClick={showSidebar} /> 
            {sidebar && <Sidebar active={setSidebar} />} {/* sidebar só vai aparecer so quando a variavel sidebar do usestate for true */}
        </Container>
    )
}

export default Header
