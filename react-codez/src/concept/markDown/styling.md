### CSS Custom Properties with `:root`

The styling you're referring to uses **CSS Custom Properties** (commonly known as CSS Variables). The `:root` selector is utilized to define these custom properties at the highest level of the document, making them accessible throughout the entire stylesheet.

#### Explanation

- **`:root` Selector**: This is a pseudo-class that matches the document's root element. In HTML documents, it corresponds to the `<html>` element. Defining variables here makes them globally accessible.
- **Custom Properties (CSS Variables)**: These are user-defined variables that can store values such as colors, font sizes, or any other CSS values. They are defined using the `--` prefix and can be accessed using the `var()` function.

#### Example

```css
:root {
    --background: white;
    --text-primary: black;
    --button-bg: black;
    --button-text: white;
}

body {
    background-color: var(--background);
    color: var(--text-primary);
}

button {
    background-color: var(--button-bg);
    color: var(--button-text);
}
```

### Benefits of Using CSS Custom Properties
- **Reusability**: Define a value once and reuse it throughout your stylesheet.
- **Maintainability**: Change the value in one place to update it across all uses.
- **Theming**: Easily create themes by defining different sets of variables.
- **Dynamic Changes**: CSS variables can be changed dynamically using JavaScript.