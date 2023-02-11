#!/usr/bin/env just --justfile

serve:
    zola serve

tailwind-hot-reload:
    tailwindcss -m -i css/style.css -o css/tailwind.min.css --watch