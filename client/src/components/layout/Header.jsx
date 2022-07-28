import { useLayoutEffect } from 'react'

import { Link } from 'wouter'
import { useState } from 'react'

import MobileNav from './MobileNav'
const Header = () => {
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
			<div>
				<Link href="/">
					<img src="../src/assets/fire.png" alt="fire" />
				</Link>
			</div>
			{screenWidth > 768 ? (
				<nav>
					<ul>
						<li>
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
