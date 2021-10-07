const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()
const items = []
const url = 'https://1000mostcommonwords.com/1000-most-common-japanese-words/'
axios(url)
    .then((response) => {
        const html = response.data
        //console.log(html)
        const $ = cheerio.load(html)
        


        $('td', html).each(function() {
            const title = $(this).text()
            if (title.toString().match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/)) {
                items.push(title)
            }
        //console.log(items)
        items.forEach(e => console.log(e))
        }).catch(err => console.log(err))
    })

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

// function download() {
// 'use strict'

// const fs = require('fs');

// let fileContent = items
// fs.writeFileSync('message.txt', fileContent);
// }

// download()

// const PORT = 8000
// const axios = require('axios')
// const cheerio = require('cheerio')
// const express = require('express')

// const app = express()

// const url = 'http://www.theguardian.com/uk'
// axios(url)
//     .then((response) => {
//         const html = response.data
//         //console.log(html)
//         const $ = cheerio.load(html)
//         const articles = []


//         $('.fc-item__title', html).each(function() {
//             const title = $(this).text()
//             const url = $(this).find('a').attr('href')
//             articles.push({
//                 title,
//                 url
//             })
//         })
//         console.log(articles)
//     }).catch(err => console.log(err))

// app.listen(PORT, () => console.log(`server running on port ${PORT}`))
