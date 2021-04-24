FROM alpine:edge

WORKDIR /integrationTests
COPY . .

# Installs latest Chromium (89) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn \
      xvfb-run

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN yarn install

EXPOSE 9001
ENV DISPLAY :99
CMD Xvfb :99 -screen 0 1024x768x16 & yarn test

