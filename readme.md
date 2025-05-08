# 🔄 Interfaces vs. Types in TypeScript.

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

# ✅ How does TypeScript help in improving code quality and project maintainability?

TypeScript enhances code quality and maintainability in several ways:

1. **Static Typing**: Detects type-related errors during development, reducing runtime bugs.
2. **Improved IDE Support**: Provides features like autocompletion, refactoring tools, and inline documentation.
3. **Self-Documenting Code**: Types act as documentation, making the codebase easier to understand.
4. **Refactoring Confidence**: Ensures changes in code do not break existing functionality.
5. **Scalability**: Facilitates working on large codebases by enforcing consistent type usage.
6. **Integration with JavaScript**: Allows gradual adoption in existing JavaScript projects.

By catching errors early and improving developer productivity, TypeScript significantly contributes to building robust and maintainable applications.

---