# Enterprise Readiness Scanner Examples

## CLI Example

Run this command from your project root:

~~~bash
npx enterprise-check --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run Enterprise Readiness Scanner
  run: npx enterprise-check --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
