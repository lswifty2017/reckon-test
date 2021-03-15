const express = require('express')
const app = express()
const { port = 3000 } = require('./config')
const { getRangeInfo, getDivisorInfo, getTextToSearch, getSubTexts, postResults } = require('./reckonApi')
const { getRange, findSubstringInString } = require('./helpers')

app.get('/', (req, res) => {
  (async () => {
    try {
      const [rangeData, divisorInfo] = await Promise.all([getRangeInfo(), getDivisorInfo()])
      const { lower, upper } = rangeData
      const { outputDetails: divisors } = divisorInfo
      const rangeArray = getRange(lower, upper)

      rangeArray.forEach((int) => {
        const outputs = [];

        divisors.forEach(({ divisor, output }) => {
          if (int !== 0 && int % divisor === 0) outputs.push(output)
        })

        console.log(`${int}: ${outputs.join('')}`)
      })
    } catch (err) {
      console.log(err.message)
    }
  })()

  res.send('Test 1')
})

app.get('/test-2', (req, res) => {
  (async () => {
    try {
      const [textToSearch, subTexts] = await Promise.all([getTextToSearch(), getSubTexts()])
      const subTextsFound = subTexts.map((subText) => findSubstringInString(textToSearch, subText))
      const finalResult = {
        candidate: 'Liam Swift',
        text: textToSearch,
        result: subTextsFound
      }
      await postResults(finalResult)
    } catch (err) {
      console.log(err.message)
    }
  })()

  res.send('Test 2')
})

app.listen(port, () => {
  console.log(`Reckon test app listening on port ${port}!`);
});