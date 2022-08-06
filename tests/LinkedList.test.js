import LinkedList from "../modules/LinkedList.js";

let list;
beforeEach(() => {
  list = LinkedList();
})

describe('toString', () => {
  it('No node', () => {
    expect(list.toString()).toBe('(null)');
  });

  it('With nodes', () => {
    list.append(1);
    list.append(2);
    expect(list.toString()).toBe('(1)->(2)->(null)');
  })
})

describe('append', () => {
  it('Correct nodes', () => {
    list.append(1);
    list.append(2);
    expect(list.toString()).toBe('(1)->(2)->(null)');
  });

  it('Correct next nodes', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(JSON.stringify(list.head())).toBe('{\"val\":1,\"nextNode\":{\"val\":2,\"nextNode\":{\"val\":3,\"nextNode\":null}}}');
  });
});

describe('prepend', () => {
  it('Correct nodes', () => {
    list.prepend(1);
    list.prepend(0);
    expect(list.toString()).toBe('(0)->(1)->(null)');
  });

  it('Correct next nodes', () => {
    list.prepend(3);
    list.prepend(2);
    list.prepend(1);
    expect(JSON.stringify(list.head())).toBe('{\"val\":1,\"nextNode\":{\"val\":2,\"nextNode\":{\"val\":3,\"nextNode\":null}}}');
  });
});

describe('head', () => {
  it('No node', () => {
    expect(list.head()).toBe(null);
  });

  it('With nodes', () => {
    list.append(1);
    expect(JSON.stringify(list.head())).toBe('{\"val\":1,\"nextNode\":null}');
  });
});

describe('tail', () => {
  it('No node', () => {
    expect(list.tail()).toBe(null);
  });

  it('With nodes', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(JSON.stringify(list.tail())).toBe('{\"val\":3,\"nextNode\":null}')
  });
});

describe('at', () => {
  it('Out of index', () => {
    list.append(1);
    expect(() => list.at(-1)).toThrow();
    expect(() => list.at(1)).toThrow();
  });

  it('Valid call', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.at(0)).toEqual(list.head());
    expect(JSON.stringify(list.at(1))).toBe('{\"val\":2,\"nextNode\":{\"val\":3,\"nextNode\":null}}');
    expect(list.at(2)).toEqual(list.tail());
  });
});

describe('pop', () => {
  it('Invalid pop', () => {
    expect(() => list.pop()).toThrow();
  });

  it('Correct nodes', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.pop();
    expect(list.toString()).toBe('(1)->(2)->(null)');
    list.pop();
    expect(list.toString()).toBe('(1)->(null)');
  });

  it('Correct next nodes', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.pop();
    expect(JSON.stringify(list.head())).toBe('{\"val\":1,\"nextNode\":{\"val\":2,\"nextNode\":null}}');
    list.pop();
    expect(JSON.stringify(list.head())).toBe('{\"val\":1,\"nextNode\":null}');
  });
});

describe('contains', () => {
  it('Not contains', () => {
    expect(list.contains('Bob')).toBe(false);
  });

  it('Contains', () => {
    list.append('Bob');
    expect(list.contains('Bob')).toBe(true);
  });
});

describe('find', () => {
  it('Not found', () => {
    expect(list.find(999)).toBe(null);
  });

  it('Found', () => {
    for (let i = 0; i < 3; i++) {
      list.append(i);
      expect(list.find(i)).toBe(i);
    }
  });
});

describe('size', () => {
  it('No node', () => {
    expect(list.size()).toBe(0);
  });

  it('With nodes', () => {
    for (let i = 0; i < 3; i++) {
      list.append(i);
      expect(list.size()).toBe(i + 1);
    }
  });
});

describe('insertAt', () => {
  it('Out of index', () => {
    expect(() => list.insertAt(1, -1)).toThrow();
    expect(() => list.insertAt(1, 0)).toThrow();
  });

  it('Correct nodes', () => {
    list.append(1);
    list.append(3);
    list.insertAt(2, 1);
    expect(list.toString()).toBe('(1)->(2)->(3)->(null)');
  });

  it('Correct next nodes', () => {
    list.append(1);
    list.append(3);
    list.insertAt(2, 1);
    expect(JSON.stringify(list.head())).toBe('{\"val\":1,\"nextNode\":{\"val\":2,\"nextNode\":{\"val\":3,\"nextNode\":null}}}');
  });
});

describe('removeAt', () => {
  it('Out of index', () => {
    expect(() => list.removeAt(-1)).toThrow();
    expect(() => list.removeAt(0)).toThrow();
  });

  it('Correct nodes', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.removeAt(1);
    expect(list.toString()).toBe('(1)->(3)->(null)');
  });

  it('Correct next nodes', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.removeAt(1);
    expect(JSON.stringify(list.head())).toBe('{\"val\":1,\"nextNode\":{\"val\":3,\"nextNode\":null}}');
  });
});