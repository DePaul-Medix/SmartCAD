#!/bin/bash

# 20160107: src: http://www.django-rest-framework.org/tutorial/quickstart/
./run_virtualenv.bash env
source env/bin/activate

# Install Django and Django REST framework into the virtualenv
pip install django
pip install djangorestframework

# Set up a new project with a single application
django-admin.py startproject rest_svc_template .  # Note the trailing '.' character
cd rest_svc_template
django-admin.py startapp quickstart
cd ..

python manage.py migrate

python manage.py createsuperuser
