The second

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

The third
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
