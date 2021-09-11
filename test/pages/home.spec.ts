import { setupTest, createPage} from '@nuxt/test-utils'

describe('home page test', () => {
  setupTest({ browser: true })

  it('タイトル表示', async () => {
    const page = await createPage('/home')
    const html = await page.innerHTML('body')
    expect(html).toContain('GiovannitheHome2')
  })

  it('屋内マップ表示', async () => {
    const page = await createPage('/home')
    const html = await page.innerHTML('body')
    expect(html).toContain('mapWrapper')
  })

  it('画像ボタン表示', async () => {
    const page = await createPage('/home')
    const html = await page.innerHTML('body')
    expect(html).toContain('image-buttons')
  })
})
