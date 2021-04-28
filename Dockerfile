FROM alpine:edge

WORKDIR /integrationTests
COPY . .

RUN apk update
RUN apk add --no-cache \
      chromium==89.0.4389.128-r2 \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn \
      xvfb-run

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN yarn add puppeteer@6.0.0
RUN yarn install

EXPOSE 9001
ENV DISPLAY :99

CMD Xvfb :99 -screen 0 1024x768x16 & yarn test

