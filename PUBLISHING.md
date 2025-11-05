# 📦 Publishing Guide

## Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **Organization**: Join or create the `@aismarttalk` organization on npm
3. **Access**: Ensure you have publish access to the `@aismarttalk` scope

## Setup

### 1. Login to npm

```bash
npm login
```

Enter your npm credentials when prompted.

### 2. Verify your identity

```bash
npm whoami
```

## Publishing Steps

### 1. Update Version

Update the version in `package.json` following [Semantic Versioning](https://semver.org/):

```bash
# For bug fixes
npm version patch

# For new features (backward compatible)
npm version minor

# For breaking changes
npm version major
```

Or manually edit `package.json`:

```json
{
  "version": "1.0.0"  // Update this
}
```

### 2. Build the Package

```bash
npm run build
```

This will compile TypeScript to JavaScript in the `dist/` folder.

### 3. Test the Package Locally (Optional)

```bash
# Create a tarball
npm pack

# Install it in another project
npm install /path/to/aismarttalk-legifrance-sdk-1.0.0.tgz
```

### 4. Publish to npm

**For the first time (public package):**

```bash
npm publish --access public
```

**For subsequent updates:**

```bash
npm publish
```

### 5. Verify Publication

```bash
npm view @aismarttalk/legifrance-sdk
```

Or visit: https://www.npmjs.com/package/@aismarttalk/legifrance-sdk

## Pre-publish Checklist

- [ ] All tests pass
- [ ] Version number is updated
- [ ] README.md is up to date
- [ ] CHANGELOG is updated (if you have one)
- [ ] All examples work
- [ ] Build succeeds (`npm run build`)
- [ ] No sensitive data in the package

## What Gets Published

The following files/folders are included (defined in `package.json` "files" field):
- `dist/` - Compiled JavaScript and TypeScript declarations
- `src/` - Source TypeScript files
- `README.md` - Documentation
- `LICENSE` - MIT License

The following are excluded (via `.npmignore`):
- `examples/` - Example code
- `node_modules/` - Dependencies
- `.env` files
- Test files
- Development configuration

## Automated Publishing (GitHub Actions)

You can automate publishing with GitHub Actions. Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Don't forget to add your npm token to GitHub Secrets as `NPM_TOKEN`.

## Troubleshooting

### "You do not have permission to publish"

Make sure:
1. You're logged in: `npm whoami`
2. You have access to the `@aismarttalk` scope
3. You're using `--access public` for the first publish

### "Version already exists"

Update the version in `package.json` before publishing.

### "Unable to find a readme"

Make sure `README.md` exists in the root directory.

## Support

For issues, contact: contact@aismarttalk.tech

