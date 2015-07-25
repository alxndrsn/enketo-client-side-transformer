log() {
	echo "[$0] $@"
}

diff_xml() {
	local left="$1"
	local right="$2"
	log "====="
	log "= $left vs $right"
	# diff generated output with enketo-transformer output
	diff <(xmllint --format $left) <(xmllint --format $right)
	log "= $left vs $right"
	log "====="
}
