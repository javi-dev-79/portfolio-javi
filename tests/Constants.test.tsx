import learningPaths from '../src/components/Constants'
import { describe, it, expect } from 'vitest'

describe('Constants', () => {
    it('should export items correctly', () => {
        expect(learningPaths).toBeDefined() // Verify that learningPaths are defined
        expect(Array.isArray(learningPaths)).toBeTruthy() // Verify that learningPaths is an array
    })

    it('should contain correct data structure', () => {
        expect(learningPaths.length).toBeGreaterThan(0) // Check that learningPaths is not empty
        expect(learningPaths[0]).toHaveProperty('area') // Check that the first element has the 'area' property
        expect(learningPaths[0]).toHaveProperty('companies') // Verify that the first element has the 'companies' property
        expect(Array.isArray(learningPaths[0].companies)).toBeTruthy() // Verify that 'companies' is an array
    })
})
