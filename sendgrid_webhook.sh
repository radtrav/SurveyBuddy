#!/usr/bin/env bash
function localtunnel {
  echo "restarting localtunnel ..."
  lt --port 5000 --subdomain etnethbtctothemooooonxyz
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
