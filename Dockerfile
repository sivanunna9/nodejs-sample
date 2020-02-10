FROM node:latest

COPY save.js /apps/save.js

ADD node_modules /apps/node_modules

#ADD startup.sh /apps/startup.sh

EXPOSE 8080

#CMD [ "bash" "/apps/statup.sh" ]

CMD [ "node", "/apps/save.js" ]

#ENTRYPOINT [ "node" , "/apps/save.js" ]
