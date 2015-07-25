ifndef BROWSERS
BROWSERS = Chrome Firefox
endif

default: generate compare

generate:
	./scripts/generate-browser-xml ${BROWSERS}
compare:
	./scripts/compare-xml ${BROWSERS}
update-ref:
	./scripts/update-reference-xml
