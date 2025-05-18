# The second

Bundlers from react version 18 instead of CRA

tool which can compress our code, which can remove the comments, compress the image without compromising
on quality, unnecessary code removal, etc.

parcel, vite, vercel

devDependency and normal dependency

caret ^ minor release - always prefer this
tilda ~ major release

package.json - it gives you the versions of package with options to upgrade or downgrade
package-lock.json - this fill willl give you the exact version of package - it locks the version

integrity in package-lock.json

dependency tree

go through the articles on Parcel

files which can be re generated, NOT to be pushed into git

===============================================================

# The third

diff between library and framework
npm and npx
how to start our app through a script obj

parcel is a beast:
CREATES A LOCAL SERVER
COMPILES OUR CODE
VIRTUAL DOM - copy of the actual dom on hitting save button
COMPARES VIRTUAL AND ACTUAL DOM - naya element mil gya
the component will re-render to reflect the naya element (changes)
Diff algo
Hot module replacement (HMR)
parcel-cache folder will include binary convereted code
converts our entire code to an js object by mapping the files => to minify our code, compress our code, removing unnecessary code

=========================================================================================

# The fourth

Components

1. func - simple js function of creating a component

naming convention of func component
folder structure standards
linking css to jsx

HM: INLINE STYLE IN REACT, BUILD NAVBAR OF TRELLO

whenever you import a css file, make sure you import it inside its own component jsx file
component reusability - React

component rendering with or without return keyword

built on dummy navbar

==============================================================

# The fifth

- component kaise bnana h? a func comp
- shimmer effect
- End result:

1. api call, swiggy card, depending on API, how the res cards get generated.

- props - short of properties - which are an additional info to our component.
- explore diff datatypes of props
- props: first we go to the place where our comp is being called. we define props there and pass it to the comp as a parameter.
- either write props as a parameter then props.name, props.age
- destructure the props and access them as individual consts

- State in react
- counter machine - count , incre, decre, reset
- named imports
- state in practice
- event handling

- HW:

1. counter machine - increament/decrement by 5
2. hint: explore about prevCount as a parameter
3. explore diff datatypes of props
4. make a habit of reading MDN docs
5. git mein jo commit kr rhe ho, Readme.md bnao and try to lean its features !!!!!!
6. config driven UI

# The sixth

- props are just additionnal data which is used to pass from parent to child comp.
- in react, the data flows in uni directional way. parent to child
- api calls with useEffect hook
- async await
- // fetch is a function, fetch(endpoint), always returns a promise.
-     // promise -:
-     // 1. pending - loading
- /// 2. resolve - data
- // 3. reject - error screen, js is a single threaded synchronysly typed programming lang
- // asynchronous operations
- // event loop - async operations perform hota h
- // await can only be used with async
- // global and block scope

- const [name, setName] = useState('')
- useEffect(() ={
- // api code
- }, [])
