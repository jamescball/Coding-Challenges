# Read from the file file.txt and output all valid phone numbers to stdout.
#grep regex filter -o for new line -P for Regex matching

grep -o -P '^\(([0-9]{3})\)\s[0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$' file.txt
