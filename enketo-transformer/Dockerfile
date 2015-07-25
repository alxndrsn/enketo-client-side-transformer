FROM ubuntu:15.04

RUN apt-get -y update && apt-get -y install \
	nodejs nodejs-legacy npm \
	git

COPY . /working

RUN cd /working && \
	npm install node-gyp@latest && \
	npm install

EXPOSE 8085
RUN mkdir /enketo-transformer && \
	cd /enketo-transformer && \
	git clone https://github.com/enketo/enketo-transformer.git . && \
	npm install node-gyp@latest && \
	npm install
