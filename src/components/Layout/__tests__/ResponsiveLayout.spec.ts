import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import ResponsiveLayout from '../ResponsiveLayout.vue'

describe('ResponsiveLayout', () => {
  const resizeWindow = (width: number, height: number) => {
    ;(window as any).innerWidth = width
    ;(window as any).innerHeight = height
    window.dispatchEvent(new Event('resize'))
  }

  test('should show both columns in desktop', async () => {
    render(ResponsiveLayout, {
      props: {
        firstColumnTitle: 'first column header',
        secondColumnTitle: 'second column header',
      },
      stubs: ['v-toolbar'],
    })
    resizeWindow(800, 1000)
    await waitFor(() => {
      expect(screen.queryByText('first column header')).toBeVisible()
      expect(screen.queryByText('second column header')).toBeVisible()
    })
  })

  test('should show first column when resizing', async () => {
    render(ResponsiveLayout, {
      props: {
        firstColumnTitle: 'first column header',
        secondColumnTitle: 'second column header',
      },
      stubs: ['v-toolbar'],
    })
    resizeWindow(400, 1000)
    await waitFor(() => {
      expect(screen.queryByText('first column header')).toBeVisible()
      expect(screen.queryByText('second column header')).not.toBeVisible()
    })
  })

  test('should show second column when clicking the navigate_before button', async () => {
    render(ResponsiveLayout, {
      props: {
        firstColumnTitle: 'first column header',
        secondColumnTitle: 'second column header',
      },
      stubs: ['v-toolbar', 'v-icon'],
    })
    resizeWindow(400, 1000)
    const navigationButton = screen.getAllByRole('button', {
      name: 'navigate_before',
    })
    await fireEvent.click(navigationButton[0])
    expect(screen.queryByText('first column header')).not.toBeVisible()
    expect(screen.queryByText('second column header')).toBeVisible()
  })

  test('should show first column when clicking twice the navigate_before button', async () => {
    render(ResponsiveLayout, {
      props: {
        firstColumnTitle: 'first column header',
        secondColumnTitle: 'second column header',
      },
      stubs: ['v-toolbar', 'v-icon'],
    })
    resizeWindow(400, 1000)
    const navigationButton = screen.getAllByRole('button', {
      name: 'navigate_before',
    })
    await fireEvent.click(navigationButton[0])
    await fireEvent.click(navigationButton[0])
    expect(screen.queryByText('first column header')).toBeVisible()
    expect(screen.queryByText('second column header')).not.toBeVisible()
  })
})
