BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$BRANCH" == "frontend" || "$BRANCH" == "frontend-dev" ]]; then
    echo '✅ - Build can proceed';
    exit 0;
fi
echo '🛑 - Build cancelled';
exit 1;