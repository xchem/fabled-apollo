FROM node:latest
EXPOSE 3000
ENV APP_ROOT /code
RUN mkdir -p ${APP_ROOT}/server
WORKDIR ${APP_ROOT}/server
ADD ./server/* ${APP_ROOT}/server
RUN npm init --yes
RUN npm install @apollo/client graphql apollo-datasource-rest apollo-server dotenv
