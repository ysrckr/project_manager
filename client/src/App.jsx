import { Route } from 'wouter'
import Home from './pages/Home'
function App() {
	return (
		<Route path="/">
			<Home />
		</Route>
	)
}

export default App
