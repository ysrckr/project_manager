import { Route } from 'wouter'
import Home from './pages/Home'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queries/queryClient'
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Route path="/">
				<Home />
			</Route>
		</QueryClientProvider>
	)
}

export default App
