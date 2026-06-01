# API Mock Data Intelligence Examples

## CLI Example

Run this command from your project root:

~~~bash
npx mock-data-gen --schema ./examples/schema.json --scale 250 --locale en_US --json
~~~

## CI Example (GitHub Actions)

~~~yaml
- name: Run API Mock Data Intelligence
  run: npx mock-data-gen --schema ./examples/schema.json --scale 250 --locale en_US --json
~~~

## Notes

- Keep example inputs small and deterministic.
- Commit expected outputs when you want regression visibility in pull requests.
