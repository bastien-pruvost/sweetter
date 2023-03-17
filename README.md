<!-- prettier-ignore-start -->

<!-- Rename all occurences with Cmd + D :

Sweetter (Twitter clone)
sweetter
www.projectlink.com
https://www.projectlink.com
https://www.documentationlink.com

 -->

# Sweetter (Twitter clone)

Clone of twitter to practice on Node.js / Express


## About the project

I developed this project to practice and create a dynamic site in SSR only.

Pages are rendered on the server using `liquidjs` template engine.


## Features

- SSR
- Template Engine
- Images hosting
- CRUD (Create, Read, Update, Delete)


## Tech Stack

#### Server (Full Server Side Rendering):
- Javascript
- Node.js
- Express
- Liquid (for html templates)
- Sass
- Cloudinary (for images hosting)


## Run locally

1. Clone the project:

```bash
  git clone https://github.com/bastien-pruvost/sweetter.git
```

2. Go to the project directory:

```bash
  cd sweetter
```

1. Install dependencies:

```bash
  pnpm install
  # or
  yarn install
  # or
  npm install
```

2. Run sass and autoprefixer in two different terminals:

```bash
  pnpm sass
  # or
  yarn sass
  # or
  npm run sass
```

```bash
  pnpm autoprefix
  # or
  yarn autoprefix
  # or
  npm run autoprefix
```

3. Run the development server:

```bash
  pnpm dev
  # or
  yarn dev
  # or
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Start project in production

To start the app in production run the following command:

```bash
  pnpm start
  # or
  yarn start
  # or
  npm start
```


## Report bug / Support

To report a bug or get help [open an issue](https://github.com/bastien-pruvost/sweetter/issues).


## Suggestions

If you have any suggestion, feel free to [open an issue](https://github.com/bastien-pruvost/sweetter/issues) with the tag "enhancement"


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and open a pull request.

1. [Fork the project](https://github.com/bastien-pruvost/sweetter/fork)
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Code your feature
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feature/my-feature`)
6. [Open a pull request](https://github.com/bastien-pruvost/sweetter/compare)

You can also simply [open an issue](https://github.com/bastien-pruvost/sweetter/issues) with the tag "enhancement".

Don't forget to give the project a star! Thanks again!


## License

Distributed under the [MIT License](https://choosealicense.com/licenses/mit/).

See `LICENSE` file for more information.



<!-- prettier-ignore-end -->
