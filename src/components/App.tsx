import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import XP from './XP'
import Footer from './Footer';

export default () => {
	return (
		<BrowserRouter>
			<XP />

			<Footer />
		</BrowserRouter>
	)
}