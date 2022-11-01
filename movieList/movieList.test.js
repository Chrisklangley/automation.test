const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () =>{
    await (await driver).get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async ()=>{
    await (await driver).quit()
})
 test('verify movie headind says Movie List', async () =>{
  const heading = await driver.findElement(By.xpath('//h1[text()="Movie List"]'))
                expect( await heading.isDisplayed()).toBeTruthy()
 } )
describe( 'add and verify ', async ()=> {
 test('will check to see if user can add to the movie list', async ()=> {
 await driver.findElement(By.xpath('//input')).sendKeys('Shawshank Redemption')
 await driver.findElement(By.xpath('//button')).click()
 })
 test('verify our movie ',async ()=> {
    const movie = await driver.findElement(By.xpath('//li/span[text()= "Shawshank Redemption"]'))
    expect(await movie.isDisplayed()).toBeTruthy()

    await driver.sleep(3000)
 })

})