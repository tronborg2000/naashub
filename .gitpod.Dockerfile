FROM gitpod/workspace-full:latest

USER gitpod

# Install the PostgreSQL client and server
RUN sudo apt-get update && sudo apt-get install -y postgresql postgresql-contrib

# Install pip and virtualenv
RUN sudo apt-get install -y python3-pip && pip3 install virtualenv

# Start the PostgreSQL service
RUN sudo service postgresql start

# Create a new user and database for the Django project
RUN sudo -u postgres psql -c "CREATE USER myuser WITH PASSWORD 'mypassword';" && \
    sudo -u postgres psql -c "CREATE DATABASE mydatabase WITH OWNER myuser;"
