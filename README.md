#lms-frontend

#set-up instructions
1.clone the project
,,,
git clone https://github.com/nikhilkumar378/lms-fronted.git
,,,

2.Move into the directiory
,,,
cd lms-frontend
,,,

3.install dependencies
,,,
npm i
,,,

4.  run the server

npm run dev

#Setup tailwind css

1.  ,,,
    npm install -D tailwindcss
    ,,,

2.  ,,,
    npx tailwindcss init
    ,,,

3.  ,,,
    in index.js put this
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ,,,

4.

,,,
put this in content

"./src/\*_/_.{html,js}"
,,,
