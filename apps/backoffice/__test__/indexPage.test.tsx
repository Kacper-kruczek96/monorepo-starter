import { render, screen } from '@testing-library/react'
import React from 'react'
import { expect, test } from 'vitest'
import Page from '../app/page'

test('Page has Hello World text', async () => {
  render(<Page />)

  const element = screen.getByText('Hello World')

  expect(element).toBeInTheDocument()
})
