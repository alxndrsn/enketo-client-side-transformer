FROM ubuntu:15.04

RUN apt-get -y update && apt-get -y install \
	nodejs nodejs-legacy npm \
	git

COPY . /working

RUN cd /working && \
	npm install node-gyp@latest && \
	npm install
