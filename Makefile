ifndef BROWSERS
BROWSERS = Chrome Firefox
endif

default: npm generate compare

npm:
	npm install
generate:
	./scripts/generate-browser-xml ${BROWSERS}
compare:
	./scripts/compare-with-reference-xml ${BROWSERS}
update-ref:
	./scripts/update-reference-xml
diff-browsers:
	./scripts/compare-generated Chrome Firefox
