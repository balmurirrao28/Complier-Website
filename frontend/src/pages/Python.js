export default function Python() {
  return (
    <div style={styles.container}>
      <h1>Python Programming 🐍</h1>

      <h2>Overview</h2>
      <p>
        Python is a high-level, interpreted programming language designed for readability
        and ease of use. It supports multiple paradigms including procedural,
        object-oriented, and functional programming. Python is widely used in web
        development, data science, artificial intelligence, scripting, automation,
        and system programming.
      </p>

      <h2>History</h2>
      <p>
        Python was created by Guido van Rossum and released in 1991. It was designed
        as a successor to the ABC language with a focus on simplicity and readability.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Dynamic typing</li>
        <li>Automatic memory management</li>
        <li>Large standard library</li>
        <li>Cross-platform compatibility</li>
        <li>Easy syntax</li>
      </ul>

      <h2>Basic Syntax</h2>
      <pre style={styles.code}>
{`print("Hello World")

if 5 > 2:
    print("True")`}
      </pre>

      <h2>Variables and Data Types</h2>
      <pre style={styles.code}>
{`x = 10       # int
y = 10.5     # float
name = "Ram" # string
isTrue = True
arr = [1,2,3]`}
      </pre>

      <h2>Operators</h2>
      <ul>
        <li>Arithmetic: + - * / %</li>
        <li>Comparison: == != &gt; &lt;</li>
        <li>Logical: and, or, not</li>
      </ul>

      <h2>Control Statements</h2>
      <h3>If-Else</h3>
      <pre style={styles.code}>
{`x = 10
if x > 5:
    print("Greater")
else:
    print("Smaller")`}
      </pre>

      <h3>Loops</h3>
      <pre style={styles.code}>
{`for i in range(5):
    print(i)

while x > 0:
    x -= 1`}
      </pre>

      <h2>Functions</h2>
      <pre style={styles.code}>
{`def add(a, b):
    return a + b

print(add(5,3))`}
      </pre>

      <h2>Lambda Functions</h2>
      <pre style={styles.code}>
{`add = lambda a,b: a+b
print(add(2,3))`}
      </pre>

      <h2>Data Structures</h2>

      <h3>Lists</h3>
      <pre style={styles.code}>
{`nums = [1,2,3]
nums.append(4)`}
      </pre>

      <h3>Dictionaries</h3>
      <pre style={styles.code}>
{`person = {"name": "Ram", "age": 20}`}
      </pre>

      <h2>Object-Oriented Programming</h2>
      <pre style={styles.code}>
{`class Person:
    def __init__(self, name):
        self.name = name

p = Person("Ravi")
print(p.name)`}
      </pre>

      <h2>File Handling</h2>
      <pre style={styles.code}>
{`f = open("file.txt", "r")
print(f.read())
f.close()`}
      </pre>

      <h2>Exception Handling</h2>
      <pre style={styles.code}>
{`try:
    x = 10 / 0
except:
    print("Error")`}
      </pre>

     <h2>Libraries & Packages</h2>
<ul>
  <li><b>NumPy</b> → Numerical computing (arrays, math)</li>
  <li><b>Pandas</b> → Data analysis and manipulation</li>
  <li><b>Matplotlib</b> → Data visualization (graphs)</li>
  <li><b>Seaborn</b> → Advanced visualization</li>
  <li><b>TensorFlow</b> → Machine Learning / AI</li>
  <li><b>PyTorch</b> → Deep learning</li>
  <li><b>Django</b> → Web development</li>
  <li><b>Flask</b> → Lightweight web apps</li>
  <li><b>Requests</b> → API calls / HTTP requests</li>
</ul>

      <h2>Use Cases</h2>
      <ul>
        <li>Web development</li>
        <li>Machine learning</li>
        <li>Automation scripts</li>
        <li>Game development</li>
      </ul>

      <h2>Edge Cases</h2>
      <ul>
        <li>Division by zero errors</li>
        <li>Mutable vs immutable types</li>
        <li>Indentation errors</li>
      </ul>

      <h2>Example Programs</h2>

      <h3>Factorial</h3>
      <pre style={styles.code}>
{`def fact(n):
    if n==0:
        return 1
    return n*fact(n-1)

print(fact(5))`}
      </pre>

      <h3>Prime Check</h3>
      <pre style={styles.code}>
{`num = 7
for i in range(2,num):
    if num % i == 0:
        print("Not Prime")
        break
else:
    print("Prime")`}
      </pre>

      <h2>Advantages</h2>
      <ul>
        <li>Easy to learn</li>
        <li>Huge community</li>
        <li>Versatile</li>
      </ul>

      <h2>Disadvantages</h2>
      <ul>
        <li>Slower execution</li>
        <li>Not ideal for mobile apps</li>
      </ul>
    </div>
  );
}


const styles = {
  container: {
    padding: "25px",
    maxWidth: "900px",
    margin: "auto",
  },
  code: {
    background: "#1e1e1e",
    color: "#00ffcc",
    padding: "10px",
    borderRadius: "8px",
  },
};

