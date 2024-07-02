import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Hobbies from '../src/components/Hobbies'

describe('Hobbies component', () => {
    test('contains an h1 with the text "Intereses"', () => {
        render(<Hobbies />)

        const heading = screen.getByRole('heading', { name: /Intereses/i })
        expect(heading).toBeInTheDocument()
    })
})
