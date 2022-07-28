import { Link } from 'wouter'
import { useState } from 'react'

import { motion } from 'framer-motion'

import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const MobileNav = () => {
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
					variants={container}
					initial="hidden"
					animate="show">
					<div className={styles.close}>
						<GrClose onClick={() => setIsOpen(false)} />
					</div>
					<div>
						<ul>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
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

export default MobileNav
