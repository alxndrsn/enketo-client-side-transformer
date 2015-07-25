ifndef BROWSERS
BROWSERS = Chrome Firefox
endif

default: generate compare

generate:
	./scripts/generate-browser-xml ${BROWSERS}
compare:
	./scripts/compare-with-reference-xml ${BROWSERS}
update-ref:
	./scripts/update-reference-xml
diff-browsers:
	./scripts/compare-generated Chrome Firefox
