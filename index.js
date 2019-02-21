#!/usr/bin/env node

const execa = require('execa');
const [ignore, me, ...parameters] = process.argv;

const exec = execa('npx', parameters);

exec.stdout.pipe(process.stdout);
exec.stderr.pipe(process.stderr);
