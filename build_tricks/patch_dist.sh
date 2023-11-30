# All praise to this excellent writeup: https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html

## Set cwd to root

cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >dist/mjs/package.json <<!EOF
{
    "type": "module"
}
!EOF
