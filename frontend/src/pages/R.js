export default function RProgrammingPage() {
  return (
    <div style={styles.container}>
      <h1>R Programming 📊</h1>

      {/* INTRODUCTION */}
      <h2>Introduction</h2>
      <p>
        R is a language designed specifically for statistical computing and data visualization.
        Created by Ross Ihaka and Robert Gentleman in the 1990s, R has become the backbone
        of modern data science. Its strength lies in handling large datasets, performing
        complex statistical analysis, and producing high-quality graphics.
      </p>

      {/* FUNCTIONS */}
      <h2>1. Functions in R</h2>
      <p>
        Functions are first-class objects in R, meaning they can be stored in variables,
        passed as arguments, and returned as values.
      </p>

      <p><b>Structure:</b> function_name &lt;- function(parameters) {'{'} body {'}'}</p>

      <pre style={styles.code}>
{`add <- function(x, y) {
  return(x + y)
}`}
      </pre>

      <p><b>Types:</b></p>
      <ul>
        <li>Built-in functions (mean(), sum(), plot())</li>
        <li>User-defined functions</li>
        <li>Supports recursion (e.g., factorial)</li>
      </ul>

      {/* DATA TYPES */}
      <h2>2. Data Types in R</h2>
      <ul>
        <li>Basic types: numeric, integer, character, logical, complex</li>
        <li>Vectors → homogeneous elements</li>
        <li>Lists → heterogeneous collections</li>
        <li>Matrices → 2D arrays</li>
        <li>Data frames → tabular data</li>
        <li>Factors → categorical variables</li>
      </ul>

      <pre style={styles.code}>
{`df <- data.frame(
  name = c("A","B"),
  age = c(21,25)
)`}
      </pre>

      {/* LIBRARIES */}
      <h2>3. Libraries in R</h2>
      <p>
        R’s power comes from packages (libraries). Many built-in functions are loaded
        automatically, but external packages extend functionality.
      </p>

      <ul>
        <li><b>ggplot2</b> → visualization</li>
        <li><b>dplyr</b> → data manipulation</li>
        <li><b>tidyr</b> → data cleaning</li>
        <li><b>caret</b> → machine learning</li>
        <li><b>foreign</b> → import/export data</li>
      </ul>

      <pre style={styles.code}>
{`library(ggplot2)`}
      </pre>

      {/* STATEMENTS */}
      <h2>4. Statements in R</h2>

      <ul>
        <li>Assignment → &lt;- or =</li>
        <li>Conditional → if, else if, else</li>
        <li>Loops → for, while, repeat</li>
        <li>Control flow → break, next, return</li>
      </ul>

      <pre style={styles.code}>
{`for(i in 1:5) {
  print(i)
}`}
      </pre>

      {/* INTEGRATION */}
      <h2>5. Integration Example</h2>

      <pre style={styles.code}>
{`library(ggplot2)

square <- function(x) x^2

nums <- 1:5

print(square(nums))`}
      </pre>

      {/* ADVANTAGES */}
      <h2>6. Advantages</h2>
      <ul>
        <li>Specialized for statistics</li>
        <li>Rich ecosystem of packages</li>
        <li>Strong visualization capabilities</li>
      </ul>

    </div>
  );
}

// ✅ STYLES (NO ERROR)
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