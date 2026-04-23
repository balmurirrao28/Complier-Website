export default function Java() {
  return (
    <div style={styles.container}>
      <h1>Java Programming ☕</h1>

      {/* INTRODUCTION */}
      <h2>Introduction</h2>
      <p>
        Java, developed by Sun Microsystems in 1995, is an object-oriented,
        platform-independent language. Its “write once, run anywhere” philosophy
        made it one of the most widely used languages for enterprise applications,
        Android development, and large-scale systems.
      </p>

      {/* FUNCTIONS */}
      <h2>1. Functions (Methods) in Java</h2>
      <p>
        In Java, functions are called methods. They are defined inside classes
        and used to perform specific tasks.
      </p>

      <p><b>Structure:</b></p>

      <pre style={styles.code}>
{`public int add(int a, int b) {
  return a + b;
}`}
      </pre>

      <p><b>Types:</b></p>
      <ul>
        <li>Instance methods</li>
        <li>Static methods</li>
        <li>Constructors</li>
        <li>Supports recursion</li>
      </ul>

      {/* DATA TYPES */}
      <h2>2. Data Types in Java</h2>
      <ul>
        <li>Primitive types: byte, short, int, long, float, double, char, boolean</li>
        <li>Reference types: objects, arrays, strings</li>
      </ul>

      <pre style={styles.code}>
{`int age = 25;
String name = "Alice";`}
      </pre>

      {/* LIBRARIES */}
      <h2>3. Libraries in Java</h2>
      <p>
        Java provides a rich standard library known as the Java API.
      </p>

      <ul>
        <li><b>java.lang</b> → core classes</li>
        <li><b>java.util</b> → collections, date/time</li>
        <li><b>java.io</b> → input/output</li>
        <li><b>java.sql</b> → database connectivity</li>
        <li>External: Apache Commons, Spring Framework</li>
      </ul>

      {/* STATEMENTS */}
      <h2>4. Statements in Java</h2>

      <ul>
        <li>Expression statements → assignments, method calls</li>
        <li>Control flow → if, switch, for, while, do-while</li>
        <li>Jump statements → break, continue, return</li>
      </ul>

      <pre style={styles.code}>
{`for(int i = 0; i < 5; i++) {
  System.out.println(i);
}`}
      </pre>

      {/* INTEGRATION */}
      <h2>5. Integration Example</h2>

      <pre style={styles.code}>
{`import java.util.Scanner;

public class Square {

  static int square(int x) {
    return x * x;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    System.out.println(square(num));
  }
}`}
      </pre>

      {/* ADVANTAGES */}
      <h2>6. Advantages</h2>
      <ul>
        <li>Platform independence via JVM</li>
        <li>Strong object-oriented features</li>
        <li>Rich standard library</li>
      </ul>

    </div>
  );
}

// ✅ STYLES
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