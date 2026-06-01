# AI SDK Internal Tools Examples

## CLI Example

Run this command from your project root:

~~~bash
npx workflow-ai --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run AI SDK Internal Tools
  run: npx workflow-ai --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
