const { URL } = require('url')

const typeParsers = {
  'merge_requests': mr => ({ mr: parseInt(mr, 10) }),
  'issues': issue => ({ issue: parseInt(issue, 10) }),
  'tree': branch => ({ branch }),
  'commits': branch => ({ branch }),
  'commit': commit => ({ commit })
}

module.exports = parse
function parse (gitlabUrl) {
  if (typeof gitlabUrl !== 'string') {
    throw new Error('Expected gitLabUrl of type string')
  }
  const url = new URL(gitlabUrl)
  const path = url.pathname

  // ignore trailing slash
  const [, user, project, type, ...rest] = path.split('/')

  let result = { user, project }

  const typeParser = typeParsers[type]
  if (typeParser) {
    result = { ...result, ...typeParser(rest.shift()) }
  }

  return result
}
