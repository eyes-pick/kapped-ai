import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DocMarkdown } from './doc-markdown'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

// Mock the fetch function
global.fetch = jest.fn()

// Mock the marked and DOMPurify libraries
jest.mock('marked', () => ({
    parse: jest.fn()
}))

jest.mock('dompurify', () => ({
    sanitize: jest.fn()
}))

describe('DocMarkdown', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks()
    })

    it('renders markdown content successfully', async () => {
        const mockMarkdown = '# Hello World'
        const mockParsedHtml = '<h1>Hello World</h1>'
        const mockSanitizedHtml = '<h1>Hello World</h1>'

            // Mock fetch response
            ; (global.fetch as jest.Mock).mockResolvedValueOnce({
                ok: true,
                text: () => Promise.resolve(mockMarkdown),
            })
            // Mock marked parse
            ; ((marked.parse as unknown) as jest.Mock).mockResolvedValueOnce(mockParsedHtml)
            ; ((marked.parse as unknown) as jest.Mock).mockResolvedValueOnce(mockParsedHtml)

            // Mock DOMPurify sanitize
            ; (DOMPurify.sanitize as jest.Mock).mockReturnValueOnce(mockSanitizedHtml)

        render(<DocMarkdown file="test.md" />)

        await waitFor(() => {
            const content = document.querySelector('.prose')
            expect(content).toBeInTheDocument()
            expect(content?.innerHTML).toBe(mockSanitizedHtml)
        })

        // Verify fetch was called with correct path
        expect(global.fetch).toHaveBeenCalledWith('/docs/test.md')
    })

    it('handles fetch error gracefully', async () => {
        // Mock fetch error
        ; (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('404'))

        render(<DocMarkdown file="nonexistent.md" />)

        await waitFor(() => {
            const errorMessage = screen.getByText('Error loading documentation.')
            expect(errorMessage).toBeInTheDocument()
            expect(errorMessage.tagName.toLowerCase()).toBe('p')
            expect(errorMessage.style.color).toBe('red')
        })
    })

    it('handles empty file prop', () => {
        render(<DocMarkdown file="" />)

        const content = document.querySelector('.prose')
        expect(content).toBeInTheDocument()
        expect(content?.innerHTML).toBe('')
        expect(global.fetch).not.toHaveBeenCalled()
    })

    it('handles non-ok fetch response', async () => {
        // Mock non-ok fetch response
        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
        })

        render(<DocMarkdown file="missing.md" />)

        await waitFor(() => {
            const errorMessage = screen.getByText('Error loading documentation.')
            expect(errorMessage).toBeInTheDocument()
        })
    })
})
