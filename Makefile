install: install-deps
				npx simple-git-hooks

install:
				npm ci

test:
				npm test

lint:
				npx eslint .

publish:
				npm publish

gendiff -h:
				node/bin gendiff.js -h