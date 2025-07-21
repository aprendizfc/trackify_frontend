const rule = {
  create(context) {
    const validSuffixes = [
      'component',
      'helper',
      'hook',
      'constant',
      'type',
      'test',
      'machine',
      'context',
      'provider',
      'd',
    ]
    const suffixPattern = `\\.(${validSuffixes.join('|')})$`
    const options = context.options[0] || {}
    const ignoreDirs = options.ignoreDirs || []

    return {
      Program(node) {
        const filePathName = context.getFilename()
        const fileName = filePathName.split('/').pop() || ''
        const baseFileName = fileName.split('.')[0]

        // 🔒 Skip explicitly ignored directories
        if (ignoreDirs.some((dir) => filePathName.includes(`/${dir}/`))) {
          return
        }

        // Skip index files for now. Barrel files will be deprecated in the future.
        if (!fileName || baseFileName === 'index' || baseFileName === 'main') return

        // Check kebab-case
        const isKebabCase = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(baseFileName)
        if (!isKebabCase) {
          context.report({
            message:
              'File name must be in kebab-case. Example: my-component or component',
            node,
          })
        }

        const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, '')

        // Check valid suffix
        const hasValidSuffix = new RegExp(suffixPattern).test(nameWithoutExtension)

        if (!hasValidSuffix) {
          context.report({
            message: `File name must end with one of the following suffixes: ${validSuffixes.join(', ')}. Example: my-component.component.tsx`,
            node,
          })
        }
      },
    }
  },
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Enforce filename conventions',
      recommended: true,
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          ignoreDirs: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'Directories to ignore when checking filenames',
          },
        },
        additionalProperties: false,
      },
    ],
    type: 'problem',
  },
}

export default {
  rules: {
    convention: rule,
  },
}
