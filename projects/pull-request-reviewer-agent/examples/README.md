# Pull Request Reviewer Agent Examples

## CLI Example

Run this command from your project root:

~~~bash
npx ai-pr-reviewer --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run Pull Request Reviewer Agent
  run: npx ai-pr-reviewer --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
