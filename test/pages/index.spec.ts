import { setupTest, createPage } from '@nuxt/test-utils'

describe('firebaseAuth', () => {
  setupTest({ browser: true })

  it('renders the login page', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')
    expect(html).toContain('div id="firebaseui-auth-container" lang="en"')
  })
})
