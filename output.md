# Python Stack Implementation

A stack is a linear data structure in which elements are added and removed only from one end, called the top. The last element added to the stack is the first element to be removed. This is called **LIFO** (last-in, first-out).

## Stacks are used in a variety of applications, such as:

* **Undo/redo** operations in text editors and word processors
* Function call management in computer programs
* Parsing of mathematical expressions
* Computer graphics
* Operating system memory management

## The following Python code implements a stack using a list.

```python
def isEmpty(stack):
    if len(stack) == 0:
        return True
    else:
        return False

def push(item, stack):
    stack.append(item)
    return 'item pushed --> '+str(item)


def pop(stack):
    if isEmpty(stack):
        return 'underflow'
    else:
        popped_item = stack.pop()
        return popped_item

def peek(stack):
    if isEmpty(stack):
        return 'underflow'
    else:
        return stack[-1]

def display(stack):
    return stack 

def __len__(stack):
    if isEmpty(stack):
        return 'underflow'
    else:
        return len(stack)

```

## Usage

To use the stack, simply create an instance of the `Stack` class and call the appropriate methods. For example, the following code creates a stack and pushes three items onto it:

```python
s = Stack()
s.push(5)
s.push(4)
s.push(3)
```

To pop an item from the stack, simply call the `pop()` method. The following code pops the top item from the stack and prints it:

```python
print(s.pop())
```

## Conclusion

This Python code provides a simple implementation of a stack. It can be used in a variety of applications where a LIFO data structure is required.
```