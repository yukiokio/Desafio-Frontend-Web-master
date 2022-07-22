# Propriedades dos componentes:

# Componentes: Tipografia

- Display:

```html
<Display ...rest>{ children }</Display>

```
`props?: {...rest: { HTMLAttributes }}`

- Heading:

```html
<Heading level="L" color="dark-high" ...rest>{ children }</Heading>
```

`props?: { level: {value: "L" | "M" | "S" | "XS" | "SH", type: string, default: "L", color: {type: string, default: "dark-high"}, ...rest: { HTMLAttributes }}`

- BodyMedium:

```html
<BodyMedium color="dark-high" bold=false ...rest >{ children }</BodyMedium>
```

`props?: { color: {type: string}, bold: { type: boolean }, ...rest: { HTMLAttributes }}`

# Componentes: Forms

- Input:

```html
<Input>{ children }</Input>
```

`props?: {...rest: { InputHTMLAttributes }}`


- Button:

```html
<Button ...rest >{ children }</Button>
```
`props?: {...rest: { ButtonHTMLAttributes }}`

- Form:

```html
<Form ...rest >{ children }</Form>
```

`props?: {...rest: { FormHTMLAttributes }}`

- Loading:

```html
<Processing success={true} >{ children }</Processing>
```

`props?: { success: { type: boolean } `

- StarRating:

```html
<StarRating starSelected={ Number } setStarSelected={state}>{ children }</StarRating>
```

`props: { starSelected: { type: Number }, setStarSelected: { type: React.Dispatch<SetStateAction<number>> }`

- TextArea:

```html
<TextArea ...rest >{ children }</TextArea>
```

`props?: { ...rest: { type: TextareaHTMLAttributes }`

# Componentes: Modal

- Modal:

```html
<Modal setModal={ state } stars={ number } >{ children }</Modal>
```

`props?: { setModal: { type: React.Dispatch<SetStateAction<boolean>> }, stars: { type: Number } }`

## Padrão de cores

`"dark-low": "rgba(0,0,0,0.44)"`

`"dark-medium": "rgba(0,0,0,0.6)"`

`"dark-high": "rgba(0,0,0,0.8)"`

`"magenta": "#E63888"`

`"light-solid": "#FFFFFF"`

`"light-high": "rgba(255,255,255,0.8)"`
