'use strict';

import clone from '../../src/utils/clone';
import isEqual from '../../src/utils/isEqual';

class Person {
  constructor(name) {
    this.name = name;
  }
}
Person.valueOf = null

describe('utils clone', () => {
  it('clone', function (c = 1) {
    let a = {
      a: 1,
      b: 2,
      c: new Date(),
      d: [1, 2, 3],
      e: /45$/mgi,
      f: /abc/,
      g: function () {},
      h: undefined,
      i: null,
      j: new Error('a'),
      k: arguments,
      l: NaN,
      m: new Boolean(false),
      n: new Number(100),
      o: new String('1234')
    };
    let b = clone(a);
    (a === b).should.be.false;
    isEqual(a, b).should.be.true; 

    a = new Person('a');
    isEqual(a, clone(a)).should.be.false;

    let div = document.createElement('div');
    div.innerHTML = 'i am div';
    let div2 = clone(div);
    div2.nodeName.should.be.eql('DIV');
    div2.innerHTML.should.be.eql('i am div');
  });
});
