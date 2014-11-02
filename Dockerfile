FROM mafintosh/node:0.10.33
RUN apt-get install -qy libfontconfig
ENTRYPOINT ["node", "bin.js"]
