export default function C() {
  return (
    <div style={styles.container}>
      <h1>C Programming 💻</h1>

      <h2>Introduction</h2>
      <p>
        The C programming language, developed by Dennis Ritchie at Bell Labs,
        is one of the most powerful and influential programming languages.
        It is widely used for system programming, embedded systems, and
        application development.
      </p>

      <h2>Functions in C</h2>
      <p>
        Functions are blocks of code that perform specific tasks. They improve
        modularity and code reuse.
      </p>

      <pre style={styles.code}>
{`int add(int a, int b) {
  return a + b;
}`}
      </pre>

      <h3>Recursion Example</h3>
      <pre style={styles.code}>
{`int factorial(int n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}`}
      </pre>

      <h2>Data Types</h2>
      <ul>
        <li><b>int</b> → integers</li>
        <li><b>float</b> → decimal numbers</li>
        <li><b>double</b> → high precision decimals</li>
        <li><b>char</b> → characters</li>
        <li><b>void</b> → no value</li>
      </ul>

      <h3>Derived Data Types</h3>
      <ul>
        <li>Arrays</li>
        <li>Pointers</li>
        <li>Structures</li>
        <li>Unions</li>
        <li>Enums</li>
      </ul>

      <pre style={styles.code}>
{`int arr[3] = {1,2,3};
int *p = &arr[0];`}
      </pre>

      <h2>Type Casting</h2>
      <pre style={styles.code}>
{`float x = 5.7;
int y = (int)x;`}
      </pre>

      <h2>Libraries</h2>
      <p>C provides standard libraries for common operations:</p>

      <ul>
        <li><b>stdio.h</b> → input/output</li>
        <li><b>stdlib.h</b> → memory, utilities</li>
        <li><b>string.h</b> → string functions</li>
        <li><b>math.h</b> → math functions</li>
        <li><b>ctype.h</b> → character handling</li>
        <li><b>time.h</b> → time/date</li>
      </ul>

      <pre style={styles.code}>
{`#include <stdio.h>
#include <math.h>`}
      </pre>

      <h2>Statements</h2>

      <h3>Conditional</h3>
      <pre style={styles.code}>
{`if(a > b){
  printf("A greater");
}else{
  printf("B greater");
}`}
      </pre>

      <h3>Loops</h3>
      <pre style={styles.code}>
{`for(int i=0;i<5;i++){
  printf("%d", i);
}

while(x > 0){
  x--;
}`}
      </pre>

      <h3>Switch</h3>
      <pre style={styles.code}>
{`switch(choice){
  case 1: printf("One"); break;
  case 2: printf("Two"); break;
  default: printf("Invalid");
}`}
      </pre>

      <h2>Complete Program Example</h2>
      <pre style={styles.code}>
{`#include <stdio.h>
#include <math.h>

int square(int x){
  return x*x;
}

int main(){
  int num;
  printf("Enter number: ");
  scanf("%d", &num);

  printf("Square: %d", square(num));
  printf("\\nSquare root: %.2f", sqrt(num));

  return 0;
}`}
      </pre>

      <h2>Advantages</h2>
      <ul>
        <li>Fast execution</li>
        <li>Close to hardware</li>
        <li>Portable</li>
        <li>Foundation for other languages</li>
      </ul>

      <h2>Summary</h2>
      <p>
        C combines functions, data types, libraries, and statements to build
        efficient and structured programs. It remains essential for system-level
        programming and learning core programming concepts.
      </p>
      <p style={{ marginTop: "20px", fontSize: "12px", color: "gray" }}>
  Source: C Programming Notes
</p>

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