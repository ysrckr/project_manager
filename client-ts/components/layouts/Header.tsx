import React, { useLayoutEffect } from 'react'
import { FC } from 'react'
import { Link } from 'wouter'
import { useState } from 'react'
import styles from '../../src/styles/modules/Header.module.scss'
import MobileNav from '../layouts/MobileNav'
const Header: FC = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	const handleResize = () => {
		setScreenWidth(window.innerWidth)
	}
	useLayoutEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [screenWidth])
	return (
		<header>
			<div className={styles.link}>
				<Link href="/">
					<img
						src="../src/assets/fire.png"
						alt="fire"
						height={100}
						width={250}
					/>
				</Link>
			</div>
			{screenWidth > 768 ? (
				<nav>
					<ul>
						<li className={styles.list}>
							<Link href="/">Home</Link>
						</li>
					</ul>
				</nav>
			) : (
				<MobileNav />
			)}
		</header>
	)
}
export default Header
