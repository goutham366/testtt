echo 'Starting my app' 
<<<<<<< HEAD
cd '/home/ec2-user/warnerbrosUI'
=======
cd '/home/ec2-user/Warnerbros-ui'
>>>>>>> 9b5913660bd9fdae864d6e765e178df9f26e96bb
npm install
npm install -g @angular/cli
rm -rf dist
npm run ng build --prod
<<<<<<< HEAD
sudo cp -rf /home/ec2-user/warnerbrosUI/dist/warnerbros-ui /opt/tomcat/webapps
=======
sudo cp -rf /home/ec2-user/Warnerbros-ui/dist/warnerbros-ui /opt/tomcat/webapps
>>>>>>> 9b5913660bd9fdae864d6e765e178df9f26e96bb
