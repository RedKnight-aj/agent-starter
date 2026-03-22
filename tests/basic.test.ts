import { describe, it, expect } from '@jest/globals';

describe('Agent Starter', () => {
  it('should have correct package name', () => {
    const pkg = require('../package.json');
    expect(pkg.name).toBe('agent-starter');
  });

  it('should have required scripts', () => {
    const pkg = require('../package.json');
    expect(pkg.scripts).toHaveProperty('build');
    expect(pkg.scripts).toHaveProperty('dev');
    expect(pkg.scripts).toHaveProperty('test');
  });

  it('should have required dependencies', () => {
    const pkg = require('../package.json');
    expect(pkg.dependencies).toHaveProperty('openai');
    expect(pkg.dependencies).toHaveProperty('@anthropic-ai/sdk');
    expect(pkg.dependencies).toHaveProperty('express');
  });

  it('should have TypeScript configured', () => {
    const tsconfig = require('../tsconfig.json');
    expect(tsconfig.compilerOptions).toBeDefined();
    expect(tsconfig.compilerOptions.target).toBeDefined();
  });
});