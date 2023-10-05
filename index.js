
const { TextServiceClient } =
  require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");

const fs = require("fs");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "<YOUR_API_KEY>";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});




const prompt = `
    You are expert in writing github project readme's and markdown files.

    Generate a github readme for the following python stack project,
    describe each functions and logic behind it using proper paragraphs and
    use proper proper headings with different heading tags and bullets points
    to describe functionality of each function and logic and
    explain each comment in paragraph form and return .md code as output.: 

# function to check is stack empty
def isEmpty(stack):
    if len(stack) == 0:
        return True
    else:
        return False

# function to push element to stack
def push(item, stack):
    stack.append(item)
    return 'item pushed --> '+str(item)


# function to pop element from stack
def pop(stack):
    if isEmpty(stack):
        return 'underflow'
    else:
        popped_item = stack.pop()
        return popped_item

#function to check element on the top
def peek(stack):
    if isEmpty(stack):
        return 'underflow'
    else:
        return stack[-1]

# function to display stack 
def display(stack):
    return stack 

# function to check length of list
def __len__(stack):
    if isEmpty(stack):
        return 'underflow'
    else:
        return len(stack)



if __name__ == '__main__':
    s = []
    print(isEmpty(s))
    print(push(5,s))
    print(peek(s))
    print(push(4,s))
    print(peek(s))
    print(push(3,s))
    print(peek(s))
    print(push(2,s))
    print(peek(s))
    print(push(1,s))
    print(peek(s))
    print(s)
    t = []
    for i in range(len(s)):
        t.append(pop(s))
    print(t)
`;

client
  .generateText({
    model: MODEL_NAME,
    prompt: {
      text: prompt,
    },
  })
  .then((result) => {
    const data = JSON.stringify(result, null, 2);
    const output = (JSON.parse(data))[0]['candidates'][0]['output'];
    fs.writeFile("output.md", output, (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  });