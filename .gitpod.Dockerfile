FROM gitpod/workspace-full:latest

USER gitpod

# Install pip and virtualenv
RUN sudo apt-get update && sudo apt-get install -y python3-pip && pip3 install virtualenv
