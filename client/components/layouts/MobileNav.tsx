import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'wouter'
import { useState } from 'react'
import styles from '../../src/styles/modules/MobileNav.module.scss'
import { FC } from 'react'
const MobileNav: FC = props => {
	const [isOpen, setIsOpen] = useState(false)
	return <nav>{isOpen ? '' : ''} </nav>
}
MobileNav.propTypes = {}
export default MobileNav
