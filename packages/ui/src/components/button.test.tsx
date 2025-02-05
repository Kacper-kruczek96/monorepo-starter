import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import { Button } from '@workspace/ui/components/button'
import { userEvent } from '@testing-library/user-event'

test('Button on click', async () => {
  const spy = vi.fn()
  render(<Button onClick={spy}>Click me</Button>)

  const button = screen.getByText('Click me')
  await userEvent.click(button)

  expect(spy).toHaveBeenCalled()
})
