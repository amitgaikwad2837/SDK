# Database Query Explainer Examples

## CLI Example

Run this command from your project root:

~~~bash
npx query-explain --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run Database Query Explainer
  run: npx query-explain --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
