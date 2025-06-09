import { render, screen } from '@testing-library/react'
import { Button } from './button'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
    it('renders button with text', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('handles click events', async () => {
        const user = userEvent.setup()
        const handleClick = vi.fn()
        render(<Button onClick={handleClick}>Click me</Button>)

        await user.click(screen.getByRole('button', { name: /click me/i }))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('supports variant prop', () => {
        render(<Button variant="destructive">Delete</Button>)
        const button = screen.getByRole('button', { name: /delete/i })
        expect(button.className).toContain('bg-destructive')
    })

    it('supports size prop', () => {
        render(<Button size="lg">Large Button</Button>)
        const button = screen.getByRole('button', { name: /large button/i })
        expect(button.className).toContain('h-10')
    })

    it('supports asChild prop', () => {
        render(<Button asChild><a href="#">Link Button</a></Button>)
        const button = screen.getByRole('link', { name: /link button/i })
        expect(button.tagName.toLowerCase()).toBe('a')
    })
})
