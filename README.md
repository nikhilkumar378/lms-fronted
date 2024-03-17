### ms-frontend

### set-up instructions

1. clone the project

   ```

   git clone https://github.com/nikhilkumar378/lms-fronted.git
   ```

2. Move into the directiory

   ```

   cd lms-frontend
   ```

3. install dependencies

   ```

   npm i
   ```

4. Run the server

   ```

   npm run dev
   ```

### Setup tailwind css

1.  ```

    npm install -D tailwindcss
    ```

2.  ```

    npx tailwindcss init
    ```

3.  Add the tailwind directives at the top of 'index.js' file

```

@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Put this in content

```

"./src/\*_/_.{html,js}"
```

5. Put this in tailwindconfig file plugins

```

require("daisyui"), require("@tailwindcss/line-clamp")
```

### Adding plugins and dependencies

```

install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.
js daisyui axios react-hot-toast @tailwindcss/line-clamp
```
