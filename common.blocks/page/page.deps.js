({
    mustDeps: [
        { block: 'fonts', mods: { 'system-ui': true } },
    ],
    shouldDeps: [
        'form-request',
        { block: 'jquery', elem: 'config'  },
        { block: 'content', mods: { form: 'request' } }
    ]
})
