import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'wouter'
import { useState } from 'react'
import styles from '../../src/styles/modules/MobileNav.module.scss'
import { motion } from 'framer-motion'

import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { FC } from 'react'
const MobileNav: FC = props => {
	const [isOpen, setIsOpen] = useState(false)
	const container = {
		hidden: {
			opacity: 0,
			y: -100,
			transition: {
				duration: 0.5,
				staggerDirections: 1,
			},
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				delayChildren: 0.5,
				staggerDirection: -1,
			},
		},
	}
	return (
		<nav>
			{isOpen ? (
				<motion.div
					className={styles.background}
					variants={container}
					initial="hidden"
					animate="show">
					<div className={styles.close}>
						<GrClose onClick={() => setIsOpen(false)} />
					</div>
					<div className={styles.menu}>
						<ul>
							<li className={styles.list}>
								<Link href="/">Home</Link>
							</li>
							<li className={styles.list}>
								<Link href="/">Home</Link>
							</li>
							<li className={styles.list}>
								<Link href="/">Home</Link>
							</li>
						</ul>
					</div>
				</motion.div>
			) : (
				<div>
					<GiHamburgerMenu onClick={() => setIsOpen(true)} />
				</div>
			)}{' '}
		</nav>
	)
}
MobileNav.propTypes = {}
export default MobileNav
