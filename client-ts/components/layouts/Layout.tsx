import PropTypes from 'prop-types'
import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Container from './Container'
import { FC , JSX , Element} from 'react'
const Layout: FC = ({ children: JSX.Element  }) => {
	return (
		<>
			<Header />
            <Container>{children}</Container>
            <Footer />
            
		</>
	)
}
Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}
export default Layout
