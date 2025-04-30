# Last version of node Refactoring

```
nvm install node

nvm ls-remote

nvm install v22.15.0

npx create-mf-app
```

..

```bash
[opc@vm-training-mgr micro-fe-intro]$ nvm install v22.15.0
Downloading and installing node v22.15.0...
Downloading https://nodejs.org/dist/v22.15.0/node-v22.15.0-linux-x64.tar.xz...
############################################################################################################################################# 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v22.15.0 (npm v10.9.2)
[opc@vm-training-mgr micro-fe-intro]$ npx create-mf-app
┌  Create Module Federation App (create-mf-app) V2
│
◇  What is the name of your app?
│  teste
│
◇  Pick a project type.
│  Application
│
◇  Port number?
│  4000
│
◇  Framework?
│  react-18
│
◇  CSS?
│  Tailwind
│
◇  Add deploy withZephyr?
│  No
│
◇  Project built
│
└  Your 'teste' project is ready to go. Next steps:

cd teste
pnpm i
pnpm start


[opc@vm-training-mgr micro-fe-intro]$ cd teste/
[opc@vm-training-mgr teste]$ yarn
yarn install v1.22.22
warning package.json: No license field
info No lockfile found.
warning teste@0.0.1: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > ts-node@10.9.2" has unmet peer dependency "@types/node@*".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 8.67s.
[opc@vm-training-mgr teste]$ yarn start
yarn run v1.22.22
warning package.json: No license field
$ NODE_ENV=development rspack serve
●  ━━━━━━━━━━━━━━━━━━━━━━━━━ (8%) setup compilation                                                                                                 <i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:4000/
<i> [webpack-dev-server] On Your Network (IPv4): http://10.5.0.212:4000/
<i> [webpack-dev-server] Content not from webpack is served from '/home/opc/microfrontend/edx/micro-fe-intro/teste/public' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
●  ━━━━━━━━━━━━━━━━━━━━━━━━━ (93%) sealing asset processing                                                                                         [ Module Federation Manifest Plugin ] Info Manifest Link: http://localhost:4000/mf-manifest.json
●  ━━━━━━━━━━━━━━━━━━━━━━━━━ (100%) emitting after emit                                                                                             Rspack compiled successfully in 1.33 s
```

## install react dome

```
npm install react-router-dom@latest @types/react-router-dom@latest
```

# Create the home again

```
node -v
v22.15.0
```

..

```
nvm use 22.15.0
```

..

```
npx create-mf-app
```

..

```
[opc@vm-training-mgr micro-fe-intro]$ npx create-mf-app
┌  Create Module Federation App (create-mf-app) V2
│
◇  What is the name of your app?
│  master
│
◇  Pick a project type.
│  Application
│
◇  Port number?
│  5000
│
◇  Framework?
│  react-18
│
◇  CSS?
│  Tailwind
│
◇  Add deploy withZephyr?
│  No
│
◇  Project built
│
└  Your 'master' project is ready to go. Next steps:

cd master
pnpm i
pnpm start
```

## Install react dom

```
npm install react-router-dom@latest @types/react-router-dom@latest
```

## Test

```
npm run start
```

..

```
●  ━━━━━━━━━━━━━━━━━━━━━━━━━ (8%) setup compilation                                                                                                 <i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:5000/
<i> [webpack-dev-server] On Your Network (IPv4): http://10.5.0.212:5000/
<i> [webpack-dev-server] Content not from webpack is served from '/home/opc/microfrontend/edx/micro-fe-intro/master/public' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
●  ━━━━━━━━━━━━━━━━━━━━━━━━━ (83%) sealing asset processing                                                                                         [ Module Federation Manifest Plugin ] Info Manifest Link: http://localhost:5000/mf-manifest.json
●  ━━━━━━━━━━━━━━━━━━━━━━━━━ (100%) emitting after emit                                                                                             Rspack compiled successfully in 1.37 s
```


