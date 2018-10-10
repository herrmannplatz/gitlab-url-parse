/* eslint-env jest */
const parse = require('./')

describe('parse', () => {
  it('should throw an error if url is missing', () => {
    const parsed = () => parse()
    expect(parsed).toThrow()
  })

  it('should identify group', () => {
    const parsed = parse('https://gitlab.com/herrmannplatz')
    expect(parsed.user).toBe('herrmannplatz')
  })

  it('should identify project', () => {
    const parsed = parse('https://gitlab.com/herrmannplatz/parse')
    expect(parsed.user).toBe('herrmannplatz')
    expect(parsed.project).toBe('parse')
  })

  it('should identify merge requests', () => {
    const parsed = parse('https://gitlab.com/herrmannplatz/parse/merge_requests/1')
    expect(parsed.user).toBe('herrmannplatz')
    expect(parsed.project).toBe('parse')
    expect(parsed.mr).toBe(1)
  })

  it('should identify issues', () => {
    const parsed = parse('https://gitlab.com/herrmannplatz/parse/issues/1')
    expect(parsed.user).toBe('herrmannplatz')
    expect(parsed.project).toBe('parse')
    expect(parsed.issue).toBe(1)
  })

  it('should identify branches', () => {
    const parsed = parse('https://gitlab.com/herrmannplatz/parse/tree/master')
    expect(parsed.user).toBe('herrmannplatz')
    expect(parsed.project).toBe('parse')
    expect(parsed.branch).toBe('master')
  })

  it('should identify branches', () => {
    const parsed = parse('https://gitlab.com/herrmannplatz/parse/tree/master')
    expect(parsed.user).toBe('herrmannplatz')
    expect(parsed.project).toBe('parse')
    expect(parsed.branch).toBe('master')
  })

  it('should identify branches in commits', () => {
    const parsed = parse('https://gitlab.com/herrmannplatz/parse/commits/master')
    expect(parsed.user).toBe('herrmannplatz')
    expect(parsed.project).toBe('parse')
    expect(parsed.branch).toBe('master')
  })

  it('should identify commits', () => {
    const parsed = parse('https://gitlab.com/herrmannplatz/parse/commit/28763114051b7f4bc320c203d5ac6b2310ed6dec')
    expect(parsed.user).toBe('herrmannplatz')
    expect(parsed.project).toBe('parse')
    expect(parsed.commit).toBe('28763114051b7f4bc320c203d5ac6b2310ed6dec')
  })
})
