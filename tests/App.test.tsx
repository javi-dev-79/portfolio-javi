import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import { vi } from 'vitest'
import React from 'react'

// Mock the child components directly in vi.mock
vi.mock('../src/components/NavBar', () => {
    const MockNavBar = () => <div>NavBar Component</div>
    MockNavBar.displayName = 'NavBar'
    return { default: MockNavBar }
})
vi.mock('../src/components/Header', () => {
    const MockHeader = () => <div>Header Component</div>
    MockHeader.displayName = 'Header'
    return { default: MockHeader }
})
vi.mock('../src/pages/AboutMe', () => {
    const MockAboutMe = () => <div>AboutMe Component</div>
    MockAboutMe.displayName = 'AboutMe'
    return { default: MockAboutMe }
})
vi.mock('../src/pages/PersonalInfo', () => {
    const MockPersonalInfo = () => <div>PersonalInfo Component</div>
    MockPersonalInfo.displayName = 'PersonalInfo'
    return { default: MockPersonalInfo }
})
vi.mock('../src/pages/Skills', () => {
    const MockSkills = () => <div>Skills Component</div>
    MockSkills.displayName = 'Skills'
    return { default: MockSkills }
})
vi.mock('../src/pages/Resume', () => {
    const MockResume = () => <div>Resume Component</div>
    MockResume.displayName = 'Resume'
    return { default: MockResume }
})
vi.mock('../src/components/Footer', () => {
    const MockFooter = () => <div>Footer Component</div>
    MockFooter.displayName = 'Footer'
    return { default: MockFooter }
})

describe('App', () => {
    test('renders all components', () => {
        render(<App />)

        // Verify that all components are rendered
        expect(screen.getByText('NavBar Component')).toBeInTheDocument()
        expect(screen.getByText('Header Component')).toBeInTheDocument()
        expect(screen.getByText('AboutMe Component')).toBeInTheDocument()
        expect(screen.getByText('PersonalInfo Component')).toBeInTheDocument()
        expect(screen.getByText('Skills Component')).toBeInTheDocument()
        expect(screen.getByText('Resume Component')).toBeInTheDocument()
        expect(screen.getByText('Footer Component')).toBeInTheDocument()
    })
})
