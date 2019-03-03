vuejs-child-to-parent-communication
==

# WARNING: This is an example of a working bad pattern!

Note that objects and arrays in JavaScript are passed by reference, so if the prop is an array or object, mutating the object or array itself inside the child component will affect parent state. [Source](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow)

Sample of child to parent communication via mutable object in vuejs

`
npm run build
`

Open dist/index.html
