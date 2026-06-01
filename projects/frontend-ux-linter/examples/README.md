# Frontend UX Linter Examples

## CLI Example

Run this command from your project root:

~~~bash
npx ux-lint --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run Frontend UX Linter
  run: npx ux-lint --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
