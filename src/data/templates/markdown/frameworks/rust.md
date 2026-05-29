## RUST BACKEND DEVELOPMENT RULES

### Compile Safety and Error Propagation
- Idiomatic Error Propagation: Always return `Result<T, E>` in functions that perform I/O, database actions, or JSON parsing. Use the `?` operator to propagate errors up to the handler level.
- Banned Panics: Never write `unwrap()` or `expect()` inside route handlers or business logic. A panic will terminate the thread or crash the server. Use `map_err()`, `and_then()`, or match blocks to handle errors gracefully.
- Explicit Type Matching: Rust is strictly typed. If a function compiles with a type mismatch, do not cast blindly. Check structure shapes and declare conversion traits (`From`, `Into`) explicitly.

### Memory Safety and Ownership
- Borrow-Checker Compliance: Design data flows with clear ownership lifecycles. Pass references (`&T` or `&mut T`) instead of copying or cloning (`.clone()`) data structures unless ownership is explicitly required.
- Thread Safety: Ensure any shared backend state (e.g. database pools, application configs) is wrapped in thread-safe containers: `Arc<Mutex<T>>` or `Arc<RwLock<T>>` to allow concurrent access without race conditions.

### Crate and Dependency Rules
- Cargo.toml Hygiene: Pin exact crate versions in `Cargo.toml` (e.g., `serde = { version = "1.0.196", features = ["derive"] }`). Avoid open-ended wildcard configurations.
- Feature Selection: Only enable the cargo features you are actively using to keep compilation times fast and output binary sizes small.

### AI Agent Self-Check
Before outputting Rust code, verify:
1. Does the code compile with zero warnings?
2. Are all `unwrap()` and `expect()` calls replaced with safe error handling?
3. Is shared state wrapped in `Arc` and `Mutex`?
4. Are crate features pinned and minimized in `Cargo.toml`?
5. Are borrowing lifetimes explicitly defined or logically derived without conflicts?
