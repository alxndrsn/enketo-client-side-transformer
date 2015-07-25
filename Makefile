PWD = $(shell pwd)
XFORMS_LOCAL = ${PWD}/xforms
XFORMS_DOCKER = /media/xforms-src
TRANSFORM_TARGET_LOCAL = ${PWD}/build/generated/enketo-transformer
TRANSFORM_TARGET_DOCKER = /media/xforms-generated

et-docker-build:
	cd enketo-transformer && \
		docker build -t enketo-transformer .
et-docker-process-xforms-osx:
	echo "Trying to share dir: ${XFORMS_LOCAL}"
	echo "Trying to share dir: ${TRANSFORM_TARGET_LOCAL}"
	-rm -rf ${TRANSFORM_TARGET_LOCAL}
	cd enketo-transformer && docker run \
		-w /working \
		-v ${XFORMS_LOCAL}:${XFORMS_DOCKER} \
		-v ${TRANSFORM_TARGET_LOCAL}:${TRANSFORM_TARGET_DOCKER} \
		-v ${PWD}/enketo-transformer/process-xforms:/working/process-xforms \
		enketo-transformer \
		./process-xforms \
			${XFORMS_DOCKER} ${TRANSFORM_TARGET_DOCKER}

et-service:
	cd enketo-transformer && docker run -d \
		-p 8085:8085 \
		-w /enketo-transformer \
		enketo-transformer \
		bash -c \
		"git checkout 1.2.4 && npm start"
	echo "enketo-transformer available at: "\
		"http://$$(boot2docker ip):8085/transform"
