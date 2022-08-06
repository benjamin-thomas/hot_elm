# Elm + Hotwire + Stimulus demo

This is a rails app.

## Run locally

Requirements: 

- docker-compose
- local ruby install (see: `.ruby-version` file)
  - see [rbenv](https://github.com/rbenv/rbenv) for easy ruby version management

### Step 1: add a local hostname entry to /etc/hosts

```bash
root@me:~# cat /etc/hosts | grep hot-elm
127.19.0.1      pg.hot-elm.test
```

### Step 2: adjust the `docker-compose.yml` ports config

As per the /etc/hosts entry

### Step 3: launch the dev database

```bash
docker-compose up pg
```

### Step 4: launch the rails app

```bash
./bin/dev
```