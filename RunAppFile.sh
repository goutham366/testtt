echo 'Starting my app' 
cd '/home/ec2-user/warnerbrosUI'
npm install
npm install -g @angular/cli
rm -rf dist
npm run ng build --prod
sudo cp -rf /home/ec2-user/warnerbrosUI/dist/warnerbros-ui /opt/tomcat/webapps
