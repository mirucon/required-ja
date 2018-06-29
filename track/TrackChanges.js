const axios = require('axios')
const fs = require('fs')
const turndown = require('turndown')
const turndownService = new turndown({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*'
})

axios
  .get('https://make.wordpress.org/themes/wp-json/wp/v2/handbook/?per_page=100')
  .then(res => {
    for (const item of res.data) {
      if (item.slug === 'required' && item.date === '2014-11-04T20:51:48') {
        const content = item.content.rendered
        let markdown = turndownService.turndown(content)
        markdown = `Last modified: ${item.modified_gmt}\n\n${markdown}`
        fs.writeFile('required-en.md', markdown, err => {
          if (err) throw err
        })
      }
    }
  })
