// NOTE: IN A STACK, WE SHOULDNT BE ABLE TO ACCESS OBJECTS USING THEIR INDEX

const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []); // cant access this array from outside of this object, so users cant access each element using index cause thats totally not how stack works!
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const itemsss = _items.get(this); // refactoring repetetive code!
    if (itemsss.length === 0) throw new Error("Stack is empty.");
    return itemsss.pop(); // youre placing this in return statement, so it pops the element and also tell you which element is popped
  }

  peek() {
    const itemsss = _items.get(this); // refactoring repetetive code!
    if (itemsss.length === 0) throw new Error("Stack is empty.");
    return itemsss[itemsss.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}
