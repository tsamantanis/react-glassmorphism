# react-glassmorphism

> A react UI component library for glassmorphic components

[![NPM](https://img.shields.io/npm/v/@tsamantanis/react-glassmorphism.svg)](https://www.npmjs.com/package/@tsamantanis/react-glassmorphism) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Example

View examples of the components [here](https://tsamantanis.github.io/react-glassmorphism/)

## Install

```bash
npm install --save @tsamantanis/react-glassmorphism
```

## Usage

```tsx
import React, { Component } from 'react'

import { Button } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'

class Example extends Component {
    render() {
        return <Button text="Click me" />
    }
}
```

```tsx
import React, { Component } from 'react'

import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'

class Example extends Component {
    render() {
        return (
            <CustomCard
                effectColor="#C780FF" // required
                color="#14AEFF" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <h1>Hello</h1>
                <p>This is an example</p>
            </CustomCard>
        )
    }
}
```
## License

MIT © [tsamantanis](https://github.com/tsamantanis)
