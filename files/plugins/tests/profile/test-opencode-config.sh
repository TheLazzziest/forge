#!/usr/bin/env bash

node -e "
const fs = require('fs');
const parseJSONC = (s) => {
  let inStr = false, out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i], n = s[i+1];
    if (c === '\"') inStr = !inStr;
    if (!inStr && c === '/' && n === '/') { while (i < s.length && s[i] !== '\\n') i++; continue; }
    out += c;
  }
  return JSON.parse(out);
};

let passed = 0;
let total = 6;

// Check 1: parse components/developer/opencode.jsonc
try {
  const opencode1 = parseJSONC(fs.readFileSync('components/developer/opencode.jsonc', 'utf8'));
  console.log('Check 1: PASS - components/developer/opencode.jsonc parses');
  passed++;
} catch (e) {
  console.log('Check 1: FAIL - components/developer/opencode.jsonc does not parse');
}

// Check 2: parse components/developer/ocx.jsonc
try {
  const ocx1 = parseJSONC(fs.readFileSync('components/developer/ocx.jsonc', 'utf8'));
  console.log('Check 2: PASS - components/developer/ocx.jsonc parses');
  passed++;
} catch (e) {
  console.log('Check 2: FAIL - components/developer/ocx.jsonc does not parse');
}

// Check 3: opencode.jsonc has default_agent: \"build\"
try {
  const opencode1 = parseJSONC(fs.readFileSync('components/developer/opencode.jsonc', 'utf8'));
  if (opencode1.default_agent === 'build') {
    console.log('Check 3: PASS - default_agent is build');
    passed++;
  } else {
    console.log('Check 3: FAIL - default_agent is not build (got: ' + opencode1.default_agent + ')');
  }
} catch (e) {
  console.log('Check 3: FAIL - could not parse opencode.jsonc');
}

// Check 4: opencode.jsonc has exactly 4 agents
try {
  const opencode1 = parseJSONC(fs.readFileSync('components/developer/opencode.jsonc', 'utf8'));
  const agentKeys = Object.keys(opencode1.agent || {});
  if (agentKeys.length === 4) {
    const expected = ['implementer', 'spec-reviewer', 'code-quality-reviewer', 'code-reviewer'];
    const missing = expected.filter(k => !agentKeys.includes(k));
    const extra = agentKeys.filter(k => !expected.includes(k));
    if (missing.length === 0 && extra.length === 0) {
      console.log('Check 4: PASS - agent has exactly 4 expected agents');
      passed++;
    } else {
      console.log('Check 4: FAIL - agent keys mismatch. Missing: ' + missing + ', Extra: ' + extra);
    }
  } else {
    console.log('Check 4: FAIL - agent does not have exactly 4 agents (got: ' + agentKeys.length + ')');
  }
} catch (e) {
  console.log('Check 4: FAIL - could not parse opencode.jsonc');
}

// Check 5: ocx.jsonc has registries.superpowers.url set to https://github.com/obra/superpowers
try {
  const ocx1 = parseJSONC(fs.readFileSync('components/developer/ocx.jsonc', 'utf8'));
  if (ocx1.registries && ocx1.registries.superpowers && ocx1.registries.superpowers.url === 'https://github.com/obra/superpowers') {
    console.log('Check 5: PASS - registries.superpowers.url is correct');
    passed++;
  } else {
    console.log('Check 5: FAIL - registries.superpowers.url is incorrect or missing');
  }
} catch (e) {
  console.log('Check 5: FAIL - could not parse ocx.jsonc');
}

// Check 6: both JSONC files in components/developer/ and files/components/developer/ are identical
try {
  const opencode1 = parseJSONC(fs.readFileSync('components/developer/opencode.jsonc', 'utf8'));
  const opencode2 = parseJSONC(fs.readFileSync('files/components/developer/opencode.jsonc', 'utf8'));
  const ocx1 = parseJSONC(fs.readFileSync('components/developer/ocx.jsonc', 'utf8'));
  const ocx2 = parseJSONC(fs.readFileSync('files/components/developer/ocx.jsonc', 'utf8'));

  const opencodeEqual = JSON.stringify(opencode1) === JSON.stringify(opencode2);
  const ocxEqual = JSON.stringify(ocx1) === JSON.stringify(ocx2);

  if (opencodeEqual && ocxEqual) {
    console.log('Check 6: PASS - both JSONC files are identical in both directories');
    passed++;
  } else {
    console.log('Check 6: FAIL - files are not identical');
    if (!opencodeEqual) {
      console.log('  opencode.jsonc differs');
    }
    if (!ocxEqual) {
      console.log('  ocx.jsonc differs');
    }
  }
} catch (e) {
  console.log('Check 6: FAIL - could not parse one of the files');
}

console.log('Total: ' + passed + '/' + total + ' checks passed');
process.exit(passed === total ? 0 : 1);
"