
#!/bin/bash
set -e

KEY="98f03f0674cd4a82b398fc556982ff60"
SITE="public"

echo "Checking Vaxogene SEO files..."

test -f "$SITE/index.html" || {
  echo "ERROR: Homepage missing"
  exit 1
}

test -f "$SITE/sitemap.xml" || {
  echo "ERROR: Sitemap missing"
  exit 1
}

grep -q 'https://vaxogene.com/' "$SITE/sitemap.xml" || {
  echo "ERROR: Production domain missing from sitemap"
  exit 1
}

if grep -q 'github.io' "$SITE/sitemap.xml"; then
  echo "ERROR: GitHub Pages URLs found in sitemap"
  exit 1
fi

test -f "$SITE/$KEY.txt" || {
  echo "ERROR: IndexNow key file missing"
  exit 1
}

ACTUAL_KEY="$(tr -d '\r\n' < "$SITE/$KEY.txt")"

if [ "$ACTUAL_KEY" != "$KEY" ]; then
  echo "ERROR: IndexNow key content incorrect"
  exit 1
fi

echo "SUCCESS: All essential SEO files verified."

