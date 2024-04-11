envsubst  '\$BACKENDURL' < /app/web/nginx.template > /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'