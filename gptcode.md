# Python Stack Implementation

This Python project provides a simple implementation of a stack data structure. A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning the last element added to the stack is the first one to be removed.

## Functions

### `isEmpty(stack)`

This function checks if the stack is empty.

- Parameters:
  - `stack`: The stack to be checked.

- Returns:
  - `True` if the stack is empty.
  - `False` if the stack is not empty.

### `push(item, stack)`

This function pushes an element onto the stack.

- Parameters:
  - `item`: The element to be pushed onto the stack.
  - `stack`: The stack onto which the element is pushed.

- Returns:
  - A string indicating that the item has been pushed onto the stack.

### `pop(stack)`

This function pops (removes) the top element from the stack.

- Parameters:
  - `stack`: The stack from which the element is popped.

- Returns:
  - The popped item.
  - 'underflow' if the stack is empty and popping is not possible.

### `peek(stack)`

This function returns the element at the top of the stack without removing it.

- Parameters:
  - `stack`: The stack from which to retrieve the top element.

- Returns:
  - The top element of the stack.
  - 'underflow' if the stack is empty.

### `display(stack)`

This function returns the entire stack.

- Parameters:
  - `stack`: The stack to be displayed.

- Returns:
  - The stack as a list.

### `__len__(stack)`

This function returns the length (number of elements) of the stack.

- Parameters:
  - `stack`: The stack whose length is to be determined.

- Returns:
  - The length of the stack.
  - 'underflow' if the stack is empty.

## Example Usage

```python
if __name__ == '__main__':
    s = []
    print(isEmpty(s))
    print(push(5, s))
    print(peek(s))
    print(push(4, s))
    print(peek(s))
    print(push(3, s))
    print(peek(s))
    print(push(2, s))
    print(peek(s))
    print(push(1, s))
    print(peek(s))
    print(s)
    t = []
    for i in range(len(s)):
        t.append(pop(s))
    print(t)
