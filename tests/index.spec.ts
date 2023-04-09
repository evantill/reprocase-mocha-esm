import {assert, expect} from 'chai';
import {boo, options} from '../src/index.js';

describe('Index Tests', () => {

  it("option just return figlet options", () => {
    const result = options()
    assert.isTrue(result.isJust);
    expect(result.isJust).to.be.true
    expect(result.unwrapOr(undefined)).to.have.property('font').equal('Ghost')
  });

  it("option just return figlet options", () => {
    const result = boo()
    expect(result).equal('Boo!')
  });

});
