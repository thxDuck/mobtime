## Working Steps

- [x] Launch application in dev mode (5 minutes, time to install docker on my host)

  ```bash
  npm ci
  npm run tailwind
  npm run start:dev
  ```

- [ ] Launch application in prod mode (with docker)
  Can't start, error in a docker, we will see later...
- [x] Run actual tests
  93 tests passed
- [ ] Implement typescript

## Typescript implementation

To run the `npm run dev` command, we need to have a redis server running. I add a docker-compose for this, now i can test the application on my host.

```bash 
docker compose -f docker-compose-redis.yml up -d
```

Add Typescript package and @types/node. To compile, there are some commands:

```bash
"start:build": "node ./dist/index.js",    # Run transpilled code
"build": "tsc"                            # Transpile al js/ts files in ./dist
```

### Migrating JS to TS

Start with Id generator : 

- Improve security : Replace Math.random by crypto.randomBytes
- Improve strength : Method always return same length
- Add tests for regressions
  