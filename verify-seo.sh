
#!/bin/bash
set -e

KEY="98f03f0674cd4a82b398fc556982ff60"
SITE="public"

echo "Checking Vaxogene SEO files..."

test -f "$SITE/index.html" || {
  echo "ERROR: Homepage missing"
  exit 1
}

test -f "$SITE/robots.txt" || { echo "ERROR: robots.txt missing"; exit 1; }

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

# Check all real content pages for fundamental SEO tags and one main landmark.
while IFS= read -r page; do
  case "$page" in
    "$SITE/assets/"*) continue ;;
  esac
  grep -q '<title>' "$page" || { echo "ERROR: Missing title: $page"; exit 1; }
  grep -q 'name="description"' "$page" || { echo "ERROR: Missing description: $page"; exit 1; }
  grep -q 'rel="canonical"' "$page" || { echo "ERROR: Missing canonical: $page"; exit 1; }
  mains=$(grep -Eoc '<main([ >])' "$page" || true)
  [ "$mains" -eq 1 ] || { echo "ERROR: Expected one main landmark in $page, found $mains"; exit 1; }
done < <(find "$SITE" -name index.html -type f)

echo "SUCCESS: Essential SEO files and page metadata verified."

