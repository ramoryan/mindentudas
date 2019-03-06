# JSX

[introducing](https://reactjs.org/docs/introducing-jsx.html)
[in depth](https://reactjs.org/docs/jsx-in-depth.html)

## JSX, React nélkül

A `.babelrc` fájlban beállítás. A két plugin kell.

```json
{
  "plugins": [
    "@babel/plugin-syntax-jsx",
    [
      "@babel/plugin-transform-react-jsx", {
        "pragma": "dom",
        "pragmaFrag": "Fragment"
      }
    ]
  ]
}
```

Minden olyan js fájl, ami tartalmaz jsx-et is, legyen .jsx kiterjesztésű!

```jsx
<MyComponent styles={ { border: '1px solid #f00' } } />
```

Komponenst egyszerűen appendolni kell:
```jsx
// AnotherComponent.js
import MyComponent from 'MyComponent.jsx'
document.getElementById('main').appendChild(<MyComponent />)
```

Esemény rákötéshez viszont el kell kérni a referenciát és csak úgy lehet
```jsx
export default class MyComponent extends JSXComponent {
  onClick (node) {
    node.addEventListener('click', () => console.log('click'))
  }

  render (props) {
    return <div ref={ this.onClick }>KLIKK ME!</div>
  }
}
```

Custom-elements használata jsx-ben:
```jsx
<edu-my-component />
```

DocumentFragment használata JSX-ben:
[DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
[JSX DocumentFragment](https://reactjs.org/docs/fragments.html#short-syntax)

## jsx-render

A React-hez képest - sajnos - NINCSENEK lifecycle eventek.

Egyszerű, stateless function
```jsx
export default function MyComponent {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
```

Ha kellenek property-k, akkor JSXComponentet extendálj!
```jsx
// MyComponent.jsx
export default class MyComponent extends JSXComponent {
  render (props) {
    return (
      <div styles={ props.styles } >
        <h1>Hello World</h1>
      </div>
    )
  }
}
```
