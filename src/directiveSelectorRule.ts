import * as Lint from 'tslint/lib/lint';
import {SelectorNameRule} from './selectorNameBase';

const DEFAULT_CONFIG = ['attribute', 'camelCase', 'sg'];

export class Rule extends SelectorNameRule {
  protected normalizeOptions(options: Lint.IOptions) {
    if (!options.ruleArguments) {
      options.ruleArguments = DEFAULT_CONFIG;
    }
    return options;
  }
}
