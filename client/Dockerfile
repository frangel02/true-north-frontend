#FROM  nginx

#MAINTAINER Frangel Rodriguez <frangele331@gmail.com>

#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY /dist/aston-villa-app /usr/share/nginx/html
#RUN 
#EXPOSE 80
#COPY build/classes/static /usr/share/nginx/html

# Use an official Node runtime as a parent image
FROM node:12-alpine as build-stage
# Set the working directory to /app
##WORKDIR /app
# Copy the package.json and package-lock.json to the container
#COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the container

# Build the React app
RUN react-scripts build

WORKDIR /.

COPY . .

RUN npm install



FROM nginx:1.17.1-alpine
COPY --from=build-stage /build .

#COPY /build /usr/share/nginx/html

#COPY nginx.conf /etc/nginx/nginx.conf
RUN 
EXPOSE 80





# Use an official Nginx runtime as a parent image
#FROM nginx:1.21.0-alpine
# Copy the ngnix.conf to the container
#COPY ngnix.conf /etc/nginx/conf.d/default.conf

# Copy the React app build files to the container
#COPY - from=build /build /usr/share/nginx/html


# Expose port 80 for Nginx
#EXPOSE 80
# Start Nginx when the container starts
#CMD ["nginx", "-g", "daemon off;"]
