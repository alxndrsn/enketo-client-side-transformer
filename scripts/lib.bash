log() {
	echo "[$0] $@"
}

cmp_xml() {
	cmp <(xmllint --format $left) <(xmllint --format $right)
}

diff_xml() {
	local left="$1"
	local right="$2"
	if cmp <(xmllint --format $left) <(xmllint --format $right) >/dev/null; then
		log "=== [IDENTICAL] $left vs $right"
	else
		log "====="
		log "=== [DIFFERENT] $left vs $right"
		# diff generated output with enketo-transformer output
		diff <(xmllint --format $left) <(xmllint --format $right)
		log "= $left vs $right"
		log "====="
	fi
}
