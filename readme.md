
# 🔄 Interfaces vs. Types in TypeScript

TypeScript provides both `interface` and `type` to describe the shape of objects, but there are key differences.

---

## ✅ Interfaces

- Used to define the **structure of objects or classes**.
- Can be **extended** using `extends`.
- Interfaces are **mergeable** — multiple declarations are combined.

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}
```

---

## ✅ Types

- Used to define **aliases for any type**, including primitives, unions, tuples, and more.
- Cannot be **merged** like interfaces.
- Can use `&` for **intersection types** to combine multiple types.

```ts
type User = {
  name: string;
  age: number;
};

type Admin = User & {
  role: string;
};
```

---

# 🧠 How does TypeScript help in improving code quality and project maintainability?

TypeScript enhances code quality and maintainability in several powerful ways:

---

## 1. **Static Typing**

TypeScript catches type-related bugs during development instead of runtime.

```ts
function greet(name: string) {
  return "Hello, " + name;
}

greet(123); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

---

## 2. **Improved IDE Support**

With TypeScript, editors like VS Code offer:

- Autocompletion
- Real-time type checking
- Intelligent refactoring

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 999,
};

console.log(product.naem); // ❌ Error: Property 'naem' does not exist (suggests 'name')
```

---

## 3. **Self-Documenting Code**

Types make code more understandable without external documentation.

```ts
function calculateDiscount(price: number, discount: number): number {
  return price - price * discount;
}
```

---

## 4. **Refactoring Confidence**

When changing function names, properties, or interfaces, TypeScript will show exactly where changes are needed.

```ts
interface User {
  firstName: string;
  lastName: string;
}

function getFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}
```

---

## 5. **Scalability for Large Codebases**

In large teams or projects, TypeScript enforces consistency and helps prevent bugs introduced by implicit assumptions.

- Shared interfaces
- Strict types across modules
- Dependency safety

---

## 6. **Gradual Adoption in JavaScript Projects**

You can rename `.js` files to `.ts` or `.tsx`, and slowly add types without rewriting the whole codebase.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

> ✨ TypeScript gives us confidence and structure in any project, whether it's a small script or a full-scale enterprise app.
