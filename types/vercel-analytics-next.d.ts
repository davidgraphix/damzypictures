declare module '@vercel/analytics/next' {
  import * as React from 'react'

  export function Analytics(): JSX.Element

  const _default: { Analytics: typeof Analytics }
  export default _default
}
