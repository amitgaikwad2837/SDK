# OpenAPI Full Stack Generator Examples

## CLI Example

Run this command from your project root:

~~~bash
npx generate-stack --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run OpenAPI Full Stack Generator
  run: npx generate-stack --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
