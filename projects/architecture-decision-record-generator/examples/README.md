# Architecture Decision Record Generator Examples

## CLI Example

Run this command from your project root:

~~~bash
npx adr-gen --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run Architecture Decision Record Generator
  run: npx adr-gen --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
