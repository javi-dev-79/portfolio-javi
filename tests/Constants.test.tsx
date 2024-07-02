import items from '../src/components/Constants'
import { describe, it, expect } from 'vitest'

describe('Constants', () => {
    it('should export items correctly', () => {
        expect(items).toBeDefined() // Verify that items are defined
        expect(Array.isArray(items)).toBeTruthy() // Verify that items is an array
    })

    it('should contain correct data structure', () => {
        expect(items.length).toBeGreaterThan(0) // Check that items is not empty
        expect(items[0]).toHaveProperty('area') // Check that the first element has the 'area' property
        expect(items[0]).toHaveProperty('companies') // Verify that the first element has the 'companies' property
        expect(Array.isArray(items[0].companies)).toBeTruthy() // Verify that 'companies' is an array
    })
})
