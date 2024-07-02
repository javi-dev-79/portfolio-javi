import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../src/components/Footer'
import React from 'react'

describe('Footer', () => {
    test('renders scroll to top button', () => {
        render(<Footer />)
        const button = screen.getByTestId('scroll-to-top-button')
        expect(button).toBeInTheDocument()
    })

    test('div has an onClick with scrollToTop', () => {
        // Render the Footer component
        render(<Footer />)

        // Get the div using data-testid
        const button = screen.getByTestId('scroll-to-top-button')

        // Simulate a click on the button
        fireEvent.click(button)

        // Verify that the div has the onClick event
        expect(button).toHaveProperty('onclick')
    })
})
