# pi-home-dashboard

Web server to display info about time, weather, trafic and other news into a screen at home.

## Install

npm i
gulp prod

## Start with pm2 (using cluster)

pm2 start start.json

## Update

git checkout client/index.html && git pull && gulp prod && pm2 reload dashboard
