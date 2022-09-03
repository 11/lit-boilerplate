export const ROUTING_TABLE = [
  {
    path: '/',
    component: 'view-root',
    action: async () => {
      await import('./views/view-root')
    },
  },
  {
    path: '/entries/:entryId',
    component: 'view-entry',
    action: async (ctx) => {
      const { params } = ctx
      const { blogid } = params
      await import('./views/view-entry')
      await import(`./entries/${entryId}.js`)
    }
  },
]

