
const axios = require('axios')
const axiosRetry = require('axios-retry');
const { firstTestRangeEndpoint, firstTestDivisorEndpoint,
  secondTestTextSearchEndpoint, secondTestSubTextsEndpoint, secondTestSubmitResultsEndpoint
} = require('./config')

const getRangeInfo = async () => {
  try {
    axiosRetry(axios, { retries: 10 });
    const { data } = await axios.get(firstTestRangeEndpoint)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

const getDivisorInfo = async () => {
  try {
    axiosRetry(axios, { retries: 10 });
    const { data } = await axios.get(firstTestDivisorEndpoint)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

const getTextToSearch = async () => {
  try {
    axiosRetry(axios, { retries: 10 });
    const { data = {} } = await axios.get(secondTestTextSearchEndpoint)
    return data.text
  } catch (err) {
    throw new Error(err)
  }
}

const getSubTexts = async () => {
  try {
    axiosRetry(axios, { retries: 10 });
    const { data = {} } = await axios.get(secondTestSubTextsEndpoint)
    return data.subTexts
  } catch (err) {
    throw new Error(err)
  }
}

const postResults = async (results) => {
  try {
    axiosRetry(axios, { retries: 10 });
    const res = await axios.post(secondTestSubmitResultsEndpoint, results)
    return res
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getRangeInfo,
  getDivisorInfo,
  getTextToSearch,
  getSubTexts,
  postResults
}