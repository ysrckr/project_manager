import React from 'react'
import { FC } from 'react'
import { Link } from 'wouter'
import styles from '../../src/styles/modules/Header.module.scss'
const Header: FC = () => {
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
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header
