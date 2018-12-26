# Gatsby + [bootstrap 4](https://github.com/mpolinowski/gatsby-reactstrap) + SASS + [Animate CSS](https://daneden.github.io/animate.css/)



## How to

- run with `gatsby develop`
- create folder with `gatsby build`

## Claiming the project

1. [ ] rename project name on `gatsby-config.js`
1. [ ] change `src/images/favicon.png`
1. [ ] add final folder path on `gatsby-config` (use `/` if at root)

## Publishing on github

### If generic repo

1. run `gatsby build --prefix-paths`
1. rename public as docs with `mv public docs`
1. push
1. configure repo to publish via `docs/` folder
1. your website is published at `USER.github.io/REPO`

### If root repo

1. create a `main` branch, so `master` can be used for publication, push
1. run `gatsby build`
1. push only `public` folder as master, with 
```
cd public
git init
git add -A
git commit -m 'MESSAGE'
git push -f https://github.com/USER/USER.github.io.git master
cd -
```
1. configure repo to publish, on settings
1. your website is published at `USER.github.io/`
```

## Pending

- [ ] reactstrap components, with props and instruction