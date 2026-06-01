# Production Incident Copilot Examples

## CLI Example

Run this command from your project root:

~~~bash
npx incident-analyze --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run Production Incident Copilot
  run: npx incident-analyze --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
