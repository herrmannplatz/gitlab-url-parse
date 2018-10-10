const { URL } = require('url')

module.exports = parse
function parse (gitlabUrl) {
  if (typeof gitlabUrl !== 'string') {
    throw new Error('Expected gitLabUrl of type string')
  }
  const url = new URL(gitlabUrl)

  const path = url.pathname
  const parts = path.split('/')

  let result = {}

  // trailing slash
  parts.shift()

  // user
  const user = parts.shift()
  result = { ...result, user }

  // project
  const project = parts.shift()
  result = { ...result, project }

  // type
  const type = parts.shift()

  if (type === 'merge_requests') {
    const mr = parseInt(parts.shift(), 10)
    result = { ...result, mr }
  } else if (type === 'issues') {
    const issue = parseInt(parts.shift(), 10)
    result = { ...result, issue }
  } else if (type === 'tree') {
    const branch = parts.shift()
    result = { ...result, branch }
  } else if (type === 'commits') {
    const branch = parts.shift()
    result = { ...result, branch }
  } else if (type === 'commit') {
    const commit = parts.shift()
    result = { ...result, commit }
  }

  return result
}
