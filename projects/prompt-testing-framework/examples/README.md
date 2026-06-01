# Prompt Testing Framework Examples

## CLI Example

Run this command from your project root:

~~~bash
npx prompt-test --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run Prompt Testing Framework
  run: npx prompt-test --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
