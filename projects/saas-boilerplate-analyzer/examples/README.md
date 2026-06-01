# SaaS Boilerplate Analyzer Examples

## CLI Example

Run this command from your project root:

~~~bash
npx boilerplate-audit --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run SaaS Boilerplate Analyzer
  run: npx boilerplate-audit --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
